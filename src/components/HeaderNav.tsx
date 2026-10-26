"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { NAV_LINKS } from "@/lib/navigation";
import type { NavLink } from "@/lib/navigation";
import { ChevronDownIcon, ChevronRightIcon, CloseIcon } from "./icons";

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

export function MobileNavDrawer({
  onClose,
  pathname,
}: {
  onClose: () => void;
  pathname: string;
}) {
  const [ready, setReady] = useState(false);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const previousHtmlOverflow = html.style.overflow;
    const previousBodyOverflow = body.style.overflow;
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onCloseRef.current();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      html.style.overflow = previousHtmlOverflow;
      body.style.overflow = previousBodyOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  if (!ready) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex h-dvh max-h-dvh w-full flex-col bg-white lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation"
    >
      <div className="flex shrink-0 items-center justify-between px-6 pb-4 pt-[max(1.25rem,env(safe-area-inset-top))]">
        <span className="text-lg font-semibold text-brand-dark">Navigation</span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="rounded-lg p-2 text-brand-nav hover:bg-brand-blush"
        >
          <CloseIcon />
        </button>
      </div>
      <nav className="flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto overscroll-contain px-6 pb-4">
        {NAV_LINKS.map((link) => (
          <MobileNavItem
            key={link.href}
            link={link}
            onClose={onClose}
            pathname={pathname}
          />
        ))}
      </nav>
      <div className="shrink-0 px-6 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-2">
        <Link
          href="/our-menu"
          onClick={onClose}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-pink px-6 py-3 text-center text-base font-semibold !text-white shadow-[0_6px_18px_rgba(237,78,141,0.4)] hover:!text-white"
        >
          View Our Menu
          <ChevronRightIcon size={16} />
        </Link>
      </div>
    </div>,
    document.body,
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
