// components/Button.tsx
import React, { forwardRef } from "react";

type ColorType =
  | "white"
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | "error"
  | "light"
  | "dark";

type VariantType = "text" | "contained" | "outlined" | "gradient";

type SizeType = "small" | "medium" | "large";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ColorType;
  variant?: VariantType;
  size?: SizeType;
  circular?: boolean;
  iconOnly?: boolean;
  children: React.ReactNode;
  darkMode?: boolean; // optional prop to manually set dark mode if needed
}

const colorClasses: Record<ColorType, string> = {
  white: "text-gray-900 bg-white border-gray-300 hover:bg-gray-100",
  primary: "text-white bg-blue-600 border-blue-600 hover:bg-blue-700",
  secondary: "text-white bg-gray-600 border-gray-600 hover:bg-gray-700",
  info: "text-white bg-teal-500 border-teal-500 hover:bg-teal-600",
  success: "text-white bg-green-600 border-green-600 hover:bg-green-700",
  warning: "text-white bg-yellow-500 border-yellow-500 hover:bg-yellow-600",
  error: "text-white bg-red-600 border-red-600 hover:bg-red-700",
  light: "text-gray-700 bg-gray-200 border-gray-200 hover:bg-gray-300",
  dark: "text-white bg-gray-900 border-gray-900 hover:bg-gray-800",
};

const outlinedColorClasses: Record<ColorType, string> = {
  white: "text-gray-900 border-gray-300 hover:bg-gray-100",
  primary: "text-blue-600 border-blue-600 hover:bg-blue-50",
  secondary: "text-gray-600 border-gray-600 hover:bg-gray-100",
  info: "text-teal-500 border-teal-500 hover:bg-teal-50",
  success: "text-green-600 border-green-600 hover:bg-green-50",
  warning: "text-yellow-500 border-yellow-500 hover:bg-yellow-50",
  error: "text-red-600 border-red-600 hover:bg-red-50",
  light: "text-gray-500 border-gray-500 hover:bg-gray-100",
  dark: "text-gray-900 border-gray-900 hover:bg-gray-300",
};

const gradientColorClasses: Record<ColorType, string> = {
  primary: "bg-gradient-to-r from-blue-500 to-blue-700 text-white",
  secondary: "bg-gradient-to-r from-gray-500 to-gray-700 text-white",
  info: "bg-gradient-to-r from-teal-400 to-teal-600 text-white",
  success: "bg-gradient-to-r from-green-500 to-green-700 text-white",
  warning: "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white",
  error: "bg-gradient-to-r from-red-500 to-red-700 text-white",
  light: "bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800",
  dark: "bg-gradient-to-r from-gray-800 to-gray-900 text-white",
  white: "bg-gradient-to-r from-white to-gray-100 text-gray-900",
};

const sizeClasses: Record<SizeType, string> = {
  small: "text-xs px-2 py-1",
  medium: "text-sm px-4 py-2",
  large: "text-lg px-6 py-3",
};

const circularSizeClasses: Record<SizeType, string> = {
  small: "w-8 h-8",
  medium: "w-10 h-10",
  large: "w-12 h-12",
};

const iconOnlySizeClasses: Record<SizeType, string> = {
  small: "w-6 h-6 p-1",
  medium: "w-8 h-8 p-2",
  large: "w-10 h-10 p-3",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      color = "white",
      variant = "contained",
      size = "medium",
      circular = false,
      iconOnly = false,
      children,
      darkMode,
      className = "",
      disabled,
      ...rest
    },
    ref
  ) => {
    // Compute base classes based on props

    let baseClasses = "font-semibold rounded transition ";

    // Variant-based classes
    switch (variant) {
      case "contained":
        baseClasses += colorClasses[color] || colorClasses.white;
        break;
      case "outlined":
        baseClasses +=
          "bg-transparent border " +
          (outlinedColorClasses[color] || outlinedColorClasses.white);
        break;
      case "gradient":
        baseClasses += gradientColorClasses[color] || gradientColorClasses.primary;
        break;
      case "text":
        baseClasses += "bg-transparent " + (outlinedColorClasses[color] || outlinedColorClasses.white).replace("border-", "text-");
        break;
      default:
        baseClasses += colorClasses.white;
    }

    // Size classes
    if (circular) {
      baseClasses += " flex items-center justify-center ";
      baseClasses += circularSizeClasses[size] || circularSizeClasses.medium;
      baseClasses += " p-0 ";
    } else if (iconOnly) {
      baseClasses += " flex items-center justify-center ";
      baseClasses += iconOnlySizeClasses[size] || iconOnlySizeClasses.medium;
      baseClasses += " p-0 ";
    } else {
      baseClasses += sizeClasses[size] || sizeClasses.medium;
    }

    // Disabled state
    if (disabled) {
      baseClasses += " opacity-50 cursor-not-allowed ";
    } else {
      baseClasses += " cursor-pointer ";
    }

    // Add rounded-full if circular
    if (circular) {
      baseClasses += " rounded-full ";
    } else {
      baseClasses += " rounded-md ";
    }

    return (
      <button
        ref={ref}
        className={`${baseClasses} ${className}`}
        disabled={disabled}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
