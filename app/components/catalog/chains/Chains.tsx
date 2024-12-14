import { dataGallery, dataText } from "@/app/catalog/data";
import Description from "@/app/components/catalog/description/Description";
import Gallery from "@/app/components/catalog/gallery/Gallery";
import Wrapper from "@/app/components/catalog/wrapper/Wrapper";
import AnchorTag from "@/app/components/anchorTag/AnchorTag";

import styles from "./chains.module.css";

const Chains = () => {
  return (
    <div className={styles.container}>
      <Wrapper>
        <Description data={dataText.chains} />
        <AnchorTag id="chains" />
        <Gallery imagesList={dataGallery.chains} />
      </Wrapper>
    </div>
  );
};

export default Chains;
