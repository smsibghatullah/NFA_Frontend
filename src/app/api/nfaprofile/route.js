import { NextResponse } from "next/server";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
export async function POST(req) {
  try {
    const token = req.headers.get("authorization");
    const body = await req.json();

    const res = await fetch(`${API_BASE_URL}/api/nfauser/profile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch {
    return NextResponse.json({ error: "Profile create failed" }, { status: 500 });
  }
}
