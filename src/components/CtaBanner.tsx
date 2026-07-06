import Link from "next/link";

type CtaBannerProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "pink" | "cyan" | "gradient";
};

export function CtaBanner({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  variant = "gradient",
}: CtaBannerProps) {
  const bgClass =
    variant === "cyan"
      ? "bg-gradient-to-br from-brand-cyan to-brand-cyan-dark text-white"
      : variant === "pink"
        ? "bg-gradient-to-br from-brand-pink to-brand-pink-dark text-white"
        : "border border-brand-catering-border bg-gradient-to-br from-brand-blush to-brand-peach text-brand-dark";

  const descClass =
    variant === "gradient" ? "text-brand-muted" : "text-white/90";

  return (
    <section className="mx-auto max-w-[1120px] px-7 py-16 md:py-20">
      <div
        className={`relative overflow-hidden rounded-[30px] px-8 py-12 text-center md:px-14 md:py-16 ${bgClass}`}
      >
        <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10" />
        <div className="pointer-events-none absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-white/10" />

        <div className="relative z-10">
          <div
            className={`mb-3 text-base font-semibold uppercase tracking-[1.5px] ${
              variant === "gradient" ? "text-brand-gold" : "text-white/80"
            }`}
          >
            {eyebrow}
          </div>
          <h2 className="mb-4 text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold leading-[1.05] tracking-[-0.3px]">
            {title}
          </h2>
          <p className={`mx-auto mb-8 max-w-[520px] text-lg leading-relaxed ${descClass}`}>
            {description}
          </p>
          <div className="flex flex-wrap justify-center gap-3.5">
            <Link
              href={primaryHref}
              className={`rounded-full px-8 py-4 text-lg font-semibold transition-all hover:-translate-y-0.5 ${
                variant === "gradient"
                  ? "bg-brand-pink text-white shadow-[0_8px_22px_rgba(237,78,141,0.32)] hover:bg-brand-pink-hover"
                  : "bg-white text-brand-dark shadow-[0_10px_24px_rgba(0,0,0,0.15)] hover:bg-brand-peach"
              }`}
            >
              {primaryLabel}
            </Link>
            {secondaryLabel && secondaryHref && (
              <Link
                href={secondaryHref}
                className={`rounded-full border-2 px-[30px] py-3.5 text-lg font-semibold transition-all ${
                  variant === "gradient"
                    ? "border-brand-cyan bg-white text-brand-cyan hover:bg-brand-cyan hover:text-white"
                    : "border-white/50 bg-transparent text-white hover:bg-white/15"
                }`}
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
