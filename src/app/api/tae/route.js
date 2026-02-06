import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const path = searchParams.get("path");

    if (!path) {
      return new NextResponse("Image path missing", { status: 400 });
    }

    // Laravel backend base URL
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL ;
    const imageUrl = `${baseUrl}/storage/${path}`;

    const response = await fetch(imageUrl);

    if (!response.ok) {
      return new NextResponse("Image not found", { status: 404 });
    }

    const contentType =
      response.headers.get("content-type") || "image/jpeg";

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=86400",
      },
    });
  } catch (error) {
    console.error("TAE Image Error:", error);
    return new NextResponse("Failed to load image", { status: 500 });
  }
}
