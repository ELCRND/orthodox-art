import Link from "next/link";
import CartLink from "../icons/CartLink";
import ProfileLink from "../icons/ProfileLink";
import WhatsAppLink from "../icons/WhatsAppLink";

import styles from "./menu.module.css";

const Menu = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className={`${styles.container} ${isOpen && styles.open}`}>
      <ul className={styles.navigation}>
        <li>
          <Link href={"/about"}>Мастер</Link>
        </li>
        <li>
          <Link href={"/catalog"}>Каталог</Link>
        </li>
        <li>
          <Link href={"#life"}>Life</Link>
        </li>
        <li>
          <Link href={"#contacts"}>Контакты</Link>
        </li>
      </ul>

      <div className={styles.links}>
        <CartLink />
        <ProfileLink />
      </div>

      <div className={styles.whatsApp}>
        <WhatsAppLink />
      </div>
    </div>
  );
};

export default Menu;
