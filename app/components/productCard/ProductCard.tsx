"use client";
import { useEffect } from "react";
import Accordion from "./accordion/Accordion";
import Gallery from "./gallery/Gallery";
import Tabs from "./tabs/Tabs";
import AddProductBtn from "./addProductBtn/AddProductBtn";
import { useProductToBasketStore } from "@/app/store/index";
import { IBasket, IProduct } from "@/types/index";

import styles from "./productCard.module.css";

const ProductCard = ({
  product,
  basketFromDB,
}: {
  product: IProduct;
  basketFromDB: IBasket[];
}) => {
  const { productCount, setProductCount, setProductSize } =
    useProductToBasketStore();

  const handleCount = (v: number) => {
    setProductCount(productCount + v);
  };

  useEffect(() => {
    if (basketFromDB) {
      const productFromDB = basketFromDB?.find((el) => el._id === product._id);
      setProductCount(productFromDB?.count || 1);
      setProductSize(productFromDB?.currentSize || "");
    } else {
      const ls = JSON.parse(localStorage.getItem("basket")!) || [];
      const productFromLS = ls.find((el: IBasket) => el._id === product._id);
      console.log(productFromLS);
      setProductCount(productFromLS?.count || 1);
      setProductSize(productFromLS?.currentSize || null);
    }
  }, [basketFromDB, product._id, setProductCount, setProductSize]);

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
