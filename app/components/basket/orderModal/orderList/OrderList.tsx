import Image from "next/image";
import { useBasketStore } from "@/app/store/index";

import styles from "./orderList.module.css";

const OrderList = () => {
  const { basket, getTotal } = useBasketStore();

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>ваш заказ</h3>
      <ul className={styles.list}>
        {basket.map((product) => (
          <li className={styles.item} key={product._id}>
            <Image
              src={`/products/${product.type}/${product.image}`}
              alt={product.type}
              width={76}
              height={76}
            />
            <h4>{product.name}</h4>
            <b>{(product.price / 10).toLocaleString()} Р</b>
          </li>
        ))}
      </ul>

      <div className={styles.total}>
        <span>Итого</span>
        <b>{getTotal().toLocaleString()} Р</b>
      </div>

      <button className={styles.submit} form="order">
        оформить заказ
      </button>
    </div>
  );
};

export default OrderList;
