import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

type PaymentRequest = {
  amount: number;
  currency: string;
};

type PaymentResponse = {
  id: string;
  status: string;
  amount: {
    value: string;
    currency: string;
  };
  confirmation: {
    confirmation_url: string;
  };
};

export async function POST(req: NextRequest) {
  try {
    const reqBody: PaymentRequest = await req.json();

    if (!reqBody.amount || !reqBody.currency) {
      return NextResponse.json(
        { errorMessage: "Amount and currency are required" },
        { status: 400 }
      );
    }

    if (
      !process.env.SHOP_ID ||
      !process.env.SHOP_SECRET ||
      !process.env.BASE_URL
    ) {
      throw new Error("Missing required environment variables");
    }

    const { data } = await axios<PaymentResponse>({
      method: "POST",
      url: "https://api.yookassa.ru/v3/payments",
      headers: {
        "Content-type": "application/json",
        "Idempotence-Key": Date.now().toString(),
      },
      auth: {
        username: process.env.SHOP_ID!,
        password: process.env.SHOP_SECRET!,
      },
      data: {
        amount: {
          value: reqBody.amount,
          currency: reqBody.currency,
        },
        capture: true,
        confirmation: {
          type: "redirect",
          return_url: `${process.env.BASE_URL!}/basket`,
        },
      },
    });

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Ошибка при создании платежа:", error);

    return NextResponse.json(
      { errorMessage: "Internal Server Error" },
      { status: 500 }
    );
  }
}
