"use client";
import React, { useState } from "react";
import Image from "next/image";
import StepItem from "./StepItem";
import { steps } from "./steps-data";

const OurServices = () => {
    const [activeStep, setActiveStep] = useState(0);
  return (
    <section className="max-w-[1920px] mx-auto px-6 md:px-[50px] py-8 lg:px-6 xl:px-20 3xl:px-2xl md:py-[50px] lg:py-20">
      <h1 className="text-left lg:text-center text-heading-1-mb md:text-heading-1-tb lg:text-heading-1 font-medium text-black mb-6 md:mb-4 lg:mb-10">
        Our Services
      </h1>
      <div className="flex flex-col md:flex-row-reverse gap-10 md:gap-4 lg:gap-10 items-center justify-between h-[816px] md:h-[500px] lg:h-[700px]">
        <div className="relative w-full h-[344px] md:min-w-[344px] lg:w-[479px] lg:h-[504px] overflow-hidden rounded-2xl lg:rounded-[32px]">
          <Image
            src={`/landing/step${activeStep + 1}-desktop.jpg`}
            alt={`Step ${activeStep + 1} image`}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-3 md:gap-[6px] lg:gap-6 lg:w-[578px] md:mt-4 lg:mt-6">
          {steps.map((step, index) => (
            <StepItem
              key={step.number}
              step={step}
              showConnector={index < steps.length - 1}
               onHover={() => setActiveStep(index)}
              isActive={index === activeStep}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
