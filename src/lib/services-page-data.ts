export type ServiceOffering = {
  title: string;
  tagline: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
  accent: "gold" | "pink" | "cyan";
};

export const SERVICES_INTRO = {
  primaryImage: "/images/services-hero.jpg",
  primaryImageAlt:
    "Cozy downtown sandwich shop interior with dirty soda bar in the background",
  description:
    "Dine in on 3rd Street, grab carry-out on the go, or let us cater your next gathering — fresh sandwiches, smash burgers, and dirty sodas, your way.",
} as const;

export const SERVICES_FEATURE = {
  eyebrow: "How we serve you",
  title: "Good food,",
  highlight: "however you need it.",
  paragraphs: [
    "We're a neighborhood spot first — pull up a chair, watch your order come together, and stay awhile. Prefer to grab and go? We'll have it hot and ready when you walk in or call ahead.",
    "Feeding a crowd? Our catering brings sandwich trays, burger spreads, and a full dirty soda bar to offices, parties, and family celebrations across La Crosse.",
  ],
  image: "/images/services-dine-in.jpg",
  imageAlt: "Cozy dine-in table with sandwiches and dirty sodas in a warm downtown café",
  ctaLabel: "Explore catering",
  ctaHref: "/services/catering-services",
} as const;

export const SERVICES_OFFERINGS_SECTION = {
  eyebrow: "What we offer",
  title: "Six ways we",
  highlight: "take care of you.",
  description:
    "From a quick lunch pickup to a full event spread — every service is made fresh, generous, and with the same care you'd get at our counter on 3rd Street.",
} as const;

export const SERVICES_OFFERINGS: readonly ServiceOffering[] = [
  {
    title: "Dine In",
    tagline: "Walk in welcome",
    description:
      "Enjoy our full menu in our cozy downtown space — fresh sandwiches, smash burgers, and signature dirty sodas made to order while you watch.",
    href: "/contact-us",
    image: "/images/services-dine-in.jpg",
    imageAlt: "Cozy dine-in table with sandwiches and dirty sodas in a warm downtown café",
    accent: "pink",
  },
  {
    title: "Carry Out",
    tagline: "Quick pickup",
    description:
      "Call ahead or order at the counter. We'll have your food hot, fresh, and ready to go — perfect for lunch on the run.",
    href: "/contact-us",
    image: "/images/services-carry-out.jpg",
    imageAlt: "Takeout order ready for pickup at the counter",
    accent: "cyan",
  },
  {
    title: "Catering Services",
    tagline: "Events & groups",
    description:
      "Office lunches, parties, game days, and family gatherings — we bring the trays, burgers, and soda bar to you.",
    href: "/services/catering-services",
    image: "/images/services-catering.jpg",
    imageAlt: "Catering spread with sandwiches, burgers, and dirty sodas",
    accent: "gold",
  },
  {
    title: "Sandwich Trays",
    tagline: "Catering package",
    description:
      "Assorted subs cut and ready to serve — perfect for meetings and celebrations. Serves 10–15 guests.",
    href: "/services/catering-services",
    image: "/images/services-sandwich-tray.jpg",
    imageAlt: "Assorted sub sandwich catering tray",
    accent: "gold",
  },
  {
    title: "Burger Spreads",
    tagline: "Crowd favorite",
    description:
      "Smash burgers with all the fixings, scaled for your crowd. A guaranteed hit for any occasion.",
    href: "/services/catering-services",
    image: "/images/services-burger-spread.jpg",
    imageAlt: "Smash burger spread for group catering",
    accent: "pink",
  },
  {
    title: "Dirty Soda Bar",
    tagline: "Signature experience",
    description:
      "Bring the legendary soda bar to your event — custom flavors, cream, syrups, and candy rims included.",
    href: "/services/catering-services",
    image: "/images/services-soda-bar.jpg",
    imageAlt: "Dirty soda bar setup at an event with colorful custom drinks",
    accent: "cyan",
  },
] as const;

export const SERVICES_CATERING_SPOTLIGHT = {
  eyebrow: "Featured service",
  title: "Catering that",
  highlight: "impresses.",
  paragraphs: [
    "Sandwich trays, burger spreads, and a full dirty soda bar for your office, party, or family gathering. Every tray is made fresh the morning of your event — no warming trays, no shortcuts.",
    "Tell us your headcount and we'll handle the rest. Same generous portions and made-to-order quality you'd get walking into our shop.",
  ],
  image: "/images/services-catering.jpg",
  imageAlt: "Premium catering spread for an office lunch event",
  ctaLabel: "Plan your event",
  ctaHref: "/services/catering-services",
} as const;

export const SERVICES_EXPERIENCE = {
  eyebrow: "The experience",
  title: "Simple, fresh,",
  highlight: "and personal.",
  description:
    "However you order — the same standards apply behind the counter and at your event.",
  items: [
    {
      number: "01",
      title: "Made to order",
      description:
        "Sandwiches stacked, burgers smashed, sodas poured — fresh when you order, never sitting under a heat lamp.",
      accent: "pink" as const,
    },
    {
      number: "02",
      title: "Generous portions",
      description:
        "We believe you should leave full and happy. Our trays are stacked and our sodas are loaded.",
      accent: "gold" as const,
    },
    {
      number: "03",
      title: "Neighborly service",
      description:
        "Locally owned and invested in La Crosse — whether you're a regular or planning your first catering order.",
      accent: "cyan" as const,
    },
  ],
} as const;

export const SERVICES_CTA = {
  badge: "Get started",
  title: "Ready when",
  titleAccent: "you are.",
  description:
    "Stop in on 3rd Street, call ahead for carry-out, or reach out to plan catering for your next event.",
  backgroundImage: "/images/about-cta-signs-bg.png",
  primaryLabel: "Contact Us",
  primaryHref: "/contact-us",
  secondaryLabel: "View Menu",
  secondaryHref: "/our-menu",
} as const;
