import { cn } from "@/utils/CssUtils";
import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  link?: string;
  onClick?: () => void;
  className?: string;
}

const PrimaryButton = ({ title, link, onClick, className }: Props) => {
  const cls = cn(
    `w-fit bg-orange font-medium 
     text-btn-default-mb md:text-btn-default-tb lg:text-btn-default 
     py-[10.5px] px-4 md:py-[10px] md:px-[14.5px] lg:px-4 lg:py-[15px] 
     rounded-lg transition-all duration-200 ease-in-out 
     hover:bg-orange-2 hover:shadow-button-hover 
     active:bg-orange-2 active:shadow-none text-white`,
    className
  );
  
  if (link) {
    return (
      <Link className={cls} href={link}>
        {title}
      </Link>
    );
  }

  return (
    <button className={cls} onClick={onClick}>
      {title}
    </button>
  );
};

export default PrimaryButton;
