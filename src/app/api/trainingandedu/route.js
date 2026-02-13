// app/api/trainingandedu/route.js
import { NextResponse } from "next/server";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const API_KEY = process.env.NEXT_PUBLIC_GENERAL_API_KEY; // ✅ .env.local me rakhi key

export async function GET() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/trainingandeducation`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`, // ✅ Laravel ke validateApiKey ke liye
      },
      cache: "no-store", // always fresh data
    });

    if (!res.ok) {
      return NextResponse.json(
        { success: false, message: "Failed to fetch training & education data" },
        { status: res.status }
      );
    }

    const data = await res.json();

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Training & Education API Error:", error);
    return NextResponse.json(
      { success: false, message: "Server Error", error: error.message },
      { status: 500 }
    );
  }
}
