const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function POST(req) {
  try {
    const body = await req.json();

    const response = await fetch(`${API_BASE_URL}/api/nfauser/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: response.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Login proxy error" }),
      { status: 500 }
    );
  }
}
