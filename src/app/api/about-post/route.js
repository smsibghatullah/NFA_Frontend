export const fetchAboutPost = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/about-post-latest`,
      { cache: "no-store" }
    );

    if (!res.ok) throw new Error("Failed to fetch About Post");

    const json = await res.json();
    return json?.data ?? null;
  } catch (err) {
    console.error("About API Error:", err);
    return null;
  }
};
