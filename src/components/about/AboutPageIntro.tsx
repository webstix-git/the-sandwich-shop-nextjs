"use client";

import { PageIntroHero } from "@/components/PageIntroHero";
import { ABOUT_INTRO } from "@/lib/about-page-data";

export function AboutPageIntro() {
  return (
    <PageIntroHero
      intro={ABOUT_INTRO}
      breadcrumbLabel="About Us"
      description={ABOUT_INTRO.description}
      imageLayout="cover"
    />
  );
}
