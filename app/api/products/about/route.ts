import { NextResponse } from "next/server";
import {
  getDbAndReqBody,
  getAboutProduct,
  clientPromise,
} from "@/utils/apiRoutes";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { errorMessage: "Product ID is required" },
        { status: 400 }
      );
    }

    const { db } = await getDbAndReqBody(clientPromise, null);
    const product = await getAboutProduct(db, id);

    if (!product) {
      return NextResponse.json(
        { errorMessage: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    console.error("Error in GET /api/product/about:", error);

    return NextResponse.json(
      { errorMessage: "Internal Server Error" },
      { status: 500 }
    );
  }
}
