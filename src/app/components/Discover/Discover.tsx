import { IoArrowDownCircleOutline } from "react-icons/io5";
import DiscoverNavbar from "./DiscoverNavbar";

const Discover = () => {
  return (
    <section className="container-xxxl">
      <div className="container-xxxl mx-auto">
        <h3 className="text-[28px] text-[#fff] font-bold mb-1">
          Discover new sounds
        </h3>
        <div className="flex items-center justify-between">
          <p className="text-[#ffffffb2] mb-2 flex-1">
            Dig into a range of instruments and genres with the freshest sounds
            on slooply
          </p>
          <small className="flex items-center text-[#ffffff80] text-[14px] gap-1">
            Press down key to audition{" "}
            <IoArrowDownCircleOutline size={18} className="translate-y-[1px]" />
          </small>
          <div className="flex-1"></div>
        </div>
      </div>
      <DiscoverNavbar />
    </section>
  );
};

export default Discover;
