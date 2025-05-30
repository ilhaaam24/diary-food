import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "social";
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  fullWidth = false,
  className = "",
  ...props
}) => {
  const baseStyles = "py-2 rounded-md font-medium transition-colors";
  const variantStyles = {
    primary:
      "bg-[color:var(--custom-orange)] text-white hover:bg-[color:var(--custom-orange)]/90",
    social: "bg-white border border-gray-300 text-gray-500 hover:bg-gray-100",
  };
  const widthStyles = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${widthStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
