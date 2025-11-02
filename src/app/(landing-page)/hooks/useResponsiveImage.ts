import { useEffect, useState } from "react";

export function useResponsiveImage<T extends { desktop: any; tablet: any; mobile: any }>(
  images: T
) {
  const [image, setImage] = useState(images.desktop.main);

  useEffect(() => {
    const updateImage = () => {
      const width = window.innerWidth;
      if (width < 768) setImage(images.mobile.main);
      else if (width < 1024) setImage(images.tablet.main);
      else setImage(images.desktop.main);
    };

    updateImage(); 
    window.addEventListener("resize", updateImage);

    return () => window.removeEventListener("resize", updateImage);
  }, [images]);

  return image;
}
