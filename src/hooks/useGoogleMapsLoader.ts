"use client";

import { useJsApiLoader } from "@react-google-maps/api";
import config from "@/types/Config";

// const libraries: Array<"places"> = ["places"];

export const useGoogleMapsLoader = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: config.mapKey,
    libraries: ["places"],
    language: "en",
  });

  return { isLoaded, loadError };
};
