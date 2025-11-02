"use client";

import React from "react";
interface VideoSectionMobileProps {
  url: string;
}
const VideoSection = ({ url }: VideoSectionMobileProps) => {
  const getEmbedUrl = (url: string) => {
  if (url.includes("watch?v=")) {
    return url.replace("watch?v=", "embed/");
  }
  return url;
};
  return (
    <div className="p-6  text-white bg-black bg-opacity-60 backdrop-blur-2xl rounded-2xl md:rounded-md lg:rounded-2xl w-full md:min-w-[420px] 2xl:min-w-[576px] hidden md:flex flex-col gap-4 lg:gap-6 items-center">
      <h2 className="font-medium text-heading-2-mb md:text-heading-3-tb lg:text-heading-3 text-center">
        Who we are?
      </h2>

      <div className="w-full aspect-video overflow-hidden">
        <iframe
          className="w-full h-full"
          src={`${getEmbedUrl(url)}?rel=0`}
          title="Who we are?"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoSection;
