import Image from "next/image";
import Link from "next/link";
import HeaderList from "./HeaderList";

const Header = () => {
  return (
    <header className="dark1 py-2 bg-transparent">
      <div className="container-main flex items-center">
        <Link href="/" className="py-2 mr-[7px]">
          <Image src="/logo.png" alt="Slooply" width={100} height={19} />
        </Link>
        <HeaderList />
      </div>
    </header>
  );
};

export default Header;
