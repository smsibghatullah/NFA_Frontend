import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/our-services`, {
      cache: "no-store",
      headers: { Accept: "application/json" },
    });

    if (!res.ok) {
      return NextResponse.json(
        { success: false, message: "Failed to fetch services" },
        { status: 500 }
      );
    }

    const json = await res.json();

    // No need to rebuild image URLs, Laravel already sends full URLs
    return NextResponse.json({
      success: true,
      data: json.data || [],
    });
  } catch (err) {
    console.error("Our Services API Error:", err);
    return NextResponse.json(
      {
        success: false,
        message: "Server Error",
        error: err.message,
      },
      { status: 500 }
    );
  }
}
