import { CiMusicNote1 } from "react-icons/ci";
import { CgPiano } from "react-icons/cg";
import { FaRegCompass } from "react-icons/fa";
import { PiSliders } from "react-icons/pi";
import { RiNeteaseCloudMusicLine } from "react-icons/ri";
import { GiViolin } from "react-icons/gi";

import DropdownSection from "./DropdownSection";
import NavButton from "./NavButton";
import {
  EXPLORE,
  GENRES,
  INSTRUMENTS,
  PRESETS,
} from "@/constants/dropDownMenuItems";

const HeaderList = () => {
  return (
    <nav>
      <ul className="flex">
        <li className="group relative">
          <NavButton icon={CiMusicNote1} text="Samples" hasDropdown />
          <div className="absolute scale-0 group-hover:scale-100 group-hover:duration-100 w-fit origin-center ease-out border border-borderThin rounded-lg py-4 px-4 bg-[#141822] flex gap-2">
            <DropdownSection
              title="Explore"
              icon={FaRegCompass}
              items={EXPLORE}
              className=""
            />
            <DropdownSection
              title="Genres"
              icon={RiNeteaseCloudMusicLine}
              items={GENRES}
              className=""
            />
            <DropdownSection
              title="Instruments"
              icon={GiViolin}
              items={INSTRUMENTS}
              className=""
            />
          </div>
        </li>
        <li className="group relative">
          <NavButton icon={PiSliders} text="Presets" hasDropdown size={22} />
          <div className="absolute scale-0 group-hover:scale-100 group-hover:duration-100 w-fit origin-center ease-out border border-borderThin rounded-lg bg-[#141822] flex">
            <DropdownSection icon={PiSliders} items={PRESETS} className="p-2" />
          </div>
        </li>
        <li className="group relative">
          <NavButton icon={CgPiano} text="MIDI" size={18} />
        </li>
      </ul>
    </nav>
  );
};

export default HeaderList;
