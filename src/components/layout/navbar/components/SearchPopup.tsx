"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import useDebounce from "../hook/useDebounce";
import Link from "next/link";
import config from "@/types/Config";

interface SearchPopupProps {
  isOpen: boolean;
  onClose: () => void;
}
interface SearchResult {
  id: string;
  slug:string;
  name: string;
  type: string;
}
const SearchPopup: React.FC<SearchPopupProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isClosing, setIsClosing] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [noResults, setNoResults] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  const debouncedSearch = useDebounce(searchTerm, 500);
  const baseUrl = config.apiUrl;

  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setSearchTerm("");
        setSearchResults([]);
        setIsClosing(true);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        if (debouncedSearch) {
          const fullUrl = `${baseUrl}/api/v1/school/search?name=${debouncedSearch}`;
          const response = await fetch(fullUrl, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          });
          if (!response.ok) throw new Error(`Error: ${response.status}`);

          const data = await response.json();
          if (data && data.data) {
            setSearchResults(data.data);
            setNoResults(data.data.length === 0);
          }
        }
      } catch (err) {
        console.error("Error fetching search results:", err);
      }
    };

    fetchSearchResults();
  }, [debouncedSearch, baseUrl]);

  useEffect(() => {
    if (!searchTerm) {
      setNoResults(false);
    }
    if (isClosing) {
      const timeoutId = setTimeout(() => {
        setIsClosing(false);
        onClose();
      }, 500);
      return () => clearTimeout(timeoutId);
    }
  }, [isClosing, searchTerm, onClose]);

  if (!isOpen && !isClosing) return null;

  const isHomePageSearch = pathname === "/" ? "bg-black" : "bg-white";
  const isHomePageSearchText = pathname === "/" ? "text-white" : "text-black";
  const isHomePageImage = pathname === "/" ? "white" : "black";
  const isHomePage = pathname === "/" ? "bg-black" : "bg-white";

  return (
    <div className="absolute top-0 left-0 w-full z-500">
      <div className="fixed w-[100vw] h-[100vh] left-0 bg-black z-60 bg-opacity-65 "></div>
      <div
        ref={popupRef}
        className={`absolute top-[60px] w-full  md:w-[530px] lg:w-[1080px] md:top-[100px] left-0 md:left-[18%] lg:left-5  2xl:left-[8.5rem] 3xl:left-[394px] z-60 ${isHomePageSearch} flex flex-col items-center justify-start py-3 px-4 md:py-4 md:px-4 lg:py-[18px] lg:px-5 transition-all duration-500 ${
          isClosing ? "animate-slide-out" : "animate-slide-in"
        } md:rounded-2xl`}
      >
        <div className={`relative left-0 w-full `}>
          <div
            className={`relative flex items-center w-full ${
              searchResults.length > 0 ? "mb-3" : ""
            }`}
          >
            <Image
              src={`/navbar/searchIcon-${isHomePageImage}.svg`}
              alt="Search Icon"
              width={24}
              height={24}
              className="absolute left-3 w-5 h-5"
            />
            <input
              type="search"
              className={`w-full py-3 pl-10 pr-4 rounded-xl ${isHomePageSearchText} ${isHomePage} border border-strokes placeholder:text-gray-400 focus:outline-none`}
              placeholder="Search Schools by Name, Address..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
            />
          </div>

          <div className="space-y-4">
            {noResults ? (
              <p className={`text-center ${isHomePageSearchText} mt-4`}>
                No Results Found
              </p>
            ) : (
              searchResults.map((result, index) => (
                <Link
                  href={`/${result.type === "CITY" ? "cities" : "schools"}/${
                    result.slug
                  }`}
                  key={index}
                  className={`flex items-center gap-2 ${isHomePageSearchText} cursor-pointer p-2`}
                  onClick={() => {
                    setSearchTerm("");
                    setSearchResults([]);
                    setIsClosing(true);
                  }}
                >
                  <Image
                    src={`/navbar/search_${
                      result.type === "CITY" ? "city" : "school"
                    }_${isHomePageImage}.svg`}
                    alt="Search Result Icon"
                    width={24}
                    height={24}
                    className="w-5 h-5"
                  />
                  <p>{result.name}</p>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPopup;
