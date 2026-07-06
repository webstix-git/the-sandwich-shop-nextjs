"use client";

import { MenuCategoryFilter } from "@/components/menu/MenuCategoryFilter";
import { PageIntroHero } from "@/components/PageIntroHero";
import { MENU_INTRO } from "@/lib/menu-page-data";

export function MenuPageIntro() {
  return (
    <PageIntroHero
      intro={MENU_INTRO}
      breadcrumbLabel="Our Menu"
      description={MENU_INTRO.description}
    >
      <MenuCategoryFilter />
    </PageIntroHero>
  );
}
