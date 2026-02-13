import { NextResponse } from "next/server";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const API_KEY = process.env.NEXT_PUBLIC_GENERAL_API_KEY; // .env.local me rakha hua key
// .env.local me rakha hua key
// console.log("testtsdsdsdsdsdsdsdsdddsdsd",API_KEY);
export const fetchAboutPost = async () => {
  try {

    const res = await fetch(`${API_BASE_URL}/api/about-post-latest`, {
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${API_KEY}`, // ✅ API key sent in header
      },
    });
    
    if (!res.ok) throw new Error("Failed to fetch About Post");

    const json = await res.json();
    return json?.data ?? null;
  } catch (err) {
    console.error("About API Error:", err);
    return null;
  }
};
