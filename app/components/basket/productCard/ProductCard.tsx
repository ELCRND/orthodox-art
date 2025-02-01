import { IBasket } from "@/types/index";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./productCard.module.css";

type Props = {
  product: IBasket;
  deleteOneFromDb: (id: string) => Promise<void>;
};

const ProductCard = ({ product, deleteOneFromDb }: Props) => {
  const [count, setCount] = useState(product.count);
  const changeCount = (v: number) => setCount((p) => p + v);

  return (
    <div className={styles.container}>
      <Image
        src={`/products/${product.type}/${product.image}`}
        alt={""}
        width={100}
        height={100}
        className={styles.img}
      />

      <h2 className={styles.title}>
        <Link href={`/product/${product._id}`}>{product.name}</Link>
      </h2>

      <div className={styles.count}>
        <span>Количество</span>
        <div>
          <button
            disabled={count <= 1}
            onClick={() => changeCount(-1)}
          ></button>
          <b>{count}</b>
          <button onClick={() => changeCount(1)}></button>
        </div>
      </div>

      <div className={styles.size}>
        <span>Размер</span>
        <b>{product.currentSize}</b>
      </div>

      <div className={styles.material}>
        <span>Материал</span>
        <b>{product.material === "gold" ? "Золото" : "Серебро"}</b>
      </div>

      <div className={styles.total}>
        <span>Итого</span>
        <b>{(product.price * count).toLocaleString()} Р</b>
      </div>

      <button
        onClick={() => deleteOneFromDb(product._id)}
        className={styles.delete}
      ></button>
    </div>
  );
};

export default ProductCard;
