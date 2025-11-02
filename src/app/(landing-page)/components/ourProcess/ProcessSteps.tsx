"use client";

import MasterButton from "@/components/buttons/MasterButton";
import Image from "next/image";

interface StepProps {
  step: number;
  title: string;
  description: string;
  buttonText: string;
  buttonLink?: string;
}

const ProcessStep = ({ step, title, description, buttonText, buttonLink }: StepProps) => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-3 lg:gap-4 mb-2 lg:mb-8">
      {/* Step Number */}
      <div className="bg-orange text-white text-body-default-sub min-w-8 min-h-8 flex items-center justify-center rounded-full font-semibold md:mt-1 lg:mt-2">
        {step}
      </div>

      {/* Content */}
      <div className="w-full flex flex-col gap-1 md:gap-3 lg:gap-4">
        <div className="flex flex-row justify-between items-center gap-2">
          <h3 className="font-medium text-[#51200B] text-heading-3-mb lg:text-heading-3">{title}</h3>
          <MasterButton
            text={buttonText}
            variant="white"
            size="sm"
            target="_blank"
            href={buttonLink}
            containerClass="w-auto inline-flex hidden md:inline-flex lg:hidden 3xl:inline-flex"
            suffixIcon="/landing/Arrow_right.svg"
            hoverSuffixIcon="/landing/Arrow_right_white.svg"
          />
        </div>

        <p className="text-grey-1 font-normal text-body-default-mb lg:text-body-default mb-3">{description}</p>

        {/* Mobile Button */}
        <MasterButton
          text={buttonText}
          variant="white"
          size="md"
          target="_blank"
          href={buttonLink}
          containerClass="w-auto inline-flex md:hidden lg:inline-flex 3xl:hidden"
          suffixIcon="/landing/Arrow_right.svg"
          hoverSuffixIcon="/landing/Arrow_right_white.svg"
        />
      </div>
    </div>
  );
};
export default ProcessStep;