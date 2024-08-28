import React from "react";

const Button = ({ onCLick, type, label }) => {
  return (
    <>
      <button
        type={type}
        onClick={onCLick}
        className={`px-16 py-4 mt-7 text-lg font-bold text-white bg-blue-500 rounded-xl shadow-[0px_8px_10px_rgba(35,149,255,0.3)] max-md:px-5 ${className}`}
      >
        {label}
      </button>
    </>
  );
};

export default Button;
