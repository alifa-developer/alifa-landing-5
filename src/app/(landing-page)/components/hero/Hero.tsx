import Image from "next/image";
import "./Hero.css";
import VideoSection from "./VideoSection";
import MasterButton from "@/components/buttons/MasterButton";
import { LandingPageResponse } from "../../types";

interface HeroProps {
  hero: LandingPageResponse["hero"];
  chinaSchoolGuideUrl: string;
  url: string;
}

const Hero = ({ hero, chinaSchoolGuideUrl, url }: HeroProps) => {
  return (
    <section className="relative">
      {/* Mobile image */}
      <div className="absolute top-0 left-0 w-full h-full md:hidden">
        <Image
          src={hero.mobile}
          alt={hero.alt}
          fill
          className="h-full w-full object-cover"
          priority
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full hidden md:block lg:hidden">
        <Image
          src={hero.tablet}
          alt={hero.alt}
          fill
          className="h-full w-full object-cover"
          priority
        />
      </div>

      <div className="absolute top-0 left-0 w-full h-full hidden lg:block">
        <Image
          src={hero.desktop}
          alt={hero.alt}
          fill
          className="h-full w-full object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div>
        <div className="max-w-[1920px] mx-auto relative z-10 py-11 md:py-20 lg:py-[94px] px-4 md:px-8 lg:px-[190px] flex flex-col lg:flex-row justify-center items-center gap-[46px] md:gap-[71px] lg:gap-16">
          {/* Left side text */}
          <div className="flex flex-col justify-center items-center lg:items-start gap-[45px]">
            <div className="flex flex-col justify-center items-start">
              <h1 className="flex flex-col gap-6 text-page-title-mb md:text-page-title-tb lg:text-page-title font-normal lg:w-[456px] 2xl:w-[726px] text-white text-center md:text-left ">
                Expert School Placement in China
              </h1>
              {/* <p className="text-white font-medium text-heading-3-mb md:text-heading-3-tb lg:text-heading-2 mt-2 lg:mt-0 text-left">
                Trusted by 500+ International Families
              </p>
              <ul className="list-disc text-white text-body-big-mb font-normal lg:font-medium md:text-body-big-tb lg:text-body-big pl-7 md:pl-5 lg:pl-7 mt-4">
                <li>Expert guidance for International Schools in China since 2015</li>
                <li>95% successful placement rate</li>
                <li>End-to-end support from school search through graduation</li>
                <li>University counseling for top Chinese and global institutions</li>
              </ul> */}
            </div>

            <MasterButton
              prefixIcon="/landing/Download.svg"
              variant="white"
              text="View China School Guide"
              size="md"
              href={chinaSchoolGuideUrl}
              target="_blank"
            />
          </div>

          <VideoSection url={url} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
