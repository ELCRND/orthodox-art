import All from "@/app/components/catalog/all/All";
import { Metadata } from "next";

const catalogAllPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const { category } = await searchParams;
  const data = await fetch(
    `${
      process.env.NEXT_PUBLIC_BASE_URL
    }/api/products/some?start=${0}&end=${5}&available=stock&category=${category}`
  ).then((res) => res.json());

  return <All data={await data} />;
};

export default catalogAllPage;

export const metadata: Metadata = {
  title: "Каталог",
};

export const dynamic = "force-dynamic";
