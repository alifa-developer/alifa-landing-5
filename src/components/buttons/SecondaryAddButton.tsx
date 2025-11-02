import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  onClick: () => void;
}

const SecondaryAddButton = ({ title, onClick }: Props) => {
  const cls =
    "bg-white font-medium text-btn-default-mb md:text-btn-default-tb lg:text-btn-default py-2 md:py-[10px] px-3 md:px-4 rounded-lg md:rounded-lg border border-primary-text text-nowrap text-center w-full text-orange";

  return (
    <div
      className={`flex flex-row gap-1 md:gap-2 justify-center items-center ${cls}`}
      onClick={onClick} 
    >
      <Image
        width={20}
        height={20}
        alt="add"
        className=""
        src="/profile-complete/add.svg"
      />
      <div>{title}</div>
    </div>
  );
};

export default SecondaryAddButton;
