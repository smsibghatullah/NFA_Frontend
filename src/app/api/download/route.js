// app/api/download/route.js
import { NextResponse } from "next/server";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function GET() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/downloads`);
    const data = await res.json();

    const downloads = data.downloads.map((item) => ({
      ...item,
      file_url: `${API_BASE_URL}/uploads/downloads/${item.file}`, // <-- full URL to Laravel public folder
    }));

    return NextResponse.json({
      status: true,
      downloads,
    });
  } catch (error) {
    console.error("Error fetching downloads from Laravel:", error);
    return NextResponse.json({ status: false, downloads: [] });
  }
}
