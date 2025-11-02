"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LogoLink from "@/components/LogoLink";
import NavOptions from "./NavOptions";
import ProfileDropdown from "./ProfileDropdown";
import NavOptionsMobile from "./NavOptionsMobile";
import { User } from "@/types/User";
import SignUpButton from "./SignUpButton";
import "./Navbar.css";
import SearchPopup from "./components/SearchPopup";

interface Props {
  userData: User | null;
}

const Navbar = ({ userData }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const isHomePage = pathname === "/" ? "navbar-black" : "navbar-white";
  const isAbsolute = (path: string) =>
    pathname === path ? "absolute top-0" : "";

  const isHomeForSearch =
    pathname === "/" ? "searchIcon-white" : "searchIcon-black";
  const isHomeForMenu = isOpen
    ? pathname === "/"
      ? "close"
      : "close-black"
    : pathname === "/"
    ? "menu"
    : "menu-black";

  return (
    <nav className={`${isHomePage}`}>
      <div
        className={`max-w-[1920px] mx-auto px-5 xl:px-20 py-4 flex justify-between items-center ${isAbsolute}`}
      >
        <LogoLink
          src="/navbar/logo.svg"
          width={126}
          height={22}
          alt="Logo"
          className="w-[154px] h-5 md:w-[197px] md:h-[26px] lg:w-[236px] lg:h-8"
          link="/"
        />

        <NavOptions />

        <div className="hidden lg:flex gap-7 items-center">
          {/* <Image
            src={`/navbar/${isHomeForSearch}.svg`}
            width={20}
            height={20}
            alt="Search Icon"
            className="w-5 h-5 cursor-pointer"
            onClick={() => setIsSearchOpen(true)}
          /> */}
          {userData ? (
            <ProfileDropdown
              labelColor={
                pathname === "/" ? "text-white" : "text-secondary_content_text"
              }
              dropdownColor={
                pathname === "/" ? "caret-down" : "caret-down-fill"
              }
              closeMobileMenu={() => setIsOpen(false)}
              userData={userData}
            />
          ) : (
            <SignUpButton />
          )}
        </div>

        <div className="lg:hidden flex items-center gap-5">
          {/* <Image
            src={`/navbar/${isHomeForSearch}.svg`}
            width={24}
            height={24}
            alt="Search Icon"
            className="w-5 h-4 lg:w-6 lg:h-6"
            onClick={() => setIsSearchOpen(true)}
          /> */}
          <button onClick={() => setIsOpen(!isOpen)}>
            <Image
              src={`/navbar/${isHomeForMenu}.svg`}
              width={24}
              height={24}
              alt="Menu"
            />
          </button>
        </div>
      </div>

      {isOpen && (
        <NavOptionsMobile
          userData={userData}
          setIsOpen={setIsOpen}
          isMobileOpen={isOpen}
        />
      )}
      <SearchPopup
        isOpen={isSearchOpen}
        onClose={() => {
          setIsSearchOpen(false);
          setIsOpen(false);
        }}
      />
    </nav>
  );
};

export default Navbar;
