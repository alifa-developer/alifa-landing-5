import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  link?: string;
}

const PrimaryButtonBig = ({ title, link }: Props) => {
 
    const cls =
    "bg-icons-accent font-medium text-white text-base md:text-xs lg:text-base py-[14.5px] md:py-[6px]  lg:py-[14.5px]  rounded-lg md:rounded lg:rounded-lg text-nowrap text-center w-full flex items-center justify-center";

    if (link) {
    return (
      <Link className={cls} href={link}>
        {title}
      </Link>
    );
  }

  return <button className={cls}>{title}</button>;
};

export default PrimaryButtonBig;
