import Filter from "@/app/components/catalog/all/filter/Filter";
import Products from "@/app/components/catalog/all/products/Products";
import { Metadata } from "next";

const catalogAllPage = async () => {
  const products = await fetch(
    `${process.env.BASE_URL}/api/products/some?start=${0}&end=${11}`
  ).then((res) => res.json());

  return (
    <div>
      <Filter />
      <Products data={await products} />
    </div>
  );
};

export default catalogAllPage;

export const metadata: Metadata = {
  title: "Каталог",
};

export const dynamic = "force-dynamic";
