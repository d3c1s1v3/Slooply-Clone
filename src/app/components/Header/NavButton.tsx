import { IconType } from "react-icons";
import { IoChevronDownOutline } from "react-icons/io5";

type Props = {
  icon: IconType;
  text: string;
  hasDropdown?: boolean;
  size?: number;
};

const NavButton = ({ icon: Icon, text, hasDropdown, size = 24 }: Props) => {
  return (
    <button className="flex items-center gap-1 text-white py-2 px-4 group-hover:text-pink transition-text">
      <Icon size={size} />
      {text}
      {hasDropdown && (
        <IoChevronDownOutline size={18} className="translate-y-[1px]" />
      )}
    </button>
  );
};

export default NavButton;
