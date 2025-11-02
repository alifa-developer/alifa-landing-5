"use client";
import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  link?: string;
  padding?: string;
  text?: string;
  rounded?: string;
  onClick?: () => void;
  openWelcomeModal?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  full?: boolean;
  type?: "button" | "submit";
}

const SecondaryButton = ({
  title,
  link,
  padding = "py-[14.5px] md:py-[6px] lg:py-[14.5px] px-4",
  text = "text-orange text-btn-default-mb md:text-btn-default-tb lg:text-btn-default text-center",
  rounded = "rounded-lg md:rounded lg:rounded-lg",
  onClick,
  openWelcomeModal,
  full = false,
  type = "button",
}: Props) => {
  let cls = `bg-white font-medium ${text} ${padding} ${rounded} border border-orange text-nowrap text-center`;

  if (full) cls += " w-full";

  const combinedClassName = ` ${cls} bg-icons-accent `;

  if (link) {
    return (
      <Link className={cls} href={link}>
        {title}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={combinedClassName}
      onClick={(e) => {
        if (onClick) {
          onClick();
        } else if (openWelcomeModal) {
          openWelcomeModal(e);
        }
      }}
    >
      {title}
    </button>
  );
};

export default SecondaryButton;
