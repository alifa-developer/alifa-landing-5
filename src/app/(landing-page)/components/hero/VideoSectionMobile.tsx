"use client";

import React from "react";

interface VideoSectionMobileProps {
  url: string;
}

const VideoSectionMobile = ({ url }:VideoSectionMobileProps) => {
   const getEmbedUrl = (url: string) => {
  if (url.includes("watch?v=")) {
    return url.replace("watch?v=", "embed/");
  }
  return url;
};
  return (
    <div>
      <div className="px-4 py-6 text-black bg-white w-full flex md:hidden flex-col gap-4 items-start">
        <h2 className="font-medium text-heading-2-mb md:text-heading-3-tb lg:text-heading-3 text-left">
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
    </div>
  );
};

export default VideoSectionMobile;
