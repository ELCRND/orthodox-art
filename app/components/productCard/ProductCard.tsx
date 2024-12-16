"use client";
import { IProduct } from "@/types/index";
import Image from "next/image";
import { useEffect, useState } from "react";
import Accordion from "../catalog/all/filter/accordion/Accordion";
import styles from "./productCard.module.css";

const ProductCard = ({ product }: { product?: IProduct }) => {
  const [count, setCount] = useState(1);
  const [gallery, setGallery] = useState<string[]>([]);
  const [about, setAbout] = useState({
    description: "",
    quaranties: "",
    care: "",
  });
  const handleCount = (v: number) => setCount((p) => p + v);

  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/photo?id=${product?._id}`
    )
      .then((res) => res.json())
      .then((data) => setGallery(data));
    fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/about?id=${product?._id}`
    )
      .then((res) => res.json())
      .then((data) => setAbout(data));
  }, [product?._id]);
  return (
    <div className={styles.container}>
      <div className="gallery">
        {gallery.map((el) => (
          <Image
            src={`/products${el}`}
            alt={el.split(".")[0]}
            width={300}
            height={300}
            key={el}
          />
        ))}
      </div>

      <div className="text">
        <h1>{product?.name}</h1>
        <b>{product?.price.toLocaleString()} Р</b>

        <div className={styles.sizes}>
          <Accordion text={"Наличие"}>
            {product?.size
              .sort((a, b) => a.toString().localeCompare(b))
              .map((el, idx) => (
                <span key={idx}>{el}</span>
              ))}
          </Accordion>
        </div>

        <div className="wrapper">
          <div className={styles.counter}>
            <button disabled={count <= 1} onClick={() => handleCount(-1)}>
              -
            </button>
            <span>{count}</span>
            <button onClick={() => handleCount(1)}>+</button>
          </div>

          <button>В корзину</button>
        </div>

        <div className="tabs">
          <details className={styles.details} name={"name"}>
            <summary>
              <span className={styles.questionText}>Описание</span>
            </summary>
          </details>
          <div className={styles.answerWrapper}>
            <div className={styles.answerBody}>
              <p className={styles.answerText}>{about.description}</p>
            </div>
          </div>
          <details className={styles.details} name={"name"}>
            <summary>
              <span className={styles.questionText}>Гарантии</span>
            </summary>
          </details>
          <div className={styles.answerWrapper}>
            <div className={styles.answerBody}>
              <p className={styles.answerText}>{about.quaranties}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
