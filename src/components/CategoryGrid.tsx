import Link from "next/link";
import Image from "next/image";
import type { CategoryCard } from "@/lib/page-content";
import { foodImageClassName } from "@/lib/dessert-cups-image";

type CategoryGridProps = {
  categories: CategoryCard[];
};

export function CategoryGrid({ categories }: CategoryGridProps) {
  return (
    <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => (
        <Link
          key={category.href}
          href={category.href}
          className="group block overflow-hidden rounded-3xl border border-brand-border bg-white shadow-[0_12px_30px_rgba(52,36,47,0.08)] transition-all hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(52,36,47,0.14)]"
        >
          <div className="h-[200px] overflow-hidden">
            <Image
              src={category.image}
              alt={category.imageAlt}
              width={400}
              height={200}
              className={foodImageClassName(
                category.image,
                "h-full w-full object-cover transition-transform duration-300 group-hover:scale-105",
              )}
            />
          </div>
          <div className="px-6 pb-7 pt-6">
            <div
              className={`mb-1.5 text-[13px] font-semibold uppercase tracking-[1px] ${category.tagColor}`}
            >
              {category.tag}
            </div>
            <h3 className="mb-2 text-[25px] font-semibold text-brand-dark">
              {category.title}
            </h3>
            <p className="text-base leading-normal text-brand-muted">
              {category.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
