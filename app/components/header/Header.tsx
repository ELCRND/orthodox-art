"use client";

import Image from "next/image";
import Link from "next/link";
import CartLink from "./icons/CartLink";
import ProfileLink from "./icons/ProfileLink";
import WhatsAppLink from "./icons/WhatsAppLink";
import Navigation from "./navigation/Navigation";
import MenuWrapper from "./menu/MenuWrapper";

import styles from "./header.module.css";
import { usePathname } from "next/navigation";

const Header = () => {
  const isHome = usePathname() === "/";
  return (
    <header className={`${styles.container} ${isHome ? styles.isHome : ""}`}>
      <Link href={"/"} className={styles.logo}>
        <Image
          src={isHome ? "/logo.png" : "/logo-black.png"}
          alt="православное искусство"
          width={234}
          height={50}
        />
      </Link>

      <div className={styles.navigation}>
        <Navigation />
      </div>

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
