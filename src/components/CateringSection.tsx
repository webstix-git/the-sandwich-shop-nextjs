import Image from "next/image";
import Link from "next/link";
import { HomeSectionEyebrow } from "@/components/HomeSectionEyebrow";
import { CATEGORY_PAGE_LAYOUT } from "@/lib/category-page-layout";
import { ChevronRightIcon } from "./icons";

function CateringContentSection() {
  return (
    <section
      id="catering"
      className={`border-t border-brand-border/60 bg-brand-bg ${CATEGORY_PAGE_LAYOUT.section}`}
    >
      <div className="mx-auto max-w-[1250px]">
        <header className="mb-12 text-center md:mb-16">
          <HomeSectionEyebrow accent="pink" className="mb-4">
            Catering &amp; Events
          </HomeSectionEyebrow>
          <h2 className="mx-auto max-w-[760px] text-[clamp(1.875rem,4.2vw,2.875rem)] font-extrabold leading-[1.14] tracking-[-0.02em] text-brand-dark text-balance">
            However you want to{" "}
            <span className="text-brand-pink">enjoy us</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[58ch] text-[17px] leading-[1.75] text-brand-nav md:text-[18px]">
            Dine in downtown, grab takeout on the go, or let us cater your next
            gathering. Every option is fresh, generous, and unmistakably us.
          </p>
        </header>

        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] border-[6px] border-white shadow-[0_28px_70px_rgba(52,36,47,0.2)]">
              <Image
                src="/images/catering-hero.jpg"
                alt="Premium catering spread with sandwiches, burgers, and dirty sodas"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-5 -left-3 hidden w-[42%] overflow-hidden rounded-2xl border-4 border-white shadow-[0_16px_40px_rgba(52,36,47,0.18)] sm:block md:-bottom-7 md:-left-6">
              <div className="relative h-[110px] md:h-[140px]">
                <Image
                  src="/images/dessert-boxes.jpg"
                  alt="Handmade dessert boxes for catering"
                  fill
                  sizes="(max-width: 1024px) 42vw, 240px"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="absolute -right-3 -top-4 hidden w-[38%] rotate-3 overflow-hidden rounded-2xl border-4 border-white shadow-[0_16px_40px_rgba(52,36,47,0.18)] sm:block md:-right-6 md:-top-6">
              <div className="relative h-[100px] md:h-[130px]">
                <Image
                  src="/images/dirty-soda-green.jpg"
                  alt="Signature dirty soda from the soda bar"
                  fill
                  sizes="(max-width: 1024px) 38vw, 220px"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="absolute -bottom-4 right-4 rounded-2xl bg-brand-cyan px-4 py-3 text-sm font-bold text-white shadow-[0_10px_24px_rgba(35,191,216,0.4)] md:right-8">
              Events &amp; gatherings welcome
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="mb-5 text-[clamp(1.625rem,3.2vw,2.25rem)] font-extrabold leading-[1.14] tracking-[-0.02em] text-brand-dark">
              From a quick lunch to a full-event spread
            </h3>
            <p className="max-w-[52ch] text-[17px] leading-[1.75] text-brand-nav md:text-[18px]">
              Whether you&apos;re pulling up a chair on 3rd Street, picking up
              dinner for the family, or feeding a crowd of fifty, we make every
              experience feel personal, polished, and delicious.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CateringCtaSection() {
  return (
    <section
      className={`border-t border-brand-border/60 bg-white ${CATEGORY_PAGE_LAYOUT.section}`}
      aria-label="Catering call to action"
    >
      <div className="relative mx-auto max-w-[1250px] overflow-hidden rounded-[28px] border border-brand-pink/35 bg-brand-footer pb-[70px] shadow-[0_24px_64px_rgba(50,39,30,0.22)]">
        <Image
          src="/images/catering-cta-bg.png"
          alt=""
          fill
          sizes="(max-width: 1240px) 100vw, 1240px"
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
              Ready to book?
            </span>

            <h3 className="mt-5 text-[clamp(1.75rem,3.5vw,2.35rem)] font-extrabold leading-[1.12] tracking-[-0.03em] text-white text-balance [text-shadow:0_2px_20px_rgba(0,0,0,0.45)]">
              Let&apos;s make your next event{" "}
              <span className="text-brand-cyan-accent">unforgettable</span>
            </h3>

            <p className="mt-4 max-w-[560px] text-[16px] leading-[1.75] text-[#ece4dc] md:text-[17px]">
              Tell us about your gathering and we&apos;ll put together sandwich
              trays, burger spreads, and a dirty soda bar your guests will talk
              about.
            </p>

            <div className="mt-8 flex flex-wrap gap-3.5">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-pink px-7 py-3.5 text-[16px] font-extrabold !text-white shadow-[0_10px_28px_rgba(237,78,141,0.35)] transition-all hover:-translate-y-0.5 hover:bg-brand-pink-hover md:text-[17px]"
              >
                Request catering
                <ChevronRightIcon
                  size={17}
                  className="shrink-0 text-white"
                />
              </Link>
              <Link
                href="/services/catering-services"
                className="inline-flex items-center justify-center rounded-full border-2 border-white bg-white px-7 py-3 text-[16px] font-bold text-brand-dark transition-all hover:-translate-y-0.5 hover:bg-brand-cream md:text-[17px]"
              >
                View catering
              </Link>
            </div>
          </div>

          <div className="hidden min-h-[280px] md:block" aria-hidden />
        </div>
      </div>
    </section>
  );
}

export function CateringSection() {
  return (
    <>
      <CateringContentSection />
      <CateringCtaSection />
    </>
  );
}
