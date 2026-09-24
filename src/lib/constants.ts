export { NAV_LINKS, FOOTER_LINKS, FOOTER_MENU_LINKS, FOOTER_QUICK_LINKS, FOOTER_LEGAL_LINKS, HOME_NAV_LINKS } from "./navigation";
import { DESSERT_CUPS_IMAGE } from "./dessert-cups-image";

export const MENU_ITEMS = [
  {
    href: "/our-menu#specialty-sandwiches",
    image: "/images/sandwiches.png",
    alt: "Fresh deli sandwich with roast beef, cheese, spinach, tomatoes, and mushrooms on a toasted sub roll",
    tag: "Hot Sandwiches",
    tagColor: "text-brand-pink",
    title: "Sandwiches",
    ctaLabel: "View hot sandwiches",
    description:
      "Served hot and stacked high, from our Hot Italian Beef and Chuckie Cheese Steak to Chicken Parm, Reubens and Turkey Melts.",
  },
  {
    href: "/our-menu#smash-burgers",
    image: "/images/smash-burger.jpg",
    alt: "BBQ brisket smash burger on a brioche bun",
    tag: "Smashed to order",
    tagColor: "text-brand-cyan-dark",
    title: "Smash Burgers",
    ctaLabel: "View smash burgers",
    description:
      "Crispy-edged smash patties stacked with melty cheese, brisket and house sauces on a pillowy bun.",
  },
  {
    href: "/our-menu/wine-cocktails",
    image: "/images/dirty-sodas-trio.jpg",
    alt: "Three colorful iced dirty sodas",
    tag: "The Soda Bar",
    tagColor: "text-brand-cyan",
    title: "Dirty Sodas",
    ctaLabel: "Explore dirty sodas",
    description:
      "Your favorite fizz, leveled up with cream, syrups, fruit and candy rims. Refreshing, fun, totally craveable.",
  },
] as const;

export const SODA_BUILD_STEPS = [
  "Choose your base",
  "Pick a flavor",
  "Add cream & toppings",
  "Candy rim optional",
] as const;

export const SODA_FLAVORS = [
  "Strawberry Dream",
  "Peach Cream",
  "Rainbow Sour",
  "Coconut Lime",
  "Blue Raspberry",
  "Mango Fizz",
] as const;

export const EXPERIENCE_HIGHLIGHTS = [
  {
    eyebrow: "Made to order",
    title: "Fresh every day",
    description:
      "Sandwiches stacked, burgers smashed, and sodas poured, all made fresh when you order, never sitting under a heat lamp.",
    icon: "/images/icons/sandwich.png",
    iconColor: "text-brand-pink-dark",
    accent: "text-brand-pink",
    glow: "bg-brand-pink",
  },
  {
    eyebrow: "Stacked high",
    title: "Generous portions",
    description:
      "Subs piled with the good stuff and smash burgers that don't skimp. Come hungry. You'll leave satisfied.",
    icon: "/images/icons/stacked-containers.png",
    iconColor: "text-brand-cyan-dark",
    accent: "text-brand-cyan-dark",
    glow: "bg-brand-cyan",
  },
  {
    eyebrow: "The soda bar",
    title: "30+ dirty sodas",
    description:
      "Fizzy, creamy, candy-rimmed creations poured fresh behind the bar, a little celebration in every cup.",
    icon: "/images/icons/soda.png",
    iconColor: "text-brand-cyan-dark",
    accent: "text-brand-cyan",
    glow: "bg-brand-cyan",
  },
  {
    eyebrow: "Downtown La Crosse",
    title: "Your neighborhood spot",
    description:
      "Locally owned on 3rd Street, a cozy corner for lunch, a treat with the kids, or a quick carry-out on the go.",
    icon: "/images/icons/location.png",
    iconColor: "text-brand-pink-dark",
    accent: "text-brand-pink",
    glow: "bg-brand-pink",
  },
] as const;

export type GalleryCategory = "sandwiches" | "sodas" | "desserts" | "catering";

export type GalleryImage = {
  src: string;
  alt: string;
  category: GalleryCategory;
};

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: "/images/gallery/gallery-steak-sub-tots.png",
    alt: "Toasted steak and cheese sub with tater tots",
    category: "sandwiches",
  },
  {
    src: DESSERT_CUPS_IMAGE,
    alt: "Handmade dessert cups packaged to go",
    category: "desserts",
  },
  {
    src: "/images/gallery/gallery-italian-beef-peppers.png",
    alt: "Italian beef sandwich topped with pickled peppers and au jus",
    category: "sandwiches",
  },
  {
    src: "/images/gallery/gallery-dirty-sodas-trio.png",
    alt: "Three colorful dirty sodas in to-go cups",
    category: "sodas",
  },
  {
    src: "/images/gallery/gallery-dirty-soda-rainbow.png",
    alt: "Green dirty soda with rainbow candy rim at the soda bar",
    category: "sodas",
  },
  {
    src: "/images/gallery/gallery-brisket-burger.png",
    alt: "BBQ brisket smash burger with melted cheese and sauce",
    category: "sandwiches",
  },
  {
    src: "/images/gallery/gallery-dirty-sodas-lineup.png",
    alt: "Four colorful dirty sodas with shop branding",
    category: "sodas",
  },
  {
    src: "/images/gallery/gallery-roast-beef-sub.png",
    alt: "Roast beef sub with spinach, tomatoes, mushrooms, and creamy sauce",
    category: "sandwiches",
  },
  {
    src: "/images/gallery/gallery-dirty-soda-green-foam.png",
    alt: "Neon green dirty soda with foam at the bar",
    category: "sodas",
  },
  {
    src: "/images/gallery/gallery-dessert-display.png",
    alt: "Two-tier dessert display case with packaged sweets",
    category: "desserts",
  },
  {
    src: "/images/gallery/gallery-italian-beef-au-jus.png",
    alt: "Italian beef sandwich with giardiniera and au jus",
    category: "sandwiches",
  },
  {
    src: "/images/gallery/gallery-peach-slushie.png",
    alt: "Peach frozen slushie with straw on the bar",
    category: "sodas",
  },
  {
    src: "/images/gallery/gallery-reuben.png",
    alt: "Toasted Reuben sandwich with onion rings",
    category: "sandwiches",
  },
  {
    src: "/images/gallery/gallery-soda-bar-cart.png",
    alt: "Outdoor soda bar cart with syrups and chilled drinks",
    category: "catering",
  },
  {
    src: "/images/gallery/gallery-brisket-bowl.png",
    alt: "Open-faced brisket bowl with melted cheese and peppers",
    category: "sandwiches",
  },
  {
    src: "/images/gallery/gallery-italian-sub.png",
    alt: "Italian sub with pepperoni, peppers, and olives",
    category: "sandwiches",
  },
  {
    src: "/images/gallery/gallery-dessert-cakes.png",
    alt: "Packaged dessert cakes with decorative frosting",
    category: "desserts",
  },
  {
    src: "/images/gallery/gallery-steak-cheese-plate.png",
    alt: "Steak strips with melted cheese over fresh vegetables",
    category: "sandwiches",
  },
  {
    src: "/images/gallery/gallery-burger-bowl.png",
    alt: "Smash burger patty with cheese over a fresh salad bowl",
    category: "sandwiches",
  },
];

export const HOURS = [
  { day: "Sunday – Monday", time: "Closed" },
  { day: "Tuesday – Saturday", time: "10:00 AM – 8:00 PM" },
] as const;

export const SITE = {
  name: "The Sandwich Shop & Dirty Soda Bar",
  shortName: "The Sandwich Shop",
  tagline: "& Dirty Soda Bar",
  description:
    "Freshly made hot & cold sandwiches, juicy smash burgers, and refreshing dirty sodas. Locally owned in La Crosse, WI.",
  address: "411 3rd Street",
  city: "La Crosse, WI 54601",
  mapsHref: "https://maps.app.goo.gl/LBMzkWRKhSo6vJUp9",
  mapsEmbedSrc:
    "https://www.google.com/maps?q=411+3rd+Street,+La+Crosse,+WI+54601&z=16&output=embed",
  facebookHref: "https://www.facebook.com/profile.php?id=61586849519447",
  instagramHref: "https://www.instagram.com/thesandwichshopanddirtysodabar/",
  phone: "(608) 797-1748",
  phoneHref: "tel:+16087971748",
  email: "thesandwichshop143@yahoo.com",
  emailHref: "/contact-us",
  contactHref: "/contact-us",
} as const;

export const CATERING_SERVICES = [
  {
    id: "dine-in",
    title: "Dine-In",
    eyebrow: "Pull up a seat",
    description:
      "Enjoy our full menu in our cozy downtown space, watch burgers get smashed, sip a dirty soda, and soak in the neighborhood vibe.",
    image: "/images/hero-sandwich.jpg",
    imageAlt: "Fresh sandwich served in the dining area",
    href: "/contact-us",
    cta: "Plan your visit",
    icon: "store" as const,
    accent: "pink" as const,
  },
  {
    id: "takeout",
    title: "Takeout",
    eyebrow: "Ready when you are",
    description:
      "Call ahead or walk in. We'll have your order hot, fresh, and bagged to go. Perfect for lunch on the run or dinner at home.",
    image: "/images/dirty-sodas-trio.jpg",
    imageAlt: "Dirty sodas and food ready for takeout",
    href: "tel:+16087971748",
    cta: "Call to order",
    icon: "clock" as const,
    accent: "cyan" as const,
  },
  {
    id: "catering",
    title: "Catering",
    eyebrow: "Feed the whole crew",
    description:
      "Sandwich trays, burger spreads, and a full dirty soda bar for offices, parties, game days, and family gatherings.",
    image: "/images/italian-beef.jpg",
    imageAlt: "Catering sandwich spread for events",
    href: "/services/catering-services",
    cta: "Explore catering",
    icon: "star" as const,
    accent: "gold" as const,
  },
] as const;
