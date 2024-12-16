import { NextResponse } from "next/server";
import {
  getDbAndReqBody,
  getGalleryProduct,
  clientPromise,
} from "@/utils/apiRoutes";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const { db } = await getDbAndReqBody(clientPromise, null);
  const id = searchParams.get("id") || "";
  return NextResponse.json(await getGalleryProduct(db, id));
}
