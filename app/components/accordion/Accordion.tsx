import React, { useState } from "react";

import styles from "./accordion.module.css";

const Accordion = ({
  text,
  children,
}: {
  text?: string;
  children: React.ReactNode;
}) => {
  const [value, setValue] = useState(false);

  return (
    <div className={styles.container}>
      <button
        onClick={() => setValue((v) => !v)}
        className={`${value ? styles.open : ""}`}
      >
        {text || "Ещё"}
      </button>
      <div className={`${styles.items} ${value ? styles.open : ""}`}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              ...child.props,
            });
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Accordion;
