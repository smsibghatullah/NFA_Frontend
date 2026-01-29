import { NextResponse } from "next/server";

// App Router API route
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const path = searchParams.get("path");

  if (!path) {
    return NextResponse.json({ error: "Path is required" }, { status: 400 });
  }

  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/storage/${path}`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      return NextResponse.json(
        { error: "Image not found" },
        { status: response.status }
      );
    }

    const contentType = response.headers.get("content-type") || "image/jpeg";
    const arrayBuffer = await response.arrayBuffer();

    return new Response(arrayBuffer, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=31536000",
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch image" }, { status: 500 });
  }
}
