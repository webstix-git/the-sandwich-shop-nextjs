type IconProps = {
  className?: string;
  size?: number;
};

const NAV_STROKE = 1.65;

export function MenuStarIcon({ className, size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M12 3.2l2.2 4.6 5.1.7-3.7 3.6.9 5.1L12 14.8 7.5 17.2l.9-5.1-3.7-3.6 5.1-.7L12 3.2z"
        stroke="currentColor"
        strokeWidth={NAV_STROKE}
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MenuSandwichIcon({ className, size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={NAV_STROKE} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M4.5 12.5h15" />
      <path d="M5.5 12.5a6.5 6.5 0 0 1 13 0" />
      <path d="M7 9.5c1.2-1.8 2.8-2.7 5-2.7s3.8.9 5 2.7" />
      <path d="M6.5 15.5h11a1.5 1.5 0 0 1 0 3h-11a1.5 1.5 0 0 1 0-3z" />
    </svg>
  );
}

export function MenuBurgerIcon({ className, size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={NAV_STROKE} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M5 10.5a7 7 0 0 1 14 0" />
      <path d="M4.5 13.5h15" />
      <path d="M6 16.5h12a2 2 0 0 1 0 4H6a2 2 0 0 1 0-4z" />
      <path d="M8.5 10.5V9M12 10V8.5M15.5 10.5V9" />
    </svg>
  );
}

export function MenuSidesIcon({ className, size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={NAV_STROKE} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M8 5.5h8l1.5 14H6.5L8 5.5z" />
      <path d="M9.5 9.5l1.2 5M12 8.8v6.2M14.5 9.5l-1.2 5" />
      <path d="M7.5 5.5c0-1.1 2-2 4.5-2s4.5.9 4.5 2" />
    </svg>
  );
}

export function MenuSoupIcon({ className, size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={NAV_STROKE} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M5 14.5h14" />
      <path d="M6.5 14.5c0-3.6 2.5-6.5 5.5-6.5s5.5 2.9 5.5 6.5" />
      <path d="M8.5 18.5h7" />
      <path d="M9 6.5c.4-.8 1.2-1.5 2.2-1.5M15 6.5c-.4-.8-1.2-1.5-2.2-1.5" />
      <path d="M12 4v1.5" />
    </svg>
  );
}

export function MenuBreakfastIcon({ className, size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={NAV_STROKE} strokeLinecap="round" className={className} aria-hidden>
      <circle cx="12" cy="12" r="3.8" />
      <path d="M12 2.5v2.2M12 19.3v2.2M4.4 4.4l1.6 1.6M18 18l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.4 19.6l1.6-1.6M18 6l1.6-1.6" />
    </svg>
  );
}

export function MenuKidsIcon({ className, size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={NAV_STROKE} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M5.5 11.5c0-3 2.9-5.5 6.5-5.5s6.5 2.5 6.5 5.5" />
      <path d="M4.5 11.5h15v2.8c0 1-.8 1.8-1.8 1.8H6.3c-1 0-1.8-.8-1.8-1.8V11.5z" />
      <circle cx="9.5" cy="14.2" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="14.2" r="0.9" fill="currentColor" stroke="none" />
      <path d="M10.2 16.4c.7.6 1.6.9 2.5.9s1.8-.3 2.5-.9" />
    </svg>
  );
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
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={NAV_STROKE} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M4.5 18.5 8.5 5.5 20 13.5l-3.5 5H4.5z" />
      <circle cx="10" cy="12" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="13.5" cy="14" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="15.5" cy="11" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function MenuLeafIcon({ className, size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={NAV_STROKE} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M12 21c-4-3.5-6-7-6-11a6 6 0 0 1 12 0c0 4-2 7.5-6 11z" />
      <path d="M12 21V10" />
      <path d="M9.5 13.5C11 12 13 11.5 15 12.5" />
    </svg>
  );
}

export function MenuSauceIcon({ className, size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={NAV_STROKE} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M10 4.5h4v2.2c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1V4.5z" />
      <path d="M9 7.7h6v10.3a2.2 2.2 0 0 1-2.2 2.2h-1.6A2.2 2.2 0 0 1 9 18V7.7z" />
      <path d="M10.5 12h3" />
    </svg>
  );
}

export function MenuSparkleIcon({ className, size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={NAV_STROKE} strokeLinecap="round" className={className} aria-hidden>
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
      return <MenuSandwichIcon className={className} size={size} />;
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
