import { dataGallery, dataText } from "@/app/catalog/data";
import Description from "@/app/components/catalog/description/Description";
import Gallery from "@/app/components/catalog/gallery/Gallery";
import Wrapper from "@/app/components/catalog/wrapper/Wrapper";
import AnchorTag from "@/app/components/anchorTag/AnchorTag";

import styles from "./bracelets.module.css";

const Bracelets = () => {
  return (
    <div className={styles.container}>
      <Wrapper>
        <Gallery imagesList={dataGallery.bracelets} />
        <Description data={dataText.bracelets} />
        <AnchorTag id="bracelets" />
      </Wrapper>
    </div>
  );
};

export default Bracelets;
