import Image from "next/image";

import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <Image
          src={"/about/master.png"}
          alt="master"
          width={676}
          height={676}
        />
      </div>
      <div className={styles.text}>
        <h2>Дмитрий Федоров</h2>
        <p>
          Дмитрий Федоров — мастер ювелир, человек с золотыми руками, создающий
          изделия православного направления. Родился и вырос Дмитрий в Костроме,
          многие наверное не знают что Кострома — ювелирная столица России.
        </p>
        <p>
          Ювелирное дело стало образом жизни для Дмитрия. Вот, что рассказывает
          сам мастер о своём творчестве:
        </p>
      </div>
    </div>
  );
};

export default About;
