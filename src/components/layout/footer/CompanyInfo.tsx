import Image from "next/image";
import React from "react";

const CompanyInfo = () => {
  let itemsCSS =
    "text-grey-2 font-normal text-body-default-mb md:text-body-default-tb lg:text-body-default w-full md:max-w-[120px] lg:max-w-[194px] xl:max-w-[236px]";
  return (
    <div className="mt-[38.5px] md:mt-0  lg:pr-14 2xl:pr-0">
      <p className="text-body-default-sub-mb md:text-body-default-sub-tb lg:text-body-default-sub font-medium text-grey-1 mb-5 md:mb-[15px] lg:mb-[45px]">
        Company Information
      </p>
      <div className="flex flex-col gap-5 md:gap-2 lg:gap-5 justify-center ">
        <div className="flex flex-row gap-2 md:gap-1 lg:gap-2 justify-start md:justify-center items-start">
          <Image
            src="/footer/Location.svg"
            width={20}
            height={20}
            alt="location"
            className="w-5 h-5 md:w-[14px] md:h-[14px] lg:w-5 lg:h-5 mt-1"
          />
          <p className={itemsCSS}>
            Taijia Culture (Wanhe Campus) Building 13, Wanhe Culture Silicon
            Valley, Chaoyang District, Beijing.
          </p>
        </div>
        <div className="flex flex-row gap-2 md:gap-1 lg:gap-2 justify-start md:justify-center items-center">
          <Image
            src="/footer/Message_alt_fill.svg"
            width={20}
            height={20}
            alt="location"
            className="w-5 h-5 md:w-[14px] md:h-[14px] lg:w-5 lg:h-5"
          />
          <a 
            href="mailto:admissions@alifaedtech.com"
            className={`${itemsCSS} hover:underline`}
          >
            admissions@alifaedtech.com
          </a>
        </div>
        <div className="flex flex-row gap-2 md:gap-1 lg:gap-2 justify-start md:justify-center items-start">
          <Image
            src="/footer/Call.svg"
            width={20}
            height={20}
            alt="location"
            className="w-5 h-5 md:w-[14px] md:h-[14px] lg:w-5 lg:h-5 mt-1"
          />
          <p className={`${itemsCSS} flex flex-col gap-2 `}>
            <span>
              Alifa Education Services <br />
              (+86) 13522515549
              <br />
            </span>
            <span>
              Alifa Business Service
              <br />
              (+86) 13520720946
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
