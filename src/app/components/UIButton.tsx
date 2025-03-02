import React from "react";

interface UIButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "alpha" | "beta";
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
    alpha: "bg-black text-white hover:bg-lightBlue w-4/5",
    beta: "bg-white text-black hover:bg-lightBlue w-4/5"
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