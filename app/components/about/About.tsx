import AboutImage from "./aboutImage/AboutImage";
import AboutText from "./aboutText/AboutText";
import styles from "./about.module.css";

const data = [
  {
    image: {
      src: "/about/master.png",
      alt: "master",
    },
    text: {
      title: "Дмитрий Федоров",
      desc: [
        `Дмитрий Федоров — мастер ювелир, человек с золотыми руками, создающий
                 изделия православного направления. Родился и вырос Дмитрий в Костроме,
                 многие наверное не знают что Кострома — ювелирная столица России.`,
        `Ювелирное дело стало образом жизни для Дмитрия. Вот, что рассказывает
        сам мастер о своём творчестве:`,
      ],
    },
  },
  {
    image: {
      src: "/about/about-2.png",
      alt: "cross",
    },
    text: {
      title: "Как давно вы занимаетесь ювелирным делом?",
      desc: [
        `Я много лет занимаюсь ювелирным делом и пробуя себя в различных его  направлениях, я пришел к тому, что моя душа лежит именно к православным изделиям, и я хочу расти и развиваться именно в этом направлении.`,
      ],
    },
  },
  {
    image: {
      src: "/about/about-3.png",
      alt: "crosses",
    },
    text: {
      title: "Что вас вдохновляет?",
      desc: [
        `Мне дарит энергию сам процесс творчества. Когда я рисую эскиз будущего изделия, мне не терпится воплотить его 
        в жизнь. Ну и конечно же я воодушевляюсь положительными отзывами и словами благодарности людей, которые приобретают мои изделия.`,

        `За это я благодарен им в ответ.Нужно просто хотеть и делать. Но самое главное нужно любить то, что делаешь. 
        И тогда успех не заставит себя долго ждать! 
        Всем добра Друзья.`,
      ],
    },
  },
];

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <AboutImage src={data[0].image.src} alt={data[0].image.alt} />
        <AboutText title={data[0].text.title} desc={data[0].text.desc} />
      </div>

      <div className={styles.content}>
        <AboutText title={data[1].text.title} desc={data[1].text.desc} />
        <AboutImage src={data[1].image.src} alt={data[1].image.alt} />
      </div>

      <div className={styles.content}>
        <AboutImage src={data[2].image.src} alt={data[2].image.alt} />
        <AboutText title={data[2].text.title} desc={data[2].text.desc} />
      </div>
    </div>
  );
};

export default About;
