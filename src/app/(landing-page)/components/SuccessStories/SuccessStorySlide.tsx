// components/SuccessStorySlide.tsx
"use client";

import Image from "next/image";
import { SuccessStory } from "../../types";
import ServiceCard from "./ServiceCard";
import { useResponsiveImage } from "../../hooks/useResponsiveImage";

interface Props {
  story: SuccessStory;
}

export default function SuccessStorySlide({ story }: Props) {
  const responsiveImage = useResponsiveImage(story.images);

  return (
    <div className="relative w-full h-[868px] md:h-[1000px] lg:h-[812px] flex items-center justify-center">

      <div className="absolute inset-0">
        <Image
          src={story.images.desktop.bg}
          alt={story.name}
          fill
          className="object-cover hidden lg:block"
        />
        <Image
          src={story.images.tablet.bg}
          alt={story.name}
          fill
          className="object-cover hidden md:block lg:hidden"
        />
        <Image
          src={story.images.mobile.bg}
          alt={story.name}
          fill
          className="object-cover md:hidden"
        />
      </div>

      <div className="max-w-[1920px] mx-auto relative z-10 flex flex-col items-center w-full py-[30px] md:py-0 px-3 md:px-12 lg:px-20 2xl:px-[300px]">
        <h2 className="w-full text-white text-heading-1-mb lg:text-heading-1 font-medium text-center lg:text-left mb-6 lg:mb-10">
          Success Stories
        </h2>

        <div className="relative w-full flex justify-center items-center">
          <div className="relative mx-auto w-full max-w-[328px] md:max-w-[672px] lg:max-w-[1320px]">
            <ServiceCard
              title={story.title}
              description={story.description}
              outcome={story.outcome}
              timeline={story.timeline}
              name={story.name}
              image={responsiveImage}
              youtube={story.youtube}
            />

            <button className="custom-next absolute top-1/2 right-6 lg:right-8 transform -translate-y-1/2 text-white z-20">
              <Image
                src="/landing/swiper_right.svg"
                alt="Next"
                width={32}
                height={32}
                className="w-[10px] h-[20px] hidden md:block"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
