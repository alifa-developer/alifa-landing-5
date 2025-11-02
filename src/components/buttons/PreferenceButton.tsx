"use client";
import { cn } from "@/utils/CssUtils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  link?: string;
  onClick?: () => void;
  className?: string;
}

const PreferenceButton = ({ title, link, onClick, className }: Props) => {
  const cls = cn(
    `inline-block w-fit bg-icons-accent font-medium  py-2 px-4 rounded-[8px] flex gap-2 justify-start items-center`,
    className
  );

  if (link) {
    return (
      <Link className={cls} href={link}>
        <Image
          src="/schools/setting_white.svg"
          height={20}
          width={20}
          alt="pref image"
        />{" "}
        <p className="text-white text-btn-small-mb md:text-btn-small-tb lg:text-btn-small">{title}</p>
      </Link>
    );
  }

  return (
    <button type="submit" className={cls} onClick={onClick}>
      <Image
        src="/schools/setting_white.svg"
        height={20}
        width={20}
        alt="pref image"
      />{" "}
      <p className="text-white text-btn-small-mb md:text-btn-small-tb lg:text-btn-small">{title}</p>
    </button>
  );
};

export default PreferenceButton;
