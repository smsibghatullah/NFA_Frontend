import { NextResponse } from "next/server";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL; // Laravel backend
const API_KEY = process.env.NEXT_PUBLIC_GENERAL_API_KEY;   // .env.local

export async function POST(req) {
  try {
    const { cnic } = await req.json();

    if (!cnic || !/^\d{13}$/.test(cnic.replace(/\D/g, ""))) {
      return NextResponse.json(
        { success: false, message: "Invalid CNIC format" },
        { status: 400 }
      );
    }

    // Call Laravel API dynamically
    const laravelRes = await fetch(
      `${API_BASE_URL}/api/candidate?cnic=${encodeURIComponent(cnic)}&api_key=${API_KEY}`
    );

    if (!laravelRes.ok) {
      const errText = await laravelRes.text();
      return NextResponse.json(
        { success: false, message: "Failed to fetch candidate", error: errText },
        { status: laravelRes.status }
      );
    }

    const data = await laravelRes.json();

    // Laravel already returns single record, no need for extra filtering
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Candidate API Error:", error);
    return NextResponse.json(
      { success: false, message: "Server Error", error: error.message },
      { status: 500 }
    );
  }
}
