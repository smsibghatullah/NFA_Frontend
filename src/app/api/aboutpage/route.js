import { NextResponse } from "next/server";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const API_KEY = process.env.GENERAL_API_KEY; // .env.local me rakha hua key

export async function GET() {
    try {
        const res = await fetch(`${API_BASE_URL}/api/about-page/latest`, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
            },
        });
        
        const data = await res.json();
        // console.log(API_KEY);

    // Only return the data part
    return NextResponse.json({ about: data.data || {} });
  } catch (error) {
    console.error("Error fetching About Page from Laravel:", error);
    return NextResponse.json({ about: {}, error: error.message });
  }
}
