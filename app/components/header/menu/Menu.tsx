import Link from "next/link";
import CartLink from "../icons/CartLink";
import ProfileLink from "../icons/ProfileLink";
import WhatsAppLink from "../icons/WhatsAppLink";

import styles from "./menu.module.css";

const Menu = ({
  isOpen,
  handler,
}: {
  isOpen: boolean;
  handler: () => void;
}) => {
  return (
    <div className={`${styles.container} ${isOpen && styles.open}`}>
      <ul className={styles.navigation}>
        <li>
          <Link href={"/about"} onClick={() => handler()}>
            Мастер
          </Link>
        </li>
        <li>
          <Link href={"/catalog"} onClick={() => handler()}>
            Каталог
          </Link>
        </li>
        <li>
          <Link href={"/#life"} onClick={() => handler()}>
            Life
          </Link>
        </li>
        <li>
          <Link href={"/#contacts"} onClick={() => handler()}>
            Контакты
          </Link>
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
