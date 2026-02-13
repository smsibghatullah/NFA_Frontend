// app/api/vision/route.js
import { NextResponse } from "next/server";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
const API_KEY = process.env.NEXT_PUBLIC_GENERAL_API_KEY; // ✅ .env.local me rakhi key

export async function GET() {
  try {
    const res = await fetch(`${baseUrl}/api/vision`, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${API_KEY}`, // ✅ Laravel validateApiKey ke liye
      },
      cache: "no-store", // fresh data
    });

    if (!res.ok) {
      return NextResponse.json(
        { success: false, message: "Failed to fetch vision data" },
        { status: res.status }
      );
    }

    const data = await res.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error("Vision API Error:", error);
    return NextResponse.json(
      { success: false, message: "Server Error", error: error.message },
      { status: 500 }
    );
  }
}
