import { NextResponse } from "next/server";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const API_KEY = process.env.NEXT_PUBLIC_GENERAL_API_KEY; // ✅ .env.local me rakhi API key

export async function GET() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/our-services`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${API_KEY}`, // ✅ Laravel ke validateApiKey ke liye
      },
      cache: "no-store", // always fresh data
    });

    if (!res.ok) {
      return NextResponse.json(
        { success: false, message: "Failed to fetch services" },
        { status: res.status }
      );
    }

    const json = await res.json();

    // Laravel already sends full URLs for images
    return NextResponse.json({
      success: true,
      data: json.data || [],
    });
  } catch (err) {
    console.error("Our Services API Error:", err);
    return NextResponse.json(
      { success: false, message: "Server Error", error: err.message },
      { status: 500 }
    );
  }
}
