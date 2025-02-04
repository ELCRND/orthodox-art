import Link from "next/link";

import styles from "./description.module.css";

type Props = {
  data: {
    title: string;
    desc: string[];
    link: {
      text: string;
      path: string;
    };
  };
};

const Description = ({ data }: Props) => {
  return (
    <div className={styles.container}>
      <h2>{data.title}</h2>
      {data.desc.map((d, i) => (
        <p key={i}>{d}</p>
      ))}
      <Link href={data.link.path}>{data.link.text}</Link>
    </div>
  );
};

export default Description;
