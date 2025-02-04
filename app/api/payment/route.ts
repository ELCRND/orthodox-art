import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  if (req.method === "POST") {
    const reqBody = await req.json();

    const { data } = await axios({
      method: "POST",
      url: "https://api.yookassa.ru/v3/payments",
      headers: {
        "Content-type": "application/json",
        "Idempotence-Key": Date.now(),
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
          return_url: `${process.env.BASE_URL!}/catalog`,
        },
      },
    });
    try {
      return NextResponse.json(data, { status: 200 });
    } catch (error) {
      console.error("Ошибка при создании платежа:", error);
      return NextResponse.json({ status: 500 });
    }
  } else {
    return NextResponse.json({ status: 500 });
  }
}
