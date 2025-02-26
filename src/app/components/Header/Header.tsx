"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import HeaderList from "./HeaderList";
import HeaderCTA from "./HeaderCTA";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const isZero = scrollY === 0;
  const hideHeader = !isZero ? "-translate-y-[100%]" : "";
  const showHeaderSticky =
    !isZero && scrollY > 400 ? "bg-[#090d17] translate-y-[0%]" : "";

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full py-2 bg-transparent z-50 ${hideHeader} ${showHeaderSticky} transition`}
    >
      <div className="container-xxxl flex items-center">
        <Link href="/" className="py-2 mr-[7px]">
          <Image src="/logo.png" alt="Slooply" width={100} height={19} />
        </Link>
        <HeaderList />
        <HeaderCTA />
      </div>
    </header>
  );
};

export default Header;
