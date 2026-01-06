import { NextResponse } from "next/server";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function POST(request) {
  try {
    const body = await request.json();
    const token = request.headers.get("authorization");

    if (!token) {
      return NextResponse.json({ message: "Missing token" }, { status: 401 });
    }

    const res = await fetch(
      `${API_BASE_URL}/api/candidates/applications/eligibility-check/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(body),
      }
    );

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    console.error("Eligibility Check API Error:", error);
    return NextResponse.json(
      { message: "Internal Server Error while checking eligibility" },
      { status: 500 }
    );
  }
}
