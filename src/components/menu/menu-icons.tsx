import {
  Cookie,
  EggFried,
  Sandwich,
  Soup,
  Star,
  type LucideIcon,
} from "lucide-react";
import {
  IconBurger,
  type Icon as TablerIcon,
} from "@tabler/icons-react";

type IconProps = {
  className?: string;
  size?: number;
};

const NAV_STROKE = 2;
const CUSTOMIZE_STROKE = 1.75;

function NavLucideIcon({
  Icon,
  className,
  size = 18,
}: IconProps & { Icon: LucideIcon }) {
  return (
    <Icon
      size={size}
      strokeWidth={NAV_STROKE}
      absoluteStrokeWidth
      className={className}
      aria-hidden
    />
  );
}

function NavTablerIcon({
  Icon,
  className,
  size = 18,
}: IconProps & { Icon: TablerIcon }) {
  return (
    <Icon
      size={size}
      stroke={NAV_STROKE}
      className={className}
      aria-hidden
    />
  );
}

export function MenuStarIcon({ className, size = 18 }: IconProps) {
  return <NavLucideIcon Icon={Star} className={className} size={size} />;
}

/**
 * Hot sandwiches — stacked sandwich with rising steam (reads as “hot”).
 */
function HotSandwichMark({ className, size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={NAV_STROKE}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M9 3.5c.55.9.55 1.8 0 2.7" />
      <path d="M12 2.5c.7 1.15.7 2.3 0 3.45" />
      <path d="M15 3.5c.55.9.55 1.8 0 2.7" />
      <path d="m3 12.2 8.2-5.2a1.7 1.7 0 0 1 1.9 0L21.3 12.2" />
      <rect x="2.75" y="12" width="18.5" height="3.6" rx="1" />
      <path d="M4.5 15.6h15" />
      <path d="M3.5 18.2h8.2a1.5 1.5 0 0 1 1.3.7l.4.6h4.1a1.2 1.2 0 0 0 1.2-1.2V15.6" />
    </svg>
  );
}

export function MenuSandwichIcon({ className, size = 20 }: IconProps) {
  return <HotSandwichMark className={className} size={size} />;
}

export function MenuHotSandwichIcon({ className, size = 20 }: IconProps) {
  return <HotSandwichMark className={className} size={size} />;
}

/** Cold sandwiches — classic sandwich (clear, no steam) */
export function MenuColdSandwichIcon({ className, size = 20 }: IconProps) {
  return <NavLucideIcon Icon={Sandwich} className={className} size={size} />;
}

export function MenuBurgerIcon({ className, size = 20 }: IconProps) {
  return <NavTablerIcon Icon={IconBurger} className={className} size={size} />;
}

/**
 * Sides — french fries (the usual sandwich-shop side).
 */
function FriesMark({ className, size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={NAV_STROKE}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M6.5 10.5 8 3.75" />
      <path d="M10 10.5 10.75 3.5" />
      <path d="M13.5 10.5 14.5 3.75" />
      <path d="M17 10.5 18.25 4.25" />
      <path d="M5.5 10.5h13.2l-1.1 9.25a1.75 1.75 0 0 1-1.75 1.5H8.35a1.75 1.75 0 0 1-1.75-1.5L5.5 10.5Z" />
      <path d="M9 14.25v3.5" />
      <path d="M12.1 14.25v3.5" />
      <path d="M15.2 14.25v3.5" />
    </svg>
  );
}

/** Sides — french fries */
export function MenuSidesIcon({ className, size = 20 }: IconProps) {
  return <FriesMark className={className} size={size} />;
}

export function MenuSoupIcon({ className, size = 20 }: IconProps) {
  return <NavLucideIcon Icon={Soup} className={className} size={size} />;
}

/** Breakfast — sunny-side-up egg */
export function MenuBreakfastIcon({ className, size = 20 }: IconProps) {
  return <NavLucideIcon Icon={EggFried} className={className} size={size} />;
}

/** Kids — cookie (kid-friendly treat / kids meal) */
export function MenuKidsIcon({ className, size = 20 }: IconProps) {
  return <NavLucideIcon Icon={Cookie} className={className} size={size} />;
}

export function MenuHeartOutlineIcon({ className, size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M12 20.5S4.5 15 4.5 9.2A4.8 4.8 0 0 1 12 6.5a4.8 4.8 0 0 1 7.5 2.7c0 5.8-7.5 11.3-7.5 11.3z" />
    </svg>
  );
}

export function MenuArrowRightIcon({ className, size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function MenuFreshIcon({ className, size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M12 21V10M12 10C12 5 7 3 4 6c3 1 5 3 8 4M12 10c0-5 5-7 8-4-3 1-5 3-8 4" />
    </svg>
  );
}

export function MenuQualityIcon({ className, size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M12 3l2.2 4.5 4.9.7-3.5 3.4.8 4.9L12 14.8 7.6 16.5l.8-4.9L5 8.2l4.9-.7L12 3z" />
      <path d="M8 21h8" />
    </svg>
  );
}

export function MenuLocalIcon({ className, size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M12 21s6-5.2 6-10.5a6 6 0 0 0-12 0C6 15.8 12 21 12 21z" />
      <circle cx="12" cy="10.5" r="2" />
    </svg>
  );
}

export function MenuBagIcon({ className, size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M6 8h12l-1.2 12H7.2L6 8zM9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  );
}

export function MenuCheeseIcon({ className, size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={CUSTOMIZE_STROKE} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M4.5 18.5 8.5 5.5 20 13.5l-3.5 5H4.5z" />
      <circle cx="10" cy="12" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="13.5" cy="14" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="15.5" cy="11" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function MenuLeafIcon({ className, size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={CUSTOMIZE_STROKE} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M12 21c-4-3.5-6-7-6-11a6 6 0 0 1 12 0c0 4-2 7.5-6 11z" />
      <path d="M12 21V10" />
      <path d="M9.5 13.5C11 12 13 11.5 15 12.5" />
    </svg>
  );
}

export function MenuSauceIcon({ className, size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={CUSTOMIZE_STROKE} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M10 4.5h4v2.2c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1V4.5z" />
      <path d="M9 7.7h6v10.3a2.2 2.2 0 0 1-2.2 2.2h-1.6A2.2 2.2 0 0 1 9 18V7.7z" />
      <path d="M10.5 12h3" />
    </svg>
  );
}

export function MenuSparkleIcon({ className, size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={CUSTOMIZE_STROKE} strokeLinecap="round" className={className} aria-hidden>
      <path d="M12 3.5v3.5M12 17v3.5M4.5 12H8M16 12h3.5M6.2 6.2l2.5 2.5M15.3 15.3l2.5 2.5M17.8 6.2l-2.5 2.5M8.7 15.3l-2.5 2.5" />
      <circle cx="12" cy="12" r="2.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export type MenuCustomizeIconKey = "cheese" | "leaf" | "sauce" | "sparkle";

export function MenuCustomizeIcon({
  icon,
  className,
  size = 20,
}: {
  icon: MenuCustomizeIconKey;
  className?: string;
  size?: number;
}) {
  switch (icon) {
    case "cheese":
      return <MenuCheeseIcon className={className} size={size} />;
    case "leaf":
      return <MenuLeafIcon className={className} size={size} />;
    case "sauce":
      return <MenuSauceIcon className={className} size={size} />;
    case "sparkle":
      return <MenuSparkleIcon className={className} size={size} />;
  }
}

export type MenuNavIconKey =
  | "star"
  | "sandwich"
  | "hot-sandwich"
  | "cold-sandwich"
  | "burger"
  | "sides"
  | "soup"
  | "breakfast"
  | "kids";

export function MenuNavIcon({ icon, className, size = 18 }: { icon: MenuNavIconKey; className?: string; size?: number }) {
  switch (icon) {
    case "star":
      return <MenuStarIcon className={className} size={size} />;
    case "sandwich":
    case "hot-sandwich":
      return <MenuHotSandwichIcon className={className} size={size} />;
    case "cold-sandwich":
      return <MenuColdSandwichIcon className={className} size={size} />;
    case "burger":
      return <MenuBurgerIcon className={className} size={size} />;
    case "sides":
      return <MenuSidesIcon className={className} size={size} />;
    case "soup":
      return <MenuSoupIcon className={className} size={size} />;
    case "breakfast":
      return <MenuBreakfastIcon className={className} size={size} />;
    case "kids":
      return <MenuKidsIcon className={className} size={size} />;
  }
}
