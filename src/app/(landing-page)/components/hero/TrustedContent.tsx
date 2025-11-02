import Image from "next/image";
import React from "react";

const TrustedContent = () => {
  return (
    <section className="max-w-[1920px] mx-auto flex flex-col-reverse  md:flex-row items-center justify-center gap-[45px] md:py-12 lg:py-20 px-4 md:px-12 lg:px-[150px] bg-white">
      <div className="relative w-[328px] md:w-[292px] lg:w-[418px] h-[231px] md:h-[206px] lg:h-[237px] rounded-2xl overflow-hidden">
        <Image
          src="/landing/trusted.jpg"
          alt="Family sitting together on sofa"
          fill
          className="object-cover"
        />
      </div>

      <div className="w-full md:w-2/3 space-y-4">
        <h2 className="text-heading-3-mb lg:text-heading-2 font-medium text-grey-1">
          Trusted by 500+ International Families
        </h2>

        <ul className="space-y-2 text-body-default-mb lg:text-body-big font-normal text-grey-1">
          <li>
            • Expert guidance for International Schools in China since 2015
          </li>
          <li>• 95% successful placement rate</li>
          <li>• End-to-end support from school search through graduation</li>
          <li>
            • University counseling for top Chinese and global institutions
          </li>
        </ul>
      </div>
    </section>
  );
};

export default TrustedContent;
