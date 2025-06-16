// components/Typography.tsx
import React, { forwardRef, CSSProperties } from "react";

type Color =
    | "inherit"
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | "error"
    | "light"
    | "dark"
    | "text"
    | "white"
    | string; // support hex or tailwind custom colors

type FontWeight = false | "light" | "regular" | "medium" | "bold";
type TextTransform = "none" | "capitalize" | "uppercase" | "lowercase";
type VerticalAlign =
    | "unset"
    | "baseline"
    | "sub"
    | "super"
    | "text-top"
    | "text-bottom"
    | "middle"
    | "top"
    | "bottom";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
    color?: Color;
    fontWeight?: FontWeight;
    textTransform?: TextTransform;
    verticalAlign?: VerticalAlign;
    textGradient?: boolean;
    opacity?: number;
    children: React.ReactNode;
    as?: keyof JSX.IntrinsicElements;
    darkMode?: boolean; // pass manually or via context/provider
}

const colorMap: Record<string, string> = {
    inherit: "inherit",
    primary: "text-blue-600 dark:text-blue-400",
    secondary: "text-gray-600 dark:text-gray-400",
    info: "text-teal-600 dark:text-teal-400",
    success: "text-green-600 dark:text-green-400",
    warning: "text-yellow-600 dark:text-yellow-400",
    error: "text-red-600 dark:text-red-400",
    light: "text-gray-300 dark:text-gray-500",
    dark: "text-gray-900 dark:text-white",
    text: "text-gray-900 dark:text-white",
    white: "text-white",
};

const fontWeightMap: Record<Exclude<FontWeight, false>, string> = {
    light: "font-light",
    regular: "font-normal",
    medium: "font-medium",
    bold: "font-bold",
};

const textTransformMap: Record<TextTransform, string> = {
    none: "normal-case",
    capitalize: "capitalize",
    uppercase: "uppercase",
    lowercase: "lowercase",
};

const verticalAlignMap: Record<VerticalAlign, string> = {
    unset: "align-baseline", // closest to unset
    baseline: "align-baseline",
    sub: "align-sub",
    super: "align-super",
    "text-top": "align-text-top",
    "text-bottom": "align-text-bottom",
    middle: "align-middle",
    top: "align-top",
    bottom: "align-bottom",
};

const gradientColors: Record<string, string> = {
    primary: "from-blue-400 to-blue-600",
    secondary: "from-gray-400 to-gray-600",
    info: "from-teal-400 to-teal-600",
    success: "from-green-400 to-green-600",
    warning: "from-yellow-400 to-yellow-600",
    error: "from-red-400 to-red-600",
    light: "from-gray-300 to-gray-400",
    dark: "from-gray-700 to-gray-900",
};

const Typography = forwardRef<HTMLElement, TypographyProps>(
    (
        {
            color = "dark",
            fontWeight = false,
            textTransform = "none",
            verticalAlign = "unset",
            textGradient = false,
            opacity = 1,
            children,
            className = "",
            style,
            as = "span",
            darkMode = false,
            ...rest
        },
        ref
    ) => {
        // Compose text color classes
        const baseColorClass = colorMap[color]
            ? colorMap[color]
            : color.startsWith("#") || color.startsWith("rgb")
                ? "" // fallback to inline style
                : `text-${color}`;

        // Compose fontWeight class
        const fontWeightClass =
            typeof fontWeight === "string" && fontWeightMap[fontWeight]
                ? fontWeightMap[fontWeight]
                : "";

        // Compose textTransform class
        const textTransformClass = textTransformMap[textTransform];

        // Compose verticalAlign class
        const verticalAlignClass = verticalAlignMap[verticalAlign];

        // Gradient style classes
        const gradientClass = textGradient && gradientColors[color]
            ? `bg-gradient-to-r ${gradientColors[color]} bg-clip-text text-transparent`
            : "";

        // Inline styles for colors or opacity fallback
        const inlineStyles: CSSProperties = {
            opacity,
            color:
                !baseColorClass && (color.startsWith("#") || color.startsWith("rgb"))
                    ? color
                    : undefined,
            ...style,
        };

        type ComponentType = React.ElementType | keyof JSX.IntrinsicElements;
        const Component: ComponentType = as;

        return (
            <Component
                ref={ref}
                className={`${baseColorClass} ${fontWeightClass} ${textTransformClass} ${verticalAlignClass} ${gradientClass} ${className}`.trim()}
                style={inlineStyles}
                {...rest}
            >
                {children}
            </Component>
        );
    }
);

Typography.displayName = "Typography";

export default Typography;
