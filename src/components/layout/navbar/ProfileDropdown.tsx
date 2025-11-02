import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { profileDropdowns } from "./profile-dropdown-data";
import DropdownItem from "./DropdownItem";
import { User } from "@/types/User";
import { useFormState } from "react-dom";
import { defaultActionResult, DefaultActionResult } from "@/types/Form";
import logout from "./actions/LogoutAction";
import { usePathname } from "next/navigation";
import { useDisclosure } from "@nextui-org/react";
import classNames from "classnames";

interface ProfileDropdownProps {
  dropdownColor: string;
  labelColor: string;
  closeMobileMenu: () => void;
  userData?: User;
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({
  labelColor,
  dropdownColor,
  closeMobileMenu,
  userData,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleItemClick = () => {
    setDropdownOpen(false);
    closeMobileMenu();
  };

  const [{ error }, action] = useFormState<DefaultActionResult, FormData>(
    logout,
    defaultActionResult
  );
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isHomePageDropdown = (path: string) =>
    pathname === path ? "bg-black" : "bg-white";

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={toggleDropdown}
      >
        <Image
          src={
            userData?.image ||
            (userData?.relation === "Mother"
              ? "/navbar/default-user-female.svg"
              : "/navbar/default-user-male.svg")
          }
          alt="User Image"
          width={48}
          height={48}
          className="rounded-full md:w-7 md:h-7 lg:w-12 lg:h-12"
        />
        <span
          className={`${labelColor} text-base md:text-font-xs lg:text-base font-medium`}
        >
          {userData?.name}
        </span>
        <Image
          src={`/navbar/${dropdownColor}.svg`}
          width={12}
          height={12}
          alt="dropdown"
          className={classNames("h-3 w-3 md:h-2 md:w-2 lg:h-3 lg:w-3 transition-transform duration-200", {
            "rotate-180": dropdownOpen,
            "rotate-0": !dropdownOpen,
          })}
        />
      </div>

      <div
        className={`absolute right-0 mt-6 w-48 text-white rounded-lg shadow-lg transform transition-transform duration-300 ease-out z-[150] ${
          dropdownOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        } ${isHomePageDropdown("/")}`}
      >
        {profileDropdowns.map((item) => (
          <DropdownItem
            key={item.id}
            id={item.id}
            href={item.href}
            src={item.src}
            src2={item.src2}
            src3={item.src3}
            alt={item.alt}
            label={item.label}
            hoveredItem={hoveredItem}
            setHoveredItem={setHoveredItem}
            onClick={handleItemClick}
          />
        ))}

        <button
          className={`block px-4 py-2 rounded-lg group ${
            pathname !== "/"
              ? "hover:bg-[#00000008]"
              : "hover:bg-highlighted-buttons"
          } text-black w-full`}
          onMouseEnter={() => setHoveredItem(999)}
          onMouseLeave={() => setHoveredItem(null)}
          onClick={onOpen}
        >
          <div className="flex items-center">
            <Image
              src={
                hoveredItem === 999
                  ? "/navbar/logout-orange.svg"
                  : pathname !== "/"
                  ? "/navbar/logout-black.svg"
                  : "/navbar/logout.svg"
              }
              width={16}
              height={16}
              alt="Logout"
              className="fill-current group-hover:text-primary-text text-black"
            />
            <span
              className={`ml-2 transition-colors ${
                pathname !== "/" ? "text-black" : "text-white"
              } group-hover:text-primary-text`}
            >
              Logout
            </span>
          </div>
        </button>
      </div>
      
    </div>
  );
};

export default ProfileDropdown;
