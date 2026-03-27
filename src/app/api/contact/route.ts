import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { firstName, lastName, company, phone, email, message } = body;

  if (!firstName || !lastName || !email) {
    return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
  }

  // For now, send to team email via Resend (or log for later)
  // TODO: integrate Resend API when ready
  console.log("Contact form submission:", { firstName, lastName, company, phone, email, message });

  // Send notification email via Resend if API key is available
  if (process.env.RESEND_API_KEY) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "base261 <noreply@base261.com>",
          to: ["team@base261.com"],
          subject: `New inquiry from ${firstName} ${lastName}${company ? ` (${company})` : ""}`,
          text: [
            `Name: ${firstName} ${lastName}`,
            company ? `Company: ${company}` : null,
            phone ? `Phone: ${phone}` : null,
            `Email: ${email}`,
            message ? `\nMessage:\n${message}` : null,
          ].filter(Boolean).join("\n"),
        }),
      });
    } catch {
      // Don't fail the request if email sending fails
      console.error("Failed to send notification email");
    }
  }

  return NextResponse.json({ success: true });
}
