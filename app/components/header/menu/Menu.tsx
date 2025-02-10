import Link from "next/link";

import CartLink from "../icons/CartLink";
import ProfileLink from "../icons/ProfileLink";
import WhatsAppLink from "../icons/WhatsAppLink";

import styles from "./menu.module.css";

type Props = {
  isOpen: boolean;
  handler: () => void;
  routes: { path: string; text: string }[];
};

const Menu = ({ isOpen, handler, routes }: Props) => {
  return (
    <div className={`${styles.container} ${isOpen && styles.open}`}>
      <ul className={styles.navigation}>
        {routes.map((r) => (
          <li key={r.path}>
            <Link href={r.path} onClick={() => handler()}>
              {r.text}
            </Link>
          </li>
        ))}
      </ul>

      <div className={styles.links}>
        <CartLink handler={handler} />
        <ProfileLink handler={handler} />
      </div>

      <div className={styles.whatsApp}>
        <WhatsAppLink />
      </div>
    </div>
  );
};

export default Menu;
