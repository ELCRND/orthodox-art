import { NextResponse } from "next/server";
import {
  getDbAndReqBody,
  getGalleryProduct,
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
    const gallery = await getGalleryProduct(db, id);

    return NextResponse.json(gallery, { status: 200 });
  } catch (error) {
    console.error("Error in GET /api/product/gallery:", error);

    return NextResponse.json(
      { errorMessage: "Internal Server Error" },
      { status: 500 }
    );
  }
}
