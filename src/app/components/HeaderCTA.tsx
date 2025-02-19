import Link from "next/link";
import { RiQuestionMark } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";

const IconButton = ({
  href,
  icon: Icon,
}: {
  href: string;
  icon: React.ComponentType<{ size: number }>;
}) => (
  <Link
    href={href}
    className="text-[#ccc] hover:text-[#fff] p-3 rounded-full border-borderThin border group hover:bg-[#ffffff1f] transition-colors"
  >
    <Icon size={20} />
  </Link>
);

const HeaderCTA = () => {
  return (
    <div className="flex-1 flex justify-end items-center gap-3">
      <IconButton href="" icon={RiQuestionMark} />
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
