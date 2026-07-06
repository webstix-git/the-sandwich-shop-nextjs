"use client";

import Image from "next/image";
import Link from "next/link";
import { PageIntroHero } from "@/components/PageIntroHero";
import { ChevronRightIcon } from "@/components/icons";
import { CATEGORY_PAGE_LAYOUT } from "@/lib/category-page-layout";
import { STORY_FEATURE, STORY_INTRO } from "@/lib/our-story-page-data";

function StoryFeatureSection() {
  const feature = STORY_FEATURE;

  return (
    <section className={`bg-white ${CATEGORY_PAGE_LAYOUT.section}`}>
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
          {feature.ctaLabel && feature.ctaHref ? (
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
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function OurStoryPageIntro() {
  return (
    <>
      <PageIntroHero
        intro={STORY_INTRO}
        breadcrumbLabel="Our Story"
        description={STORY_INTRO.description}
        breadcrumbParent={{ label: "About Us", href: "/about-us" }}
        imageLayout="cover"
      />
      <StoryFeatureSection />
    </>
  );
}
