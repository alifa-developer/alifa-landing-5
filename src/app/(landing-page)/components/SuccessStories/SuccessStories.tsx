"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.css";

import { SuccessStory } from "../../types";
import SuccessStorySlide from "./SuccessStorySlide";

interface Props {
  successStories: SuccessStory[];
}

const SuccessStories = ({ successStories }: Props) => {
  return (
    <section className="relative w-full">
      <div className="relative w-full">
        <Swiper
          modules={[Pagination, Navigation]}
          pagination={{  clickable: true }}
          navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
          loop
          className="w-full"
        >
          {successStories.map((story, idx) => (
            <SwiperSlide key={idx}>
              <SuccessStorySlide story={story} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination */}
        {/* <div className="custom-pagination absolute bottom-[98px] left-[53%] -translate-x-1/2 z-20 flex justify-center items-center"></div> */}
      </div>
    </section>
  );
};

export default SuccessStories;
