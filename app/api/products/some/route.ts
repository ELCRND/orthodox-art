import { NextResponse } from "next/server";
import {
  getDbAndReqBody,
  getSomeProducts,
  clientPromise,
} from "@/utils/apiRoutes";

export const revalidate = 0;

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const available = searchParams.get("available") !== "order";
    const category = searchParams.get("category") || "";
    const material = searchParams.get("material") || "";
    const start = parseInt(searchParams.get("start") || "0", 10);
    const end = parseInt(searchParams.get("end") || "11", 10);

    if (isNaN(start) || isNaN(end) || start < 0 || end < 0 || start > end) {
      return NextResponse.json(
        { errorMessage: "Invalid start or end parameters" },
        { status: 400 }
      );
    }

    const filters: {
      stock: boolean;
      type?: string;
      material?: string;
    } = {
      stock: available,
    };

    if (category && category !== "all") filters.type = category;
    if (material && material !== "any") filters.material = material;

    const { db } = await getDbAndReqBody(clientPromise, null);

    const products = await getSomeProducts(db, start, end, filters);

    if (!products.length) {
      return NextResponse.json({ statusText: "finished" }, { status: 200 });
    }

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error("Error in GET /api/products.some:", error);

    return NextResponse.json(
      { errorMessage: "Internal Server Error" },
      { status: 500 }
    );
  }
}
