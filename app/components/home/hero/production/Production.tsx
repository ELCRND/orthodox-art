import { forwardRef, LegacyRef } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./production.module.css";

const Production = forwardRef(
  (_, ref: LegacyRef<HTMLDivElement> | undefined) => {
    return (
      <div className={styles.container} ref={ref}>
        <Image
          src={"/main/hero/home-bg-left.png"}
          alt="Production"
          fill={true}
          sizes="100%"
          draggable={false}
          className={styles.bg}
        />
        <Link href={"/about"} className={styles.link}>
          ПРОИЗВОДСТВО
        </Link>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          euismod bibendum laoreet.
        </p>
      </div>
    );
  }
);

export default Production;
