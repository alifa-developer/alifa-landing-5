"use client";
import { Option } from "@/types/Dropdown";
import Image from "next/image";
import React, { useState, useEffect } from "react";

interface DropdownProps {
  placeholder: string;
  options: Option[];
  isOpen: boolean;
  iconSrc?: string;
  onOpen: () => void;
  onClose: () => void;
  onSelect: (option: Option | null) => void;
}

const DropdownNew: React.FC<DropdownProps> = ({
  placeholder,
  options,
  isOpen,
  iconSrc,
  onOpen,
  onClose,
  onSelect,
}) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const [showTooltip, setShowTooltip] = useState(false);

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    onSelect(option);
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          event.target &&
          !(event.target as HTMLElement).closest(".dropdown-container")
        ) {
          onClose();
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isOpen, onClose]);

  return (
    <div className="relative dropdown-container">
      <div
        className={`w-full h-12 md:h-7 lg:h-12 rounded-lg md:rounded-lg lg:rounded-lg py-3 md:py-5 lg:py-3  px-3 md:px-[9px] lg:px-3 text-body-field-mb md:text-body-field-tb  lg:text-body-field whitespace-nowrap overflow-hidden text-ellipsis ${
          selectedOption ? "text-black" : "text-details-content"
        } font-normal bg-white flex items-center justify-between cursor-pointer pl-10 md:pl-7 lg:pl-10`}
        onClick={() => (isOpen ? onClose() : onOpen())}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {selectedOption ? selectedOption.label : placeholder}
        <span className="ml-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 10l5 5 5-5H7z" fill="#FF6500" />
          </svg>
        </span>
      </div>
      <div
        className="absolute w-5 h-5 md:w-3 md:h-3 lg:w-5 lg:h-5 top-[14px] left-[14px] md:top-4 md:left-2 lg:top-[14px] lg:left-[14px] flex justify-center items-center"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <Image src={iconSrc!} alt="icon" height={20} width={20} />
        {showTooltip && (
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs rounded-md px-2 py-2 shadow-lg z-50 whitespace-nowrap">
            {placeholder}
          </div>
        )}
      </div>
      {isOpen && (
        <ul className="absolute z-1 w-full bg-white shadow-lg mt-2 rounded-b-md max-h-48 overflow-y-auto z-10">
          {options.map((option) => (
            <li
              key={option.label}
              className="px-3 py-3 text-body-field-mb md:text-body-field-tb  lg:text-body-field  text-black cursor-pointer hover:bg-gray-200"
              onClick={() => handleOptionClick(option)}
              role="option"
              aria-selected={selectedOption?.label === option.label}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownNew;
