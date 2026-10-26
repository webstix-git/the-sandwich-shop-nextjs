import { NextResponse } from "next/server";
import { SITE } from "@/lib/constants";

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const subject = body.subject?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email) {
    return NextResponse.json(
      { error: "Name and email are required." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  const webhookUrl = process.env.CONTACT_FORM_WEBHOOK_URL?.trim();
  const resendApiKey = process.env.RESEND_API_KEY?.trim();
  const notifyTo = process.env.CONTACT_NOTIFICATION_TO?.trim() || SITE.email;

  if (webhookUrl) {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
        source: SITE.name,
        submittedAt: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Unable to deliver your message right now." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  }

  if (resendApiKey) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL?.trim() || "onboarding@resend.dev",
        to: [notifyTo],
        reply_to: email,
        subject: subject
          ? `Website contact: ${subject}`
          : `Website contact from ${name}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          subject ? `Subject: ${subject}` : null,
          "",
          message || "(No message provided)",
        ]
          .filter(Boolean)
          .join("\n"),
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Unable to deliver your message right now." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  }

  // Local / unset notification providers still accept the submission so the
  // thank-you flow works. Configure CONTACT_FORM_WEBHOOK_URL or RESEND_API_KEY
  // in production to deliver email notifications.
  console.info("[contact-form]", { name, email, subject, messageLength: message.length });
  return NextResponse.json({ ok: true, delivered: false });
}
