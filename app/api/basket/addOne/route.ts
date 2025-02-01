import { clientPromise, getDbAndReqBody } from "@/utils/apiRoutes";
import { PushOperator } from "mongodb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { db, reqBody } = await getDbAndReqBody(clientPromise, req);
    const { email, product } = reqBody;

    await db.collection("basket").findOneAndUpdate(
      { email },
      {
        $push: {
          products: product,
        } as unknown as PushOperator<Document>,
      },
      {
        returnDocument: "after",
      }
    );

    return NextResponse.json({ status: 201 });
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
