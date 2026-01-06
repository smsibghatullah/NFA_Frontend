import fs from "fs";
import path from "path";
import * as XLSX from "xlsx";

export async function POST(req) {
  try {
    // Get CNIC from request body
    const { cnic } = await req.json();

    if (!cnic || !/^\d{13}$/.test(cnic)) {
      return new Response(
        JSON.stringify({ error: "Invalid CNIC format" }),
        { status: 400 }
      );
    }

    // Read Excel file
    const filePath = path.join(process.cwd(), "private-files", "my-secret.xlsx");
    const fileBuffer = fs.readFileSync(filePath);
    const workbook = XLSX.read(fileBuffer, { type: "buffer" });
    const sheetName = workbook.SheetNames[0];
    const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

    // Match CNIC (remove dashes/spaces from file CNICs)
    const matches = data.filter((row) => {
      let rowCnic = row.CNIC;
      if (typeof rowCnic === "number") rowCnic = rowCnic.toString();
      rowCnic = rowCnic?.toString().replace(/\D/g, "").trim();
      return rowCnic === cnic;
    });

    if (matches.length === 0) {
      return new Response(
        JSON.stringify({ error: "No record found" }),
        { status: 404 }
      );
    }

    return new Response(JSON.stringify(matches), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("❌ Error reading Excel file:", error);
    return new Response(
      JSON.stringify({ error: "Failed to load Excel file" }),
      { status: 500 }
    );
  }
}
