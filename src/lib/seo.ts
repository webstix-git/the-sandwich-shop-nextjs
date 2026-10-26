import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export function getSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configured) return configured.replace(/\/$/, "");

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  return "http://localhost:3000";
}

export type PublicRoute = {
  path: string;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
};

export const PUBLIC_ROUTES: readonly PublicRoute[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/our-menu", changeFrequency: "weekly", priority: 0.9 },
  { path: "/our-menu/appetizers", changeFrequency: "weekly", priority: 0.8 },
  { path: "/our-menu/main-courses", changeFrequency: "weekly", priority: 0.8 },
  { path: "/our-menu/desserts", changeFrequency: "weekly", priority: 0.7 },
  { path: "/our-menu/wine-cocktails", changeFrequency: "weekly", priority: 0.8 },
  { path: "/our-menu/kids-menu", changeFrequency: "monthly", priority: 0.7 },
  { path: "/about-us", changeFrequency: "monthly", priority: 0.7 },
  { path: "/about-us/our-story", changeFrequency: "monthly", priority: 0.6 },
  { path: "/services", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/catering-services", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact-us", changeFrequency: "monthly", priority: 0.8 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/ai-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/sitemap", changeFrequency: "monthly", priority: 0.4 },
  { path: "/service-index", changeFrequency: "monthly", priority: 0.4 },
];

export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
}): Metadata {
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type: "website",
      locale: "en_US",
      siteName: SITE.name,
      images: [
        {
          url: "/images/hero-sandwich.jpg",
          alt: "Fresh sandwich from The Sandwich Shop & Dirty Soda Bar",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function restaurantJsonLd() {
  const url = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: SITE.name,
    description: SITE.description,
    url,
    image: `${url}/images/hero-sandwich.jpg`,
    telephone: "+1-608-797-1748",
    email: SITE.email,
    servesCuisine: ["Sandwiches", "Burgers", "American"],
    priceRange: "$",
    menu: `${url}/our-menu`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "411 3rd Street",
      addressLocality: "La Crosse",
      addressRegion: "WI",
      postalCode: "54601",
      addressCountry: "US",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "20:00",
      },
    ],
    sameAs: [SITE.facebookHref, SITE.instagramHref],
  };
}
