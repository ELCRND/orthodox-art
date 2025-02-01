import { NextResponse } from "next/server";

import {
  clientPromise,
  createUserAndGenerateTokens,
  findUserByEmail,
  getDbAndReqBody,
} from "@/utils/apiRoutes";

export async function POST(req: Request) {
  try {
    const { db, reqBody } = await getDbAndReqBody(clientPromise, req);
    const user = await findUserByEmail(db, reqBody.email);

    if (user) {
      return NextResponse.json(
        {
          warningMessage: "Пользователь уже существует",
        },
        {
          status: 400,
        }
      );
    }

    const tokens = await createUserAndGenerateTokens(db, reqBody);

    return NextResponse.json(tokens, { status: 201 });
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
