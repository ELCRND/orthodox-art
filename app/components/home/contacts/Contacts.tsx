import Accordion from "./accordion/Accordion";
import styles from "./contacts.module.css";
import Map from "./map/Map";

const data = [
  {
    question: "Частый вопрос первый",
    answer:
      "Proident consequat cillum aliqua ut eu irure voluptate reprehenderit aliqua voluptate. Consequat ipsum culpa fugiat aute aute cupidatat excepteur amet. Laboris commodo proident fugiat laborum cupidatat excepte",
  },
  {
    question: "Частый вопрос 2",
    answer:
      "Proident consequat cillum aliqua ut eu irure voluptate reprehenderit aliqua voluptate. Consequat ipsum culpa fugiat aute aute cupidatat excepteur amet. Laboris commodo proident fugiat laborum cupidatat excepte",
  },
  {
    question: "Частый вопрос 3",
    answer:
      "Proident consequat cillum aliqua ut eu irure voluptate reprehenderit aliqua voluptate. Consequat ipsum culpa fugiat aute aute cupidatat excepteur amet. Laboris commodo proident fugiat laborum cupidatat excepte",
  },
];

const Contacts = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h2>Контакты</h2>
        <div className={styles.wrapper}>
          <div className={styles.phone}>
            <h3>Телефон</h3>
            <b>+7 (999) 808 65 48</b>
          </div>
          <div className={styles.email}>
            <h3>Электронный адрес</h3>
            <b>example@gmail.com</b>
          </div>
        </div>
        <div className={styles.address}>
          <h3>Адрес</h3>
          <b>Москва ул.Академика Королева 13 стр 1 подъезд 5 офис 960</b>
        </div>
        <div className={styles.workingHours}>
          <h3>Время работы</h3>
          <b>пн-пт: с 10:00 до 19:00 ч.</b>
        </div>
        <div className={styles.faq}>
          {data.map((el) => (
            <Accordion
              question={el.question}
              answer={el.answer}
              key={el.question}
              name={"faq"}
            />
          ))}
        </div>
      </div>

      <div className={styles.map}>
        <Map />
      </div>
    </div>
  );
};

export default Contacts;
