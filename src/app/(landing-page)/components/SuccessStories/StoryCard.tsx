import PrimaryButton from "@/components/buttons/PrimaryButton";
import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
}

const StoryCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  link,
}) => {
  return (
    <div className="bg-black bg-opacity-30 backdrop-blur-xl text-white px-4 py-6 md:px-[14px] lg:px-10 md:py-4 lg:py-12 rounded-lg md:rounded-md lg:rounded-lg w-full flex flex-col lg:gap-7">
      <h2 className="text-heading-2-mb md:text-heading-2-tb lg:text-heading-3 font-medium mb-4 md:mb-[10px] lg:mb-[0px]">
        {title}
      </h2>
      <p className="font-normal text-body-small-mb md:text-body-small-tb lg:text-body-default text-white text-left mb-4 md:mb-[10px] lg:mb-[0px] tracking-[0.6px] md:tracking-[0.0px] lg:tracking-[0.3px]">
        {description}
      </p>
        <PrimaryButton title="Learn more" link={link} />
      
    </div>
  );
};

export default StoryCard;
