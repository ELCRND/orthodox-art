"use client";
import Link from "next/link";

import styles from "./navigation.module.css";

const Navigation = () => {
  return (
    <ul className={styles.container}>
      <li>
        <Link href={"/about"}>Мастер</Link>
      </li>
      <li>
        <Link href={"/catalog"}>Каталог</Link>
      </li>
      <li>
        <Link href={"/#contacts"}>Контакты</Link>
      </li>
      <li>
        <Link href={"/#life"}>LIFE</Link>
      </li>
    </ul>
  );
};

export default Navigation;
