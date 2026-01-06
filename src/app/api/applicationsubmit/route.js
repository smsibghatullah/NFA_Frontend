import { NextResponse } from "next/server";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function POST(request) {
  try {
    const token = request.headers.get("authorization");
    if (!token) {
      return NextResponse.json({ detail: "Unauthorized" }, { status: 401 });
    }

    // Get form data (supports file uploads)
    const formData = await request.formData();

    // ✅ Forward request to backend API
    const backendResponse = await fetch(
      `${API_BASE_URL}/api/candidates/applications/upload-details/`,
      {
        method: "POST",
        headers: {
          Authorization: token,
        },
        body: formData,
      }
    );

    const data = await backendResponse.json();
    return NextResponse.json(data, { status: backendResponse.status });
  } catch (error) {
    console.error("Application Submit Error:", error);
    return NextResponse.json(
      { detail: "Server error while submitting application." },
      { status: 500 }
    );
  }
}
