import { SCROLLING_LINKS } from "@/constants/navigation";
import Link from "next/link";

const ScrollingButtons = () => {
  return (
    <div className="translate-y-32 mt-20 flex justify-evenly w-[1776px] mx-auto">
      {SCROLLING_LINKS.map((link) => (
        <Link
          href={link.href}
          key={link.label}
          className="bg-[#ffffff0a] py-2 pl-2 pr-8 rounded-full flex items-center gap-2 hover:shadow-[inset_0_0_0_1px_#ffffff24]"
        >
          <div className="bg-white/10 hover:bg-white/20 p-4 transition rounded-full border border-borderThin text-3xl">
            {link.icon({})}
          </div>
          <h3>{link.label}</h3>
        </Link>
      ))}
    </div>
  );
};

export default ScrollingButtons;
