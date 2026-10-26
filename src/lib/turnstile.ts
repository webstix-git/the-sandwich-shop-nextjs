const SITEVERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

/** Public site key — prefers NEXT_PUBLIC_, falls back to server-only TURNSTILE_SITE_KEY. */
export function getTurnstileSiteKey() {
  return (
    process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim() ||
    process.env.TURNSTILE_SITE_KEY?.trim() ||
    ""
  );
}

export function getTurnstileSecretKey() {
  return process.env.TURNSTILE_SECRET_KEY?.trim() || "";
}

type SiteverifyResult = {
  success: boolean;
  "error-codes"?: string[];
};

export async function verifyTurnstileToken(
  token: string,
  remoteIp?: string | null,
): Promise<{ ok: true } | { ok: false; error: string }> {
  const secret = getTurnstileSecretKey();

  if (!secret) {
    return { ok: false, error: "Captcha is not configured." };
  }

  if (!token) {
    return { ok: false, error: "Please complete the captcha." };
  }

  try {
    const response = await fetch(SITEVERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret,
        response: token,
        ...(remoteIp ? { remoteip: remoteIp } : {}),
      }),
    });

    const result = (await response.json()) as SiteverifyResult;

    if (!result.success) {
      return { ok: false, error: "Captcha verification failed. Please try again." };
    }

    return { ok: true };
  } catch {
    return { ok: false, error: "Unable to verify captcha right now." };
  }
}
