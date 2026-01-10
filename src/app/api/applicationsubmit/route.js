import { NextResponse } from "next/server";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function POST(req) {
  try {
    const token = req.headers.get("authorization"); // Bearer token 그대로
    const formData = await req.formData();

    const res = await fetch(`${API_BASE_URL}/api/submit-application`, {
      method: "POST",
      headers: {
        Authorization: token,
      },
      body: formData,
    });

    const data = await res.json();

    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    console.error("Application submit error:", error);
    return NextResponse.json(
      { error: "Application submit failed" },
      { status: 500 }
    );
  }
}
