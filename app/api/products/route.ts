import { NextResponse } from "next/server";
import { getDbAndReqBody, getProducts, clientPromise } from "@/utils/apiRoutes";

export async function GET() {
  const { db } = await getDbAndReqBody(clientPromise, null);
  return NextResponse.json(await getProducts(db));
}
