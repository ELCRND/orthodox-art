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
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              ...child.props,
              isFirst: index === 0,
              isLast: !Array.isArray(children) || index === children.length - 1,
            });
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Accordion;
