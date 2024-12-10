import Link from "next/link";

import styles from "./links.module.css";

const Links = () => {
  return (
    <ul className={styles.container}>
      <li>
        <Link href={"/"}>Гарантия</Link>
      </li>
      <li>
        <Link href={"/"}>Сертификаты</Link>
      </li>
      <li>
        <Link href={"/"}>Карта сайта</Link>
      </li>
      <li>
        <Link href={"/"}>Подписка на новости</Link>
      </li>
    </ul>
  );
};

export default Links;
