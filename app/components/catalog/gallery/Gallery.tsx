"use client";
import Image from "next/image";
import { useState } from "react";

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
  const [gallery, setGallery] = useState(imagesList);

  const changeImage = (img: Image) => {
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
        />
      </div>
      <div className={styles.otherImages}>
        {gallery.others.map((img) => (
          <button key={img.id} onClick={() => changeImage(img)}>
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

export default Gallery;
