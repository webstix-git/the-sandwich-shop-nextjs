import { HomeSectionEyebrow } from "@/components/HomeSectionEyebrow";
import { SODA_FLAVORS } from "@/lib/constants";

type SodaFlavorChipsProps = {
  tone?: "onDark" | "light";
  label?: string;
  showLabel?: boolean;
  className?: string;
};

function FlavorBadge({
  name,
  tone,
}: {
  name: (typeof SODA_FLAVORS)[number];
  tone: "onDark" | "light";
}) {
  const onDark = tone === "onDark";

  return (
    <span
      className={`inline-flex w-full min-h-[2.75rem] items-center justify-center rounded-lg border px-3 py-2 text-center text-[14px] font-medium leading-snug tracking-[-0.01em] md:min-h-[2.875rem] md:text-[15px] ${
        onDark
          ? "soda-bar-copy border-white/40 bg-white/12 text-white"
          : "border-brand-border/80 bg-brand-cyan-light/45 text-brand-dark"
      }`}
    >
      {name}
    </span>
  );
}

export function SodaFlavorChips({
  tone = "onDark",
  label = "Signature flavors",
  showLabel = true,
  className = "",
}: SodaFlavorChipsProps) {
  const onDark = tone === "onDark";

  return (
    <div className={className}>
      {showLabel ? (
        onDark ? (
          <HomeSectionEyebrow accent="cyan" onDark className="mb-5">
            {label}
          </HomeSectionEyebrow>
        ) : (
          <p className="mb-5 text-[13px] font-bold uppercase tracking-[0.2em] text-brand-cyan-dark">
            {label}
          </p>
        )
      ) : null}

      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3 sm:gap-2.5">
        {SODA_FLAVORS.map((name) => (
          <FlavorBadge key={name} name={name} tone={tone} />
        ))}
      </div>
    </div>
  );
}
