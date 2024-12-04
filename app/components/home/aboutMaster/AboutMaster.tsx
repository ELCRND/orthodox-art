"use client";
import Image from "next/image";
import Link from "next/link";
import GuaranteeIcon from "./icons/GuaranteeIcon";
import HandmadeIcon from "./icons/HandmadeIcon";
import UniquenessIcon from "./icons/UniquenessIcon";

import styles from "./aboutMaster.module.css";
import { useEffect, useRef, useState } from "react";

const AboutMaster = () => {
  const [state, setState] = useState(0);
  const ref = useRef<any>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setState(+entry.target.id);
    });

    if (ref.current) {
      ref.current.childNodes.forEach((el: Element) => observer.observe(el));
    }

    return () => {
      ref.current && observer.unobserve(ref.current);
    };
  }, [ref.current]);

  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <Image
          src={"/main/aboutMaster/photo.png"}
          alt="master"
          width={590}
          height={603}
        />
      </div>
      <h2>О мастере </h2>
      <p>
        Дмитрий Федоров — мастер ювелир, человек с золотыми руками, создающий
        изделия православного направления. Родился и вырос Дмитрий в Костроме,
        многие наверное не знают что Кострома — ювелирная столица России.
      </p>
      <Link href={"/about"}>
        <span>ПОДРОБНЕЕ</span>
        <svg
          width="17"
          height="5"
          viewBox="0 0 17 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.3014 1.84668L14.6748 0.326508L14.3255 0L13.627 0.653015L13.9763 0.979507L15.1087 2.03809H0.493982H0V2.96158H0.493982H15.1087L13.9762 4.02017L13.6269 4.34668L14.3255 4.99969L14.6748 4.67319L16.3013 3.15282L16.3015 3.15302L17.0001 2.5L17 2.49969L16.6508 2.17349L16.3014 1.84668Z"
            fill="black"
          />
        </svg>
      </Link>

      <div ref={ref} className={styles.icons}>
        <HandmadeIcon />
        <UniquenessIcon />
        <GuaranteeIcon />
      </div>

      <div className={styles.indicators}>
        {[0, 0, 0].map((_, idx) => (
          <span
            key={idx}
            className={`${idx === state && styles.active}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default AboutMaster;
