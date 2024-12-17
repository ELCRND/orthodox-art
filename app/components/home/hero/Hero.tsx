"use client";
import { useEffect, useRef, useState } from "react";
import Production from "./production/Production";
import Products from "./products/Products";

import styles from "./hero.module.css";

const Hero = () => {
  const [state, setState] = useState<"left" | "right">("left");
  const productionRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const r1 = productionRef.current;
    const r2 = productsRef.current;
    const observer = new IntersectionObserver(
      ([entry]) =>
        entry.target === productionRef.current
          ? setState("left")
          : setState("right"),
      {
        root: null,
        rootMargin: "0px",
        threshold: 1,
      }
    );

    if (productionRef.current) {
      observer.observe(productionRef.current);
    }
    if (productsRef.current) {
      observer.observe(productsRef.current);
    }

    return () => {
      if (r1) observer.unobserve(r1);
      if (r2) observer.unobserve(r2);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Production ref={productionRef} />
        <Products ref={productsRef} />
      </div>

      <div className={styles.slideIndicators}>
        <span className={`${state === "left" ? styles.active : ""}`}></span>
        <span className={`${state === "right" ? styles.active : ""}`}></span>
      </div>
    </div>
  );
};

export default Hero;
