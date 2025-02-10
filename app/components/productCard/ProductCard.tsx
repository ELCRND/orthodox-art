"use client";
import { useEffect } from "react";

import Accordion from "./accordion/Accordion";
import Gallery from "./gallery/Gallery";
import Tabs from "./tabs/Tabs";
import AddProductBtn from "./addProductBtn/AddProductBtn";

import { useBasketStore, useProductToBasketStore } from "@/app/store/index";
import { IBasket, IProduct } from "@/types/index";

import styles from "./productCard.module.css";

const ProductCard = ({ product }: { product: IProduct }) => {
  const { productCount, setProductCount, setProductSize } =
    useProductToBasketStore();

  const { getById, fromDb } = useBasketStore();

  const handleCount = (v: number) => {
    setProductCount(productCount + v);
  };

  useEffect(() => {
    if (fromDb) {
      const productFromBasket = getById(product._id);
      setProductCount(productFromBasket?.count || 1);
      setProductSize(productFromBasket?.currentSize || "");
    } else {
      const ls = JSON.parse(localStorage.getItem("basket")!) || [];
      const productFromLS = ls.find((el: IBasket) => el._id === product._id);
      setProductCount(productFromLS?.count || 1);
      setProductSize(productFromLS?.currentSize || "");
    }
  }, [product._id, fromDb, getById, setProductCount, setProductSize]);

  return (
    <div className={styles.container}>
      <div className={styles.gallery}>
        <Gallery product={product} />
      </div>

      <div className={styles.text}>
        <h1>{product.name}</h1>
        <b>{(product.price / 10).toLocaleString()} Р</b>
      </div>

      <div className={styles.accordions}>
        <Accordion values={product.size} />
      </div>

      <div className={styles.counterContainer}>
        <div className={styles.counter}>
          <button disabled={productCount <= 1} onClick={() => handleCount(-1)}>
            -
          </button>
          <span>{productCount}</span>
          <button onClick={() => handleCount(1)}>+</button>
        </div>

        <AddProductBtn product={product} />
      </div>

      <div className={styles.tabs}>
        <Tabs id={product?._id || ""} />
      </div>
    </div>
  );
};

export default ProductCard;
