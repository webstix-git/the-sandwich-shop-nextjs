"use client";

import { useEffect } from "react";

/** Paints the full menu route (including site header/body) white. */
export function MenuPageWhiteSurface() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("menu-page-white");
    return () => {
      root.classList.remove("menu-page-white");
    };
  }, []);

  return null;
}
