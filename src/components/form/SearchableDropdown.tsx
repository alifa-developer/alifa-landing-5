import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { LabelAndValue } from "@/types/Common";

type DropdownTypes = LabelAndValue | string;

interface SearchableDropdownProps<T extends DropdownTypes = string> {
  selectedOption?: T;
  setSelectedOption: (option: T) => void;
  options: T[];
  placeholder?: string;
  dropdownCSS?: string;
  inputCSS?: string;
  altMessage?:string;
}

const getLabel = (option?: DropdownTypes) => {
  if (option == undefined) return "";

  if (typeof option == "string") return option;

  return option.label;
};

export function SearchableDropdown<T extends DropdownTypes>({
  selectedOption,
  setSelectedOption,
  options,
  placeholder = "Select",
  dropdownCSS = "",
  inputCSS = "",
  altMessage="No options found"
}: Readonly<SearchableDropdownProps<T>>) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
    setSearchQuery(isDropdownOpen ? getLabel(selectedOption) : "");
  };
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    if (!isDropdownOpen) setIsDropdownOpen(true);
  };

  const handleOptionClick = (option: T) => {
    setSelectedOption(option);
    setSearchQuery("");
    setIsDropdownOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredOptions = options.filter((option) =>
    getLabel(option).toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="relative inline-flex items-center w-full">
        <input
          type="text"
          id="searchableDropdown"
          value={isDropdownOpen ? searchQuery : getLabel(selectedOption)}
          onChange={handleSearchChange}
          onClick={toggleDropdown}
          readOnly={!isDropdownOpen}
          placeholder={placeholder}
          className={`${inputCSS} ${isDropdownOpen ? "pl-12" : ""}`}
          autoComplete="off"
        />
        <div className="absolute top-3 left-3 cursor-pointer">
          {isDropdownOpen && (
            <Image
              src={"/profile-complete/search.svg"}
              width={20}
              height={20}
              alt="Search"
            />
          )}
        </div>
        <div
          onClick={toggleDropdown}
          className="absolute  right-3 cursor-pointer"
        >
          <Image
            src={"/profile-complete/down.svg"}
            width={20}
            height={20}
            alt="Dropdown"
            style={{
              transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease",
            }}
          />
        </div>
      </div>
      {isDropdownOpen && (
        <div
          className={`absolute bg-white border border-gray-300 rounded-lg mt-1 w-full max-h-40 overflow-y-auto  z-[1050] ${dropdownCSS}`}
        >
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <div
                key={index}
                onClick={() => handleOptionClick(option)}
                // className="flex gap-4 px-3 py-2 cursor-pointer hover:bg-gray-200 z-50"
                // className={`flex gap-4 px-3 py-2 cursor-pointer hover:bg-gray-200 z-50 ${
                //   selectedOption === option ? "bg-gray-300 font-semibold" : ""
                // }`}
                className={`flex gap-4 px-3 py-2 cursor-pointer hover:bg-gray-200 z-50 ${
                  typeof selectedOption === "object" &&
                  typeof option === "object" &&
                  selectedOption?.value === option.value
                    ? "bg-primary-text/50 font-semibold"
                    : ""
                } ${
                  selectedOption === option ? "bg-primary-text/50 font-semibold" : ""
                }`}
              >
                {getLabel(option)}
              </div>
            ))
          ) : (
            <div className="px-3 py-2">{altMessage}</div>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchableDropdown;
