import { StarIcon } from "@/components/icons";
import type { MenuSideItem, MenuTextItem } from "@/lib/menu-page-data";

export function MenuPremiumItemList({
  items,
  relaxed = false,
}: {
  items: readonly (MenuTextItem | MenuSideItem)[];
  relaxed?: boolean;
}) {
  return (
    <ul className="divide-y divide-[#E5D4C4]">
      {items.map((item) => (
        <MenuPremiumItemRow key={item.name} item={item} relaxed={relaxed} />
      ))}
    </ul>
  );
}

function MenuPremiumItemRow({
  item,
  relaxed = false,
}: {
  item: MenuTextItem | MenuSideItem;
  relaxed?: boolean;
}) {
  const badge = "badge" in item ? item.badge : undefined;

  return (
    <li className={relaxed ? "py-5" : "py-4"}>
      <div className="flex items-baseline gap-2.5">
        <span className="text-[18px] font-bold leading-snug text-brand-dark md:text-[19px]">
          {item.name}
        </span>
        {badge ? (
          <span className="inline-flex items-center gap-1 rounded-full bg-brand-pink-light px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-brand-pink-dark">
            <StarIcon size={10} className="text-brand-pink-dark" />
            {badge}
          </span>
        ) : null}
        <span
          className="min-w-[12px] flex-1 translate-y-[-2px] border-b border-dotted border-[#C4B0A0]"
          aria-hidden
        />
        <span className="shrink-0 text-[18px] font-bold tabular-nums text-brand-dark md:text-[19px]">
          {item.price}
        </span>
      </div>
      {item.description ? (
        <p className="mt-1.5 text-[16px] leading-[1.65] text-brand-nav">
          {item.description}
        </p>
      ) : null}
    </li>
  );
}
