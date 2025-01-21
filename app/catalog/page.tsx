import { Metadata } from "next";
import Catalog from "../components/catalog/Catalog";

const CatalogPage = () => {
  return <Catalog />;
};

export default CatalogPage;
export const metadata: Metadata = {
  title: "Каталог",
};
