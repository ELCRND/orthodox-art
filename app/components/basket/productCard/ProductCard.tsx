import Image from "next/image";
import Link from "next/link";
import { FieldValues, UseFormRegister } from "react-hook-form";

import { useBasketStore } from "@/app/store/index";

import { IBasket } from "@/types/index";

import styles from "./productCard.module.css";

type Props = {
  product: IBasket;
  deleteOneFromDb: (id: string) => Promise<void>;
  register: UseFormRegister<FieldValues>;
};

const ProductCard = ({ product, deleteOneFromDb, register }: Props) => {
  const { basket, setBasket } = useBasketStore();
  const changeCount = (v: number) =>
    setBasket(
      basket.map((el) =>
        el._id === product._id ? { ...el, count: (el.count += v) } : el
      )
    );

  return (
    <div className={styles.container}>
      <input type="text" {...register(product._id)} />
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
            type="button"
            disabled={product.count <= 1}
            onClick={() => changeCount(-1)}
          ></button>
          <b>{product.count}</b>
          <button type="button" onClick={() => changeCount(1)}></button>
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
        <b>{((product.price / 10) * product.count).toLocaleString()} Р</b>
      </div>

      <button
        onClick={() => deleteOneFromDb(product._id)}
        className={styles.delete}
        type="button"
      ></button>
    </div>
  );
};

export default ProductCard;
