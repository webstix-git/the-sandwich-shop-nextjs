export const CATEGORY_PAGE_LAYOUT = {
  section: "px-7 pt-[80px] pb-[80px]",
  divider: "border-t border-brand-border/60",
  inner: "mx-auto max-w-[1250px]",
  header: "mb-12 md:mb-16",
  ctaSection: "px-7 pt-0 pb-[80px]",
} as const;

const CATEGORY_TONES = {
  white: "bg-white",
  cream: "bg-brand-warm-cream",
  peach: "bg-brand-bg",
} as const;

export type CategorySectionTone = keyof typeof CATEGORY_TONES;

export function categorySectionClass(
  tone: CategorySectionTone,
  { first = false, extra = "" }: { first?: boolean; extra?: string } = {},
) {
  return [
    CATEGORY_PAGE_LAYOUT.section,
    !first ? CATEGORY_PAGE_LAYOUT.divider : "",
    CATEGORY_TONES[tone],
    extra,
  ]
    .filter(Boolean)
    .join(" ");
}
