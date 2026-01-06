// /app/api/nfaprofile/route.js
import { NextResponse } from "next/server";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
export async function POST(request) {
  try {
    const body = await request.json();
    const token = request.headers.get("authorization");

    if (!token) {
      return NextResponse.json({ message: "Missing token" }, { status: 401 });
    }

    const res = await fetch(`${API_BASE_URL}/api/candidates/profile/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token, // 🔥 Forward the same Bearer token
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    console.error("Profile API error:", error);
    return NextResponse.json(
      { message: "Server error while creating profile" },
      { status: 500 }
    );
  }
}
