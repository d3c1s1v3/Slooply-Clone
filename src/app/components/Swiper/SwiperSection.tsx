"use client";

import { useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const SwiperButton = ({
  className,
  toLeft,
  toRight,
}: {
  className: string;
  toLeft?: boolean;
  toRight?: boolean;
}) => {
  const swiper = useSwiper();

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  swiper.on("slideChange", () => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  });

  return (
    <>
      {toLeft && (
        <button className={className} onClick={() => swiper.slidePrev()}>
          <BsChevronCompactLeft size={60} opacity={isBeginning ? 0.4 : 1} />
        </button>
      )}
      {toRight && (
        <button className={className} onClick={() => swiper.slideNext()}>
          <BsChevronCompactRight size={60} opacity={isEnd ? 0.4 : 1} />
        </button>
      )}
    </>
  );
};

const SwiperSection = () => {
  return (
    <div className="container-xxxl mx-auto mb-12">
      <h3 className="text-[28px] text-[#fff] font-bold mb-1">
        Featured products!
      </h3>
      <p className="text-[#ffffffb2]">
        Explore popular and handpicked loops and midi files!
      </p>
      <div className="relative">
        <Swiper
          modules={[Pagination]}
          pagination={{
            dynamicBullets: true,
            el: ".swiper-pagination",
            clickable: true,
          }}
          slidesPerView={8}
          className="h-[215px] mt-2 relative"
          spaceBetween={10}
        >
          {[...Array(16)].map((_, i) => (
            <SwiperSlide
              key={i}
              className="cursor-pointer bg-gray-500/20 rounded-md"
              onClick={() => console.log(`Slide ${i + 1} clicked.`)}
            >
              <div className="text-[#fff] flex items-center h-full justify-center text-center relative">
                Image
                <br />
                Placeholder
              </div>
              <div></div>
            </SwiperSlide>
          ))}
          <SwiperButton
            className="text-white z-10 absolute top-[50%] -translate-y-[50%] -left-3"
            toLeft
          ></SwiperButton>
          <SwiperButton
            className="text-white z-10 absolute top-[50%] -translate-y-[50%] -right-3"
            toRight
          ></SwiperButton>
        </Swiper>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default SwiperSection;
