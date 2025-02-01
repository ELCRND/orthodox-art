import {
  clientPromise,
  getDbAndReqBody,
  getUpdatedBasket,
} from "@/utils/apiRoutes";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { db, reqBody } = await getDbAndReqBody(clientPromise, req);
    const { email, id, count, size } = reqBody;

    const updateBasket = await getUpdatedBasket(db, email, id, count, size);

    if (!updateBasket) {
      return NextResponse.json({
        status: 500,
        message: "Не удалось обновить количество товара",
      });
    }

    return NextResponse.json({ status: 201 });
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
