import Image from "next/image";
import styles from "./aboutImage.module.css";

const AboutImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className={styles.img}>
      <Image src={src} alt={alt} width={676} height={676} />
    </div>
  );
};

export default AboutImage;
