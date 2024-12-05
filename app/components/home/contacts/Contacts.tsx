import Accordion from "./accordion/Accordion";
import styles from "./contacts.module.css";

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
          <Accordion
            question="Частый вопрос первый"
            answer="Proident consequat cillum aliqua ut eu irure voluptate reprehenderit aliqua voluptate. Consequat ipsum culpa fugiat aute aute cupidatat excepteur amet. Laboris commodo proident fugiat laborum cupidatat excepte"
            name="contactsFAQ"
          />
          <Accordion
            question="Частый вопрос 2"
            answer="Proident consequat cillum aliqua ut eu irure voluptate reprehenderit aliqua voluptate. Consequat ipsum culpa fugiat aute aute cupidatat excepteur amet. Laboris commodo proident fugiat laborum cupidatat excepte"
            name="contactsFAQ"
          />
          <Accordion
            question="Частый вопрос 3"
            answer="Proident consequat cillum aliqua ut eu irure voluptate reprehenderit aliqua voluptate. Consequat ipsum culpa fugiat aute aute cupidatat excepteur amet. Laboris commodo proident fugiat laborum cupidatat excepte"
            name="contactsFAQ"
          />
        </div>
      </div>

      <div className={styles.map}>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A102aa56ff120799420a9c0b0002695712c8ea13a462d9c3427ef453ee775f966&amp;source=constructor"
          width="630"
          height="720"
        ></iframe>
      </div>
    </div>
  );
};

export default Contacts;
