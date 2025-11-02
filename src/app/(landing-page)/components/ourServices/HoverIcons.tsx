import React from "react";
import Image from "next/image";

interface Icons {
  activeImage:string;
  inActiveImage:string;
}

const HoverIcons = ({activeImage,inActiveImage}:Icons) => {
  return (
    <div className="relative">
      <Image
        src={inActiveImage}
        alt="Icon"
        width={24}
        height={24}
        className="w-6 h-6 group-hover:hidden transition-opacity duration-700 ease-in-out"
      />
      <Image
        src={activeImage}
        alt="Icon"
        width={24}
        height={24}
        className="hidden group-hover:block group-hover:w-6 group-hover:h-6 group-hover:md:w-8 group-hover:md:h-8 group-hover:lg:w-[45px] group-hover:lg:h-[45px] transition-all duration-700 ease-in-out"
      />
    </div>
  );
};

export default HoverIcons;
