import type { ReactNode } from "react";

const EYEBROW_STYLES = {
  pink: {
    light: {
      text: "text-brand-pink-dark",
      line: "bg-brand-pink/50",
    },
    dark: {
      text: "text-brand-pink-light",
      line: "bg-brand-pink/70",
    },
  },
  cyan: {
    light: {
      text: "text-brand-cyan-dark",
      line: "bg-brand-cyan/50",
    },
    dark: {
      text: "text-white/90",
      line: "bg-white/50",
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
      className={`inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] ${styles.text} ${className}`}
    >
      <span className={`h-px w-6 shrink-0 ${styles.line}`} aria-hidden />
      {children}
      <span className={`h-px w-6 shrink-0 ${styles.line}`} aria-hidden />
    </p>
  );
}
