import React from "react";

interface UIButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
}

const UIButton: React.FC<UIButtonProps> = ({
  variant = "primary",
  className = "",
  children,
  ...props
}) => {
  const baseStyles = "px-4 py-2 rounded-md font-medium transition-all duration-200";
  
  const variants = {
    primary: "bg-black text-white hover:bg-white hover:text-black",
    secondary: "text-black hover:bg-gray-700",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default UIButton;