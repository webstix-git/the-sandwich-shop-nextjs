import { SITE } from "@/lib/constants";

export const CATERING_INTRO = {
  primaryImage: "/images/catering-hero.jpg",
  primaryImageAlt:
    "Premium catering spread with sandwiches, smash burgers, and dirty sodas",
  description:
    "Sandwich trays, burger spreads, and a dirty soda bar for your next event — fresh, generous, and hassle-free.",
} as const;

export const CATERING_OPENING = {
  eyebrow: "Catering & Events",
  title: "Fresh food.",
  highlight: "Unforgettable gatherings.",
  paragraphs: [
    "Whether you're feeding the office, hosting a party, or planning a family reunion — we bring stacked sandwiches, smash burger spreads, and a dirty soda bar your guests will talk about.",
    "Every tray is made fresh the morning of your event. No warming trays, no shortcuts — just generous portions and the same quality you'd get walking into our shop on 3rd Street.",
  ],
  image: "/images/catering-hero.jpg",
  imageAlt: "Catering spread with sandwiches, burgers, and dirty sodas",
} as const;

export const CATERING_OCCASIONS_SECTION = {
  eyebrow: "Perfect for",
  title: "Any occasion",
  highlight: "worth celebrating.",
  description:
    "From casual get-togethers to full downtown events — we tailor every order to your crowd.",
} as const;

export const CATERING_OCCASIONS = [
  {
    title: "Office lunches",
    tagline: "Workplace",
    description: "Keep the team fed with sandwich trays and sides — easy pickup, zero hassle.",
    image: "/images/catering-occasion-office-lunches.jpg",
    imageAlt: "Office lunch catering spread with sandwich trays on a conference table",
    accent: "gold" as const,
  },
  {
    title: "Birthday parties",
    tagline: "Celebrations",
    description: "Burgers, subs, and a soda bar that makes the celebration extra sweet.",
    image: "/images/catering-occasion-birthday-party.jpg",
    imageAlt: "Birthday party catering with dirty sodas and sandwich platters",
    accent: "pink" as const,
  },
  {
    title: "Game day spreads",
    tagline: "Gatherings",
    description: "Feed the crew before kickoff with generous trays built for sharing.",
    image: "/images/catering-occasion-game-day-v2.jpg",
    imageAlt: "Game day catering spread with burger sliders, subs, and chips — no alcohol",
    accent: "cyan" as const,
  },
  {
    title: "Family reunions",
    tagline: "Together",
    description: "Custom packages for every age — sandwiches, burgers, desserts, and sodas.",
    image: "/images/catering-occasion-family-reunion.jpg",
    imageAlt: "Family reunion outdoor catering with sandwiches and desserts",
    accent: "gold" as const,
  },
] as const;

export const CATERING_PACKAGES_SECTION = {
  eyebrow: "Packages",
  title: "Choose your",
  highlight: "spread.",
  description:
    "Every package is made fresh and ready to serve. Custom options available — just ask.",
} as const;

export const CATERING_PACKAGES = [
  {
    name: "Sandwich Tray",
    tagline: "Crowd favorite",
    description: "Assorted subs cut and ready to serve. Serves 10–15.",
    includes: [
      "Choice of 3 sub varieties",
      "Chips on the side",
      "Plates & napkins",
    ],
    accent: "gold" as const,
  },
  {
    name: "Burger Spread",
    tagline: "Smash burger party",
    description: "Smash burgers with all the fixings. Serves 10–15.",
    includes: [
      "Smash burgers & buns",
      "Cheese, lettuce, tomato",
      "House sauces",
    ],
    accent: "pink" as const,
  },
  {
    name: "Soda Bar Experience",
    tagline: "Signature add-on",
    description: "A full dirty soda bar setup for your event. Serves 20+.",
    includes: [
      "3 soda flavors",
      "Cream & syrup bar",
      "Candy rim station",
    ],
    accent: "cyan" as const,
  },
] as const;

export const CATERING_SIGNATURE_SECTION = {
  eyebrow: "What we bring",
  title: "The full",
  highlight: "experience.",
  description:
    "More than trays — we deliver the flavors that make The Sandwich Shop unmistakable.",
} as const;

export const CATERING_SIGNATURE = [
  {
    headline: "Stacked",
    headlineAccent: "sandwiches",
    eyebrow: "Hot & cold subs",
    description:
      "Italian beef, steak & cheese, Italian subs — cut, plated, and ready for your guests.",
    image: "/images/gallery/gallery-italian-sub.png",
    imageAlt: "Italian sub catering tray",
    accent: "gold" as const,
  },
  {
    headline: "Smash",
    headlineAccent: "burgers",
    eyebrow: "Burger spreads",
    description:
      "Juicy smash burgers with all the fixings — the same ones we serve downtown, scaled for your event.",
    image: "/images/gallery/gallery-brisket-burger.png",
    imageAlt: "Smash burger catering spread",
    accent: "pink" as const,
  },
  {
    headline: "Dirty soda",
    headlineAccent: "bar",
    eyebrow: "Only in La Crosse",
    description:
      "Rootbeer Float, Orange Dream, Dirty Dr Pepper — a full soda bar experience your guests won't forget.",
    image: "/images/gallery/gallery-dirty-sodas-lineup.png",
    imageAlt: "Dirty soda bar lineup for events",
    accent: "cyan" as const,
  },
] as const;

export const CATERING_PROCESS_SECTION = {
  eyebrow: "How it works",
  title: "Simple from",
  highlight: "start to finish.",
} as const;

export const CATERING_PROCESS = [
  {
    step: "01",
    title: "Tell us about your event",
    description:
      "Headcount, date, and what you're craving — we'll help you build the perfect menu.",
  },
  {
    step: "02",
    title: "We prepare everything fresh",
    description:
      "Sandwiches stacked, burgers smashed, sodas prepped — all made the morning of your event.",
  },
  {
    step: "03",
    title: "Enjoy the feast",
    description:
      "Pick up downtown or ask about delivery. Your guests will be talking about it for weeks.",
  },
] as const;

export const CATERING_SODA_FEATURE = {
  eyebrow: "The wow factor",
  title: "A dirty soda bar",
  highlight: "at your event.",
  description:
    "No one else in La Crosse does it like we do. Add a full dirty soda bar to any catering order — flavored syrups, cream, candy rims, and custom combos your guests can build themselves.",
  image: "/images/dirty-soda-green.jpg",
  imageAlt: "Signature green dirty soda with candy rim",
  ctaLabel: "Add soda bar to your order",
} as const;

export const CATERING_CTA = {
  badge: "Ready to book?",
  title: "Let's make your next event",
  titleAccent: "unforgettable.",
  description:
    "Email us with your event date, headcount, and what you're craving — we'll reply with menu options within 24 hours.",
  backgroundImage: "/images/catering-cta-bg.png",
  primaryLabel: "Request catering",
  primaryHref: SITE.cateringEmail,
  secondaryLabel: "Call us",
  secondaryHref: SITE.phoneHref,
} as const;
