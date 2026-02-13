import { NextResponse } from "next/server";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const API_KEY = process.env.NEXT_PUBLIC_GENERAL_API_KEY; // ✅ frontend accessible

export async function GET() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/forensic-posts`, {
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${API_KEY}`, // ✅ send API key
      },
    });

    const data = await res.json();

    if (data.success) {
      return NextResponse.json({ success: true, data: data.data });
    } else {
      return NextResponse.json({ success: false, data: [] });
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
