const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
export async function GET(req) {
  const token = req.headers.get("authorization")?.split(" ")[1];
  if (!token) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }

  try {
    const res = await fetch(`${API_BASE_URL}/api/candidates/applications/myapplications`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    return new Response(JSON.stringify(data), { status: res.status });
  } catch (err) {
    console.error("Error fetching my applications:", err);
    return new Response(JSON.stringify({ error: "Failed to fetch applications" }), {
      status: 500,
    });
  }
}
