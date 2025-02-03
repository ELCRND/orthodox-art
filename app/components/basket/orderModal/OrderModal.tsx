import OrderForm from "./orderForm/OrderForm";
import OrderList from "./orderList/OrderList";
import OrderPayment from "./orderPayment/OrderPayment";

import styles from "./orderModal.module.css";

const OrderModal = ({ closeModal }: { closeModal: VoidFunction }) => {
  return (
    <div className={styles.container}>
      <div className={styles.shadow}></div>
      <div className={styles.content}>
        <button className={styles.closeBtn} onClick={closeModal}></button>
        <div className={styles.form}>
          <OrderForm />
        </div>
        <div className={styles.list}>
          <OrderList />
        </div>
        <div className={styles.payment}>
          <OrderPayment />
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
