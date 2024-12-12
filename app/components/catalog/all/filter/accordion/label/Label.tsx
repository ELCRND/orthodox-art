import styles from "./label.module.css";

type Props = {
  children: React.ReactNode;
  text: string;
};

const Label = ({ children, text }: Props) => {
  return (
    <label className={styles.container}>
      {children}
      <span>{text}</span>
    </label>
  );
};

export default Label;
