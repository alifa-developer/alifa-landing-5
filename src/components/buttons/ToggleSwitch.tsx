"use client";
import type React from "react";

interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  checked,
  onChange,
  className = "",
}) => {
  return (
    <label
      className={`relative inline-flex items-center cursor-pointer ${className}`}
    >
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <div
        className={`w-8 h-4 border-[2px] rounded-full peer transition-colors duration-200 ease-in-out ${
          checked ? "bg-primary-text border-primary-text" : "bg-white "
        }`}
      >
        <div
          className={`absolute top-[2px] left-[2px] w-3 h-3 rounded-full transition-transform duration-200 ease-in-out ${
            checked ? "translate-x-4  bg-white" : "translate-x-0 bg-customGray"
          }`}
        ></div>
      </div>
    </label>
  );
};

export default ToggleSwitch;
