"use client";

import { PageIntroHero } from "@/components/PageIntroHero";
import { SERVICES_INTRO } from "@/lib/services-page-data";

export function ServicesPageIntro() {
  return (
    <PageIntroHero
      intro={SERVICES_INTRO}
      breadcrumbLabel="Services"
      description={SERVICES_INTRO.description}
      imageLayout="cover"
    />
  );
}
