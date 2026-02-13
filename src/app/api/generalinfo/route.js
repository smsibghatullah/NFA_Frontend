import { NextResponse } from "next/server";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const API_KEY = process.env.NEXT_PUBLIC_GENERAL_API_KEY; // ✅ .env.local me rakhi key

export async function GET() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/general-info`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${API_KEY}`, // ✅ API key sent in header
      },
      cache: "no-store", // always fresh data
    });

    if (!res.ok) {
      return NextResponse.json(
        { success: false, message: "Failed to fetch" },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error("API Error:", err);
    return NextResponse.json(
      { success: false, message: "Server Error" },
      { status: 500 }
    );
  }
}
