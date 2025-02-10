import Link from "next/link";

import styles from "./navigation.module.css";

const Navigation = ({
  routes,
}: {
  routes: { path: string; text: string }[];
}) => {
  return (
    <nav className={styles.container}>
      <ul>
        {routes.map((r) => (
          <li key={r.path}>
            <Link href={r.path}>{r.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
