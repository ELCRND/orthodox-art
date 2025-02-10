import ProductCard from "@/app/components/productCard/ProductCard";

import { IProduct } from "@/types";

const fetchProduct = async (id: string): Promise<IProduct> => {
  const productRes = await fetch(
    `${process.env.BASE_URL}/api/products/one?id=${id}`
  );
  if (!productRes.ok) {
    throw new Error("Failed to fetch product");
  }
  return productRes.json();
};

const ProductCardPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const product = await fetchProduct(id);

  return (
    <div>
      <ProductCard product={product} />
    </div>
  );
};

export default ProductCardPage;
