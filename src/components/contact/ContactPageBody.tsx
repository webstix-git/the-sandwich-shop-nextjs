import Image from "next/image";
import Link from "next/link";
import {
  AddressLink,
  ContactMethodLine,
} from "@/components/contact/ContactInfoLink";
import {
  ChevronRightIcon,
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "@/components/icons";
import {
  CONTACT_FORM_SECTION,
  CONTACT_HOURS_SECTION,
  CONTACT_MAP_CTA,
  CONTACT_METHODS,
  CONTACT_METHODS_SECTION,
} from "@/lib/contact-page-data";
import { HOURS, SITE } from "@/lib/constants";

const METHOD_ICONS = {
  gold: MapPinIcon,
  cyan: PhoneIcon,
  pink: MailIcon,
} as const;

const METHOD_ACCENT = {
  gold: {
    icon: "bg-brand-pink-light text-brand-pink-dark",
    headline: "text-brand-pink-dark",
    cta: "text-brand-pink-dark hover:text-brand-pink",
    ring: "hover:ring-brand-pink/20",
  },
  cyan: {
    icon: "bg-brand-cyan-light text-brand-cyan-dark",
    headline: "text-brand-cyan-dark",
    cta: "text-brand-cyan-dark hover:text-brand-cyan",
    ring: "hover:ring-brand-cyan/20",
  },
  pink: {
    icon: "bg-brand-pink-light text-brand-pink-dark",
    headline: "text-brand-pink-dark",
    cta: "text-brand-pink-dark hover:text-brand-pink",
    ring: "hover:ring-brand-pink/20",
  },
} as const;

function ContactMethodsSection() {
  const section = CONTACT_METHODS_SECTION;

  return (
    <section className="border-t border-brand-border/60 bg-white px-7 py-20 md:py-24">
      <div className="mx-auto max-w-[1180px]">
        <header className="mb-12 max-w-[640px] md:mb-14">
          <p className="inline-flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-pink-dark sm:text-[11px]">
            <span className="h-px w-8 bg-brand-pink/80" aria-hidden />
            {section.eyebrow}
          </p>
          <h2 className="mt-4 text-[clamp(1.85rem,3.5vw,2.5rem)] font-extrabold leading-[1.06] tracking-[-0.04em] text-brand-dark text-balance">
            {section.title}{" "}
            <span className="text-brand-pink-dark">{section.highlight}</span>
          </h2>
          <p className="mt-5 max-w-[52ch] text-[16px] leading-[1.72] text-brand-body md:text-[17px]">
            {section.description}
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-3 md:gap-7">
          {CONTACT_METHODS.map((method) => {
            const Icon = METHOD_ICONS[method.accent];
            const accent = METHOD_ACCENT[method.accent];

            return (
              <article
                key={method.title}
                className={`flex flex-col rounded-[28px] border border-brand-card-border bg-brand-bg p-7 shadow-[0_12px_36px_rgba(52,36,47,0.06)] ring-1 ring-transparent transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(52,36,47,0.1)] md:p-8 ${accent.ring}`}
              >
                <span
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${accent.icon}`}
                >
                  <Icon size={22} />
                </span>
                <h3 className="mt-5 text-[clamp(1.35rem,2.5vw,1.65rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-brand-dark">
                  {method.title}{" "}
                  <span className={accent.headline}>{method.highlight}</span>
                </h3>
                <p className="mt-3 text-[16px] leading-[1.72] text-brand-body">
                  {method.description}
                </p>
                <div className="mt-4 space-y-0.5">
                  {method.lines.map((line) => (
                    <ContactMethodLine key={line} line={line} />
                  ))}
                </div>
                {method.action ? (
                  <Link
                    href={method.action.href}
                    target={method.action.external ? "_blank" : undefined}
                    rel={
                      method.action.external ? "noopener noreferrer" : undefined
                    }
                    className={`group mt-6 inline-flex items-center gap-2 text-[16px] font-semibold transition-colors ${accent.cta}`}
                  >
                    {method.action.label}
                    <ChevronRightIcon
                      size={16}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </Link>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ContactHoursAndFormSection() {
  const hours = CONTACT_HOURS_SECTION;
  const form = CONTACT_FORM_SECTION;

  const inputClassName =
    "w-full rounded-2xl border border-brand-border/80 bg-white px-4 py-3.5 text-[16px] text-brand-dark shadow-[0_2px_8px_rgba(52,36,47,0.04)] outline-none transition-all placeholder:text-brand-subtle focus:border-brand-pink/50 focus:shadow-[0_4px_16px_rgba(237,78,141,0.12)]";

  return (
    <section className="border-t border-brand-border/60 bg-[linear-gradient(180deg,#fdf8f3_0%,#fff_50%,#fdf8f3_100%)] px-7 py-20 md:py-24">
      <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <p className="inline-flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-pink-dark sm:text-[11px]">
            <span className="h-px w-8 bg-brand-pink/80" aria-hidden />
            {form.eyebrow}
          </p>
          <h2 className="mt-4 text-[clamp(1.85rem,3.5vw,2.35rem)] font-extrabold leading-[1.06] tracking-[-0.04em] text-brand-dark">
            {form.title}{" "}
            <span className="text-brand-pink-dark">{form.highlight}</span>
          </h2>
          <p className="mt-4 text-[16px] leading-[1.72] text-brand-body md:text-[17px]">
            {form.description}
          </p>

          <form className="mt-8 space-y-5 rounded-[28px] border border-brand-card-border bg-white p-7 shadow-[0_16px_48px_rgba(52,36,47,0.08)] md:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-[13px] font-semibold uppercase tracking-[0.12em] text-brand-nav"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  className={inputClassName}
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-[13px] font-semibold uppercase tracking-[0.12em] text-brand-nav"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@email.com"
                  className={inputClassName}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="contact-subject"
                className="mb-2 block text-[13px] font-semibold uppercase tracking-[0.12em] text-brand-nav"
              >
                Subject
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
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder="Tell us what's on your mind..."
                className={`${inputClassName} resize-none`}
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-brand-pink px-8 py-4 text-[17px] font-semibold text-white shadow-[0_10px_28px_rgba(237,78,141,0.32)] transition-all hover:-translate-y-0.5 hover:bg-brand-pink-hover sm:w-auto"
            >
              {form.submitLabel}
            </button>
          </form>
        </div>

        <div>
          <p className="inline-flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-pink-dark sm:text-[11px]">
            <span className="h-px w-8 bg-brand-pink/80" aria-hidden />
            {hours.eyebrow}
          </p>
          <h2 className="mt-4 text-[clamp(1.85rem,3.5vw,2.35rem)] font-extrabold leading-[1.06] tracking-[-0.04em] text-brand-dark">
            {hours.title}{" "}
            <span className="text-brand-pink-dark">{hours.highlight}</span>
          </h2>
          <p className="mt-4 text-[16px] leading-[1.72] text-brand-body md:text-[17px]">
            {hours.note}
          </p>

          <div className="mt-8 overflow-hidden rounded-[24px] border border-brand-card-border bg-white shadow-[0_12px_36px_rgba(52,36,47,0.06)]">
            <div className="flex items-center gap-3 border-b border-brand-border/60 bg-brand-bg px-6 py-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-cyan-light text-brand-cyan-dark">
                <ClockIcon size={20} />
              </span>
              <p className="text-[16px] font-semibold text-brand-dark">
                Store hours
              </p>
            </div>
            <ul className="divide-y divide-brand-border/50 px-6 py-2">
              {HOURS.map((row) => (
                <li
                  key={row.day}
                  className="flex items-center justify-between gap-4 py-4 text-[16px]"
                >
                  <span className="font-semibold text-brand-dark">{row.day}</span>
                  <span className="text-brand-body">{row.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 overflow-hidden rounded-[24px] border border-brand-card-border bg-white shadow-[0_12px_36px_rgba(52,36,47,0.06)]">
            <div className="flex items-center justify-between gap-4 border-b border-brand-border/60 bg-brand-bg px-6 py-4">
              <Link
                href={SITE.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-opacity hover:opacity-80"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-pink-light text-brand-pink-dark">
                  <MapPinIcon size={20} />
                </span>
                <div>
                  <p className="text-[16px] font-semibold text-brand-dark">
                    {SITE.address}
                  </p>
                  <p className="text-[14px] text-brand-body">{SITE.city}</p>
                </div>
              </Link>
            </div>
            <div className="relative aspect-[4/3] w-full bg-brand-bg">
              <iframe
                title={`Map showing ${SITE.name} at ${SITE.address}, ${SITE.city}`}
                src={SITE.mapsEmbedSrc}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="border-t border-brand-border/60 bg-white px-6 py-4">
              <Link
                href={SITE.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-[16px] font-semibold text-brand-pink-dark transition-colors hover:text-brand-pink"
              >
                Get directions
                <ChevronRightIcon
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactMapCtaSection() {
  const cta = CONTACT_MAP_CTA;

  return (
    <section className="px-7 pb-16 pt-4 md:pb-20 md:pt-6">
      <div className="relative mx-auto max-w-[1180px] overflow-hidden rounded-[28px] border border-brand-pink/35 bg-brand-footer pb-[70px] shadow-[0_24px_64px_rgba(50,39,30,0.22)]">
        <Image
          src={cta.backgroundImage}
          alt=""
          fill
          sizes="(max-width: 1180px) 100vw, 1180px"
          className="object-cover object-[center_0%]"
          unoptimized
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-black/48"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/88 via-black/62 to-black/28"
          aria-hidden
        />

        <div className="relative z-[2] grid items-center gap-10 px-7 pt-8 md:grid-cols-[1.05fr_0.95fr] md:gap-12 md:px-10 md:pt-10 lg:px-12 lg:pt-12">
          <div>
            <span className="inline-flex items-center rounded-full border border-brand-pink/50 bg-black/25 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-pink-light">
              {cta.badge}
            </span>

            <h2 className="mt-5 text-[clamp(1.75rem,3.5vw,2.35rem)] font-extrabold leading-[1.12] tracking-[-0.03em] text-white text-balance [text-shadow:0_2px_20px_rgba(0,0,0,0.45)]">
              {cta.title}{" "}
              <span className="text-brand-pink-light">{cta.titleAccent}</span>
            </h2>

            <p className="mt-4 max-w-[520px] text-[16px] leading-[1.75] text-[#ece4dc] md:text-[17px]">
              {cta.description}
            </p>

            <div className="mt-7 space-y-3">
              <p className="flex items-start gap-3 text-[16px] text-[#ece4dc] md:text-[17px]">
                <MapPinIcon size={18} className="mt-0.5 shrink-0 text-brand-cyan-accent" />
                <AddressLink variant="on-dark" className="hover:!text-brand-pink-light" />
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3.5">
              <Link
                href={cta.directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-pink px-7 py-3.5 text-[16px] font-extrabold !text-white shadow-[0_10px_28px_rgba(237,78,141,0.35)] transition-all hover:-translate-y-0.5 hover:bg-brand-pink-hover md:text-[17px]"
              >
                {cta.directionsLabel}
              </Link>
              <Link
                href={SITE.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border-2 border-white bg-white px-7 py-3 text-[16px] font-bold text-brand-dark transition-all hover:-translate-y-0.5 hover:bg-brand-cream md:text-[17px]"
              >
                View on map
              </Link>
            </div>
          </div>

          <div className="hidden min-h-[280px] md:block" aria-hidden />
        </div>
      </div>
    </section>
  );
}

export function ContactPageBody() {
  return (
    <>
      <ContactMethodsSection />
      <ContactHoursAndFormSection />
      <ContactMapCtaSection />
    </>
  );
}
