import { NextResponse } from "next/server";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// 👇 Backend Laravel API URL

export async function GET() {
  try {
    const res = await fetch("http://127.0.0.1:8000/api/general-info", {
  method: "GET",
  headers: {
    Accept: "application/json", // force JSON response
  },
  cache: "no-store",
});


    if (!res.ok) {
      return NextResponse.json({ success: false, message: "Failed to fetch" }, { status: 500 });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error("API Error:", err);
    return NextResponse.json({ success: false, message: "Server Error" }, { status: 500 });
  }
}
