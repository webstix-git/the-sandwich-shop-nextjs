import Image from "next/image";
import Link from "next/link";
import {
  AddressLink,
  PhoneLink,
} from "@/components/contact/ContactInfoLink";
import {
  ChevronRightIcon,
  ClockIcon,
  MapPinIcon,
  PhoneIcon,
} from "@/components/icons";
import {
  ABOUT_CTA,
  ABOUT_FEATURE,
  ABOUT_PHILOSOPHY,
  ABOUT_SIGNATURE,
  ABOUT_SIGNATURE_SECTION,
  ABOUT_VALUES,
} from "@/lib/about-page-data";
import { HOURS, SITE } from "@/lib/constants";
import { foodImageClassName } from "@/lib/dessert-cups-image";

function AboutFeatureSection() {
  const feature = ABOUT_FEATURE;

  return (
    <section className="bg-white px-7 py-16 md:py-24">
      <div className="mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative order-2 lg:order-1">
          <div className="overflow-hidden rounded-[24px] border-[6px] border-white shadow-[0_22px_52px_rgba(52,36,47,0.14)]">
            <Image
              src={feature.image}
              alt={feature.imageAlt}
              width={600}
              height={450}
              className="h-[300px] w-full object-cover object-[center_42%] md:h-[420px]"
              unoptimized
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="inline-flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-pink-dark sm:text-[11px]">
            <span className="h-px w-8 bg-brand-pink/80" aria-hidden />
            {feature.eyebrow}
          </p>
          <h2 className="mt-4 text-[clamp(1.85rem,3.5vw,2.5rem)] font-extrabold leading-[1.06] tracking-[-0.04em] text-brand-dark">
            {feature.title}{" "}
            <span className="text-brand-pink-dark">{feature.highlight}</span>
          </h2>
          {feature.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-4 text-[16px] leading-[1.72] text-brand-nav md:text-[17px]"
            >
              {paragraph}
            </p>
          ))}
          <Link
            href={feature.ctaHref}
            className="group mt-8 inline-flex items-center gap-2 text-[16px] font-semibold text-brand-pink transition-colors hover:text-brand-pink-hover"
          >
            {feature.ctaLabel}
            <ChevronRightIcon
              size={18}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

function AboutValuesSection() {
  const values = ABOUT_VALUES;

  return (
    <section className="border-t border-brand-border/60 bg-brand-warm-cream px-7 py-20 md:py-24">
      <div className="mx-auto max-w-[1180px]">
        <div className="mx-auto max-w-[640px] text-center">
          <p className="inline-flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-pink-dark sm:text-[11px]">
            <span className="h-px w-8 bg-brand-pink/80" aria-hidden />
            {values.eyebrow}
          </p>
          <h2 className="mt-4 text-[clamp(1.85rem,3.5vw,2.5rem)] font-extrabold leading-[1.06] tracking-[-0.04em] text-brand-dark text-balance">
            {values.title}{" "}
            <span className="text-brand-pink-dark">{values.highlight}</span>
          </h2>
          <p className="mt-5 text-[16px] leading-[1.72] text-brand-nav md:text-[17px]">
            {values.description}
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:mt-14 md:grid-cols-3 md:gap-6">
          {values.items.map((item, index) => {
            const numberClass =
              index === 1
                ? "bg-brand-cyan-light text-brand-cyan-dark"
                : "bg-brand-pink-light text-brand-pink-dark";

            return (
            <article
              key={item.number}
              className="group flex flex-col rounded-[24px] border border-brand-card-border bg-white px-7 py-8 shadow-[0_12px_36px_rgba(52,36,47,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(52,36,47,0.1)] md:px-8 md:py-9"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[13px] font-extrabold tracking-[0.04em] ${numberClass}`}>
                  {item.number}
                </span>
                <span className="h-px flex-1 bg-brand-border/70" aria-hidden />
              </div>
              <h3 className="text-[21px] font-extrabold leading-[1.2] tracking-[-0.02em] text-brand-dark">
                {item.title}
              </h3>
              <p className="mt-3.5 text-[16px] leading-[1.78] text-brand-body md:text-[17px]">
                {item.description}
              </p>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AboutPhilosophySection() {
  const philosophy = ABOUT_PHILOSOPHY;

  return (
    <section className="relative overflow-hidden border-t border-brand-border/60 bg-white px-7 py-20 md:py-24">
      <div
        className="pointer-events-none absolute -left-20 top-12 h-64 w-64 rounded-full bg-brand-gold/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-8 h-56 w-56 rounded-full bg-brand-pink/8 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <p className="inline-flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-pink-dark sm:text-[11px]">
            <span className="h-px w-8 bg-brand-pink/80" aria-hidden />
            {philosophy.eyebrow}
          </p>
          <h2 className="mt-4 text-[clamp(1.85rem,3.5vw,2.5rem)] font-extrabold leading-[1.06] tracking-[-0.04em] text-brand-dark text-balance">
            {philosophy.title}{" "}
            <span className="text-brand-pink-dark">{philosophy.highlight}</span>
          </h2>
          <p className="mt-5 max-w-[54ch] text-[16px] leading-[1.75] text-brand-body md:text-[17px]">
            {philosophy.intro}
          </p>

          <ul className="mt-9 space-y-5 md:mt-10">
            {philosophy.principles.map((principle, index) => {
              const numberClass =
                index === 1
                  ? "bg-brand-cyan-light text-brand-cyan-dark"
                  : "bg-brand-pink-light text-brand-pink-dark";

              return (
              <li
                key={principle.label}
                className="rounded-[20px] border border-brand-card-border bg-brand-warm-cream px-5 py-5 shadow-[0_8px_28px_rgba(52,36,47,0.05)] md:px-6 md:py-5"
              >
                <div className="flex items-start gap-4">
                  <span className={`mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-[12px] font-extrabold ${numberClass}`}>
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-[17px] font-extrabold tracking-[-0.02em] text-brand-dark md:text-[18px]">
                      {principle.label}
                    </h3>
                    <p className="mt-1.5 text-[16px] leading-[1.72] text-brand-body md:text-[17px]">
                      {principle.text}
                    </p>
                  </div>
                </div>
              </li>
              );
            })}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border-[6px] border-white shadow-[0_24px_60px_rgba(52,36,47,0.16)] sm:aspect-[5/6] lg:aspect-[4/5]">
            <Image
              src={philosophy.image}
              alt={philosophy.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-brand-dark/10 to-transparent"
              aria-hidden
            />
            <div className="absolute inset-x-0 bottom-0 p-7 md:p-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-pink-light">
                The Sandwich Shop &amp; Dirty Soda Bar
              </p>
              <p className="mt-2 max-w-[28ch] text-[clamp(1.25rem,2.5vw,1.5rem)] font-extrabold leading-[1.15] tracking-[-0.03em] text-white [text-shadow:0_2px_16px_rgba(0,0,0,0.4)]">
                Downtown La Crosse&apos;s spot for stacked subs &amp; dirty sodas.
              </p>
            </div>
          </div>

          <Link
            href={SITE.mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute -bottom-4 -left-3 hidden rounded-2xl border-4 border-white bg-brand-footer px-5 py-4 shadow-[0_14px_36px_rgba(52,36,47,0.18)] transition-transform hover:-translate-y-0.5 sm:block md:-bottom-5 md:-left-5"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-pink-light">
              Locally owned
            </p>
            <p className="mt-1 text-[16px] font-extrabold leading-tight text-white">
              {SITE.address}
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}

const SIGNATURE_ACCENT_STYLES = {
  gold: {
    eyebrow: "text-brand-pink-light",
    line: "bg-brand-pink/85",
    headline: "text-brand-pink-dark",
    cta: "text-brand-pink-dark group-hover:text-brand-pink",
    ctaCircle: "bg-brand-pink-light text-brand-pink-dark group-hover:bg-brand-pink group-hover:text-white",
    ring: "group-hover:ring-brand-pink/25",
  },
  cyan: {
    eyebrow: "text-brand-cyan-light",
    line: "bg-brand-cyan/85",
    headline: "text-brand-cyan-dark",
    cta: "text-brand-cyan-dark group-hover:text-brand-cyan",
    ctaCircle: "bg-brand-cyan-light text-brand-cyan-dark group-hover:bg-brand-cyan group-hover:text-white",
    ring: "group-hover:ring-brand-cyan/25",
  },
  pink: {
    eyebrow: "text-brand-pink-light",
    line: "bg-brand-pink/85",
    headline: "text-brand-pink-dark",
    cta: "text-brand-pink-dark group-hover:text-brand-pink",
    ctaCircle: "bg-brand-pink-light text-brand-pink-dark group-hover:bg-brand-pink group-hover:text-white",
    ring: "group-hover:ring-brand-pink/25",
  },
} as const;

function AboutSignatureCard({
  item,
}: {
  item: (typeof ABOUT_SIGNATURE)[number];
}) {
  const accentStyles = SIGNATURE_ACCENT_STYLES[item.accent];

  return (
    <Link href={item.href} className="group block h-full">
      <article
        className={`flex h-full flex-col overflow-hidden rounded-[32px] bg-white p-2.5 shadow-[0_16px_48px_rgba(52,36,47,0.08)] ring-1 ring-brand-border/50 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_32px_64px_rgba(52,36,47,0.14)] ${accentStyles.ring}`}
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-[24px]">
          <Image
            src={item.image}
            alt={item.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 380px"
            className={foodImageClassName(
              item.image,
              "object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]",
            )}
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/5 transition-opacity duration-500 group-hover:from-black/80"
            aria-hidden
          />
          <div className="absolute inset-x-0 bottom-0 z-[1] p-5 md:p-6">
            <p
              className={`flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[0.22em] ${accentStyles.eyebrow}`}
            >
              <span className={`h-px w-7 shrink-0 ${accentStyles.line}`} aria-hidden />
              {item.eyebrow}
            </p>
          </div>
        </div>

        <div className="flex flex-1 flex-col px-5 py-6 md:px-6 md:py-7">
          <h3 className="text-[clamp(1.5rem,2.8vw,1.9rem)] font-extrabold leading-[1.08] tracking-[-0.04em] text-brand-dark">
            {item.headline}{" "}
            <span className={accentStyles.headline}>{item.headlineAccent}</span>
          </h3>
          <p className="mt-3 flex-1 text-[16px] leading-[1.76] text-brand-body md:text-[17px]">
            {item.description}
          </p>
          <div className="mt-6 flex items-center justify-between gap-4">
            <span
              className={`text-[16px] font-semibold tracking-[0.01em] transition-colors duration-300 ${accentStyles.cta}`}
            >
              {item.ctaLabel}
            </span>
            <span
              className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-105 ${accentStyles.ctaCircle}`}
              aria-hidden
            >
              <ChevronRightIcon size={17} />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

function AboutSignatureSection() {
  const section = ABOUT_SIGNATURE_SECTION;

  return (
    <section className="relative overflow-hidden border-t border-brand-border/60 bg-brand-warm-cream px-7 py-20 md:py-24">
      <div
        className="pointer-events-none absolute -right-24 top-16 h-72 w-72 rounded-full bg-brand-gold/6 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-10 h-64 w-64 rounded-full bg-brand-cyan/5 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1180px]">
        <header className="mx-auto mb-12 max-w-[680px] text-center md:mb-14">
          <p className="inline-flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-pink-dark sm:text-[11px]">
            <span className="h-px w-8 bg-brand-pink/80" aria-hidden />
            {section.eyebrow}
            <span className="h-px w-8 bg-brand-pink/80" aria-hidden />
          </p>
          <h2 className="mt-4 text-[clamp(1.85rem,3.5vw,2.65rem)] font-extrabold leading-[1.06] tracking-[-0.04em] text-brand-dark text-balance">
            {section.title}{" "}
            <span className="text-brand-pink-dark">{section.highlight}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[52ch] text-[16px] leading-[1.72] text-brand-nav md:text-[17px]">
            {section.description}
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {ABOUT_SIGNATURE.map((item) => (
            <AboutSignatureCard
              key={`${item.headline}-${item.headlineAccent}`}
              item={item}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center md:mt-12">
          <Link
            href="/our-menu"
            className="group inline-flex items-center gap-2.5 rounded-full border-2 border-brand-dark/10 bg-white px-8 py-3.5 text-[16px] font-semibold text-brand-dark shadow-[0_8px_24px_rgba(52,36,47,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-pink/25 hover:shadow-[0_14px_32px_rgba(52,36,47,0.1)]"
          >
            View full menu
            <ChevronRightIcon
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

function AboutCtaSection() {
  const cta = ABOUT_CTA;

  return (
    <section className="border-t border-brand-border/60 bg-brand-warm-cream px-7 pb-16 pt-4 md:pb-20 md:pt-6">
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
              <span className="text-brand-cyan-accent">{cta.titleAccent}</span>
            </h2>

            <p className="mt-4 max-w-[560px] text-[16px] leading-[1.75] text-[#ece4dc] md:text-[17px]">
              {cta.description}
            </p>

            <div className="mt-7 space-y-4">
              <div className="flex items-start gap-3">
                <MapPinIcon size={18} className="mt-0.5 shrink-0 text-brand-pink-light" />
                <AddressLink
                  variant="on-dark"
                  className="text-[16px] leading-relaxed md:text-[17px]"
                />
              </div>
              <div className="flex items-start gap-3">
                <PhoneIcon size={18} className="mt-0.5 shrink-0 text-brand-cyan-accent" />
                <PhoneLink variant="on-dark" className="text-[16px] hover:!text-brand-cyan-accent md:text-[17px]" />
              </div>
              <div className="flex items-start gap-3">
                <ClockIcon size={18} className="mt-0.5 shrink-0 text-brand-cyan-accent" />
                <div className="text-[16px] text-[#ece4dc] md:text-[17px]">
                  {HOURS.map((row) => (
                    <p key={row.day}>
                      <span className="font-semibold text-white">{row.day}:</span>{" "}
                      {row.time}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3.5">
              <Link
                href={cta.primaryHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-pink px-7 py-3.5 text-[16px] font-extrabold !text-white shadow-[0_10px_28px_rgba(237,78,141,0.35)] transition-all hover:-translate-y-0.5 hover:bg-brand-pink-hover md:text-[17px]"
              >
                {cta.primaryLabel}
              </Link>
              <Link
                href={cta.secondaryHref}
                className="inline-flex items-center justify-center rounded-full border-2 border-white bg-white px-7 py-3 text-[16px] font-bold text-brand-dark transition-all hover:-translate-y-0.5 hover:bg-brand-cream md:text-[17px]"
              >
                {cta.secondaryLabel}
              </Link>
            </div>
          </div>

          <div className="hidden min-h-[280px] md:block" aria-hidden />
        </div>
      </div>
    </section>
  );
}

export function AboutPageBody() {
  return (
    <>
      <AboutFeatureSection />
      <AboutValuesSection />
      <AboutPhilosophySection />
      <AboutSignatureSection />
      <AboutCtaSection />
    </>
  );
}
