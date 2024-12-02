import Bracelets from "./bracelets/Bracelets";
import styles from "./catalogLinks.module.css";
import Chains from "./chains/Chains";
import Crosses from "./crosses/Crosses";
import LargeProductCard from "./largeProductCard/LargeProductCard";
import Pendants from "./pendants/Pendants";
import Slider from "./slider/Slider";
import SmallProductCard from "./smallProductCard/SmallProductCard";

const CatalogLinks = () => {
  return (
    <div className={styles.container}>
      <LargeProductCard />
      <Crosses />
      <Bracelets />
      <Pendants />
      <Chains />
      <Slider />
      <SmallProductCard />
    </div>
  );
};

export default CatalogLinks;
