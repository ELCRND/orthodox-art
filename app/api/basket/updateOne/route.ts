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

    if (!email || !id || !count || !size) {
      return NextResponse.json(
        { errorMessage: "Required parameters were not passed" },
        { status: 400 }
      );
    }

    const updateBasket = await getUpdatedBasket(db, email, id, count, size);

    if (!updateBasket) {
      return NextResponse.json({
        status: 500,
        message: "Не удалось обновить данные для товара",
      });
    }

    return NextResponse.json({ status: 201 });
  } catch (error) {
    console.error("Error in POST /api/basket/updateOne:", error);
    return NextResponse.json(
      { errorMessage: "Internal Server Error" },
      { status: 500 }
    );
  }
}
