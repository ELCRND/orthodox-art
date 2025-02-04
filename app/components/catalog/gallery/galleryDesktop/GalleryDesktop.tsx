import React, { useState } from "react";
import Image from "next/image";
import { GalleryProps } from "../Gallery";

import styles from "./galleryDesktop.module.css";

const GalleryDesktop = ({ imagesList }: GalleryProps) => {
  const [gallery, setGallery] = useState(imagesList);

  const changeImage = (img: GalleryProps["imagesList"]["main"]) => {
    setGallery((prevState) => {
      const prev = prevState.main;
      return {
        main: img,
        others: prevState.others.map((el) => (el.id === img.id ? prev : el)),
      };
    });
  };
  return (
    <div className={styles.container}>
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
    </div>
  );
};

export default GalleryDesktop;
