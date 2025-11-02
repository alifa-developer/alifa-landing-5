import React from "react";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import CompanyInfo from "./CompanyInfo";
import Copyright from "./Copyright";
import AboutFooter from "./AboutFooter";
import OtherLinks from "./OtherLinks";

const Footer = () => {
  return (
    <footer className="max-w-[1920px] mx-auto overflow-hidden py-12 px-4  md:px-12  lg:px-4 xl:px-20 3xl:px-2xl md:py-7 lg:py-20">
      <div className="flex md:hidden lg:flex flex-col md:flex-row md:gap-4 lg:gap-12 justify-between">
        <Logo />
        <div className="flex flex-col md:flex-row gap-[38.5px] md:gap-[21px] lg:gap-12 justify-around mt-6 md:mt-0">
          <AboutFooter />
          <OtherLinks />
        </div>
        <CompanyInfo />
      </div>
      <div className="hidden md:flex flex-col gap-6 mb-6 lg:hidden">
        <Logo />
        <div className="flex flex-row justify-around">
          <AboutFooter />
          <OtherLinks />
          <CompanyInfo />
        </div>
      </div>
      <SocialMedia />
      <Copyright />
    </footer>
  );
};

export default Footer;
