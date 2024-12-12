import Filter from "@/app/components/catalog/all/filter/Filter";
import Products from "@/app/components/catalog/all/products/Products";

const catalogAllPage = async () => {
  const products = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products`
  ).then((res) => res.json());

  return (
    <div>
      <Filter />
      <Products data={products} />
    </div>
  );
};

export default catalogAllPage;
