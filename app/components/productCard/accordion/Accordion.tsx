import { useState } from "react";
import { useProductToBasketStore } from "@/app/store/index";

import styles from "./accordion.module.css";

const Accordion = ({ values }: { values: string[] }) => {
  const [open, setOpen] = useState(false);
  const handleSize = (v: string) => {
    setProductSize(v);
  };
  const { productSize, setProductSize } = useProductToBasketStore();
  return (
    <div className={styles.container}>
      <div className={`${styles.textWrapper}`}>
        <label htmlFor="select">{"Размер"}:</label>
        <button
          id="select"
          onClick={() => setOpen((v) => !v)}
          className={`${open ? styles.open : ""}`}
        >
          {productSize}
        </button>
      </div>
      <div className={`${styles.items} ${open ? styles.open : ""}`}>
        <ul>
          {values
            .sort((a, b) => a.toString().localeCompare(b))
            .map((el, idx) => (
              <button
                key={idx}
                onClick={() => {
                  handleSize(el);
                  setOpen(false);
                }}
              >
                {el}
              </button>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Accordion;
