"use client";

import { useRouter } from "next/navigation";
import { useRef, useState, type FormEvent } from "react";
import {
  TurnstileWidget,
  type TurnstileWidgetHandle,
} from "@/components/contact/TurnstileWidget";
import { CONTACT_FORM_SECTION } from "@/lib/contact-page-data";

const inputClassName =
  "w-full rounded-2xl border border-brand-border/80 bg-white px-4 py-3.5 text-[16px] text-brand-dark shadow-[0_2px_8px_rgba(52,36,47,0.04)] outline-none transition-all placeholder:text-brand-subtle focus:border-brand-pink/50 focus:shadow-[0_4px_16px_rgba(237,78,141,0.12)]";

type ContactFormProps = {
  turnstileSiteKey?: string;
};

export function ContactForm({ turnstileSiteKey = "" }: ContactFormProps) {
  const router = useRouter();
  const form = CONTACT_FORM_SECTION;
  const turnstileRef = useRef<TurnstileWidgetHandle>(null);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const siteKey =
    turnstileSiteKey ||
    process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim() ||
    "";
  const captchaRequired = Boolean(siteKey);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    const formData = new FormData(event.currentTarget);
    const tokenFromWidget =
      turnstileToken ||
      String(formData.get("cf-turnstile-response") ?? "").trim();

    if (captchaRequired && !tokenFromWidget) {
      setError("Please complete the captcha.");
      return;
    }

    setSubmitting(true);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      subject: String(formData.get("subject") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
      turnstileToken: tokenFromWidget,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(data?.error || "Unable to send your message.");
      }

      router.push("/thank-you");
    } catch (submitError) {
      turnstileRef.current?.reset();
      setTurnstileToken(null);
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Unable to send your message.",
      );
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="mt-8 space-y-5 rounded-[28px] border border-brand-card-border bg-white p-7 shadow-[0_16px_48px_rgba(52,36,47,0.08)] md:p-8"
    >
      <p className="text-[14px] leading-relaxed text-brand-muted">
        Fields marked with an asterisk (
        <span className="font-semibold text-red-600">*</span>) are required.
      </p>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-name"
            className="mb-2 block text-[13px] font-semibold uppercase tracking-[0.12em] text-brand-nav"
          >
            Name:
            <span className="text-red-600" aria-hidden>
              {" "}
              *
            </span>
            <span className="sr-only"> required</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            required
            className={inputClassName}
          />
        </div>
        <div>
          <label
            htmlFor="contact-email"
            className="mb-2 block text-[13px] font-semibold uppercase tracking-[0.12em] text-brand-nav"
          >
            Email:
            <span className="text-red-600" aria-hidden>
              {" "}
              *
            </span>
            <span className="sr-only"> required</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@email.com"
            required
            className={inputClassName}
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="contact-subject"
          className="mb-2 block text-[13px] font-semibold uppercase tracking-[0.12em] text-brand-nav"
        >
          Subject:
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          placeholder="How can we help?"
          className={inputClassName}
        />
      </div>
      <div>
        <label
          htmlFor="contact-message"
          className="mb-2 block text-[13px] font-semibold uppercase tracking-[0.12em] text-brand-nav"
        >
          Message:
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder="Tell us what's on your mind..."
          className={`${inputClassName} resize-none`}
        />
      </div>
      {captchaRequired ? (
        <TurnstileWidget
          ref={turnstileRef}
          siteKey={siteKey}
          onTokenChange={setTurnstileToken}
        />
      ) : null}
      {error ? (
        <p className="text-[15px] font-medium text-red-600" role="alert">
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={submitting || (captchaRequired && !turnstileToken)}
        className="w-full rounded-full bg-brand-pink px-8 py-4 text-[17px] font-semibold text-white shadow-[0_10px_28px_rgba(237,78,141,0.32)] transition-all hover:-translate-y-0.5 hover:bg-brand-pink-hover disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {submitting ? "Sending..." : form.submitLabel}
      </button>
    </form>
  );
}
