import { useEffect, useState } from "react";

import styles from "./tabs.module.css";

const Tabs = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(false);
  const [about, setAbout] = useState({
    description: "",
    quaranties: "",
    care: "",
  });

  useEffect(() => {
    setLoading(true);
    fetch(`/api/products/about?id=${id}`)
      .then((res) => res.json())
      .then((data) => setAbout(data))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div className={styles.tabs}>
      <div className={styles.tabWrapper}>
        <div className={styles.tab}>
          <input type="radio" id="tab1" name="tabGroup1" defaultChecked />
          <label htmlFor="tab1">Описание</label>
        </div>
        {loading ? <span>wait...</span> : <p>{about.description}</p>}
      </div>

      <div className={styles.tabWrapper}>
        <div className={styles.tab}>
          <input type="radio" id="tab2" name="tabGroup1" />
          <label htmlFor="tab2">Гарантии</label>
        </div>
        {loading ? <span>wait...</span> : <p>{about.quaranties}</p>}
      </div>

      <div className={styles.tabWrapper}>
        <div className={styles.tab}>
          <input type="radio" id="tab3" name="tabGroup1" />
          <label htmlFor="tab3">Уход за изделием</label>
        </div>
        {loading ? <span>wait...</span> : <p>{about.care}</p>}
      </div>
    </div>
  );
};

export default Tabs;
