"use client";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";

const SwiperSection = () => {
  const swiper = useSwiper();

  return (
    <div className="container-xxxl mx-auto mb-12">
      <h3 className="text-[28px] text-[#fff] font-bold mb-1">
        Featured products!
      </h3>
      <p className="text-[#ffffffb2]">
        Explore popular and handpicked loops and midi files!
      </p>
      <div className="px-2">
        <Swiper
          slidesPerView={8}
          className="h-[215px] mt-2"
          spaceBetween={10}
          navigation
        >
          {[...Array(16)].map((_, i) => (
            <SwiperSlide
              key={i}
              className="cursor-pointer bg-gray-500 rounded-md"
              onClick={() => console.log(`Slide ${i + 1} clicked.`)}
            >
              Slide {i + 1}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperSection;
