"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import SwiperButton from "./SwiperButton";
import SwiperCard from "./SwiperCard";

type SwiperSectionProps = {
  heading: string;
  subheading: string;
  soundCount?: number;
  featured?: boolean;
};

const SwiperSection = ({
  heading,
  subheading,
  featured,
  soundCount = 100,
}: SwiperSectionProps) => {
  const handleCardClick = (index: number) =>
    console.log(`Slide ${index + 1} clicked.`);
  return (
    <div className="container-xxxl mx-auto mb-24">
      <h3 className="text-[28px] text-[#fff] font-bold mb-1">{heading}</h3>
      <p className="text-[#ffffffb2] mb-2">{subheading}</p>

      <Swiper slidesPerView={8} className="h-[215px]" spaceBetween={10}>
        {[...Array(16)].map((_, i) => (
          <SwiperSlide
            key={i}
            className="cursor-pointer bg-gray-500/20 rounded-md"
          >
            <SwiperCard
              index={i}
              featured={featured}
              soundCount={soundCount}
              onClick={handleCardClick}
            />
          </SwiperSlide>
        ))}
        <SwiperButton
          className="text-white z-10 absolute top-[50%] -translate-y-[50%] -left-3"
          toLeft
        />
        <SwiperButton
          className="text-white z-10 absolute top-[50%] -translate-y-[50%] -right-3"
          toRight
        />
      </Swiper>
    </div>
  );
};

export default SwiperSection;
