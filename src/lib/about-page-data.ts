import { DESSERT_CUPS_IMAGE } from "./dessert-cups-image";

export const ABOUT_INTRO = {
  primaryImage: "/images/about-intro-storefront.png",
  primaryImageAlt: "The Sandwich Shop storefront on 3rd Street in downtown La Crosse",
  description:
    "Locally owned in Downtown La Crosse, serving fresh sandwiches, smash burgers, and a dirty soda bar made with care for our neighbors.",
} as const;

export const ABOUT_FEATURE = {
  eyebrow: "Who we are",
  title: "A locally owned restaurant",
  highlight: "in Downtown La Crosse.",
  paragraphs: [
    "The Sandwich Shop & Dirty Soda Bar is family-run and independent, not a chain, not a franchise. We prep fresh every day, make your order when you walk in, and take pride in knowing our regulars by name.",
    "Sandwiches and smash burgers are what we built this place on. The dirty soda bar is what makes us different, a spot where lunch crowds, families, and anyone with a sweet tooth can all feel at home. Dine in, carry out, or cater an event, you're supporting a small business rooted right here on 3rd Street.",
  ],
  image: "/images/about-intro-storefront.png",
  imageAlt: "The Sandwich Shop storefront on 3rd Street in downtown La Crosse",
  ctaLabel: "Read our full story",
  ctaHref: "/about-us/our-story",
} as const;

export const ABOUT_VALUES = {
  eyebrow: "What we stand for",
  title: "Built on a few",
  highlight: "simple promises.",
  description:
    "Everything on our menu, and everything behind the counter, comes back to how we want this place to feel when you walk through the door.",
  items: [
    {
      number: "1",
      title: "Made fresh, every day",
      description:
        "No heat lamps, no shortcuts. Sandwiches stacked, burgers smashed, and sodas poured the moment you order.",
    },
    {
      number: "2",
      title: "Locally owned & independent",
      description:
        "Family-run on 3rd Street, invested in Downtown La Crosse, our neighbors, and the people who keep coming back.",
    },
    {
      number: "3",
      title: "Welcoming to everyone",
      description:
        "Lunch regulars, families after school, first-time visitors: there's a seat, a sandwich, and a soda for all of you.",
    },
  ],
} as const;

export const ABOUT_PHILOSOPHY = {
  eyebrow: "Our philosophy",
  title: "Fresh food, friendly faces,",
  highlight: "and a soda bar worth the trip.",
  intro:
    "At The Sandwich Shop & Dirty Soda Bar, we keep it straightforward: stack sandwiches high, smash burgers to order, and pour dirty sodas with the kind of care you'd expect from a neighborhood spot on 3rd Street.",
  principles: [
    {
      label: "Made to order",
      text: "Every sub, burger, and soda is prepared when you walk in. No heat lamps, no shortcuts, just food we'd serve our own family.",
    },
    {
      label: "Rooted in La Crosse",
      text: "We're family-run and locally owned at 411 3rd Street, invested in downtown, our regulars, and the community around us.",
    },
    {
      label: "Generous by nature",
      text: "Big portions, 30+ dirty soda combinations, and a welcome for lunch crowds, families, and first-time visitors alike.",
    },
  ],
  image: "/images/gallery/gallery-soda-bar-cart.png",
  imageAlt: "Soda bar cart with syrups and chilled drinks at The Sandwich Shop",
} as const;

export const ABOUT_SIGNATURE_SECTION = {
  eyebrow: "What we serve",
  title: "A few reasons",
  highlight: "people keep coming back.",
  description:
    "Sandwiches, smash burgers, a dirty soda bar you won't find anywhere else in La Crosse, plus sweet treats and catering for every occasion.",
} as const;

export const ABOUT_SIGNATURE = [
  {
    headline: "Stacked",
    headlineAccent: "sandwiches",
    eyebrow: "Hot & cold subs",
    description:
      "Italian beef dipped in au jus, toasted melts, and cold subs built your way, piled high on fresh-baked rolls.",
    image: "/images/gallery/gallery-italian-beef-peppers.png",
    imageAlt: "Italian beef sandwich with pickled peppers",
    href: "/our-menu",
    ctaLabel: "Browse sandwiches",
    accent: "gold" as const,
  },
  {
    headline: "Dirty",
    headlineAccent: "sodas",
    eyebrow: "The Soda Bar",
    description:
      "30+ combinations: pick your base, add cream and syrups, and finish with a candy rim. Poured fresh behind the bar.",
    image: "/images/gallery/gallery-dirty-sodas-lineup.png",
    imageAlt: "Colorful dirty sodas lined up at the bar",
    href: "/our-menu",
    ctaLabel: "See the soda bar",
    accent: "cyan" as const,
  },
  {
    headline: "Smashed",
    headlineAccent: "burgers",
    eyebrow: "Smashed to order",
    description:
      "Crispy-edged patties with melty cheese, brisket, and house sauces on a pillowy bun, never frozen, never sitting under a lamp.",
    image: "/images/gallery/gallery-brisket-burger.png",
    imageAlt: "BBQ brisket smash burger on a brioche bun",
    href: "/our-menu",
    ctaLabel: "Try a smash burger",
    accent: "pink" as const,
  },
  {
    headline: "Build your",
    headlineAccent: "own soda",
    eyebrow: "Only here",
    description:
      "Choose your fizz, pick a flavor, add cream and toppings, candy rim optional. Your cup, your rules, every single time.",
    image: "/images/gallery/gallery-dirty-soda-rainbow.png",
    imageAlt: "Dirty soda with rainbow candy rim",
    href: "/our-menu",
    ctaLabel: "Customize yours",
    accent: "cyan" as const,
  },
  {
    headline: "Sweet",
    headlineAccent: "treats",
    eyebrow: "Desserts to go",
    description:
      "Handmade dessert cups and boxes packed to go, the perfect finish after a sub or a stop at the soda bar.",
    image: DESSERT_CUPS_IMAGE,
    imageAlt: "Handmade dessert cups packaged to go",
    href: "/our-menu",
    ctaLabel: "See desserts",
    accent: "gold" as const,
  },
  {
    headline: "Feed the",
    headlineAccent: "whole crew",
    eyebrow: "Catering",
    description:
      "Sandwich trays, burger spreads, and a dirty soda bar for your office lunch, party, or downtown event. We bring the good stuff to you.",
    image: "/images/catering-hero.jpg",
    imageAlt: "Catering spread with sandwiches, burgers, and dirty sodas",
    href: "/services/catering-services",
    ctaLabel: "Plan catering",
    accent: "pink" as const,
  },
] as const;

export const ABOUT_CTA = {
  badge: "Visit us",
  title: "Come say",
  titleAccent: "hello.",
  description:
    "411 3rd Street, Downtown La Crosse. Stop in for lunch, grab a soda, or ask about catering.",
  backgroundImage: "/images/about-cta-signs-bg.png",
  primaryLabel: "Contact Us",
  primaryHref: "/contact-us",
  secondaryLabel: "View Menu",
  secondaryHref: "/our-menu",
} as const;
