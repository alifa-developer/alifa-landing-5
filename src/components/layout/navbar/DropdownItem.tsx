import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface DropdownItemProps {
  id: number;
  href: string;
  src: string;
  src2: string;
  src3: string;
  alt: string;
  label: string;
  hoveredItem: number | null;
  setHoveredItem: (id: number | null) => void;
  onClick: () => void;
}

const DropdownItem: React.FC<DropdownItemProps> = ({
  id,
  href,
  src,
  src2,
  src3,
  alt,
  label,
  hoveredItem,
  setHoveredItem,
  onClick,
}) => {
  const pathname = usePathname(); 

  const isHomePage = pathname === "/";

  return (
    <Link
      href={href}
      className={`block px-4 py-2 rounded-lg group ${
        isHomePage ? "hover:bg-highlighted-buttons" : "hover:bg-[#00000008]"
      } ${isHomePage ? "text-white" : "text-black"}`}
      onMouseEnter={() => setHoveredItem(id)}
      onMouseLeave={() => setHoveredItem(null)}
      onClick={onClick}
    >
      <div className="flex items-center">
        <Image
          src={hoveredItem === id ? src2 : isHomePage ? src : src3}
          width={16}
          height={16}
          alt={alt}
          className={`fill-current ${
            isHomePage ? "text-white group-hover:text-primary-text" : "text-black group-hover:text-primary-text"
          }`}
        />
        <span
          className={`ml-2 transition-colors ${
            isHomePage ? "text-white group-hover:text-primary-text" : "text-black group-hover:text-primary-text"
          }`} 
        >
          {label}
        </span>
      </div>
    </Link>
  );
};

export default DropdownItem;
