import Link from "next/link";
import { GoDotFill } from "react-icons/go";
import { IconType } from "react-icons";

type Item = {
  label: string;
  href?: string;
  icon?: IconType;
};

type DropdownProps = {
  title?: string;
  icon: IconType;
  items: Item[];
  className?: string;
};

const DropdownSection = ({
  title,
  icon: Icon,
  items,
  className,
}: DropdownProps) => {
  return (
    <div>
      {title && (
        <button className="flex items-center text-[#fff] font-bold gap-2 px-4 mb-2">
          <Icon
            size={title === "Genres" ? 20 : title === "Instruments" ? 22 : 18}
          />
          {title}
        </button>
      )}
      <ul className={`min-w-[224px] ${className}`}>
        {items.map(({ label, href, icon }) => {
          if (label === "divider")
            return (
              <div
                className="h-[1px] bg-borderThin w-full my-2 pointer-events-none select-none"
                key={label}
              />
            );
          return (
            <li
              key={label}
              className="text-white transition-colors hover:bg-linkHover rounded-md hover:text-[#fff]"
            >
              <Link
                href={href || "#"}
                className="text-[14px] py-2 w-full h-full flex items-center gap-2 px-4"
              >
                {icon ? <span>{icon({})}</span> : <GoDotFill size={18} />}
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DropdownSection;
