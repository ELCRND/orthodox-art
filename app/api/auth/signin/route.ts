import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import {
  clientPromise,
  findUserByEmail,
  getDbAndReqBody,
} from "@/utils/apiRoutes";

export async function POST(req: Request) {
  try {
    const { db, reqBody } = await getDbAndReqBody(clientPromise, req);
    const user = await findUserByEmail(db, reqBody.email);

    if (!user) {
      return NextResponse.json(
        {
          errorMessage: "Логин или пароль не совпадают",
        },
        {
          status: 400,
        }
      );
    }

    if (!bcrypt.compareSync(reqBody.password, user.password)) {
      return NextResponse.json(
        {
          errorMessage: "Логин или пароль не совпадают",
        },
        {
          status: 400,
        }
      );
    }

    const response = NextResponse.json(
      {
        user: {
          email: user.email,
          name: user.name,
        },
      },
      { status: 200 }
    );

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error("Error in POST /api/auth/signin:", error);
    return NextResponse.json(
      { errorMessage: "Internal Server Error" },
      { status: 500 }
    );
  }
}
