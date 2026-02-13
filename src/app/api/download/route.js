import { NextResponse } from "next/server";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const API_KEY = process.env.GENERAL_API_KEY; // .env.local me rakha hua key

export async function GET() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/downloads`, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
      },
      // cache: "force-cache", // optional
    });

    const data = await res.json();

    const downloads = data.downloads.map((item) => ({
      ...item,
      file_url: `${API_BASE_URL}/uploads/downloads/${item.file}`, // full URL
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
