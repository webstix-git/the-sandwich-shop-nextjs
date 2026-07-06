import type { Metadata } from "next";
import { MenuCategoryPageBody } from "@/components/menu/category/MenuCategoryPageBody";
import { MenuCategoryPageIntro } from "@/components/menu/category/MenuCategoryPageIntro";
import { MENU_CATEGORY_PAGES } from "@/lib/menu-category-data";

const page = MENU_CATEGORY_PAGES["main-courses"];

export const metadata: Metadata = {
  title: `${page.title} | The Sandwich Shop & Dirty Soda Bar`,
  description: page.metaDescription,
};

export default function MainCoursesPage() {
  return (
    <>
      <MenuCategoryPageIntro page={page} />
      <MenuCategoryPageBody page={page} />
    </>
  );
}
