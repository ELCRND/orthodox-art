import Icons from "../icons/Icons";
import Bracelets from "./bracelets/Bracelets";
import Chains from "./chains/Chains";
import Crosses from "./crosses/Crosses";
import Hero from "./hero/Hero";
import Pendants from "./pendants/Pendants";

import styles from "./catalog.module.css";

const Catalog = () => {
  return (
    <div>
      <Hero />
      <Crosses />
      <Pendants />
      <Bracelets />
      <Chains />
      <div className={styles.wrapper}>
        <Icons />
      </div>
    </div>
  );
};

export default Catalog;
