import { NextResponse } from "next/server";
import { SITE } from "@/lib/constants";
import { getTurnstileSecretKey, verifyTurnstileToken } from "@/lib/turnstile";

const DEFAULT_CONTACT_WEBHOOK_URL =
  "https://ywwxvriolxwuqcwjaluh.supabase.co/functions/v1/form-submit/6592a5f3-d123-49a9-b5f9-67e89de8344c";

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  turnstileToken?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getRemoteIp(request: Request) {
  return (
    request.headers.get("cf-connecting-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    null
  );
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
  const turnstileToken = body.turnstileToken?.trim() ?? "";

  if (!name || !email) {
    return NextResponse.json(
      { error: "Name and email are required." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  if (getTurnstileSecretKey()) {
    const captcha = await verifyTurnstileToken(turnstileToken, getRemoteIp(request));
    if (!captcha.ok) {
      return NextResponse.json({ error: captcha.error }, { status: 400 });
    }
  }

  const webhookUrl =
    process.env.CONTACT_FORM_WEBHOOK_URL?.trim() || DEFAULT_CONTACT_WEBHOOK_URL;

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
    console.error("[contact-form] webhook failed", response.status);
    return NextResponse.json(
      { error: "Unable to deliver your message right now." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
