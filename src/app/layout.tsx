import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Sandwich Shop & Dirty Soda Bar | La Crosse, WI",
  description:
    "Freshly made hot & cold sandwiches, juicy smash burgers, and creative dirty sodas. Locally owned in Downtown La Crosse, WI.",
  keywords: [
    "sandwich shop",
    "dirty soda",
    "La Crosse",
    "smash burgers",
    "catering",
    "downtown La Crosse",
  ],
  openGraph: {
    title: "The Sandwich Shop & Dirty Soda Bar",
    description:
      "Handcrafted sandwiches & creative dirty sodas in Downtown La Crosse, WI.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} scroll-smooth`}>
      <body
        className="min-h-screen overflow-x-hidden bg-brand-bg font-sans text-brand-dark antialiased"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
