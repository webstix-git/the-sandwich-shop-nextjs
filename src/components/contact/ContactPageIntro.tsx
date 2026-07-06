"use client";

import { PageIntroHero } from "@/components/PageIntroHero";
import { CONTACT_INTRO } from "@/lib/contact-page-data";

export function ContactPageIntro() {
  return (
    <PageIntroHero
      intro={CONTACT_INTRO}
      breadcrumbLabel="Contact Us"
      description={CONTACT_INTRO.description}
      imageLayout="cover"
    />
  );
}
