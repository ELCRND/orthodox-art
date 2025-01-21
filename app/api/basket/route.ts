import {
  clientPromise,
  createCollectionBasket,
  findUserByEmail,
  getCollectionsBasket,
  getDbAndReqBody,
} from "@/utils/apiRoutes";

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { db, reqBody } = await getDbAndReqBody(clientPromise, req);
  const user = await findUserByEmail(db, reqBody.email);

  if (!user) {
    return NextResponse.json(
      { message: "Пользователя не существует", email: reqBody.email },
      { status: 400 }
    );
  }

  const basket = await getCollectionsBasket(db, reqBody.email);
  if (!basket) {
    return NextResponse.json(createCollectionBasket(db, reqBody.email), {
      status: 201,
    });
  }

  return NextResponse.json(basket, { status: 200 });
}
