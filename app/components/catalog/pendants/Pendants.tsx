import { dataGallery, dataText } from "@/app/catalog/data";
import Description from "@/app/components/catalog/description/Description";
import Gallery from "@/app/components/catalog/gallery/Gallery";
import Wrapper from "@/app/components/catalog/wrapper/Wrapper";
import AnchorTag from "@/app/components/anchorTag/AnchorTag";

const Pendants = () => {
  return (
    <Wrapper>
      <Description data={dataText.pendants} />
      <Gallery imagesList={dataGallery.pendants} />
      <AnchorTag id="pendants" />
    </Wrapper>
  );
};

export default Pendants;
