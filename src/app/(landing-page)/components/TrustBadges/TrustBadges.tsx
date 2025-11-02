"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { TrustBadge } from "../../types";
import { useEffect, useState } from "react";

interface TrustBadgesProps {
  trustBadges: TrustBadge[];
}

const TrustBadges: React.FC<TrustBadgesProps> = ({ trustBadges }) => {

  const validBadges = trustBadges.filter(
    (b) => b && (b.desktop || b.tablet || b.mobile)
  );

  const [screen, setScreen] = useState<"mobile" | "tablet" | "desktop">("desktop");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setScreen("mobile");
      else if (window.innerWidth < 1024) setScreen("tablet");
      else setScreen("desktop");
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="max-w-[1920px] mx-auto w-full bg-white py-6 lg:py-[60px] px-4 md:px-12 lg:px-[150px]">
      <div className="mx-auto flex flex-col lg:flex-row items-center gap-6">
        <span className="font-medium text-heading-3-mb lg:text-heading-3 text-black whitespace-nowrap">
          Trust badges:
        </span>

        <Swiper
          modules={[Autoplay]}
          slidesPerView={"auto"}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 10,
            disableOnInteraction: false,
          }}
          speed={4000}
          breakpoints={{
            0: { spaceBetween: 44 },
            1024: { spaceBetween: 104 },
          }}
          className="flex-1"
        >
          {validBadges.map((badge, idx) => {

            const imageSrc =
              screen === "mobile"
                ? badge.mobile
                : screen === "tablet"
                ? badge.tablet
                : badge.desktop;

            if (!imageSrc) return null;

            return (
              <SwiperSlide
                key={idx}
                className="!w-auto flex items-center justify-center"
              >
                <div className="flex items-center justify-center h-[40px] md:h-[50px] lg:h-[60px]">
                  <Image
                    src={imageSrc}
                    alt={badge.title || "Trust Badge"}
                    height={50}
                    width={145}
                    className="h-full w-auto object-contain"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default TrustBadges;
