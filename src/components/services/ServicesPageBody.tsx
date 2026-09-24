import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "@/components/icons";
import { MaskIcon } from "@/components/MaskIcon";
import {
  CATEGORY_PAGE_LAYOUT,
  categorySectionClass,
} from "@/lib/category-page-layout";
import {
  SERVICES_CATERING_SPOTLIGHT,
  SERVICES_CTA,
  SERVICES_EXPERIENCE,
  SERVICES_FEATURE,
  SERVICES_OFFERINGS,
  SERVICES_OFFERINGS_SECTION,
  type ServiceOffering,
} from "@/lib/services-page-data";

const ACCENT = {
  gold: {
    tag: "text-brand-pink-dark",
    ring: "hover:ring-brand-pink/15",
    number: "text-brand-pink-dark",
    iconColor: "text-brand-pink-dark",
  },
  pink: {
    tag: "text-brand-pink-dark",
    ring: "hover:ring-brand-pink/15",
    number: "text-brand-pink-dark",
    iconColor: "text-brand-pink-dark",
  },
  cyan: {
    tag: "text-brand-cyan-dark",
    ring: "hover:ring-brand-cyan/15",
    number: "text-brand-cyan-dark",
    iconColor: "text-brand-cyan-dark",
  },
} as const;

function SectionEyebrow({
  children,
  centered = false,
}: {
  children: string;
  centered?: boolean;
}) {
  return (
    <p
      className={`inline-flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.24em] text-brand-pink-dark sm:text-[13px] ${centered ? "justify-center" : ""}`}
    >
      {children}
    </p>
  );
}

function SectionTitle({
  title,
  highlight,
  centered = false,
}: {
  title: string;
  highlight: string;
  centered?: boolean;
}) {
  return (
    <h2
      className={`mt-4 text-[clamp(1.85rem,3.5vw,2.5rem)] font-extrabold leading-[1.06] tracking-[-0.04em] text-brand-dark text-balance ${centered ? "mx-auto" : ""}`}
    >
      {title}{" "}
      <span className="text-brand-pink-dark">{highlight}</span>
    </h2>
  );
}

function ServicesFeatureSection() {
  const feature = SERVICES_FEATURE;

  return (
    <section className={categorySectionClass("white", { first: true })}>
      <div className="mx-auto grid max-w-[1250px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative order-2 lg:order-1">
          <div className="overflow-hidden rounded-[24px] border-[6px] border-white shadow-[0_22px_52px_rgba(52,36,47,0.14)]">
            <div className="relative h-[300px] md:h-[420px]">
              <Image
                src={feature.image}
                alt={feature.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover object-[center_42%]"
                unoptimized
              />
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <SectionEyebrow>{feature.eyebrow}</SectionEyebrow>
          <SectionTitle title={feature.title} highlight={feature.highlight} />
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

function ServiceOfferingCard({ item }: { item: ServiceOffering }) {
  const accent = ACCENT[item.accent];

  return (
    <Link
      href={item.href}
      className={`group flex h-full flex-col overflow-hidden rounded-[20px] border border-brand-card-border bg-white shadow-[0_8px_28px_rgba(52,36,47,0.05)] ring-1 ring-transparent transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(52,36,47,0.09)] ${accent.ring}`}
    >
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, 380px"
          className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          unoptimized
        />
      </div>
      <div className="flex flex-1 flex-col border-t border-brand-border/50 px-5 py-5">
        <p
          className={`flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] ${accent.tag}`}
        >
          {item.tagline}
        </p>
        <h3 className="mt-2.5 text-[1.125rem] font-extrabold leading-snug tracking-[-0.02em] text-brand-dark">
          {item.title}
        </h3>
        <p className="mt-2 flex-1 text-[15px] leading-[1.65] text-brand-body">
          {item.description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand-pink transition-colors group-hover:text-brand-pink-hover">
          Learn more
          <ChevronRightIcon
            size={16}
            className="transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </span>
      </div>
    </Link>
  );
}

function ServicesOfferingsSection() {
  const section = SERVICES_OFFERINGS_SECTION;

  return (
    <section className={categorySectionClass("cream")}>
      <div className={CATEGORY_PAGE_LAYOUT.inner}>
        <header
          className={`mx-auto max-w-[680px] text-center ${CATEGORY_PAGE_LAYOUT.header}`}
        >
          <SectionEyebrow centered>{section.eyebrow}</SectionEyebrow>
          <SectionTitle
            title={section.title}
            highlight={section.highlight}
            centered
          />
          <p className="mx-auto mt-5 max-w-[52ch] text-[16px] leading-[1.72] text-brand-body md:text-[17px]">
            {section.description}
          </p>
        </header>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {SERVICES_OFFERINGS.map((item) => (
            <ServiceOfferingCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesCateringSpotlightSection() {
  const spotlight = SERVICES_CATERING_SPOTLIGHT;

  return (
    <section className={categorySectionClass("white")}>
      <div className="mx-auto grid max-w-[1250px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionEyebrow>{spotlight.eyebrow}</SectionEyebrow>
          <SectionTitle title={spotlight.title} highlight={spotlight.highlight} />
          {spotlight.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-4 text-[16px] leading-[1.72] text-brand-nav md:text-[17px]"
            >
              {paragraph}
            </p>
          ))}
          <Link
            href={spotlight.ctaHref}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-brand-pink px-7 py-3.5 text-[16px] font-extrabold text-white shadow-[0_8px_22px_rgba(237,78,141,0.32)] transition-all hover:-translate-y-0.5 hover:bg-brand-pink-hover md:text-[17px]"
          >
            {spotlight.ctaLabel}
          </Link>
        </div>

        <div className="overflow-hidden rounded-[28px] border-[6px] border-white shadow-[0_24px_60px_rgba(52,36,47,0.16)]">
          <div className="relative h-[320px] md:h-[440px]">
            <Image
              src={spotlight.image}
              alt={spotlight.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover object-[center_35%]"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesExperienceSection() {
  const experience = SERVICES_EXPERIENCE;

  return (
    <section className={categorySectionClass("cream")}>
      <div className={CATEGORY_PAGE_LAYOUT.inner}>
        <header
          className={`mx-auto max-w-[680px] text-center ${CATEGORY_PAGE_LAYOUT.header}`}
        >
          <SectionEyebrow centered>{experience.eyebrow}</SectionEyebrow>
          <SectionTitle
            title={experience.title}
            highlight={experience.highlight}
            centered
          />
          <p className="mx-auto mt-5 max-w-[52ch] text-[16px] leading-[1.72] text-brand-body md:text-[17px]">
            {experience.description}
          </p>
        </header>

        <div className="grid gap-5 md:grid-cols-3 lg:gap-6">
          {experience.items.map((item) => {
            const accent = ACCENT[item.accent];

            return (
              <article
                key={item.title}
                className="rounded-[20px] border border-brand-card-border bg-white px-6 py-7 shadow-[0_8px_28px_rgba(52,36,47,0.05)]"
              >
                <span className={`flex h-[46px] items-center ${accent.iconColor}`}>
                  <MaskIcon src={item.icon} className="size-[46px]" />
                </span>
                <h3 className="mt-4 text-[1.25rem] font-extrabold tracking-[-0.02em] text-brand-dark">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.68] text-brand-body">
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

function ServicesCtaSection() {
  const cta = SERVICES_CTA;

  return (
    <section className={categorySectionClass("white")}>
      <div className="relative mx-auto max-w-[1250px] overflow-hidden rounded-[28px] border border-brand-pink/35 bg-brand-footer pb-[70px] shadow-[0_24px_64px_rgba(50,39,30,0.22)]">
        <Image
          src={cta.backgroundImage}
          alt=""
          fill
          sizes="(max-width: 1250px) 100vw, 1250px"
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

export function ServicesPageBody() {
  return (
    <>
      <ServicesFeatureSection />
      <ServicesOfferingsSection />
      <ServicesCateringSpotlightSection />
      <ServicesExperienceSection />
      <ServicesCtaSection />
    </>
  );
}
