"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import HeaderList from "./HeaderList";
import HeaderCTA from "./HeaderCTA";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  let headerClasses = "bg-transparent";

  if (scrollY > 0 && scrollY <= 400) {
    headerClasses = "bg-transparent -translate-y-[100%]";
  } else if (scrollY > 400) {
    headerClasses = "bg-dark2 translate-y-0";
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full py-2 z-50 ${headerClasses} transition duration-300 header`}
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
