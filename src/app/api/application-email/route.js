import nodemailer from "nodemailer";
export const runtime = "nodejs";

export async function POST(req) {
  try {
    const body = await req.json();
    const { to, subject, message } = body;

    if (!to) {
      return new Response(
        JSON.stringify({ success: false, error: "Recipient email missing" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    let transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
      pool: true, // ✅ enable pooling
      maxConnections: 5,
      maxMessages: 10,
      tls: { rejectUnauthorized: false },
    });

    await transporter.sendMail({
      from: `"NFA Careers" <${process.env.EMAIL_USER}>`, // ✅ fixed sender
      to,
      subject,
      text: message,
    });

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully!" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Email send error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || "Failed to send email",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
