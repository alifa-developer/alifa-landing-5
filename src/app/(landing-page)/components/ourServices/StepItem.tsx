import React from "react";
import Image from "next/image";
import HoverIcons from "./HoverIcons";

interface StepItemProps {
  step: {
    number: number;
    title: string;
    description: string;
    activeImage: string;
    inActiveImage: string;
  };
  showConnector: boolean;
  onHover: () => void;
  isActive: boolean;
}

const StepItem: React.FC<StepItemProps> = ({
  step,
  showConnector,
  onHover,
  isActive,
}) => {
  return (
    <>
      <div
        className="w-full flex flex-col lg:flex-row gap-4 md:gap-2 lg:gap-4 items-start lg:items-center group"
        onMouseEnter={onHover}
      >
        <div
          className={`min-h-9 min-w-9 md:min-h-[45px] md:min-w-[45px] lg:min-h-[60px] lg:min-w-[60px] rounded-full border-[0.6px] md:border-[1px] border-strokes flex justify-center items-center transition-all duration-700 ease-in-out ${
            isActive ? "group-hover:bg-[#FFEFE5] group-hover:border-[#FFEFE5] group-hover:md:min-h-16 group-hover:md:min-w-16 group-hover:lg:min-h-[75px] group-hover:lg:min-w-[75px]" : ""
          }`}
        >
          <HoverIcons
            activeImage={step.activeImage}
            inActiveImage={step.inActiveImage}
          />
        </div>

        <div className="flex flex-col gap-2 md:gap-1 lg:gap-2">
          <h1
            className={`tracking-[0.3px] transition-all duration-700 ease-in-out text-heading-3-mb md:text-heading-3-tb font-medium ${
              isActive
                ? "text-dark-brown-1 lg:text-heading-2"
                : "text-primary-content lg:text-heading-3"
            }`}
          >
            {step.title}
          </h1>
          <div
            className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
              isActive ? "max-h-[400px]" : "max-h-0"
            }`}
          >
            <p className="text-grey-2 text-body-small-mb md:text-body-small-tb lg:text-body-default font-normal">
              {step.description}
            </p>
          </div>
        </div>
      </div>

      {/* Connector */}
      {showConnector && (
        <div className="relative w-9 h-7 md:w-8 md:h-[11px] lg:w-[60px] lg:h-7">
          <Image
            src="/whyUs/connector.svg"
            alt="Connector"
            fill
            className="object-contain"
          />
        </div>
      )}
    </>
  );
};

export default StepItem;
