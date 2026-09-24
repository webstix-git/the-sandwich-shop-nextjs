import type { ReactNode } from "react";

const EYEBROW_STYLES = {
  pink: {
    light: {
      text: "text-brand-pink-dark",
    },
    dark: {
      text: "text-brand-pink-light",
    },
  },
  cyan: {
    light: {
      text: "text-brand-cyan-dark",
    },
    dark: {
      text: "text-white/90",
    },
  },
} as const;

type HomeSectionEyebrowProps = {
  children: ReactNode;
  accent?: keyof typeof EYEBROW_STYLES;
  onDark?: boolean;
  className?: string;
};

export function HomeSectionEyebrow({
  children,
  accent = "cyan",
  onDark = false,
  className = "",
}: HomeSectionEyebrowProps) {
  const tone = onDark ? "dark" : "light";
  const styles = EYEBROW_STYLES[accent][tone];

  return (
    <p
      className={`inline-flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.2em] ${styles.text} ${className}`}
    >
      {children}
    </p>
  );
}
