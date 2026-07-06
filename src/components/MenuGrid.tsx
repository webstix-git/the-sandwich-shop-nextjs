import type { MenuItem } from "@/lib/page-content";

type MenuGridProps = {
  items: MenuItem[];
  columns?: 2 | 3;
};

export function MenuGrid({ items, columns = 2 }: MenuGridProps) {
  const gridClass =
    columns === 3
      ? "grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      : "grid gap-6 md:grid-cols-2";

  return (
    <div className={gridClass}>
      {items.map((item) => (
        <article
          key={item.name}
          className="group relative overflow-hidden rounded-3xl border border-brand-border bg-white p-7 shadow-[0_12px_30px_rgba(52,36,47,0.08)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(52,36,47,0.12)]"
        >
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              {item.tag && (
                <div
                  className={`mb-1.5 text-[13px] font-semibold uppercase tracking-[1px] ${item.tagColor ?? "text-brand-pink"}`}
                >
                  {item.tag}
                </div>
              )}
              <h3 className="text-[22px] font-semibold text-brand-dark">
                {item.name}
              </h3>
            </div>
            {item.price && (
              <span className="shrink-0 rounded-full bg-brand-peach px-3.5 py-1 text-[15px] font-bold text-brand-gold-dark">
                {item.price}
              </span>
            )}
          </div>
          <p className="text-base leading-relaxed text-brand-muted">
            {item.description}
          </p>
          <div className="absolute bottom-0 left-0 h-1 w-0 bg-brand-pink transition-all duration-300 group-hover:w-full" />
        </article>
      ))}
    </div>
  );
}
