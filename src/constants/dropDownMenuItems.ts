import {
  FaGift,
  FaMusic,
  FaPeopleGroup,
  FaRepeat,
  FaRocket,
  FaDrum,
  FaMicrophoneLines,
} from "react-icons/fa6";
import { IoEllipsisHorizontalCircle } from "react-icons/io5";
import { LuDiscAlbum, LuPiano } from "react-icons/lu";
import {
  PiWaveformBold,
  PiPianoKeysBold,
  PiGuitar,
  PiSliders,
} from "react-icons/pi";
import { CgPiano } from "react-icons/cg";
import { GiViolin } from "react-icons/gi";
import { TbAlertTriangleOff } from "react-icons/tb";

const EXPLORE = [
  {
    label: "All Samples",
    href: "",
    icon: FaMusic,
  },
  {
    label: "Sample Packs",
    href: "",
    icon: LuDiscAlbum,
  },
  {
    label: "Loops",
    href: "",
    icon: FaRepeat,
  },
  {
    label: "One Shots",
    href: "",
    icon: PiWaveformBold,
  },
  {
    label: "divider",
  },
  {
    label: "Providers",
    href: "",
    icon: FaPeopleGroup,
  },
  {
    label: "Collections",
    href: "",
    icon: LuDiscAlbum,
  },
  {
    label: "Free Samples",
    href: "",
    icon: FaGift,
  },
  {
    label: "Song Starters",
    href: "",
    icon: FaRocket,
  },
];

const GENRES = [
  {
    label: "Hip-Hop",
    href: "",
  },
  {
    label: "Trap",
    href: "",
  },
  {
    label: "Afro Trap",
    href: "",
  },
  {
    label: "Amapiano",
    href: "",
  },
  {
    label: "House",
    href: "",
  },
  {
    label: "Lo-Fi",
    href: "",
  },
  {
    label: "UK Drill",
    href: "",
  },
  {
    label: "Techno",
    href: "",
  },
  {
    label: "Jazz",
    href: "",
  },
  {
    label: "View All",
    href: "",
    icon: IoEllipsisHorizontalCircle,
  },
];

const INSTRUMENTS = [
  {
    label: "Drums",
    href: "",
    icon: FaDrum,
  },
  {
    label: "Piano",
    href: "",
    icon: LuPiano,
  },
  {
    label: "Keys",
    href: "",
    icon: PiPianoKeysBold,
  },
  {
    label: "Guitars",
    href: "",
    icon: PiGuitar,
  },
  {
    label: "Synth",
    href: "",
    icon: CgPiano,
  },
  {
    label: "Strings",
    href: "",
    icon: GiViolin,
  },
  {
    label: "Electric Piano",
    href: "",
    icon: CgPiano,
  },
  {
    label: "Vocals",
    href: "",
    icon: FaMicrophoneLines,
  },
  {
    label: "Percussion",
    href: "",
    icon: TbAlertTriangleOff,
  },
  {
    label: "View All",
    href: "",
    icon: IoEllipsisHorizontalCircle,
  },
];

const PRESETS = [
  {
    label: "All Presets",
    href: "",
    icon: PiSliders,
  },
  {
    label: "Presets For Serum",
    href: "",
    icon: PiSliders,
  },
  {
    label: "Presets For Sylenth",
    href: "",
    icon: PiSliders,
  },
  {
    label: "Presets For Vital",
    href: "",
    icon: PiSliders,
  },
];

export { EXPLORE, GENRES, INSTRUMENTS, PRESETS };
