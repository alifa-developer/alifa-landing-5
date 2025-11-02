import Link from "next/link";
import React from "react";

const OtherLinks = () => {
  let itemsCSS = "text-grey-2 font-normal text-body-default-mb md:text-body-default-tb lg:text-body-default transition-all duration-200 ease-in-out hover:text-orange active:text-orange-2";
  return (
    <div className="flex flex-col gap-[30.5px] md:gap-[21px] lg:gap-[54.5px]">
      <p className="text-body-default-sub-mb md:text-body-default-sub-tb lg:text-body-default-sub font-medium text-grey-1">
        Our Services
      </p>
      <div>
        <div className="flex flex-col gap-[29px] md:gap-4 lg:gap-[29px]">
          <Link href="https://alifaedtech.com/guardianship" className={itemsCSS}>
            Guardianship Program
          </Link>
          <Link href="https://alifaedtech.com/exchange-program" className={itemsCSS}>
            Academic Exchange Program
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OtherLinks;
