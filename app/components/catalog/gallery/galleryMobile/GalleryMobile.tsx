import Image from "next/image";
import { useSliderIndicators } from "@/app/hooks/useSliderIndicators";
import { GalleryProps } from "../Gallery";

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

{
  /* <div className={styles.container}>
      <div className={styles.mainImage}>
        <Image
          src={imagesList.main.path}
          alt={imagesList.main.alt}
          fill
          sizes="100%"
          id="0"
        />
      </div>
      <div className={styles.otherImages}>
        {imagesList.others.map((img, idx) => (
          <div key={img.id} id={idx + 1 + ""}>
            <Image
              src={img.path}
              alt={img.alt}
              fill
              sizes="100%"
              draggable={false}
            />
          </div>
        ))}
      </div>
      <div className={styles.indicators}>
        {[0, 0, 0, 0].map((_, idx) => (
          <span
            key={idx}
            className={`${idx === indicatorNum && styles.active}`}
          ></span>
        ))}
      </div>{" "}
    </div> */
}
