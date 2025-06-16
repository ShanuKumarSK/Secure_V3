// components/Box.tsx
import React, { forwardRef, CSSProperties } from "react";

type Variant = "contained" | "gradient";
type ColoredShadow =
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | "error"
  | "light"
  | "dark"
  | "none";
type BorderRadius = "none" | "sm" | "md" | "lg" | "xl" | "full";
type Shadow = "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "inner";

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: Variant;
  bgColor?: string; // Tailwind color names or hex
  color?: string; // text color (Tailwind or hex)
  opacity?: number; // 0 to 1
  borderRadius?: BorderRadius;
  shadow?: Shadow;
  coloredShadow?: ColoredShadow;
  children?: React.ReactNode;
}

const gradientBgs: Record<string, string> = {
  primary: "bg-gradient-to-r from-blue-500 to-blue-700",
  secondary: "bg-gradient-to-r from-gray-500 to-gray-700",
  info: "bg-gradient-to-r from-teal-400 to-teal-600",
  success: "bg-gradient-to-r from-green-500 to-green-700",
  warning: "bg-gradient-to-r from-yellow-400 to-yellow-600",
  error: "bg-gradient-to-r from-red-500 to-red-700",
  light: "bg-gradient-to-r from-gray-200 to-gray-300",
  dark: "bg-gradient-to-r from-gray-800 to-gray-900",
};

const coloredShadowClasses: Record<ColoredShadow, string> = {
  primary: "shadow-[0_4px_6px_-1px_rgba(59,130,246,0.5),0_2px_4px_-2px_rgba(59,130,246,0.5)]",
  secondary: "shadow-[0_4px_6px_-1px_rgba(107,114,128,0.5),0_2px_4px_-2px_rgba(107,114,128,0.5)]",
  info: "shadow-[0_4px_6px_-1px_rgba(56,189,248,0.5),0_2px_4px_-2px_rgba(56,189,248,0.5)]",
  success: "shadow-[0_4px_6px_-1px_rgba(34,197,94,0.5),0_2px_4px_-2px_rgba(34,197,94,0.5)]",
  warning: "shadow-[0_4px_6px_-1px_rgba(234,179,8,0.5),0_2px_4px_-2px_rgba(234,179,8,0.5)]",
  error: "shadow-[0_4px_6px_-1px_rgba(239,68,68,0.5),0_2px_4px_-2px_rgba(239,68,68,0.5)]",
  light: "shadow-[0_4px_6px_-1px_rgba(243,244,246,0.5),0_2px_4px_-2px_rgba(243,244,246,0.5)]",
  dark: "shadow-[0_4px_6px_-1px_rgba(17,24,39,0.5),0_2px_4px_-2px_rgba(17,24,39,0.5)]",
  none: "",
};

const borderRadiusClasses: Record<BorderRadius, string> = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full",
};

const shadowClasses: Record<Shadow, string> = {
  none: "shadow-none",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl",
  "2xl": "shadow-2xl",
  inner: "shadow-inner",
};

const Box = forwardRef<HTMLDivElement, BoxProps>(
  (
    {
      variant = "contained",
      bgColor = "transparent",
      color = "text-gray-900",
      opacity = 1,
      borderRadius = "none",
      shadow = "none",
      coloredShadow = "none",
      children,
      className = "",
      style,
      ...rest
    },
    ref
  ) => {
    // Compute background classes and inline styles

    let bgClass = "";
    if (variant === "gradient" && bgColor in gradientBgs) {
      bgClass = gradientBgs[bgColor];
    } else if (bgColor.startsWith("#") || bgColor.startsWith("rgb")) {
      // custom color, set inline style
      bgClass = "";
    } else {
      // Tailwind color or default to bgColor itself as class
      bgClass = `bg-${bgColor}`;
    }

    // Compute shadow class
    const boxShadowClass = coloredShadow !== "none" ? coloredShadowClasses[coloredShadow] : shadowClasses[shadow];

    // Border radius class
    const borderRadiusClass = borderRadiusClasses[borderRadius];

    // Text color class or inline style
    let textColorClass = "";
    let textColorStyle: CSSProperties = {};
    if (color.startsWith("#") || color.startsWith("rgb")) {
      textColorStyle.color = color;
    } else {
      textColorClass = color.startsWith("text-") ? color : `text-${color}`;
    }

    const combinedStyle: CSSProperties = {
      opacity,
      ...(bgColor.startsWith("#") || bgColor.startsWith("rgb") ? { backgroundColor: bgColor } : {}),
      ...textColorStyle,
      ...style,
    };

    return (
      <div
        ref={ref}
        className={`${bgClass} ${textColorClass} ${borderRadiusClass} ${boxShadowClass} ${className}`}
        style={combinedStyle}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

Box.displayName = "Box";

export default Box;
