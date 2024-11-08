import React from "react";
import { useNavigate } from "react-router-dom";

interface GradientButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  redirect?: string; // New redirect prop
}

const GradientButton: React.FC<GradientButtonProps> = ({
  children,
  onClick,
  className = "",
  redirect,
}) => {
  const navigate = useNavigate();

  // Handle redirection if 'redirect' prop is passed
  const handleClick = () => {
    if (onClick) {
      onClick(); // Call the onClick handler passed via props
    }
    if (redirect) {
      navigate(redirect); // Use `navigate` from react-router-dom v6 to redirect
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 text-white font-semibold rounded-md bg-gradient-to-r from-blitz-gradient-left to-blitz-gradient-right 
                  transition-all duration-300 ease-in-out opacity-70 hover:opacity-100
                  hover:bg-transparent hover:from-blitz-gradient-left hover:to-blitz-gradient-right 
                  ${className}`}
    >
      {children}
    </button>
  );
};

export default GradientButton;
