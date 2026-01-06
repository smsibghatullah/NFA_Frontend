const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
export async function GET() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/candidates/documents/`);
    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error) {
    console.error("Proxy error:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch documents" }), {
      status: 500,
    });
  }
}
