import { useState } from "react";
import styles from "./accordion.module.css";

const Accordion = ({ values, text }: { values: string[]; text: string }) => {
  const [state, setState] = useState(text);
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.container}>
      <div className={`${styles.textWrapper}`}>
        <label
          htmlFor="select"
          className={`${state === text ? styles.hidden : styles.visible}`}
        >
          {text}:
        </label>
        <button
          id="select"
          onClick={() => setOpen((v) => !v)}
          className={`${open ? styles.open : ""}`}
        >
          {state}
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
                  setState(el);
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
