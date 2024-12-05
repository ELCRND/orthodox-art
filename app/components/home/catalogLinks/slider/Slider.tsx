"use client";
import Image from "next/image";
import { useSlider } from "@/app/hooks/useSlider";

import styles from "./slider.module.css";

const Slider = () => {
  const { ref, indicatorNum } = useSlider("x", 2000, 500);

  return (
    <div className={styles.container}>
      <ul ref={ref} className={styles.container}>
        <li>
          <Image
            src={"/main/catalog/slider-1.jpg"}
            alt="bracelet"
            fill={true}
            sizes="100%"
          />
        </li>
        <li>
          <Image
            src={"/main/catalog/slider-2.png"}
            alt="cross"
            fill={true}
            sizes="100%"
          />
        </li>
        <li>
          <Image
            src={"/main/catalog/slider-3.jpg"}
            alt="bracelet and cross"
            fill={true}
            sizes="100%"
          />
        </li>
      </ul>
      <div className={styles.indacators}>
        {[0, 0, 0].map((_, idx) => (
          <span
            key={idx}
            className={`${indicatorNum == idx && styles.active}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
