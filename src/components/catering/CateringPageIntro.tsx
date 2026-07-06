"use client";

import { PageIntroHero } from "@/components/PageIntroHero";
import { CATERING_INTRO } from "@/lib/catering-page-data";

export function CateringPageIntro() {
  return (
    <PageIntroHero
      intro={CATERING_INTRO}
      breadcrumbLabel="Catering Services"
      description={CATERING_INTRO.description}
      imageLayout="cover"
      solidOverlay
    />
  );
}
