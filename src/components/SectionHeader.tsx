type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  accent?: "pink" | "cyan" | "gold";
  align?: "center" | "left";
};

const ACCENT_COLORS = {
  pink: "text-brand-pink",
  cyan: "text-brand-cyan",
  gold: "text-brand-gold",
} as const;

export function SectionHeader({
  eyebrow,
  title,
  description,
  accent = "cyan",
  align = "center",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`mb-12 ${alignClass}`}>
      <div
        className={`mb-2.5 text-base font-semibold uppercase tracking-[1.5px] ${ACCENT_COLORS[accent]}`}
      >
        {eyebrow}
      </div>
      <h2 className="text-[clamp(1.875rem,4vw,2.625rem)] font-extrabold tracking-[-0.3px] text-brand-dark">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg leading-relaxed text-brand-muted ${
            align === "center" ? "mx-auto max-w-[640px]" : "max-w-[540px]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
