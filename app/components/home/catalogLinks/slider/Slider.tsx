"use client";
import Image from "next/image";
import { useSlider } from "@/app/hooks/useSlider";

import styles from "./slider.module.css";

const Slider = () => {
  const { slideIdex, setSlideIndex } = useSlider(3, 2000, 8000);

  return (
    <div className={styles.container}>
      <ul
        style={{
          translate: `-${slideIdex * 100}% 0`,
          transition: `${slideIdex ? "translate 600ms ease" : "none"}`,
        }}
      >
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
          <button
            onClick={() => setSlideIndex(idx)}
            key={idx}
            className={`${slideIdex === idx && styles.active}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
