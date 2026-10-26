import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { RestaurantJsonLd } from "@/components/RestaurantJsonLd";
import { ScrollManager } from "@/components/ScrollManager";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { SITE } from "@/lib/constants";
import { getSiteUrl } from "@/lib/seo";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const defaultTitle = `${SITE.name} | La Crosse, WI`;

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: defaultTitle,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "sandwich shop",
    "dirty soda",
    "La Crosse",
    "smash burgers",
    "catering",
    "downtown La Crosse",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: defaultTitle,
    description: SITE.description,
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
    title: defaultTitle,
    description: SITE.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} scroll-smooth`}
      data-scroll-behavior="smooth"
    >
      <body
        className="min-h-screen overflow-x-hidden bg-brand-bg font-sans text-brand-dark antialiased"
        suppressHydrationWarning
      >
        <RestaurantJsonLd />
        <ScrollManager />
        <ScrollToTopButton />
        {children}
      </body>
    </html>
  );
}
