"use client"

import React, { useState } from "react";

const InputField = ({
  id,
  type,
  placeholder,
  label,
  showPasswordToggle = false,
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
        />
        {showPasswordToggle && (
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/401f12b6a8fe76071a934d03fac5624b3c1b6719261aef54a197c7698fd863f2?apiKey=ff034d5512384628b4f5c1152f7ba035&&apiKey=ff034d5512384628b4f5c1152f7ba035"
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
