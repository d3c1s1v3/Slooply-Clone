import Banner from "./components/Banner/Banner";
import SwiperSection from "./components/Swiper/SwiperSection";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <SwiperSection
        heading="Featured products!"
        subheading="Explore popular and handpicked loops and midi files!"
      />
      <SwiperSection
        heading="Check what's new"
        subheading="Find the perfect sound for your next music project!"
      />
    </div>
  );
}
