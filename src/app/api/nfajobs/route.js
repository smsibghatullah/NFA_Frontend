const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
export async function GET(req) {
  try {
    const token = req.headers.get("authorization");

    const response = await fetch(`${API_BASE_URL}/api/candidates/joblistings/`, {
      method: "GET",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: response.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
