import { MapComponent } from "@/components/layout/MapComponent";
import Image from "next/image";
import React from "react";
import { AboutUsIcons } from "../../app/about/components/AboutUsIcons";

type SocialMediaItem = {
  type: string;
  onClick: () => void;
  src: string;
  alt: string;
};

const LocationSection = () => {
  return (
    <div className="flex flex-col lg:w-full lg:h-[700px]  items-center max-md:bg-white md:relative">
      <div className="text-grey-1 flex w-full flex-col md:absolute bg-white md:rounded-xl z-10  md:items-start gap-3 px-3 py-6 lg:gap-6 lg:p-12 md:w-[320px] lg:w-[400px] xl:w-[540px] md:top-4 md:left-8 lg:top-[86px] 3xl:left-[300px]">
        <h2 className="font-medium text-heading-3-mb md:text-heading-3-tb 2xl:text-heading-3 text-left">
          LET&apos;S GET IN TOUCH!
        </h2>
        <div className="flex flex-col gap-2 xl:gap-4 font-medium ">
          <div className="flex items-start gap-2">
            <Image
              src="/about/Location.svg"
              height={24}
              width={24}
              alt="location"
              className="md:mt-2 w-6 h-6"
            />
            <h1 className="font-normal 2xl:font-medium text-body-default-mb md:text-body-default-tb 2xl:text-heading-3">
              Taijia Culture (Wanhe Campus) Building 13, Wanhe Culture Silicon
              Valley, Chaoyang District, Beijing.
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/about/Mail.svg" height={20} width={20} alt="mail" />
            <a 
              href="mailto:admissions@alifaedtech.com"
              className="font-normal 2xl:font-medium text-body-default-mb md:text-body-default-tb 2xl:text-heading-3 hover:underline"
            >
              admissions@alifaedtech.com
            </a>
          </div>
          <div className="flex items-start gap-2">
            <Image
              src="/about/Call.svg"
              height={20}
              width={20}
              alt="call"
              className="mt-1"
            />
            <h1
              className={`flex flex-col gap-2 font-normal 2xl:font-medium text-body-default-mb md:text-body-default-tb 2xl:text-heading-3`}
            >
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
            </h1>
          </div>
        </div>
        <div className="flex flex-col  max-md:items-center gap-2 xl:gap-5">
          <h2 className="font-normal 2xl:font-medium text-body-default-mb md:text-body-default-tb 2xl:text-body-big">
            Contact us on Messenger(s):
          </h2>

          <AboutUsIcons />
        </div>
      </div>
      <MapComponent />
    </div>
  );
};

export default LocationSection;
