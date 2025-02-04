import ProductCard from "@/app/components/productCard/ProductCard";
import { auth } from "@/auth";

const ProductCardPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const productRes = await fetch(
    `${process.env.BASE_URL}/api/products/one?id=${id}`
  );
  const session = await auth();

  const basketRes = await fetch(`${process.env.BASE_URL}/api/basket`, {
    method: "POST",
    body: JSON.stringify({ email: session?.user?.email }),
  });

  const product = await productRes.json();

  let basket = null;

  if (basketRes.status !== 400) basket = await basketRes.json();

  return (
    <div>
      <ProductCard product={product} basketFromDB={basket} />
    </div>
  );
};

export default ProductCardPage;
