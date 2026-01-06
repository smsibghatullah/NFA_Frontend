import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { to, subject, message } = body;

    if (!to) {
      return new Response(JSON.stringify({ success: false, error: "Recipient email missing" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

     let transporter = nodemailer.createTransport({
          host: "smtp.hostinger.com", // SMTP server address
          port: 465, // Port for secure email sending
          secure: true,
          auth: {
            user: process.env.EMAIL_USER, // SMTP username from environment variables
            pass: process.env.EMAIL_PASS, // SMTP password from environment variables
          },
          tls: {
            rejectUnauthorized: false,
          },
        });

    await transporter.sendMail({
      from: `"NFA Careers" <${process.env.EMAIL_USER}>`, // ✅ fixed sender
      to,
      subject,
      text: message,
    });

    return new Response(JSON.stringify({ success: true, message: "Email sent successfully!" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Email send error:", error);
    return new Response(JSON.stringify({ success: false, error: error.message || "Failed to send email" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
