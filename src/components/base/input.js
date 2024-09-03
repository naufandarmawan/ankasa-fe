"use client"

import React, { useState } from "react";

const InputField = ({
  id,
  type,
  placeholder,
  label,
  showPasswordToggle = false,
  onChange,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mt-8">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <div className="flex justify-between items-center">
        <input
          id={id}
          type={showPassword ? "text" : type}
          placeholder={placeholder}
          className="w-full outline-none bg-transparent border-b border-purple-300 border-opacity-70 pb-1 text-zinc-400"
          onChange={onChange}
        />
        {showPasswordToggle && (
          <img
            src=""
            alt="Toggle password visibility"
            className="object-contain absolute right-28 shrink-0 w-6 aspect-square cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          />
        )}
      </div>
    </div>
  );
};

export default InputField;
