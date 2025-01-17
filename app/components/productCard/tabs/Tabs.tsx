import { useEffect, useState } from "react";
import styles from "./tabs.module.css";

const Tabs = ({ id }: { id: string }) => {
  const [about, setAbout] = useState({
    description: "",
    quaranties: "",
    care: "",
  });

  useEffect(() => {
    fetch(`/api/products/about?id=${id}`)
      .then((res) => res.json())
      .then((data) => setAbout(data));
  }, [id]);

  return (
    <div className={styles.tabs}>
      <div className={styles.tabWrapper}>
        <div className={styles.tab}>
          <input type="radio" id="tab1" name="tabGroup1" />
          <label htmlFor="tab1">Описание</label>
        </div>
        <p>{about.description}</p>
      </div>

      <div className={styles.tabWrapper}>
        <div className={styles.tab}>
          <input type="radio" id="tab2" name="tabGroup1" />
          <label htmlFor="tab2">Гарантии</label>
        </div>
        <p>{about.quaranties}</p>
      </div>

      <div className={styles.tabWrapper}>
        <div className={styles.tab}>
          <input type="radio" id="tab3" name="tabGroup1" />
          <label htmlFor="tab3">Уход за изделием</label>
        </div>
        <p>{about.care}</p>
      </div>
    </div>
  );
};

export default Tabs;
