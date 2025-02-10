import { clientPromise, getDbAndReqBody } from "@/utils/apiRoutes";
import { PushOperator } from "mongodb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { db, reqBody } = await getDbAndReqBody(clientPromise, req);
    const { email, id } = reqBody;

    if (!email || !id) {
      return NextResponse.json(
        { errorMessage: "Email and id product are required" },
        { status: 400 }
      );
    }

    const result = await db.collection("basket").updateOne(
      { email },
      {
        $pull: {
          products: { id: id },
        } as unknown as PushOperator<Document>,
      }
    );

    if (!result) {
      return NextResponse.json(
        { errorMessage: "Failed to delete product from basket" },
        { status: 500 }
      );
    }

    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.error("Error in POST /api/basket/deleteOne:", error);
    return NextResponse.json(
      { errorMessage: "Internal Server Error" },
      { status: 500 }
    );
  }
}
