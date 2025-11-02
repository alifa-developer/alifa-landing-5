import LogoLink from "@/components/LogoLink";
import React from "react";

const Logo = () => {
  return (
    <div>
      <div className="flex flex-col gap-[15.56px] justify-center items-start md:gap-3 lg:gap-12">
        <LogoLink
          src={`/navbar/logo.svg`}
          width={253.62}
          height={46.44}
          alt="Logo"
          className="w-[253.62px] h-[46.44px] md:w-[200px] lg:w-[305px] md:h-8 lg:h-[41px]"
          link="/"
        />
        <p className="text-body-small-mb md:text-body-small-tb lg:text-body-default font-normal text-left  text-grey-2 md:w-full lg:w-[20rem] md:mt-3 lg:mt-0 ">
          Alifa Edtech Ltd is your trusted partner in exploring international
          school choices in China. Our thoughtfully designed support system
          empowers parents to send their children to study in this vibrant
          country confidently. With Alifa, your child will experience
          educational excellence and embrace China&apos;s myriad opportunities.
        </p>
      </div>
    </div>
  );
};

export default Logo;
