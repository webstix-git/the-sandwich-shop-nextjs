"use client";

import { PageIntroHero } from "@/components/PageIntroHero";
import { CATERING_INTRO } from "@/lib/catering-page-data";

export function CateringPageIntro() {
  return (
    <PageIntroHero
      intro={CATERING_INTRO}
      breadcrumbLabel="Catering"
      description={CATERING_INTRO.description}
      breadcrumbParent={{ label: "Services", href: "/services" }}
      imageLayout="cover"
      heroOverlay="premium"
      imagePosition="center 35%"
    />
  );
}
