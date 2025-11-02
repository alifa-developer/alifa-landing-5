"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ThreeDots } from "react-loader-spinner";

interface Props {
  link?: string;
  onClick?: () => void;
  isLoading?: boolean;
  isHome?: boolean;
}

const ViewAllButton = ({ link, onClick, isLoading }: Props) => {
  if (link) {
    return (
      <Link href={link} className="relative">
        <button
          className="text-white text-nowrap font-medium text-btn-small-mb md:text-btn-small-tb lg:text-btn-default bg-orange py-[10px] md:py-[10px] lg:py-[15px] pl-3 md:pl-[10px] lg:pl-4 pr-8 md:pr-[30px] lg:pr-11 rounded-lg md:rounded-lg lg:rounded-lg transition-all duration-200 ease-in-out 
     hover:bg-orange-2 hover:shadow-button-hover 
     active:bg-orange-2 active:shadow-none"
        >
          View All
        </button>
        <Image
          src="/buttons/Arrow_right.svg"
          width={16}
          height={16}
          alt="arrow"
          className="absolute w-4 h-4 md:w-4 md:h-4 lg:w-5 lg:h-5 top-2 right-[10px] md:top-2 md:right-[10px] lg:top-[14px] lg:right-[18px]"
        />
      </Link>
    );
  }

  return (
    <div className="relative">
      <button
        className="text-white text-nowrap font-medium text-btn-small-mb md:text-btn-small-tb lg:text-btn-default bg-orange py-[10px] md:py-[10px] lg:py-[15px] pl-3 md:pl-[10px] lg:pl-4 pr-8 md:pr-[30px] lg:pr-11 rounded-lg md:rounded-lg lg:rounded-lg transition-all duration-200 ease-in-out 
     hover:bg-orange-2 hover:shadow-button-hover 
     active:bg-orange-2 active:shadow-none"
        onClick={onClick}
        disabled={isLoading}
      >
        {isLoading && <ThreeDots color="#fff" height={12} width={30} />}
        {!isLoading && <>View All</>}
      </button>
      <Image
        src="/buttons/Arrow_right.svg"
        width={16}
        height={16}
        alt="arrow"
        className="absolute w-4 h-4 md:w-4 md:h-4 lg:w-5 lg:h-5 top-2 right-[10px] md:top-2 md:right-[10px] lg:top-[14px] lg:right-[18px]"
      />
    </div>
  );
};

export default ViewAllButton;
