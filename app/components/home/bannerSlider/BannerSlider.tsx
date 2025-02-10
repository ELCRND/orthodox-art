"use client";
import BannerSlide from "./bannerSlide/BannerSlide";

import { useSlider } from "@/app/hooks/useSlider";

import styles from "./bannerSlider.module.css";

const data = [
  {
    id: 1,
    name: "Крест черное дерево и золото",
    desc: "Эбеновое дерево (чёрное дерево) — относится к роду тропических деревьев (Diospyros) произрастающих во влажных тропических лесах Африки, Юго-Восточной Азии, Индии и на Острове Цейлон.",
    price: 127_500,
    img: "/main/bannerSlider/product-2.png",
  },
  {
    id: 2,
    name: "Крест черное дерево и золото 1",
    desc: "Эбеновое дерево (чёрное дерево) — относится к роду тропических деревьев (Diospyros) произрастающих во влажных тропических лесах Африки, Юго-Восточной Азии, Индии и на Острове Цейлон.",
    price: 127_501,
    img: "/main/bannerSlider/product-2.png",
  },
  {
    id: 3,
    name: "Крест черное дерево и золото 2",
    desc: "Эбеновое дерево (чёрное дерево) — относится к роду тропических деревьев (Diospyros) произрастающих во влажных тропических лесах Африки, Юго-Восточной Азии, Индии и на Острове Цейлон.",
    price: 127_502,
    img: "/main/bannerSlider/product-2.png",
  },
  {
    id: 4,
    name: "Крест черное дерево и золото 3",
    desc: "Эбеновое дерево (чёрное дерево) — относится к роду тропических деревьев (Diospyros) произрастающих во влажных тропических лесах Африки, Юго-Восточной Азии, Индии и на Острове Цейлон.",
    price: 127_503,
    img: "/main/bannerSlider/product-2.png",
  },
];

const BannerSlider = () => {
  const { slideIdex, setSlideIndex } = useSlider(4, 8000, 7000);
  return (
    <div className={styles.container}>
      <ul
        style={{
          translate: `0 -${slideIdex * 100}%`,
          transition: `${slideIdex ? "translate 600ms ease" : "none"}`,
        }}
      >
        {data.map((product) => (
          <li
            key={product.id}
            className={`${slideIdex + 1 === product.id && styles.active}`}
          >
            <BannerSlide {...product} />
          </li>
        ))}
      </ul>

      <div className={styles.indacators}>
        {[0, 0, 0, 0].map((_, idx) => (
          <button
            key={idx}
            className={`${slideIdex === idx && styles.active}`}
            onClick={() => setSlideIndex(idx)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
