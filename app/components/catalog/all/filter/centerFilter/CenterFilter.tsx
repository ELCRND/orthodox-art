import styles from "./centerFilter.module.css";

const CenterFilter = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.container}>{children}</div>;
};

export default CenterFilter;
