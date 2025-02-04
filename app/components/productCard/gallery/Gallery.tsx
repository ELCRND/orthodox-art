import { useRef, useState } from "react";
import { useSlider } from "@/app/hooks/useSlider";
import ImageElement from "./imageElement/ImageElement";
import MainImage from "./mainImage/MainImage";
import VideoElement from "./videoElement/VideoElement";
import { IProduct } from "@/types/index";

import styles from "./gallery.module.css";

const Gallery = ({ product }: { product: IProduct | undefined }) => {
  const [gallery, setGallery] = useState({
    mianImage: `/products/${product?.type}/${product?.image}`,
    otherImages: [
      `/products/${product?.type}/${product?.image}`,
      "/products/extra/crosses-1-extra-1.png",
      "/products/extra/crosses-1-extra-2.png",
      "/products/extra/crosses-1-extra-3.mp4",
      "/products/extra/crosses-1-extra-4.png",
      "/products/extra/crosses-1-extra-5.png",
    ],
  });
  const ref = useRef<HTMLDivElement>(null);
  const { slideIdex, toPrev, toNext, isFirst, isLast } = useSlider(5);

  const handleChangeImage = (el: string) => {
    setGallery((prevState) => {
      return {
        mianImage: el,
        otherImages: [...prevState.otherImages],
      };
    });
  };

  return (
    <div className={styles.container}>
      <MainImage path={gallery.mianImage} desc={product?.name || ""} />

      <div className={styles.otherImages}>
        <button
          className={styles.prev}
          onClick={toPrev}
          disabled={isFirst}
        ></button>

        <div className={styles.slider}>
          <div
            className={styles.row}
            ref={ref}
            style={{
              translate: `-${
                slideIdex *
                (ref.current?.childNodes[0] as HTMLElement)?.offsetWidth
              }px 0`,
              transition: "translate 250ms ease",
            }}
          >
            {gallery.otherImages.map((el, i) => {
              const type = el.substring(el.length, el.length - 3);
              return type === "mp4" ? (
                <VideoElement el={el} key={i} handleClick={handleChangeImage} />
              ) : (
                <ImageElement el={el} key={i} handleClick={handleChangeImage} />
              );
            })}
          </div>
        </div>

        <button
          className={styles.next}
          onClick={toNext}
          disabled={isLast}
        ></button>
      </div>
    </div>
  );
};

export default Gallery;

// useEffect(() => {
//   try {
//     setLoading(true);
//     fetch(`/api/products/gallery?id=${product?._id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setGallery((prev) => ({
//           ...prev,
//           otherImages: data.gallery.map(
//             (el: string) => `/products/extra/${el}`
//           ),
//         }));
//         setLoading(false);
//       });
//   } catch (error) {
//     console.log(error);
//     setLoading(false);
//   }
// }, [product?._id]);
