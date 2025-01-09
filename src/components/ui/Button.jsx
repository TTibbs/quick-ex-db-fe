import React from "react";

const Button = ({
  children,
  className,
  onClick,
  href,
  target,
  bgColor,
  textColor,
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-full py-2 px-10 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 ${className} ${bgColor} ${textColor}`}
    >
      {href ? (
        <a href={href} target={target} rel="noreferrer">
          {children}
        </a>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
