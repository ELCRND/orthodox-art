import Image from "next/image";
import Link from "next/link";
import CartLink from "./icons/CartLink";
import ProfileLink from "./icons/ProfileLink";
import WhatsAppLink from "./icons/WhatsAppLink";
import Navigation from "./navigation/Navigation";
import MenuWrapper from "./menu/MenuWrapper";

import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <Link href={"/"} className={styles.logo}>
        <Image
          src={"/logo.png"}
          alt="православное искусство"
          width={234}
          height={50}
        />
      </Link>

      <Navigation />

      <div className={styles.links}>
        <WhatsAppLink />
        <CartLink />
        <ProfileLink />
      </div>

      <MenuWrapper />
    </header>
  );
};

export default Header;
