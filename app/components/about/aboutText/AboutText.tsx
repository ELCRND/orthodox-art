import styles from "./aboutText.module.css";

const AboutText = ({ title, desc }: { title: string; desc: string[] }) => {
  return (
    <div className={styles.text}>
      <h2>{title}</h2>
      {desc.map((text, i) => (
        <p key={i}>{text}</p>
      ))}
    </div>
  );
};

export default AboutText;
