import Image from "next/image";
import Link from "next/link";
import { RefObject } from "react";

import styles from "./production.module.css";

const Production = ({ ref }: { ref: RefObject<HTMLDivElement> }) => {
  return (
    <div className={styles.container} ref={ref}>
      <Image
        src={"/main/hero/home-bg-left.png"}
        alt="Production"
        fill={true}
        sizes="100%"
        draggable={false}
        className={styles.bg}
        priority={true}
        loading="eager"
        fetchPriority="high"
      />
      <Link href={"/about"} className={styles.link}>
        ПРОИЗВОДСТВО
      </Link>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod
        bibendum laoreet.
      </p>
    </div>
  );
};
export default Production;
