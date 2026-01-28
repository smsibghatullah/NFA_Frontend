// src/app/api/nfaprofile/route.js
import { NextResponse } from "next/server";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function POST(req) {
  try {
    const token = req.headers.get("authorization");

    if (!token) {
      return NextResponse.json(
        { status: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    const formData = await req.formData();

    const res = await fetch(`${API_BASE_URL}/api/nfauser/profile`, {
      method: "POST",
      headers: {
        Authorization: token.startsWith("Bearer ")
          ? token
          : `Bearer ${token}`,
      },
      body: formData,
    });

    const text = await res.text(); // 🔥 read as TEXT first

    // ❌ backend HTML error
    if (!text.startsWith("{")) {
      console.error("BACKEND HTML ERROR:\n", text);
      return NextResponse.json(
        {
          status: false,
          error: "Backend error (not JSON). Check Laravel logs.",
        },
        { status: 500 }
      );
    }

    const data = JSON.parse(text);
    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    console.error("NFAPROFILE ERROR:", error);
    return NextResponse.json(
      { status: false, error: "Profile create failed" },
      { status: 500 }
    );
  }
}
