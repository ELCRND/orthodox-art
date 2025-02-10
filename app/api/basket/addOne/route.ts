import { clientPromise, getDbAndReqBody } from "@/utils/apiRoutes";
import { PushOperator } from "mongodb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { db, reqBody } = await getDbAndReqBody(clientPromise, req);
    const { email, product } = reqBody;

    if (!email || !product) {
      return NextResponse.json(
        { errorMessage: "Email and product are required" },
        { status: 400 }
      );
    }

    const result = await db.collection("basket").findOneAndUpdate(
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

    if (!result) {
      return NextResponse.json(
        { errorMessage: "Failed to update basket" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { basket: result.value, status: 201 },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in POST /api/basket/addOne:", error);
    return NextResponse.json(
      { errorMessage: "Internal Server Error" },
      { status: 500 }
    );
  }
}
