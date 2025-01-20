import { NextResponse } from "next/server";
import {
  getDbAndReqBody,
  getSomeProducts,
  clientPromise,
} from "@/utils/apiRoutes";

export const revalidate = 0;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  // console.log(searchParams);
  const available = searchParams.get("available") === "order" ? false : true;
  const category = searchParams.get("category") || "";
  const material = searchParams.get("material");
  const start = parseInt(searchParams.get("start") || "0", 10);
  const end = parseInt(searchParams.get("end") || "11", 10);

  const filters = new Map();

  filters.set("stock", available);
  if (category && category !== "all") filters.set("type", category);
  if (material && material !== "any") filters.set("material", material);

  const { db } = await getDbAndReqBody(clientPromise, null);

  const res = await getSomeProducts(
    db,
    start,
    end,
    Object.fromEntries(filters.entries())
  );

  return res.length
    ? NextResponse.json(res)
    : NextResponse.json(res, { statusText: "finished" });
}
