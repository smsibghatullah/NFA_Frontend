import { NextResponse } from "next/server";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
    
// Simulating your backend API response
export async function GET() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/forensic-posts`);
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
