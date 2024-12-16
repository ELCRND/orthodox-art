"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import styles from "./gallery.module.css";

type Image = {
  id: string;
  path: string;
  alt: string;
};

type Props = {
  imagesList: {
    main: Image;
    others: Image[];
  };
};

const Gallery = ({ imagesList }: Props) => {
  const [isWindowWide, setIsWindowWide] = useState<boolean | null>(true);
  const [gallery, setGallery] = useState(imagesList);
  const [state, setState] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const r = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setState(+entry.target.id);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1,
      }
    );

    if (ref.current) {
      ref.current.childNodes.forEach((el) => {
        if (el !== ref.current?.lastChild) {
          el.childNodes.forEach((e) => {
            observer.observe(e as Element);
          });
        }
      });
    }

    return () => {
      if (r) {
        r.childNodes.forEach((el) => {
          el.childNodes.forEach((e) => observer.unobserve(e as Element));
        });
      }
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsWindowWide(window.innerWidth > 767);
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

  const changeImage = (img: Image) => {
    if (!isWindowWide) return;
    setGallery((prevState) => {
      const prev = prevState.main;
      return {
        main: img,
        others: prevState.others.map((el) => (el.id === img.id ? prev : el)),
      };
    });
  };

  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.mainImage}>
        <Image
          src={gallery.main.path}
          alt={gallery.main.alt}
          fill
          sizes="100%"
          id="0"
        />
      </div>
      <div className={styles.otherImages}>
        {gallery.others.map((img, idx) => (
          <button
            key={img.id}
            id={idx + 1 + ""}
            onClick={() => changeImage(img)}
          >
            <Image
              src={img.path}
              alt={img.alt}
              fill
              sizes="100%"
              draggable={false}
            />
          </button>
        ))}
      </div>

      <div className={styles.indicators}>
        {[0, 0, 0, 0].map((_, idx) => (
          <span
            key={idx}
            className={`${idx === state && styles.active}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
