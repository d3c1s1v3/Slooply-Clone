import Link from "next/link";
import { RiQuestionMark } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";

const IconButton = ({
  href,
  icon: Icon,
  className,
}: {
  href: string;
  icon: React.ComponentType<{ size: number }>;
  className?: string;
}) => (
  <Link
    href={href}
    className={`text-[#ccc] hover:text-[#fff] p-3 rounded-full border-borderThin border group hover:bg-[#ffffff1f] transition-colors ${className}`}
  >
    <Icon size={20} />
  </Link>
);

const HeaderCTA = () => {
  return (
    <div className="flex-1 flex justify-end items-center gap-3">
      <IconButton
        href=""
        icon={RiQuestionMark}
        className="relative before:hidden before:content-['How_it_works?'] before:text-xs hover:before:flex before:items-center before:justify-center before:w-[150px] before:absolute before:-bottom-8 before:-translate-x-[40%] w-auto before:h-6 before:bg-black before:rounded-md"
      />
      <IconButton href="/search" icon={IoSearchOutline} />
      <button className="p-3 rounded-full border-borderThin border hover:bg-[#ffffff1f] text-[#ffffffd9] text-base px-5 py-2 font-semibold hover:text-[#fff] transition-colors">
        Login
      </button>
      <Link
        href="/signup"
        className="bg-pink hover:bg-[#c8174c] p-3 rounded-full border-borderThin border text-[#ffffffd9] text-base px-5 py-2 font-semibold transition-colors"
      >
        Try Free
      </Link>
    </div>
  );
};

export default HeaderCTA;
