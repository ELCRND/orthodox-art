import Image from "next/image";

import { GalleryProps } from "../Gallery";

import { useSliderIndicators } from "@/app/hooks/useSliderIndicators";

import styles from "./galleryMobile.module.css";

const GalleryMobile = ({ imagesList }: GalleryProps) => {
  const images = [imagesList.main, ...imagesList.others];
  const { indicatorNum, ref } = useSliderIndicators();
  return (
    <div className={styles.container}>
      <div className={styles.slider} ref={ref}>
        {images.map((el, idx) => (
          <div key={el.id} className={styles.slide} id={idx.toString()}>
            <Image src={el.path} alt={el.alt} fill sizes="100%" />
          </div>
        ))}
      </div>

      <div className={styles.indicators}>
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`${idx === indicatorNum && styles.active}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default GalleryMobile;
