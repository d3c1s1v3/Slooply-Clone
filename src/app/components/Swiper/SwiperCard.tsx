import { IoEllipsisHorizontalCircleOutline } from "react-icons/io5";
import { PiWaveformBold } from "react-icons/pi";
import { FaPlay } from "react-icons/fa";

const Badge = ({ children }: { children: React.ReactNode }) => {
  <div className="bg-[#0a0e18] text-xs px-2 rounded-xl flex items-center gap-2">
    {children}
  </div>;
};

type SwiperCardProps = {
  index: number;
  featured?: boolean;
  soundCount?: number;
  onClick: (index: number) => void;
};

const SwiperCard = ({
  index,
  featured,
  soundCount = 100,
  onClick,
}: SwiperCardProps) => {
  return (
    <div
      className="cursor-pointer bg-gray-500/20 rounded-md h-full"
      onClick={() => onClick(index)}
    >
      <div className="text-white flex items-center h-full justify-center text-center relative group">
        <div className="absolute top-2 left-2 flex gap-2 items-center">
          {featured && (
            <div className="bg-[#0a0e18] text-xs px-2 rounded-xl">Featured</div>
          )}
          <div className="bg-[#0a0e18] flex items-center gap-2 px-2 rounded-xl">
            <PiWaveformBold size={13} />
            <span className="text-xs">{soundCount}</span>
          </div>
        </div>

        <span className="opacity-35">
          Image
          <br />
          Placeholder
        </span>

        <div className="absolute inset-0 hidden group-hover:block group-hover:bg-black/20">
          <FaPlay
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            size={30}
          />
          <IoEllipsisHorizontalCircleOutline
            size={35}
            className="absolute bottom-3 right-3"
          />
        </div>
      </div>
    </div>
  );
};

export default SwiperCard;
