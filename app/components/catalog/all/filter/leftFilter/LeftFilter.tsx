import styles from "./leftFilter.module.css";

const LeftFilter = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.container}>{children}</div>;
};

export default LeftFilter;
