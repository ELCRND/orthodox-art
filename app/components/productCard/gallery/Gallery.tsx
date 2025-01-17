import { IProduct } from "@/types/index";
import Image from "next/image";
import { useEffect, useState } from "react";
import Loader from "../../Loader/Loader";
import styles from "./gallery.module.css";

const Gallery = ({ product }: { product: IProduct | undefined }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [gallery, setGallery] = useState({
    mianImage: `/products/${product?.type}/${product?.image}`,
    otherImages: ["/"],
  });

  useEffect(() => {
    try {
      setLoading(true);
      fetch(`/api/products/gallery?id=${product?._id}`)
        .then((res) => res.json())
        .then((data) => {
          setGallery((prev) => ({
            ...prev,
            otherImages: data.gallery.map(
              (el: string) => `/products/extra/${el}`
            ),
          }));
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [product?._id]);

  return (
    <div className={styles.container}>
      <div className={styles.mainImage}>
        <Image
          src={gallery.mianImage}
          alt={product?.name || ""}
          width={642}
          height={622}
          draggable={false}
          key="main"
        />
      </div>

      <div className={styles.otherImages}>
        {loading ? (
          <Loader />
        ) : (
          gallery.otherImages.map((el, i) => {
            const type = el.substring(el.length, el.length - 3);
            return type === "mp4" ? (
              <div className={styles.videoContainer} key={el}>
                <video width={120} height={125}>
                  <source src={el} type="video/mp4" />
                </video>
              </div>
            ) : (
              <Image
                src={el}
                alt={el.split(".")[0]}
                width={140}
                height={125}
                key={el + i}
                onClick={function (e) {
                  setGallery((prevState) => {
                    const prev = prevState.mianImage;
                    return {
                      mianImage: el,
                      otherImages: prevState.otherImages.map((img) =>
                        el === img ? prev : img
                      ),
                    };
                  });
                }}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Gallery;
