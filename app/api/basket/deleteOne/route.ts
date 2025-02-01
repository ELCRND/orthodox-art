import { clientPromise, getDbAndReqBody } from "@/utils/apiRoutes";
import { PushOperator } from "mongodb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { db, reqBody } = await getDbAndReqBody(clientPromise, req);
    const { email, id } = reqBody;

    await db.collection("basket").updateOne(
      { email },
      {
        $pull: {
          products: { id: id },
        } as unknown as PushOperator<Document>,
      }
    );

    return NextResponse.json({ status: 200 });
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
