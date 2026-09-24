"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useSiteHeader } from "@/components/ScrollStickyTopBar";
import {
  COLD_SANDWICH_SIZE_COLUMNS,
  MENU_COLD_CUSTOMIZE,
  MENU_COLD_SANDWICHES,
  type ColdSandwichItem,
  type ColdSandwichPrices,
} from "@/lib/menu-page-data";

const PRICE_GRID_CLASS =
  "grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3 md:gap-4";

function formatPrice(amount: number) {
  return `$${amount}`;
}

function useStickyTopBelowMenuChrome() {
  const { height: headerHeight } = useSiteHeader();
  const [filterHeight, setFilterHeight] = useState(0);

  useEffect(() => {
    const nav = document.querySelector<HTMLElement>(
      'nav[aria-label="Menu categories"]',
    );

    if (!nav) {
      setFilterHeight(0);
      return;
    }

    const update = () => setFilterHeight(nav.offsetHeight);
    update();

    const resizeObserver = new ResizeObserver(update);
    resizeObserver.observe(nav);
    return () => resizeObserver.disconnect();
  }, []);

  return headerHeight + filterHeight;
}

function MenuDottedRule() {
  return (
    <span
      className="min-w-[12px] flex-1 translate-y-[-2px] border-b border-dotted border-[#C4B0A0]"
      aria-hidden
    />
  );
}

function BreadSizeLegend() {
  return (
    <div
      className={PRICE_GRID_CLASS}
      role="row"
      aria-label="Bread size options"
    >
      {COLD_SANDWICH_SIZE_COLUMNS.map((col) => (
        <div
          key={col.key}
          role="columnheader"
          className="rounded-xl border border-[#E5D4C4]/80 bg-brand-cream/70 px-3 py-2.5 text-center sm:bg-brand-cream/55 sm:py-3 md:px-4 md:py-3.5"
        >
          <p className="text-[14px] font-bold text-brand-dark sm:text-[15px] md:text-[16px]">
            {col.label}
          </p>
        </div>
      ))}
    </div>
  );
}

function StickyBreadSizeHeader({
  listEndRef,
}: {
  listEndRef: React.RefObject<HTMLDivElement | null>;
}) {
  const stickyTop = useStickyTopBelowMenuChrome();
  const anchorRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [isPinned, setIsPinned] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [pinnedBox, setPinnedBox] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const updateHeight = () => setHeaderHeight(header.offsetHeight);
    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(header);
    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    const updatePinned = () => {
      const anchor = anchorRef.current;
      const end = listEndRef.current;
      if (!anchor || !end) return;

      const anchorRect = anchor.getBoundingClientRect();
      const endRect = end.getBoundingClientRect();
      const shouldPin =
        anchorRect.top <= stickyTop && endRect.top > stickyTop + headerHeight;

      setIsPinned(shouldPin);
      if (shouldPin) {
        setPinnedBox({ left: anchorRect.left, width: anchorRect.width });
      }
    };

    updatePinned();
    window.addEventListener("scroll", updatePinned, { passive: true });
    window.addEventListener("resize", updatePinned, { passive: true });
    return () => {
      window.removeEventListener("scroll", updatePinned);
      window.removeEventListener("resize", updatePinned);
    };
  }, [headerHeight, listEndRef, stickyTop]);

  return (
    <div ref={anchorRef}>
      {isPinned ? (
        <div
          style={{ height: headerHeight }}
          aria-hidden
          className="pointer-events-none"
        />
      ) : null}
      <div
        ref={headerRef}
        className={`border-b border-[#E5D4C4] bg-brand-cream/95 px-4 py-4 shadow-[0_6px_16px_rgba(52,36,47,0.06)] backdrop-blur-md sm:px-6 md:px-8 ${
          isPinned
            ? "fixed z-[34] rounded-none"
            : "relative z-20 rounded-t-2xl"
        }`}
        style={
          isPinned
            ? { top: stickyTop, left: pinnedBox.left, width: pinnedBox.width }
            : undefined
        }
      >
        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-pink-dark">
          Bread sizes
        </p>
        <BreadSizeLegend />
      </div>
    </div>
  );
}

function PriceCell({
  label,
  amount,
  showLabel = false,
}: {
  label: string;
  amount: number;
  showLabel?: boolean;
}) {
  return (
    <div className="rounded-xl bg-brand-cream/40 px-3 py-2.5 text-center sm:bg-transparent sm:px-0 sm:py-0">
      {showLabel ? (
        <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.1em] text-brand-nav sm:hidden">
          {label}
        </p>
      ) : null}
      <span className="text-[16px] font-bold tabular-nums text-brand-dark md:text-[17px]">
        {formatPrice(amount)}
      </span>
    </div>
  );
}

function ColdSandwichRow({ item }: { item: ColdSandwichItem }) {
  return (
    <li className="px-4 py-5 md:px-6 md:py-5">
      <p className="text-[18px] font-bold leading-snug text-brand-dark md:text-[19px]">
        <span className="mr-1.5 tabular-nums text-brand-dark">
          {item.number}.
        </span>
        {item.name}
      </p>
      {item.description ? (
        <p className="mt-1.5 text-[15px] leading-[1.65] text-brand-nav md:text-[16px]">
          {item.description}
        </p>
      ) : null}
      <div className={`mt-4 ${PRICE_GRID_CLASS}`}>
        {COLD_SANDWICH_SIZE_COLUMNS.map((col) => (
          <PriceCell
            key={col.key}
            label={col.label}
            amount={item.prices[col.key as keyof ColdSandwichPrices]}
            showLabel
          />
        ))}
      </div>
    </li>
  );
}

function ColdSandwichExtraRow({
  number,
  name,
  price,
  note,
}: {
  number: number;
  name: string;
  price: string;
  note?: string;
}) {
  return (
    <li className="px-4 py-5 md:px-6 md:py-5">
      <div className="flex items-baseline gap-2.5">
        <span className="text-[18px] font-bold leading-snug text-brand-dark md:text-[19px]">
          <span className="mr-1.5 tabular-nums text-brand-dark">
            {number}.
          </span>
          {name}
        </span>
        <MenuDottedRule />
        <span className="shrink-0 text-[18px] font-bold tabular-nums text-brand-dark md:text-[19px]">
          {price}
        </span>
      </div>
      {note ? (
        <p className="mt-1.5 text-[15px] leading-[1.65] text-brand-nav md:text-[16px]">
          {note}
        </p>
      ) : null}
    </li>
  );
}

function CustomizeZoneTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div>
      <h4 className="text-[16px] font-extrabold text-brand-dark md:text-[17px]">
        {title}
      </h4>
      {subtitle ? (
        <p className="mt-1 text-[15px] leading-relaxed text-brand-nav md:text-[16px]">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function CheeseStrip({ items }: { items: readonly string[] }) {
  return (
    <div className="border-b border-[#E5D4C4]/60 bg-brand-bg/90 px-5 py-5 md:px-7 md:py-6">
      <CustomizeZoneTitle title="Cheeses" subtitle="Pick one or mix a few." />
      <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3 md:gap-x-8 lg:grid-cols-4">
        {items.map((item) => (
          <li
            key={item}
            className="text-[16px] font-medium leading-[1.55] text-brand-dark"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ToppingsPanel({
  groups,
}: {
  groups: readonly { label: string; items: readonly string[] }[];
}) {
  return (
    <div className="border-b border-[#E5D4C4]/80 bg-brand-cream/35 p-5 md:border-b-0 md:p-6">
      <CustomizeZoneTitle
        title="Toppings"
        subtitle="Fresh add-ons by category."
      />
      <div className="mt-5 space-y-5 md:space-y-6">
        {groups.map((group) => (
          <div key={group.label}>
            <p className="mb-3 text-[15px] font-bold uppercase tracking-[0.08em] text-brand-pink-dark md:text-[16px]">
              {group.label}
            </p>
            <ul className="grid grid-cols-1 gap-y-2.5 sm:grid-cols-2 sm:gap-x-8">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="text-[16px] leading-[1.55] text-brand-dark"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function SaucesRail({ items }: { items: readonly string[] }) {
  return (
    <div className="bg-brand-blush/30 p-5 md:border-l md:border-[#E5D4C4]/80 md:p-6">
      <CustomizeZoneTitle
        title="Sauces"
        subtitle="Spreads, dressings & more."
      />
      <ul className="mt-4 grid grid-cols-1 gap-y-2.5 sm:grid-cols-2 md:grid-cols-1 md:gap-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="text-[16px] leading-[1.55] text-brand-dark"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function MenuCustomizeSection() {
  return (
    <section
      className="mt-8 md:mt-10"
      aria-labelledby="cold-customize-heading"
    >
      <h3
        id="cold-customize-heading"
        className="text-[18px] font-extrabold tracking-[-0.02em] text-brand-dark md:text-[20px]"
      >
        Make it yours
      </h3>

      <div className="mt-4 overflow-hidden rounded-[22px] border border-[#E5D4C4] bg-white shadow-[0_10px_36px_rgba(52,36,47,0.06)] md:mt-5">
        <CheeseStrip items={MENU_COLD_CUSTOMIZE.cheeses} />

        <div className="grid md:grid-cols-[1.45fr_1fr]">
          <ToppingsPanel groups={MENU_COLD_CUSTOMIZE.toppingGroups} />
          <SaucesRail items={MENU_COLD_CUSTOMIZE.sauces} />
        </div>
      </div>
    </section>
  );
}

type MenuColdSandwichesSectionProps = {
  scrollMarginTop: number;
};

export function MenuColdSandwichesSection({
  scrollMarginTop,
}: MenuColdSandwichesSectionProps) {
  const section = MENU_COLD_SANDWICHES;
  const listEndRef = useRef<HTMLDivElement>(null);

  return (
    <div
      id={section.id}
      className="mt-16 md:mt-20"
      style={{ scrollMarginTop }}
    >
      <header className="mb-5 md:mb-6">
        <div className="flex items-center gap-3.5 md:gap-4">
          <div className="relative h-[52px] w-[52px] shrink-0 overflow-hidden rounded-[14px] shadow-[0_4px_14px_rgba(52,36,47,0.1)] md:h-14 md:w-14 md:rounded-2xl">
            <Image
              src={section.headingImage}
              alt={section.headingImageAlt}
              fill
              sizes="56px"
              className="object-cover"
            />
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="text-[clamp(1.375rem,2.5vw,1.875rem)] font-extrabold leading-[1.1] tracking-[-0.3px] text-brand-dark">
              {section.title}
            </h2>
            <p className="mt-1.5 text-xs font-bold uppercase leading-tight tracking-[0.14em] text-brand-pink-dark sm:text-[16px] sm:tracking-[1.5px]">
              {section.scriptSubtitle}
            </p>
          </div>
        </div>
        <p className="mt-4 max-w-[52ch] text-[15px] leading-[1.65] text-brand-nav md:text-[16px]">
          Pick your bread size. Every sandwich is priced below for each
          option.
        </p>
      </header>

      <div className="rounded-2xl border border-[#E5D4C4] bg-white/55 shadow-[0_6px_24px_rgba(52,36,47,0.04)]">
        <StickyBreadSizeHeader listEndRef={listEndRef} />

        <ul className="divide-y divide-[#E5D4C4]">
          {section.items.map((item) => (
            <ColdSandwichRow key={item.number} item={item} />
          ))}
        </ul>

        <div
          ref={listEndRef}
          className="border-t border-[#E5D4C4] bg-brand-cream/20"
        >
          <p className="border-b border-[#E5D4C4] px-4 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-pink-dark md:px-6">
            Also available
          </p>
          <ul className="divide-y divide-[#E5D4C4]">
            {section.extras.map((extra) => (
              <ColdSandwichExtraRow key={extra.number} {...extra} />
            ))}
          </ul>
        </div>
      </div>

      <MenuCustomizeSection />
    </div>
  );
}
