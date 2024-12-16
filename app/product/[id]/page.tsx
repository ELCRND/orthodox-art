import ProductCard from "@/app/components/productCard/ProductCard";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const product = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/one?id=${id}`
  );
  return (
    <div>
      <ProductCard product={await product.json()} />
    </div>
  );
};

export default page;
