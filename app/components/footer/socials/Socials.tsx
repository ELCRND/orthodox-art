import Link from "next/link";

import styles from "./socials.module.css";
import Image from "next/image";

const Socials = () => {
  return (
    <ul className={styles.container}>
      <li>
        <Link href={"tel:+7999806548"}>+7 (999) 808 65 48</Link>
      </li>

      <li>
        <span>Пн-пт: с 10:00 до 19:00 ч</span>
      </li>

      <li>
        <ul>
          <li>
            <Link href={"/"}>
              <Image
                src={"/footer/fb.svg"}
                alt="facebook"
                width={20}
                height={20}
              />
            </Link>
          </li>

          <li>
            <Link href={"/"}>
              <Image
                src={"/footer/inst.svg"}
                alt="facebook"
                width={20}
                height={20}
              />
            </Link>
          </li>

          <li>
            <Link href={"/"}>
              <Image
                src={"/footer/vk.svg"}
                alt="facebook"
                width={20}
                height={20}
              />
            </Link>
          </li>
        </ul>
      </li>

      <li>
        <span>© 2020 Дмитрий Федоров</span>
      </li>
    </ul>
  );
};

export default Socials;
