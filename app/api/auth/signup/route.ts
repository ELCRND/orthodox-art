import { NextResponse } from "next/server";

import {
  clientPromise,
  createUser,
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
          errorMessage: "Пользователь уже существует",
        },
        {
          status: 400,
        }
      );
    }

    const createdUser = await createUser(db, reqBody);

    if (!createdUser) throw new Error();

    return NextResponse.json({ status: 201 });
  } catch (error) {
    console.error("Error in POST /api/auth/signup:", error);
    return NextResponse.json(
      { errorMessage: "Internal Server Error" },
      { status: 500 }
    );
  }
}
