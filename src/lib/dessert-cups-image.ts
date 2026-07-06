export const DESSERT_CUPS_IMAGE = "/images/dessert-cups.jpg";

export function isDessertCupsImage(src: string) {
  return src === DESSERT_CUPS_IMAGE;
}

/** Matches the natural counter-clockwise tilt of the dessert cups photo in framed layouts. */
export const DESSERT_CUPS_IMAGE_CLASS =
  "scale-[1.14] -rotate-[5deg]";

export function foodImageClassName(src: string, base: string) {
  return isDessertCupsImage(src)
    ? `${base} ${DESSERT_CUPS_IMAGE_CLASS}`
    : base;
}
