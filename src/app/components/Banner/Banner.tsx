import BannerSearch from "./BannerSearch";
import ScrollingButtons from "./ScrollingButtons";

const Banner = () => {
  return (
    <div className="w-screen h-[800px] pt-[62px] banner flex items-center shadow-search-inset">
      <div className="mx-auto text-center text-[#fff]">
        <h1 className="text-5xl font-extrabold mb-4">
          Find The Sounds You Need!
        </h1>
        <h2 className="text-2xl font-semibold mb-8">
          Royalty-free Samples, Presets, FX and MIDI
        </h2>
        <BannerSearch />
        <ScrollingButtons />
      </div>
    </div>
  );
};

export default Banner;
