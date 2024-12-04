import Hero from "./hero/Hero";
import CatalogLinks from "./catalogLinks/CatalogLinks";
import BannerSlider from "./bannerSlider/BannerSlider";
import AboutMaster from "./aboutMaster/AboutMaster";

const Home = () => {
  return (
    <div>
      <Hero />
      <CatalogLinks />
      <BannerSlider />
      <AboutMaster />
    </div>
  );
};

export default Home;
