export const COMPACT_INTRO_PAGES = [
  "/our-menu",
  "/our-menu/appetizers",
  "/our-menu/main-courses",
  "/our-menu/desserts",
  "/our-menu/wine-cocktails",
  "/our-menu/kids-menu",
  "/about-us",
  "/about-us/our-story",
  "/contact-us",
  "/services",
  "/services/catering-services",
  "/privacy-policy",
  "/ai-policy",
  "/sitemap",
  "/service-index",
] as const;

export function isCompactIntroPage(pathname: string | null): boolean {
  if (!pathname) return false;
  return (COMPACT_INTRO_PAGES as readonly string[]).includes(pathname);
}
