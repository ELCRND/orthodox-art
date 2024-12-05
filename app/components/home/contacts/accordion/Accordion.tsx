import styles from "./accordion.module.css";

const Accordion = ({
  question,
  answer,
  name,
}: {
  question: string;
  answer: string;
  name: string;
}) => {
  return (
    <>
      <details className={styles.details} name={name}>
        <summary>
          <span className={styles.questionText}>{question}</span>
        </summary>
      </details>
      <div className={styles.answerWrapper}>
        <div className={styles.answerBody}>
          <p className={styles.answerText}>{answer}</p>
        </div>
      </div>
    </>
  );
};

export default Accordion;
