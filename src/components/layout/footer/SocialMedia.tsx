// components/SocialMedia.tsx
import React from 'react';
import SocialMediaLink from './SocialMediaLinks';
import { socials } from './social-media-data';

const SocialMedia = () => {
  return (
    <>
      <div className="mt-[38.5px] md:mt-0 lg:mt-12 flex flex-col gap-4 md:gap-2 lg:gap-6  mb-12 md:mb-6 lg:mb-16">
        <p className="text-grey-1 text-body-default-sub-mb md:text-body-default-tb lg:text-body-default-sub font-medium md:font-normal lg:font-medium">
          Follow us on social media
        </p>
        <div className="flex flex-row gap-3 md:gap-[6px] lg:gap-3">
          {socials.map(({ link, src, alt, number }) => (
            <SocialMediaLink
              key={number}
              href={link}
              src={src}
              width={36}
              height={36}
              alt={alt}
              className="w-9 h-9 md:w-4 md:h-4 lg:w-9 lg:h-9 "
            />
          ))}
        </div>
      </div>
      <div className="w-full h-[0.10rem] md:h-[0.05rem] lg:h-[0.1rem] bg-gradient-to-r from-strokes to-strokes"></div>

    </>
  );
};

export default SocialMedia;
