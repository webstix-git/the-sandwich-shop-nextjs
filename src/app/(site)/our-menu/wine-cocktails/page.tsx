import type { Metadata } from "next";
import { MenuCategoryPageBody } from "@/components/menu/category/MenuCategoryPageBody";
import { MenuCategoryPageIntro } from "@/components/menu/category/MenuCategoryPageIntro";
import { MENU_CATEGORY_PAGES } from "@/lib/menu-category-data";
import { pageMetadata } from "@/lib/seo";

const page = MENU_CATEGORY_PAGES["wine-cocktails"];

export const metadata: Metadata = pageMetadata({
  title: page.title,
  description: page.metaDescription,
  path: `/our-menu/${page.slug}`,
});

export default function WineCocktailsPage() {
  return (
    <>
      <MenuCategoryPageIntro page={page} />
      <MenuCategoryPageBody page={page} />
    </>
  );
}
