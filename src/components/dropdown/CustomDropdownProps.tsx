import React, { useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import "./styles.css";

interface CustomDropdownProps {
  selectedOption: string;
  setSelectedOption: (option: string) => void;
  options: string[];
  placeholder?: string;
  dropdownCSS: string;
  dropdownWidth?: string;
  dropdownHeight?: string;
}

export default function CustomDropdown({
  selectedOption,
  setSelectedOption,
  options,
  placeholder = "Select an option",
  dropdownCSS,
  dropdownWidth,
  dropdownHeight,
}: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dropdown onOpenChange={(open) => setIsOpen(open)}>
      <DropdownTrigger>
        <Button
          variant="bordered"
          className={`${dropdownWidth} ${dropdownCSS}`}
        >
          <div
            className={`font-normal text-grey-1 text-body-small-mb md:text-body-default-tb lg:text-body-default w-full flex items-center justify-between  ${
              selectedOption ? "text-grey-1" : "text-grey-2"
            }`}
          >
            {selectedOption || placeholder}
            <Image
              src="/profile-complete/down.svg"
              width={20}
              height={20}
              alt="Dropdown icon"
              className={`ml-auto transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </div>
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label={placeholder}
        className={`${dropdownWidth} ${dropdownHeight} shadow-none w-full`}
        onAction={(key) => setSelectedOption(options[Number(key)])}
      >
        {options.map((option, index) => (
          <DropdownItem key={index} className="w-full text-grey-1 font-normal text-body-small-mb md:text-body-default-tb lg:text-body-default">
            {option}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
