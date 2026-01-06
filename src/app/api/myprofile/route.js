import { NextResponse } from "next/server";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;


export async function GET(request) {
  try {
    const token = request.headers.get("authorization");
    if (!token) {
      return NextResponse.json({ detail: "Unauthorized" }, { status: 401 });
    }

    const res = await fetch(`${API_BASE_URL}/api/candidates/profile/me/`, {
      headers: { Authorization: token },
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    console.error("Profile fetch error:", error);
    return NextResponse.json({ detail: "Server error" }, { status: 500 });
  }
}
