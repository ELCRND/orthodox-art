import styles from "./menuBtn.module.css";

const MenuBtn = ({ handler }: { handler: () => void }) => {
  return (
    <button className={styles.button} onClick={handler}>
      <span></span>
      <span></span>
    </button>
  );
};

export default MenuBtn;
