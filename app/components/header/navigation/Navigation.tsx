import Link from "next/link";

import styles from "./navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.container}>
      <ul>
        <li>
          <Link href={"/about"}>Мастер</Link>
        </li>
        <li>
          <Link href={"/catalog"}>Каталог</Link>
        </li>
        <li>
          <Link href={"/#life"}>Life</Link>
        </li>
        <li>
          <Link href={"/#contacts"}>Контакты</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
