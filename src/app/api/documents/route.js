const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
export async function GET() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/documents`, {
      cache: "no-store",
    });

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ status: false, message: "Failed to fetch documents" }),
      { status: 500 }
    );
  }
}
