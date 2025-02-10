import Image from "next/image";

import styles from "./orderPayment.module.css";

const OrderPayment = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Способ оплаты</h3>

      <label className={styles.radio}>
        <input type="radio" name="payment" id="card" defaultChecked />
        <span>Оплатить картой</span>

        <div className={styles.cards}>
          <Image src={"/visa.svg"} alt="visa" width={26} height={16} />
          <Image src={"/amex.svg"} alt="amex" width={26} height={16} />
          <Image
            src={"/mastercard.svg"}
            alt="matercard"
            width={26}
            height={16}
          />
        </div>
      </label>

      <label className={styles.radio}>
        <input type="radio" name="payment" id="person" />
        <span>Произвести оплату в мастерской Дмитрия Федорова</span>
      </label>
    </div>
  );
};

export default OrderPayment;
