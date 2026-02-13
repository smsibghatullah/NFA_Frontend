const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const API_KEY = process.env.GENERAL_API_KEY;

export async function GET() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/documents`, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
      },
  // next: { revalidate: 60 }, // ✅ 60 sec cache
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
