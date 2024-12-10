import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./breadCrumbs.module.css";

const pathnameMap: { [key: string]: string } = {
  catalog: "Каталог",
};

const BreadCrumbs = () => {
  const pathname = usePathname();
  return (
    <div className={styles.container}>
      <Link href={"/"}>Главная</Link>
      {pathname
        .split("/")
        .map((el) => el && <span key={el}>{pathnameMap[el]}</span>)}
    </div>
  );
};

export default BreadCrumbs;
