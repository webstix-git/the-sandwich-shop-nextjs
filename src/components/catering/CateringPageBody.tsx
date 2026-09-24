import Image from "next/image";
import Link from "next/link";
import { CheckIcon, ChevronRightIcon } from "@/components/icons";
import { SodaBarSection } from "@/components/SodaBarSection";
import {
  CATERING_CTA,
  CATERING_OCCASIONS,
  CATERING_OCCASIONS_SECTION,
  CATERING_OPENING,
  CATERING_PACKAGES,
  CATERING_PACKAGES_SECTION,
  CATERING_PROCESS,
  CATERING_PROCESS_SECTION,
  CATERING_SIGNATURE,
  CATERING_SIGNATURE_SECTION,
  CATERING_SODA_FEATURE,
} from "@/lib/catering-page-data";

const CATERING_LAYOUT = {
  section: "px-7 pt-[80px] pb-[80px]",
  divider: "border-t border-brand-border/60",
  inner: "mx-auto max-w-[1250px]",
  header: "mb-12 md:mb-16",
  headerCentered: "mx-auto mb-12 max-w-[680px] text-center md:mb-16",
} as const;

const CATERING_TONES = {
  white: "bg-white",
  cream: "bg-brand-warm-cream",
  peach: "bg-brand-bg",
} as const;

type CateringTone = keyof typeof CATERING_TONES;

function cateringSectionClass(tone: CateringTone, { first = false } = {}) {
  return [
    CATERING_LAYOUT.section,
    !first ? CATERING_LAYOUT.divider : "",
    CATERING_TONES[tone],
  ]
    .filter(Boolean)
    .join(" ");
}

const OCCASION_ACCENT = {
  gold: {
    tag: "text-brand-pink-dark",
    ring: "hover:ring-brand-pink/15",
  },
  pink: {
    tag: "text-brand-pink-dark",
    ring: "hover:ring-brand-pink/15",
  },
  cyan: {
    tag: "text-brand-cyan-dark",
    ring: "hover:ring-brand-cyan/15",
  },
} as const;

function CateringOccasionCard({
  occasion,
}: {
  occasion: (typeof CATERING_OCCASIONS)[number];
}) {
  const accent = OCCASION_ACCENT[occasion.accent];

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-[20px] border border-brand-card-border bg-white shadow-[0_8px_28px_rgba(52,36,47,0.05)] ring-1 ring-transparent transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(52,36,47,0.09)] ${accent.ring}`}
    >
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image
          src={occasion.image}
          alt={occasion.imageAlt}
          fill
          sizes="(max-width: 640px) 50vw, 280px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
      </div>

      <div className="flex flex-1 flex-col border-t border-brand-border/50 px-5 py-5">
        <p
          className={`flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] ${accent.tag}`}
        >
          {occasion.tagline}
        </p>
        <h3 className="mt-2.5 text-[1.125rem] font-extrabold leading-snug tracking-[-0.02em] text-brand-dark">
          {occasion.title}
        </h3>
        <p className="mt-2 text-[15px] leading-[1.65] text-brand-body">
          {occasion.description}
        </p>
      </div>
    </article>
  );
}

function CateringOccasionsSection() {
  const section = CATERING_OCCASIONS_SECTION;

  return (
    <section className={cateringSectionClass("cream")}>
      <div className={CATERING_LAYOUT.inner}>
        <header className={`max-w-[640px] ${CATERING_LAYOUT.header}`}>
          <p className="inline-flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.24em] text-brand-pink-dark sm:text-[13px]">
            {section.eyebrow}
          </p>
          <h2 className="mt-4 text-[clamp(1.85rem,3.5vw,2.5rem)] font-extrabold leading-[1.06] tracking-[-0.04em] text-brand-dark text-balance">
            {section.title}{" "}
            <span className="text-brand-pink-dark">{section.highlight}</span>
          </h2>
          <p className="mt-4 max-w-[52ch] text-[16px] leading-[1.72] text-brand-body md:text-[17px]">
            {section.description}
          </p>
        </header>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {CATERING_OCCASIONS.map((occasion) => (
            <CateringOccasionCard key={occasion.title} occasion={occasion} />
          ))}
        </div>
      </div>
    </section>
  );
}

const PACKAGE_ACCENT = {
  gold: {
    tag: "text-brand-pink-dark",
    check: "bg-brand-pink-light text-brand-pink-dark",
    ring: "hover:ring-brand-pink/20",
  },
  pink: {
    tag: "text-brand-pink-dark",
    check: "bg-brand-pink-light text-brand-pink-dark",
    ring: "hover:ring-brand-pink/20",
  },
  cyan: {
    tag: "text-brand-cyan-dark",
    check: "bg-brand-cyan-light text-brand-cyan-dark",
    ring: "hover:ring-brand-cyan/20",
  },
} as const;

const SIGNATURE_ACCENT = {
  gold: {
    eyebrow: "text-brand-pink-light",
    headline: "text-brand-pink-dark",
    ring: "group-hover:ring-brand-pink/25",
  },
  pink: {
    eyebrow: "text-brand-pink-light",
    headline: "text-brand-pink-dark",
    ring: "group-hover:ring-brand-pink/25",
  },
  cyan: {
    eyebrow: "text-brand-cyan-light",
    headline: "text-brand-cyan-dark",
    ring: "group-hover:ring-brand-cyan/25",
  },
} as const;

function CateringOpeningSection() {
  const opening = CATERING_OPENING;

  return (
    <section className={cateringSectionClass("white", { first: true })}>
      <div className={`${CATERING_LAYOUT.inner} grid items-center gap-12 lg:grid-cols-2 lg:gap-16`}>
        <div className="relative order-2 lg:order-1">
          <div className="overflow-hidden rounded-[28px] border-[6px] border-white shadow-[0_24px_56px_rgba(52,36,47,0.14)]">
            <div className="relative h-[300px] md:h-[440px]">
              <Image
                src={opening.image}
                alt={opening.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="absolute -bottom-5 -right-4 hidden overflow-hidden rounded-2xl border-4 border-white shadow-[0_16px_40px_rgba(52,36,47,0.18)] sm:block md:-bottom-7 md:-right-6">
            <div className="relative h-[110px] w-[160px] md:h-[130px] md:w-[200px]">
              <Image
                src="/images/dessert-boxes.jpg"
                alt="Dessert boxes for catering"
                fill
                sizes="200px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="inline-flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.24em] text-brand-pink-dark sm:text-[13px]">
            {opening.eyebrow}
          </p>
          <h2 className="mt-4 text-[clamp(1.85rem,3.5vw,2.65rem)] font-extrabold leading-[1.06] tracking-[-0.04em] text-brand-dark">
            {opening.title}{" "}
            <span className="text-brand-pink-dark">{opening.highlight}</span>
          </h2>
          {opening.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-4 text-[16px] leading-[1.72] text-brand-body md:text-[17px]"
            >
              {paragraph}
            </p>
          ))}
          <Link
            href={opening.ctaHref}
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-brand-pink px-7 py-3.5 text-[16px] font-semibold !text-white shadow-[0_10px_28px_rgba(237,78,141,0.32)] transition-all hover:-translate-y-0.5 hover:bg-brand-pink-hover md:text-[17px]"
          >
            {opening.ctaLabel}
            <ChevronRightIcon
              size={17}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

function CateringPackagesSection() {
  const section = CATERING_PACKAGES_SECTION;

  return (
    <section className={cateringSectionClass("white")}>
      <div className={CATERING_LAYOUT.inner}>
        <header className={`max-w-[640px] ${CATERING_LAYOUT.header}`}>
          <p className="inline-flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.24em] text-brand-pink-dark sm:text-[13px]">
            {section.eyebrow}
          </p>
          <h2 className="mt-4 text-[clamp(1.85rem,3.5vw,2.5rem)] font-extrabold leading-[1.06] tracking-[-0.04em] text-brand-dark">
            {section.title}{" "}
            <span className="text-brand-pink-dark">{section.highlight}</span>
          </h2>
          <p className="mt-5 max-w-[52ch] text-[16px] leading-[1.72] text-brand-body md:text-[17px]">
            {section.description}
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-3 lg:gap-7">
          {CATERING_PACKAGES.map((pkg) => {
            const accent = PACKAGE_ACCENT[pkg.accent];
            return (
              <article
                key={pkg.name}
                className={`flex flex-col rounded-[28px] border border-brand-card-border bg-white p-8 shadow-[0_16px_48px_rgba(52,36,47,0.08)] ring-1 ring-brand-border/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_56px_rgba(52,36,47,0.12)] ${accent.ring}`}
              >
                <p
                  className={`text-[13px] font-bold uppercase tracking-[0.16em] ${accent.tag}`}
                >
                  {pkg.tagline}
                </p>
                <h3 className="mt-3 text-[clamp(1.35rem,2.5vw,1.65rem)] font-extrabold tracking-[-0.03em] text-brand-dark">
                  {pkg.name}
                </h3>
                <p className="mt-2 text-[16px] leading-relaxed text-brand-body">
                  {pkg.description}
                </p>
                <ul className="mt-6 flex-1 space-y-3 border-t border-brand-border/60 pt-6">
                  {pkg.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[15px] leading-relaxed text-brand-body md:text-[16px]"
                    >
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${accent.check}`}
                      >
                        <CheckIcon size={11} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CateringSignatureCard({
  item,
}: {
  item: (typeof CATERING_SIGNATURE)[number];
}) {
  const accent = SIGNATURE_ACCENT[item.accent];

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-[32px] bg-white p-2.5 shadow-[0_16px_48px_rgba(52,36,47,0.08)] ring-1 ring-brand-border/50 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_32px_64px_rgba(52,36,47,0.14)] ${accent.ring}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-[24px]">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 380px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-black/70"
          aria-hidden
        />
        <div className="absolute inset-x-0 bottom-0 z-[1] p-5 md:p-6">
          <p
            className={`flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.22em] ${accent.eyebrow}`}
          >
            {item.eyebrow}
          </p>
        </div>
      </div>
      <div className="flex flex-1 flex-col px-5 py-6 md:px-6 md:py-7">
        <h3 className="text-[clamp(1.5rem,2.8vw,1.9rem)] font-extrabold leading-[1.08] tracking-[-0.04em] text-brand-dark">
          {item.headline}{" "}
          <span className={accent.headline}>{item.headlineAccent}</span>
        </h3>
        <p className="mt-3 flex-1 text-[16px] leading-[1.76] text-brand-body md:text-[17px]">
          {item.description}
        </p>
      </div>
    </article>
  );
}

function CateringSignatureSection() {
  const section = CATERING_SIGNATURE_SECTION;

  return (
    <section className={cateringSectionClass("white")}>
      <div className={CATERING_LAYOUT.inner}>
        <header className={CATERING_LAYOUT.headerCentered}>
          <p className="inline-flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.24em] text-brand-pink-dark sm:text-[13px]">
            {section.eyebrow}
          </p>
          <h2 className="mt-4 text-[clamp(1.85rem,3.5vw,2.65rem)] font-extrabold leading-[1.06] tracking-[-0.04em] text-brand-dark text-balance">
            {section.title}{" "}
            <span className="text-brand-pink-dark">{section.highlight}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[52ch] text-[16px] leading-[1.72] text-brand-body md:text-[17px]">
            {section.description}
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {CATERING_SIGNATURE.map((item) => (
            <CateringSignatureCard
              key={`${item.headline}-${item.headlineAccent}`}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CateringProcessSection() {
  const section = CATERING_PROCESS_SECTION;

  return (
    <section className={cateringSectionClass("peach")}>
      <div className={CATERING_LAYOUT.inner}>
        <header className={`mx-auto max-w-[640px] text-center ${CATERING_LAYOUT.header}`}>
          <p className="inline-flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.24em] text-brand-pink-dark sm:text-[13px]">
            {section.eyebrow}
          </p>
          <h2 className="mt-4 text-[clamp(1.85rem,3.5vw,2.5rem)] font-extrabold leading-[1.06] tracking-[-0.04em] text-brand-dark">
            {section.title}{" "}
            <span className="text-brand-pink-dark">{section.highlight}</span>
          </h2>
        </header>

        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          {CATERING_PROCESS.map((step, index) => {
            const stepBadgeClass =
              index === 1
                ? "bg-brand-cyan-light text-brand-cyan-dark group-hover:bg-brand-cyan group-hover:text-white"
                : "bg-brand-pink-light text-brand-pink-dark group-hover:bg-brand-pink group-hover:text-white";

            return (
            <article
              key={step.step}
              className="group flex flex-col rounded-[24px] border border-brand-card-border bg-white px-7 py-8 shadow-[0_12px_36px_rgba(52,36,47,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(52,36,47,0.1)] md:px-8 md:py-9"
            >
              <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl text-[18px] font-extrabold transition-colors duration-300 ${stepBadgeClass}`}>
                {step.step}
              </span>
              <h3 className="mt-5 text-[1.25rem] font-extrabold leading-tight tracking-[-0.02em] text-brand-dark">
                {step.title}
              </h3>
              <p className="mt-3 text-[16px] leading-[1.72] text-brand-body">
                {step.description}
              </p>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CateringSodaFeatureSection() {
  const feature = CATERING_SODA_FEATURE;

  return (
    <SodaBarSection
      eyebrow={feature.eyebrow}
      title={`${feature.title} ${feature.highlight}`}
      description={feature.description}
      ctaLabel={feature.ctaLabel}
      ctaHref={feature.ctaHref}
      image={feature.image}
      imageAlt={feature.imageAlt}
      sectionPadding="standard"
    />
  );
}

function CateringCtaSection() {
  const cta = CATERING_CTA;

  return (
    <section className={`${CATERING_LAYOUT.divider} ${CATERING_TONES.peach} ${CATERING_LAYOUT.section}`}>
      <div className={`${CATERING_LAYOUT.inner} relative overflow-hidden rounded-[28px] border border-brand-pink/35 bg-brand-footer pb-[70px] shadow-[0_24px_64px_rgba(50,39,30,0.22)]`}>
        <Image
          src={cta.backgroundImage}
          alt=""
          fill
          sizes="(max-width: 1250px) 100vw, 1250px"
          className="object-cover object-[center_42%]"
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
            <span className="inline-flex items-center rounded-full border border-brand-pink/50 bg-black/25 px-3.5 py-1.5 text-[13px] font-bold uppercase tracking-[0.2em] text-brand-pink-light">
              {cta.badge}
            </span>

            <h2 className="mt-5 text-[clamp(1.75rem,3.5vw,2.35rem)] font-extrabold leading-[1.12] tracking-[-0.03em] text-white text-balance [text-shadow:0_2px_20px_rgba(0,0,0,0.45)]">
              {cta.title}{" "}
              <span className="text-brand-cyan-accent">{cta.titleAccent}</span>
            </h2>

            <p className="mt-4 max-w-[560px] text-[16px] leading-[1.75] text-[#ece4dc] md:text-[17px]">
              {cta.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3.5">
              <Link
                href={cta.primaryHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-pink px-7 py-3.5 text-[16px] font-extrabold !text-white shadow-[0_10px_28px_rgba(237,78,141,0.35)] transition-all hover:-translate-y-0.5 hover:bg-brand-pink-hover md:text-[17px]"
              >
                {cta.primaryLabel}
                <ChevronRightIcon size={17} className="text-white" />
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

export function CateringPageBody() {
  return (
    <>
      <CateringOpeningSection />
      <CateringOccasionsSection />
      <CateringPackagesSection />
      <CateringSignatureSection />
      <CateringProcessSection />
      <CateringSodaFeatureSection />
      <CateringCtaSection />
    </>
  );
}
