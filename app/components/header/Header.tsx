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

const routes = [
  { path: "/about", text: "Мастер" },
  { path: "/catalog", text: "Каталог" },
  { path: "/#life", text: "Life" },
  { path: "/#contacts", text: "Контакты" },
];

const Header = () => {
  const [opeMenu, setOpenMenu] = useState(false);
  const handler = () => setOpenMenu((p) => !p);
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
        <Navigation routes={routes} />
      </div>

      <div className={styles.links}>
        <WhatsAppLink />
        <CartLink />
        <ProfileLink />
      </div>

      <Menu isOpen={opeMenu} handler={handler} routes={routes} />
      <MenuBtn handler={handler} />
    </header>
  );
};

export default Header;
