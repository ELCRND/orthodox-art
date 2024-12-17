import { NextResponse } from "next/server";
import {
  getDbAndReqBody,
  getSomeProducts,
  clientPromise,
} from "@/utils/apiRoutes";

export const revalidate = 0;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const start = parseInt(searchParams.get("start") || "0", 10);
  const end = parseInt(searchParams.get("end") || "11", 10);

  const { db } = await getDbAndReqBody(clientPromise, null);

  const res = await getSomeProducts(db, start, end);

  return res.length
    ? NextResponse.json(res)
    : NextResponse.json(res, { statusText: "finished" });
}
