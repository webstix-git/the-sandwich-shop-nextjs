"use client";

import { PageIntroHero } from "@/components/PageIntroHero";
import type { MenuCategoryPageData } from "@/lib/menu-category-data";

export function MenuCategoryPageIntro({
  page,
}: {
  page: MenuCategoryPageData;
}) {
  return (
    <PageIntroHero
      intro={page.intro}
      breadcrumbLabel={page.title}
      description={page.intro.description}
      breadcrumbParent={{ label: "Our Menu", href: "/our-menu" }}
      imageLayout="cover"
    />
  );
}
