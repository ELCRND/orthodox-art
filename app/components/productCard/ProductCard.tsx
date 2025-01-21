"use client";
import { useContext, useState } from "react";
import Accordion from "./accordion/Accordion";
import Gallery from "./gallery/Gallery";
import Tabs from "./tabs/Tabs";
import { IProduct } from "@/types/index";

import styles from "./productCard.module.css";
import { BasketContext } from "@/app/layouts/BasketLayout";

const ProductCard = ({ product }: { product?: IProduct }) => {
  const [count, setCount] = useState(1);
  const handleCount = (v: number) => setCount((p) => p + v);
  const basket = useContext(BasketContext);
  console.log(basket);

  return (
    <div className={styles.container}>
      <div className={styles.gallery}>
        <Gallery product={product} />
      </div>

      <div className={styles.text}>
        <h1>{product?.name}</h1>
        <b>{product?.price.toLocaleString()} Р</b>
      </div>

      <div className={styles.accordions}>
        <Accordion values={product?.size || []} text={"Размер"} />
      </div>

      <div className={styles.counterContainer}>
        <div className={styles.counter}>
          <button disabled={count <= 1} onClick={() => handleCount(-1)}>
            -
          </button>
          <span>{count}</span>
          <button onClick={() => handleCount(1)}>+</button>
        </div>

        <button>В корзину</button>
      </div>

      <div className={styles.tabs}>
        <Tabs id={product?._id || ""} />
      </div>
    </div>
  );
};

export default ProductCard;
