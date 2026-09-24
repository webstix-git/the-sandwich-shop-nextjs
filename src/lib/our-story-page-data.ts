export const STORY_INTRO = {
  primaryImage: "/images/our-story/story-roadside-cart.png",
  primaryImageAlt:
    "Mobile dirty soda cart with chalkboard menu, where The Sandwich Shop story began",
  description:
    "From a roadside soda cart and market pop-ups to 411 3rd Street: how we became a Downtown La Crosse favorite.",
} as const;

export const STORY_FEATURE = {
  eyebrow: "Where it began",
  title: "A family idea",
  highlight: "with a fizzy twist.",
  paragraphs: [
    "Long before we had a storefront, we were out in the community, pouring dirty sodas, testing flavor combos on a chalkboard, and serving sandwiches wherever hungry people gathered.",
    "Every market day taught us something: people wanted generous food, something fun to drink, and a place that felt like it was run by neighbors, not a corporation.",
  ],
  image: "/images/our-story/story-farmers-market.png",
  imageAlt:
    "The Sandwich Shop pop-up at a local market with dirty soda chalkboard menu",
  ctaLabel: "Explore the chapters",
  ctaHref: "#story-chapters",
} as const;

export const STORY_CHAPTERS = [
  {
    phase: "Chapter one",
    title: "The roadside cart",
    highlight: "and a chalkboard menu.",
    body: "Under a shade umbrella with a hand-lettered dirty soda board, we learned what stuck (Rootbeer Float, Orange Dream, Dirty Dr Pepper) and built the soda bar culture one cup at a time.",
    image: "/images/our-story/story-roadside-cart.png",
    imageAlt: "Mobile dirty soda cart with chalkboard menu on a sunny roadside",
  },
  {
    phase: "Chapter two",
    title: "Markets, fairs,",
    highlight: "and first hellos.",
    body: "Pop-up arches, checkered tablecloths, and rows of syrup pumps. We showed up at community events and introduced La Crosse to stacked sandwiches and candy-rimmed sodas long before we had a permanent sign.",
    image: "/images/our-story/story-farmers-market.png",
    imageAlt: "Sandwich Shop and Dirty Soda Bar booth at an outdoor market",
  },
  {
    phase: "Chapter three",
    title: "The cart",
    highlight: "got serious.",
    body: "Our stainless soda cart went wherever the crowd was, stocked with Torani syrups, creamers, and every base soda you could dream up. Same made-to-order spirit we still pour behind the bar today.",
    image: "/images/our-story/story-soda-cart.png",
    imageAlt: "Stainless steel mobile soda cart with flavor syrups and canned sodas",
  },
  {
    phase: "Chapter four",
    title: "A door on",
    highlight: "3rd Street.",
    body: "We put down roots at 411 3rd Street in Downtown La Crosse, a real home for hot subs, smash burgers, and the dirty soda bar our regulars had been asking for.",
    image: "/images/our-story/story-storefront-street.png",
    imageAlt: "The Sandwich Shop storefront on 3rd Street in downtown La Crosse",
  },
] as const;

export const STORY_GALLERY = {
  eyebrow: "Along the way",
  title: "Snapshots from",
  highlight: "the journey.",
  images: [
    {
      src: "/images/our-story/story-roadside-cart.png",
      alt: "Roadside dirty soda cart with chalkboard menu",
      caption: "Where it started",
    },
    {
      src: "/images/our-story/story-farmers-market.png",
      alt: "Market pop-up with sandwich and soda bar signage",
      caption: "Community events",
    },
    {
      src: "/images/our-story/story-soda-cart.png",
      alt: "Mobile soda cart with syrups and canned drinks",
      caption: "The soda cart",
    },
    {
      src: "/images/our-story/story-storefront-street.png",
      alt: "Storefront exterior on 3rd Street",
      caption: "411 3rd Street",
    },
    {
      src: "/images/our-story/story-storefront-seating.png",
      alt: "Outdoor seating in front of the shop",
      caption: "Today",
    },
  ],
} as const;

export const STORY_TODAY = {
  eyebrow: "Today",
  title: "Your neighborhood spot",
  highlight: "on 3rd Street.",
  paragraphs: [
    "Walk in and you'll still see that same spirit: chalkboard creativity behind the soda bar, sandwiches stacked high, and a welcome that feels personal.",
    "Whether you're a lunch regular from day one or walking in for the first time, you're part of the story now.",
  ],
  image: "/images/our-story/story-storefront-seating.png",
  imageAlt: "Outdoor seating and signage at The Sandwich Shop in downtown La Crosse",
} as const;

export const STORY_CTA = {
  badge: "Visit us",
  title: "Come be part of",
  titleAccent: "the story.",
  description:
    "411 3rd Street, Downtown La Crosse. Stop in for lunch, try a new soda combo, or say hi to the folks behind the counter.",
  backgroundImage: "/images/about-cta-signs-bg.png",
  primaryLabel: "View Menu",
  primaryHref: "/our-menu",
  secondaryLabel: "About Us",
  secondaryHref: "/about-us",
} as const;
