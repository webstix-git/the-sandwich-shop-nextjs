export type NavChild = {
  href: string;
  label: string;
};

export type NavLink =
  | {
      href: string;
      label: string;
      children?: undefined;
    }
  | {
      href: string;
      label: string;
      children: NavChild[];
    };

export const HOME_NAV_LINKS = [
  { href: "#menu", label: "Menu" },
  { href: "#sodas", label: "Dirty Sodas" },
  { href: "#story", label: "Our Story" },
  { href: "#experience", label: "Experience" },
  { href: "#gallery", label: "Gallery" },
  { href: "#catering", label: "Catering" },
  { href: "#visit", label: "Visit" },
] as const;

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  {
    href: "/our-menu",
    label: "Our Menu",
    children: [
      { href: "/our-menu", label: "Our Menu" },
      { href: "/our-menu/appetizers", label: "Appetizers" },
      { href: "/our-menu/main-courses", label: "Main Courses" },
      { href: "/our-menu/desserts", label: "Desserts" },
      { href: "/our-menu/wine-cocktails", label: "Wine & Cocktails" },
      { href: "/our-menu/kids-menu", label: "Kids Menu" },
    ],
  },
  {
    href: "/about-us",
    label: "About Us",
    children: [
      { href: "/about-us", label: "About Us" },
      { href: "/about-us/our-story", label: "Our Story" },
    ],
  },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services/catering-services", label: "Catering" },
    ],
  },
  { href: "/contact-us", label: "Contact Us" },
];

export const FOOTER_LINKS = [
  { href: "/", label: "Home" },
  { href: "/our-menu", label: "Our Menu" },
  { href: "/about-us", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact-us", label: "Contact Us" },
] as const;

export const FOOTER_MENU_LINKS = [
  { href: "/our-menu", label: "Our Menu" },
  { href: "/our-menu/appetizers", label: "Appetizers" },
  { href: "/our-menu/main-courses", label: "Main Courses" },
  { href: "/our-menu/desserts", label: "Desserts" },
  { href: "/our-menu/wine-cocktails", label: "Wine & Cocktails" },
  { href: "/our-menu/kids-menu", label: "Kids Menu" },
] as const;

export const FOOTER_QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/about-us/our-story", label: "Our Story" },
  { href: "/services", label: "Services" },
  { href: "/services/catering-services", label: "Catering" },
  { href: "/contact-us", label: "Contact Us" },
] as const;

export const FOOTER_LEGAL_LINKS = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/ai-policy", label: "AI Policy" },
  { href: "/sitemap", label: "Sitemap" },
  { href: "/service-index", label: "Service Index" },
] as const;
