"use client";
import { useSlider } from "@/app/hooks/useSlider";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./life.module.css";
import Video from "./video/Video";

const Life = () => {
  const { slideIdex, toPrev, toNext } = useSlider(6);
  const [isLast, setIsLast] = useState(false);
  const ref = useRef<any>(null);
  const observer = new IntersectionObserver(
    ([entry]) => {
      console.log(entry);
      entry.isIntersecting ? setIsLast(true) : setIsLast(false);
    },
    { threshold: 1.0 }
  );

  useEffect(() => {
    observer.observe(ref.current.lastChild);
    return () => observer.unobserve(ref.current.lastChild);
  }, []);

  return (
    <div className={styles.container}>
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
            <Video />
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
    </div>
  );
};

export default Life;
