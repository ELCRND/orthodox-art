import styles from "./rightFilter.module.css";

const RightFilter = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.container}>{children}</div>;
};

export default RightFilter;
