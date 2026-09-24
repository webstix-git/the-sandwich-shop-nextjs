"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/navigation";
import type { NavLink } from "@/lib/navigation";
import { ChevronDownIcon } from "./icons";

export function NavDropdown({
  link,
  pathname,
}: {
  link: NavLink & { children: NonNullable<NavLink["children"]> };
  pathname: string;
}) {
  const [open, setOpen] = useState(false);
  const isActive = pathname.startsWith(link.href);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={link.href}
        className={`inline-flex items-center gap-1 py-1 transition-colors hover:text-brand-pink-dark ${
          isActive ? "text-brand-pink-dark" : ""
        }`}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {link.label}
        <ChevronDownIcon
          size={14}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </Link>

      {open && (
        <div className="absolute left-1/2 top-full z-50 w-[220px] -translate-x-1/2 pt-3">
          <div className="overflow-hidden rounded-2xl border border-brand-border bg-white py-2 shadow-[0_16px_40px_rgba(52,36,47,0.14)]">
            {link.children.map((child, index) => {
              const childActive = pathname === child.href;
              return (
                <Link
                  key={child.href}
                  href={child.href}
                  className={`block px-5 py-2.5 text-[15px] transition-colors hover:bg-brand-blush hover:text-brand-pink-dark ${
                    childActive
                      ? "font-semibold text-brand-pink-dark"
                      : index === 0
                        ? "font-semibold text-brand-dark"
                        : "text-brand-nav"
                  }`}
                >
                  {child.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export function MobileNavItem({
  link,
  onClose,
  pathname,
}: {
  link: NavLink;
  onClose: () => void;
  pathname: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const hasChildren = link.children && link.children.length > 0;
  const isActive = hasChildren
    ? pathname.startsWith(link.href)
    : pathname === link.href;

  if (!hasChildren) {
    return (
      <Link
        href={link.href}
        onClick={onClose}
        className={`rounded-lg px-3 py-3 text-lg font-medium transition-colors hover:bg-brand-blush hover:text-brand-pink-dark ${
          isActive ? "bg-brand-blush text-brand-pink-dark" : "text-brand-nav"
        }`}
      >
        {link.label}
      </Link>
    );
  }

  return (
    <div>
      <div
        className={`flex w-full items-center justify-between rounded-lg text-lg font-medium transition-colors ${
          isActive ? "text-brand-pink-dark" : "text-brand-nav"
        }`}
      >
        <Link
          href={link.href}
          onClick={onClose}
          className="flex-1 rounded-lg px-3 py-3 transition-colors hover:bg-brand-blush hover:text-brand-pink-dark"
        >
          {link.label}
        </Link>
        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          className="rounded-lg px-3 py-3 transition-colors hover:bg-brand-blush hover:text-brand-pink-dark"
          aria-expanded={expanded}
          aria-label={`${expanded ? "Collapse" : "Expand"} ${link.label} menu`}
        >
          <ChevronDownIcon
            size={18}
            className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
          />
        </button>
      </div>
      {expanded && (
        <div className="ml-3 mt-1 flex flex-col gap-0.5 border-l-2 border-brand-divider pl-3">
          {link.children.map((child, index) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={onClose}
              className={`rounded-lg px-3 py-2.5 text-base transition-colors hover:bg-brand-blush hover:text-brand-pink-dark ${
                pathname === child.href
                  ? "font-semibold text-brand-pink-dark"
                  : index === 0
                    ? "font-semibold text-brand-dark"
                    : "text-brand-nav"
              }`}
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function DesktopNav({ pathname }: { pathname: string }) {
  return (
    <nav className="relative z-50 hidden flex-1 items-center justify-center gap-6 text-[16px] font-medium text-brand-nav lg:flex xl:gap-7">
      {NAV_LINKS.map((link) =>
        link.children ? (
          <NavDropdown key={link.href} link={link} pathname={pathname} />
        ) : (
          <Link
            key={link.href}
            href={link.href}
            className={`py-1 transition-colors hover:text-brand-pink-dark ${
              pathname === link.href ? "text-brand-pink-dark" : ""
            }`}
          >
            {link.label}
          </Link>
        ),
      )}
    </nav>
  );
}
