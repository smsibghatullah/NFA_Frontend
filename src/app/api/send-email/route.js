import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req) {
  try {
    // Parse the request body to extract form data
    const { formData, attachment } = await req.json();

    // Configure the Nodemailer transporter
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

    // Define the email options based on whether files are provided
    let mailOptions;

    if (!attachment) {
      // If no files are provided, use this configuration
      mailOptions = {
        from: `"${formData.name}" <${process.env.EMAIL_USER}>`, // Sender's email address
        to: process.env.RECEIVER_EMAIL, // Recipient's email address
        subject: `Service Request: ${formData.service || "No service specified"}`, // Email subject
        html: `
          <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Ticket Notification</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  color: #333;
                }
                .container {
                  padding: 20px;
                  max-width: 600px;
                  margin: 0 auto;
                  border: 1px solid #ddd;
                  border-radius: 4px;
                }
                .header {
                  font-size: 20px;
                  font-weight: bold;
                  margin-bottom: 10px;
                }
                .content {
                  line-height: 1.5;
                }
                .footer {
                  text-align: center;
                  font-size: 12px;
                  margin-top: 20px;
                }
              </style>
            </head>
            <body>
              <div class="container">
                <h1 class="header">New Service Request</h1>
                <p class="content"><strong>Name:</strong> ${formData.name}</p>
                <p class="content"><strong>Email:</strong> ${formData.email}</p>
                <p class="content"><strong>Phone:</strong> ${formData.phone || "Not provided"}</p>
                <p class="content"><strong>Service:</strong> ${formData.service || "Not provided"}</p>
                <p class="content"><strong>Description:</strong> ${formData.description || "Not provided"}</p>
                <p class="content"><strong>Preferred Contact:</strong> ${formData.preferredContact || "Not provided"}</p>
                <p class="footer">©nfa.gov.pk 2025. All rights reserved.</p>
              </div>
            </body>
          </html>`,
      };
    } else {
      mailOptions = {
        from: `"${formData.name}" <${process.env.EMAIL_USER}>`, // Sender's email address
        to: process.env.RECEIVER_EMAIL, // Recipient's email address
        subject: `Service Request: ${formData.service || "No service specified"}`, // Email subject
        html: `
          <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Ticket Notification</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  color: #333;
                }
                .container {
                  padding: 20px;
                  max-width: 600px;
                  margin: 0 auto;
                  border: 1px solid #ddd;
                  border-radius: 4px;
                }
                .header {
                  font-size: 20px;
                  font-weight: bold;
                  margin-bottom: 10px;
                }
                .content {
                  line-height: 1.5;
                }
                .footer {
                  text-align: center;
                  font-size: 12px;
                  margin-top: 20px;
                }
              </style>
            </head>
            <body>
              <div class="container">
                <h1 class="header">New Service Request</h1>
                <p class="content"><strong>Name:</strong> ${formData.name}</p>
                <p class="content"><strong>Email:</strong> ${formData.email}</p>
                <p class="content"><strong>Phone:</strong> ${
                  formData.phone || "Not provided"
                }</p>
                <p class="content"><strong>Service:</strong> ${
                  formData.service || "Not provided"
                }</p>
                <p class="content"><strong>Description:</strong> ${
                  formData.description || "Not provided"
                }</p>
                <p class="content"><strong>Preferred Contact:</strong> ${
                  formData.preferredContact || "Not provided"
                }</p>
                <p>**Attachment:** ${attachment.name}</p>
                <p class="footer">©nfa.gov.pk 2025. All rights reserved.</p>
              </div>
            </body>
          </html>`,
        attachments: [
          {
            filename: attachment.name, // Name of the attachment
            content: attachment.data, // File content (base64 or buffer)
            encoding: "base64", // Ensure encoding is set to base64 if the file is base64-encoded
            contentType: attachment.type || "application/octet-stream", // Default to generic binary stream if no type is detected
          },
        ],
      };
    }

    // Send the email with the configured options
    await transporter.sendMail(mailOptions);

    // Respond with success message
    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (err) {
    // Respond with error message if something goes wrong
    console.error("Error processing request:", err);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
