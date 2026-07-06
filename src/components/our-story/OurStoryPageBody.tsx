import Image from "next/image";
import Link from "next/link";
import {
  STORY_CHAPTERS,
  STORY_CTA,
  STORY_GALLERY,
  STORY_TODAY,
} from "@/lib/our-story-page-data";
import { CATEGORY_PAGE_LAYOUT } from "@/lib/category-page-layout";

function StoryChapterSection({
  chapter,
  reverse,
  index,
}: {
  chapter: (typeof STORY_CHAPTERS)[number];
  reverse: boolean;
  index: number;
}) {
  return (
    <section
      className={`border-t border-brand-border/60 ${CATEGORY_PAGE_LAYOUT.section} ${
        index % 2 === 0 ? "bg-brand-warm-cream" : "bg-white"
      }`}
    >
      <div className="mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className={reverse ? "lg:order-2" : undefined}>
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-pink-dark">
            {chapter.phase}
          </p>
          <h2 className="mt-3 text-[clamp(1.75rem,3.2vw,2.35rem)] font-extrabold leading-[1.08] tracking-[-0.04em] text-brand-dark text-balance">
            {chapter.title}{" "}
            <span className={index % 2 === 1 ? "text-brand-cyan-dark" : "text-brand-pink-dark"}>{chapter.highlight}</span>
          </h2>
          <p className="mt-5 text-[16px] leading-[1.76] text-brand-body md:text-[17px]">
            {chapter.body}
          </p>
        </div>

        <div
          className={`overflow-hidden rounded-[28px] border-[6px] border-white shadow-[0_22px_52px_rgba(52,36,47,0.14)] ${
            reverse ? "lg:order-1" : undefined
          }`}
        >
          <Image
            src={chapter.image}
            alt={chapter.imageAlt}
            width={600}
            height={450}
            className="h-[280px] w-full object-cover md:h-[400px]"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}

function StoryGallerySection() {
  const gallery = STORY_GALLERY;
  const [featured, ...rest] = gallery.images;

  return (
    <section className={`border-t border-brand-border/60 bg-brand-warm-cream ${CATEGORY_PAGE_LAYOUT.section}`}>
      <div className="mx-auto max-w-[1180px]">
        <header className="mb-10 max-w-[640px] md:mb-12">
          <p className="inline-flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-pink-dark sm:text-[11px]">
            <span className="h-px w-8 bg-brand-pink/80" aria-hidden />
            {gallery.eyebrow}
          </p>
          <h2 className="mt-4 text-[clamp(1.85rem,3.5vw,2.5rem)] font-extrabold leading-[1.06] tracking-[-0.04em] text-brand-dark text-balance">
            {gallery.title}{" "}
            <span className="text-brand-pink-dark">{gallery.highlight}</span>
          </h2>
        </header>

        <div className="grid gap-4 md:grid-cols-3 md:gap-5">
          <figure className="group relative min-h-[260px] overflow-hidden rounded-[24px] border-[5px] border-white shadow-[0_14px_40px_rgba(52,36,47,0.1)] md:min-h-[360px] md:row-span-2">
            <Image
              src={featured.src}
              alt={featured.alt}
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              unoptimized
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-5 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-white">
              {featured.caption}
            </figcaption>
          </figure>

          {rest.map((image) => (
            <figure
              key={image.src}
              className="group relative aspect-[4/3] overflow-hidden rounded-[20px] border-[4px] border-white shadow-[0_12px_32px_rgba(52,36,47,0.08)]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 50vw, 280px"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                unoptimized
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
                {image.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function StoryTodaySection() {
  const today = STORY_TODAY;

  return (
    <section className={`border-t border-brand-border/60 bg-white ${CATEGORY_PAGE_LAYOUT.section}`}>
      <div className="mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="overflow-hidden rounded-[28px] border-[6px] border-white shadow-[0_24px_60px_rgba(52,36,47,0.16)]">
          <Image
            src={today.image}
            alt={today.imageAlt}
            width={600}
            height={480}
            className="h-[320px] w-full object-cover object-[center_35%] md:h-[440px]"
            unoptimized
          />
        </div>

        <div>
          <p className="inline-flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-pink-dark sm:text-[11px]">
            <span className="h-px w-8 bg-brand-pink/80" aria-hidden />
            {today.eyebrow}
          </p>
          <h2 className="mt-4 text-[clamp(1.85rem,3.5vw,2.5rem)] font-extrabold leading-[1.06] tracking-[-0.04em] text-brand-dark text-balance">
            {today.title}{" "}
            <span className="text-brand-pink-dark">{today.highlight}</span>
          </h2>
          {today.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-5 text-[16px] leading-[1.75] text-brand-body md:text-[17px]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

function StoryCtaSection() {
  const cta = STORY_CTA;

  return (
    <section className={`border-t border-brand-border/60 bg-brand-warm-cream ${CATEGORY_PAGE_LAYOUT.section}`}>
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

export function OurStoryPageBody() {
  return (
    <>
      <div id="story-chapters">
      {STORY_CHAPTERS.map((chapter, index) => (
        <StoryChapterSection
          key={chapter.phase}
          chapter={chapter}
          reverse={index % 2 === 1}
          index={index}
        />
      ))}
      </div>
      <StoryGallerySection />
      <StoryTodaySection />
      <StoryCtaSection />
    </>
  );
}
