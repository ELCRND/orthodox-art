import Image from "next/image";
import styles from "./mainImage.module.css";

const MainImage = ({ path, desc }: { path: string; desc: string }) => {
  const type = path.substring(path.length, path.length - 3);
  return (
    <div className={styles.mainImage}>
      {type === "png" ? (
        <Image
          src={path}
          alt={desc}
          width={642}
          height={622}
          draggable={false}
        />
      ) : (
        <video width={642} height={622} controls>
          <source src={path} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default MainImage;
