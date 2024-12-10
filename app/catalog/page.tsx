import Hero from "../components/catalog/hero/Hero";
import Crosses from "../components/catalog/crosses/Crosses";
import Bracelets from "../components/catalog/bracelets/Bracelets";
import Pendants from "../components/catalog/pendants/Pendants";
import Chains from "../components/catalog/chains/Chains";

const CatalogPage = () => {
  return (
    <div>
      <Hero />
      <Crosses />
      <Pendants />
      <Bracelets />
      <Chains />
    </div>
  );
};

export default CatalogPage;
