import { NextResponse } from "next/server";
import { getDbAndReqBody, getProducts, clientPromise } from "@/utils/apiRoutes";

export async function GET() {
  try {
    const { db } = await getDbAndReqBody(clientPromise, null);
    return NextResponse.json(await getProducts(db));
  } catch (error) {
    console.error("Error in GET /api/product/all:", error);

    return NextResponse.json(
      { errorMessage: "Internal Server Error" },
      { status: 500 }
    );
  }
}
