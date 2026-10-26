"use client";

import { MENU_CATEGORY_CHIPS } from "@/lib/menu-page-data";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const MENU_SECTION_IDS = new Set(MENU_CATEGORY_CHIPS.map((chip) => chip.id));
const STORAGE_KEY = "sandwich-scroll-positions";

const positions = new Map<string, number>();
let backNavigation = false;
let userTookOver = false;
let honoredLoadRestore = false;
let lockedKey: string | null = null;

export function isBackNavigation() {
  return backNavigation;
}

function locationKey() {
  return `${window.location.pathname}${window.location.search}${window.location.hash}`;
}

function readScroll() {
  return (
    window.scrollY ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0
  );
}

function writeScroll(top: number) {
  const html = document.documentElement;
  const previousHtml = html.style.scrollBehavior;
  const previousBody = document.body.style.scrollBehavior;
  html.style.scrollBehavior = "auto";
  document.body.style.scrollBehavior = "auto";
  window.scrollTo(0, top);
  html.scrollTop = top;
  document.body.scrollTop = top;
  html.style.scrollBehavior = previousHtml;
  document.body.style.scrollBehavior = previousBody;
}

function loadStoredPositions() {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const entries = JSON.parse(raw) as [string, number][];
    for (const [key, value] of entries) {
      if (typeof key === "string" && typeof value === "number") {
        positions.set(key, value);
      }
    }
  } catch {
    // Ignore private-mode storage failures.
  }
}

function persistPositions() {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify([...positions.entries()]));
  } catch {
    // Ignore private-mode storage failures.
  }
}

function savePosition() {
  const key = locationKey();
  if (lockedKey === key) return;
  positions.set(key, readScroll());
  persistPositions();
}

function rememberPosition() {
  const key = locationKey();
  positions.set(key, readScroll());
  lockedKey = key;
  persistPositions();
}

function headerOffset() {
  const header = document.querySelector<HTMLElement>("[data-site-header]");
  return header?.getBoundingClientRect().height ?? 70;
}

function scrollToTop() {
  if (userTookOver) return;
  if (readScroll() > 1) writeScroll(0);
}

function alignToHash(hash: string) {
  if (userTookOver) return;

  const target = document.getElementById(hash);
  if (!target) {
    scrollToTop();
    return;
  }

  const filter = MENU_SECTION_IDS.has(hash)
    ? document.querySelector<HTMLElement>('nav[aria-label="Menu categories"]')
    : null;
  const filterHeight = filter ? filter.getBoundingClientRect().height : 0;
  const top = Math.max(
    0,
    target.getBoundingClientRect().top + readScroll() - headerOffset() - filterHeight - 12,
  );

  if (Math.abs(readScroll() - top) > 2) writeScroll(top);
}

function restorePosition(y: number) {
  if (userTookOver) return;
  const max = Math.max(
    0,
    document.documentElement.scrollHeight - window.innerHeight,
  );
  const top = Math.min(Math.max(0, y), max);
  if (Math.abs(readScroll() - top) > 2) writeScroll(top);
}

function isReloadBackForward() {
  const entry = performance.getEntriesByType("navigation")[0] as
    | PerformanceNavigationTiming
    | undefined;
  return entry?.type === "back_forward";
}

function watchForUserScroll() {
  const stop = () => {
    userTookOver = true;
  };
  const onKey = (event: KeyboardEvent) => {
    if (
      event.key === "ArrowDown" ||
      event.key === "ArrowUp" ||
      event.key === "PageDown" ||
      event.key === "PageUp" ||
      event.key === "Home" ||
      event.key === "End" ||
      event.key === " "
    ) {
      stop();
    }
  };

  window.addEventListener("wheel", stop, { passive: true });
  window.addEventListener("touchmove", stop, { passive: true });
  window.addEventListener("keydown", onKey);

  return () => {
    window.removeEventListener("wheel", stop);
    window.removeEventListener("touchmove", stop);
    window.removeEventListener("keydown", onKey);
  };
}

export function ScrollManager() {
  const pathname = usePathname();

  useEffect(() => {
    loadStoredPositions();
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        if (!backNavigation) savePosition();
      });
    };

    const onLeave = (event: Event) => {
      if (event instanceof MouseEvent) {
        if (
          event.button !== 0 ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey
        ) {
          return;
        }
      }
      const anchor = (event.target as Element | null)?.closest?.("a[href]");
      if (!anchor) return;
      const href = anchor.getAttribute("href") ?? "";
      if (!href.startsWith("/") && !href.startsWith("#")) return;
      rememberPosition();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("click", onLeave, true);
    document.addEventListener("touchend", onLeave, true);
    window.addEventListener("pagehide", rememberPosition);

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onLeave, true);
      document.removeEventListener("touchend", onLeave, true);
      window.removeEventListener("pagehide", rememberPosition);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const onPop = () => {
      backNavigation = true;
      userTookOver = false;
      const saved = positions.get(locationKey());
      if (typeof saved === "number") {
        restorePosition(saved);
        window.requestAnimationFrame(() => restorePosition(saved));
      }
    };

    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useEffect(() => {
    userTookOver = false;
    lockedKey = null;
    const back = backNavigation || (!honoredLoadRestore && isReloadBackForward());
    honoredLoadRestore = true;
    const saved = positions.get(locationKey());
    const clearBack = window.setTimeout(() => {
      backNavigation = false;
    }, 400);

    const run = () => {
      if (userTookOver) return;
      if (back) {
        restorePosition(saved ?? 0);
        return;
      }
      const hash = decodeURIComponent(window.location.hash.replace("#", ""));
      if (hash) {
        alignToHash(hash);
        return;
      }
      scrollToTop();
    };

    run();
    const frame = window.requestAnimationFrame(run);
    const timers = [120, 400, 800].map((delay) => window.setTimeout(run, delay));
    const stopWatching = watchForUserScroll();

    const onHashChange = () => {
      if (back) return;
      userTookOver = false;
      run();
    };
    window.addEventListener("hashchange", onHashChange);

    return () => {
      userTookOver = true;
      window.cancelAnimationFrame(frame);
      timers.forEach((timer) => window.clearTimeout(timer));
      window.clearTimeout(clearBack);
      stopWatching();
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [pathname]);

  return null;
}
