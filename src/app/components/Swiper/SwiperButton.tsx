import { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

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

  useEffect(() => {
    const handleSlideChange = () => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    };

    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);

    swiper.on("slideChange", handleSlideChange);
    return () => {
      swiper.off("slideChange", handleSlideChange);
    };
  }, [swiper]);

  if (!toLeft && !toRight) return null;

  const isLeftButton = Boolean(toLeft);
  const Icon = isLeftButton ? BsChevronCompactLeft : BsChevronCompactRight;
  const opacity = isLeftButton ? (isBeginning ? 0.4 : 1) : isEnd ? 0.4 : 1;
  const handleClick = () =>
    isLeftButton ? swiper.slidePrev() : swiper.slideNext();

  return (
    <button className={className} onClick={handleClick}>
      <Icon size={60} opacity={opacity} />
    </button>
  );
};

export default SwiperButton;
