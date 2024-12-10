import React from "react";
import styles from "./wrapper.module.css";

const Wrapper = ({ children }: React.PropsWithChildren) => {
  return <div className={styles.container}>{children}</div>;
};

export default Wrapper;
