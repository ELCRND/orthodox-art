import Links from "./links/Links";
import Navigation from "./navigation/Navigation";
import Socials from "./socials/Socials";

import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <Navigation />
      <Links />
      <Socials />
    </div>
  );
};

export default Footer;
