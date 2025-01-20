"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import CartLink from "./icons/CartLink";
import ProfileLink from "./icons/ProfileLink";
import WhatsAppLink from "./icons/WhatsAppLink";
import Navigation from "./navigation/Navigation";
import Menu from "./menu/Menu";
import MenuBtn from "./menuBtn/MenuBtn";

import styles from "./header.module.css";

const Header = () => {
  const [state, setState] = useState(false);
  const handler = () => setState((p) => !p);
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

      <Menu isOpen={state} handler={handler} />
      <MenuBtn handler={handler} />
    </header>
  );
};

export default Header;
