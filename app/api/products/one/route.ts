import { NextResponse } from "next/server";
import { getDbAndReqBody, getProduct, clientPromise } from "@/utils/apiRoutes";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id)
      return NextResponse.json(
        { errorMessage: "Product ID is required" },
        { status: 404 }
      );

    const { db } = await getDbAndReqBody(clientPromise, null);
    const product = await getProduct(db, id);

    if (!product) {
      return NextResponse.json(
        { errorMessage: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error("Error in GET /api/product/one:", error);

    return NextResponse.json(
      { errorMessage: "Internal Server Error" },
      { status: 500 }
    );
  }
}
