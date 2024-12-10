"use client";
import { useSlider } from "@/app/hooks/useSlider";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Video from "./video/Video";

import styles from "./life.module.css";

const Life = () => {
  // const [isAutoPlay,setIsAutoPlay] =  useState(false)
  const [isWindowWide, setIsWindowWide] = useState<boolean | null>(true);
  const { slideIdex, toPrev, toNext, setSlideIndex, toggleAutoSlide } =
    useSlider(6, isWindowWide ? 5000 : 0, 5000);
  const [isLast, setIsLast] = useState(false);
  const ref = useRef<any>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        entry.isIntersecting ? setIsLast(true) : setIsLast(false);
      },
      { threshold: 1.0 }
    );
    observer.observe(ref.current.lastChild);
    return () =>
      ref.current?.lastChild && observer.unobserve(ref.current.lastChild);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsWindowWide(window.innerWidth < 768);
    };

    if (typeof window !== "undefined") {
      handleResize();

      window.addEventListener("onload", handleResize);
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("onload", handleResize);
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return (
    <div className={styles.container} id="life">
      <div className={styles.wrapper}>
        <h2>
          <Image
            src={"/main/life/life-icon.svg"}
            alt="icon"
            width={24}
            height={22}
          />
          <span>Life</span>
        </h2>
        <div className={styles.navigation}>
          <button
            type="button"
            onClick={toPrev}
            disabled={slideIdex <= 0}
          ></button>
          <button type="button" onClick={toNext} disabled={isLast}></button>
        </div>
      </div>
      <div className={styles.slider}>
        <ol
          ref={ref}
          style={{
            translate: `-${
              slideIdex * ref.current?.childNodes[0].offsetWidth
            }px 0`,
            transition: "translate 600ms ease",
          }}
        >
          <li>
            <Image
              src={"/main/life/life-1.png"}
              alt=""
              width={320}
              height={310}
            />
          </li>
          <li>
            <Video toggleAutoSlide={toggleAutoSlide} />
          </li>
          <li>
            <Image
              src={"/main/life/life-3.png"}
              alt=""
              width={320}
              height={310}
            />
          </li>
          <li>
            <Image
              src={"/main/life/life-4.png"}
              alt=""
              width={320}
              height={310}
            />
          </li>
          <li>
            <Image
              src={"/main/life/life-4.png"}
              alt=""
              width={320}
              height={310}
            />
          </li>
          <li>
            <Image
              src={"/main/life/life-4.png"}
              alt=""
              width={320}
              height={310}
            />
          </li>
        </ol>
      </div>
      <div className={styles.pagination}>
        {[0, 0, 0, 0, 0, 0].map((_, idx) => (
          <button
            key={idx}
            className={`${slideIdex === idx ? styles.active : ""}`}
            onClick={() => setSlideIndex(idx)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Life;
