"use client";

import BreadCrumbs from "@/app/components/breadCrumbs/BreadCrumbs";

import styles from "./hero.module.css";

const Hero = () => {
  return (
    <div className={styles.container}>
      <h2>Каталог</h2>
      <BreadCrumbs />
    </div>
  );
};

export default Hero;
