import { dataGallery, dataText } from "@/app/catalog/data";
import Description from "@/app/components/catalog/description/Description";
import Gallery from "@/app/components/catalog/gallery/Gallery";
import Wrapper from "@/app/components/catalog/wrapper/Wrapper";

import styles from "./crosses.module.css";

const Crosses = () => {
  return (
    <div className={styles.container}>
      <Wrapper>
        <Gallery imagesList={dataGallery.crosses} />
        <Description data={dataText.crosses} />
      </Wrapper>
    </div>
  );
};

export default Crosses;
