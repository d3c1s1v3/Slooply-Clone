import BannerSearch from "./BannerSearch";

const Banner = () => {
  return (
    <div className="h-screen w-screen banner">
      <div className="max-w-fit h-[60%] mx-auto flex flex-col items-center justify-center ">
        <h1 className="text-5xl text-[#fff] font-extrabold mb-2">
          Find The Sounds You Need!
        </h1>
        <h2 className="text-2xl text-[#fff] font-extrabold mb-8">
          Royalty-free Samples, Presets, FX and MIDI
        </h2>
        <BannerSearch />
      </div>
    </div>
  );
};

export default Banner;
