import { NextResponse } from "next/server";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function GET(req) {
  try {
    const token = req.headers.get("authorization");
    const { searchParams } = new URL(req.url);
    const job_id = searchParams.get("job_id");

    const res = await fetch(
      `${API_BASE_URL}/api/check-eligibility?job_id=${job_id}`,
      {
        method: "GET",
        headers: {
          Authorization: token,
        },
      }
    );

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    return NextResponse.json(
      { error: "Eligibility check failed" },
      { status: 500 }
    );
  }
}
