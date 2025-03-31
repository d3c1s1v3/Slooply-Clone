import Link from "next/link";
import { GoDotFill } from "react-icons/go";
import { IconType } from "react-icons";

type DropdownProps = {
  title?: string;
  icon: IconType;
  items: Item[];
  className?: string;
};

type DropdownItemProps = {
  item: Item;
};

type Item = {
  label: string;
  href?: string;
  icon?: IconType;
  isDivider?: boolean;
};

const DropdownItem = ({ item }: DropdownItemProps) => {
  const { label, href, icon: ItemIcon, isDivider } = item;

  if (label === "divider" || isDivider) {
    return (
      <div
        className="h-[1px] bg-borderThin w-full my-2 pointer-events-none select-none"
        key={label}
      />
    );
  }

  return (
    <li className="text-white transition-colors hover:bg-linkHover rounded-md hover:text-white">
      <Link
        href={href || "#"}
        className="text-[14px] py-2 w-full h-full flex items-center gap-2 px-4"
      >
        {ItemIcon ? <ItemIcon /> : <GoDotFill size={18} />}
        {label}
      </Link>
    </li>
  );
};

const DropdownSection = ({
  title,
  icon: Icon,
  items,
  className = "",
}: DropdownProps) => {
  const getIconSize = () => {
    switch (title) {
      case "Genres":
        return 20;
      case "Instruments":
        return 22;
      default:
        return 18;
    }
  };
  return (
    <div>
      {title && (
        <button className="flex items-center text-[#fff] font-bold gap-2 px-4 mb-2">
          <Icon size={getIconSize()} />
          {title}
        </button>
      )}
      <ul className={`min-w-[224px] ${className}`}>
        {items.map((item) => (
          <DropdownItem key={item.label} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default DropdownSection;
