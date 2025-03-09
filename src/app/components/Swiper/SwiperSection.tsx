"use client";

import { useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { IoEllipsisHorizontalCircleOutline } from "react-icons/io5";
import { PiWaveformBold } from "react-icons/pi";
import { FaPlay } from "react-icons/fa";
import "swiper/css";

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

type Props = {
  heading: string;
  subheading: string;
  soundCount?: number;
  featured?: boolean;
};

const SwiperSection = ({ heading, subheading, featured }: Props) => {
  return (
    <div className="container-xxxl mx-auto mb-24">
      <h3 className="text-[28px] text-[#fff] font-bold mb-1">{heading}</h3>
      <p className="text-[#ffffffb2] mb-2">{subheading}</p>

      <Swiper slidesPerView={8} className="h-[215px]" spaceBetween={10}>
        {[...Array(16)].map((_, i) => (
          <SwiperSlide
            key={i}
            className="cursor-pointer bg-gray-500/20 rounded-md"
            onClick={() => console.log(`Slide ${i + 1} clicked.`)}
          >
            <div className="text-[#fff] flex items-center h-full justify-center text-center relative group">
              <div className="absolute top-2 left-2 flex gap-2 items-center">
                {featured && (
                  <div className="bg-[#0a0e18] text-xs px-2 rounded-xl">
                    Featured
                  </div>
                )}
                <div className="bg-[#0a0e18] flex items-center gap-2 px-2 rounded-xl">
                  <PiWaveformBold size={13} />
                  <span className="text-xs">100</span>
                </div>
              </div>
              <span className="opacity-35">
                Image
                <br />
                Placeholder
              </span>
              {/* overlay */}
              <div className="absolute w-full h-full hidden group-hover:block group-hover:bg-black/20">
                <FaPlay
                  className="absolute inset-2/4 -translate-x-[50%] -translate-y-[50%]"
                  size={30}
                />
                <IoEllipsisHorizontalCircleOutline
                  size={35}
                  className="absolute bottom-3 right-3"
                />
              </div>
            </div>
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
    </div>
  );
};

export default SwiperSection;
