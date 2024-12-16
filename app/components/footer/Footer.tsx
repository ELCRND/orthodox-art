import styles from "./footer.module.css";
import Links from "./links/Links";
import Navigation from "./navigation/Navigation";
import Socials from "./socials/Socials";

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
