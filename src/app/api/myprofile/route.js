import { NextResponse } from "next/server";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function GET(req) {
  try {
    const token = req.headers.get("authorization");

    const res = await fetch(`${API_BASE_URL}/api/nfauser/profile`, {
      headers: { Authorization: token },
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch {
    return NextResponse.json({ error: "Profile fetch failed" }, { status: 500 });
  }
}
