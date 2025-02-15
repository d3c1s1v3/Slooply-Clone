import { CiMusicNote1 } from "react-icons/ci";
import { IoChevronDownOutline } from "react-icons/io5";
import { PiSliders } from "react-icons/pi";
import { CgPiano } from "react-icons/cg";

import SubMenu from "./SubMenu";

const HeaderList = () => {
  return (
    <nav>
      <ul className="flex">
        <li className="group relative">
          <button className="flex items-center gap-1 text-white py-2 px-4 group-hover:text-pink transition-text">
            <CiMusicNote1 size={24} />
            Samples
            <IoChevronDownOutline size={18} className="translate-y-[1px]" />
          </button>
          <SubMenu />
        </li>
        <li className="group relative">
          <button className="flex items-center gap-1 text-white py-2 px-4 group-hover:text-pink transition-text">
            <PiSliders size={22} />
            Presets
            <IoChevronDownOutline size={18} className="translate-y-[1px]" />
          </button>
          <SubMenu />
        </li>
        <li className="group relative">
          <button className="flex items-center gap-1 text-white py-2 px-4 group-hover:text-pink transition-text">
            <CgPiano size={18} />
            MIDI
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderList;
