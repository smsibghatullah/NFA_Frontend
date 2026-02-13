// app/api/tenders/route.js
import { NextResponse } from "next/server";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL; // Laravel backend
const API_KEY = process.env.NEXT_PUBLIC_GENERAL_API_KEY;  // .env.local me rakhi key

export async function GET() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/tenders`, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${API_KEY}`, // ✅ Laravel ke validateApiKey ke liye
      },
      cache: "no-store", // always fresh
    });

    if (!res.ok) {
      return NextResponse.json(
        { success: false, message: "Failed to fetch tenders" },
        { status: res.status }
      );
    }

    const data = await res.json();

    return NextResponse.json({
      success: true,
      tenders: data.tenders || [],
    });
  } catch (error) {
    console.error("Tenders API Error:", error);
    return NextResponse.json(
      { success: false, tenders: [], error: error.message },
      { status: 500 }
    );
  }
}
