import Hero from "./hero/Hero";
import CatalogLinks from "./catalogLinks/CatalogLinks";
import BannerSlider from "./bannerSlider/BannerSlider";
import AboutMaster from "./aboutMaster/AboutMaster";
import Feedback from "./feedback/Feedback";
import Contacts from "./contacts/Contacts";
import Life from "./life/Life";

const Home = () => {
  return (
    <div>
      <Hero />
      <CatalogLinks />
      <BannerSlider />
      <AboutMaster />
      <Feedback />
      <Contacts />
      <Life />
    </div>
  );
};

export default Home;
