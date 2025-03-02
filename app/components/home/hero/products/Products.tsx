import { RefObject } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./products.module.css";

const Products = ({ ref }: { ref: RefObject<HTMLDivElement> }) => {
  return (
    <div className={styles.container} ref={ref}>
      <Image
        src={"/main/hero/home-bg-right.jpg"}
        alt="Products"
        fill={true}
        sizes="100%"
        draggable={false}
        className={styles.bg}
        priority={true}
        loading="eager"
        fetchPriority="high"
      />
      <Link href={"/catalog"} className={styles.link}>
        Изделия
      </Link>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod
        bibendum laoreet.
      </p>
    </div>
  );
};

export default Products;
