const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function GET(req) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/jobs`);
    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: response.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch {
    return new Response(JSON.stringify({ error: "Failed to fetch jobs" }), {
      status: 500,
    });
  }
}
