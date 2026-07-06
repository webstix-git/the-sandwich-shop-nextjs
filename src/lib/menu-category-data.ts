import type { PageIntroContent } from "@/components/PageIntroHero";
import {
  MENU_BURGERS,
  MENU_KIDS_MENU,
  MENU_SIDES,
  MENU_SOUP,
  MENU_SPECIALTY_SANDWICHES,
} from "@/lib/menu-page-data";

export type MenuCategorySlug =
  | "appetizers"
  | "main-courses"
  | "desserts"
  | "wine-cocktails"
  | "kids-menu";

export type MenuCategoryHighlight = {
  title: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  accent: "gold" | "pink" | "cyan";
};

export type MenuCategoryEditorial = {
  eyebrow: string;
  title: string;
  highlight: string;
  paragraphs: readonly string[];
  image: string;
  imageAlt: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export type MenuCategoryExploreCard = {
  title: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  ctaLabel: string;
  href: string;
  accent: "gold" | "pink" | "cyan";
};

export type MenuCategoryExploreSection = {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  items: readonly MenuCategoryExploreCard[];
};

export type MenuCategoryShowcaseImage = {
  src: string;
  alt: string;
  label?: string;
  tagline?: string;
  accent?: "pink" | "gold" | "cyan";
};

export type MenuCategoryPageData = {
  slug: MenuCategorySlug;
  title: string;
  metaDescription: string;
  intro: PageIntroContent & { description: string };
  opening: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
  };
  menuSections?: readonly {
    id: string;
    title: string;
    scriptSubtitle: string;
    headingImage: string;
    headingImageAlt: string;
    note?: string;
    items: readonly { name: string; price: string; description?: string }[];
  }[];
  includeColdSandwiches?: boolean;
  showcaseImages?: readonly MenuCategoryShowcaseImage[];
  highlights?: readonly MenuCategoryHighlight[];
  exploreSection?: MenuCategoryExploreSection;
  editorial?: MenuCategoryEditorial;
  secondaryEditorial?: MenuCategoryEditorial;
  flavorSection?: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
  };
  cta: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
    backgroundImage: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel?: string;
    secondaryHref?: string;
  };
};

export const MENU_CATEGORY_PAGES: Record<MenuCategorySlug, MenuCategoryPageData> = {
  appetizers: {
    slug: "appetizers",
    title: "Appetizers",
    metaDescription:
      "Shareable sides and starters — cheese curds, fries, onion rings, and soup of the day. Made fresh in Downtown La Crosse.",
    intro: {
      primaryImage: "/images/menu-cat-appetizers-hero.jpg",
      primaryImageAlt: "Golden cheese curds, fries, and onion rings",
      description:
        "Crispy, cheesy, and made to order — the perfect way to start your meal or share with the table.",
    },
    opening: {
      eyebrow: "Starters & sides",
      title: "Perfect for",
      highlight: "sharing.",
      description:
        "Every side is fried fresh when you order — no heat lamps, no shortcuts. Pair cheese curds with a stacked sub or add soup on a chilly day.",
    },
    menuSections: [
      {
        id: "sides",
        title: MENU_SIDES.title,
        scriptSubtitle: MENU_SIDES.scriptSubtitle,
        headingImage: MENU_SIDES.headingImage,
        headingImageAlt: MENU_SIDES.headingImageAlt,
        items: MENU_SIDES.items,
      },
      {
        id: "soup",
        title: MENU_SOUP.title,
        scriptSubtitle: MENU_SOUP.scriptSubtitle,
        headingImage: MENU_SOUP.headingImage,
        headingImageAlt: MENU_SOUP.headingImageAlt,
        items: MENU_SOUP.items,
      },
    ],
    highlights: [
      {
        title: "Cheese Curds",
        tagline: "Wisconsin classic",
        description:
          "Golden and crispy — fried fresh when you order, with that perfect squeak.",
        image: "/images/appetizers-highlight-cheese-curds-v2.jpg",
        imageAlt: "Crispy golden cheese curds in a rustic basket",
        accent: "gold",
      },
      {
        title: "French Fries",
        tagline: "Always crisp",
        description:
          "Hot, salty, and ready to share — the side that goes with everything.",
        image: "/images/appetizers-highlight-french-fries.jpg",
        imageAlt: "Golden French fries in a premium metal basket",
        accent: "pink",
      },
      {
        title: "Onion Rings",
        tagline: "Thick-cut",
        description:
          "A crunchy golden coating on every ring — built for dipping.",
        image: "/images/appetizers-highlight-onion-rings.jpg",
        imageAlt: "Stacked crispy onion rings with dipping sauce",
        accent: "cyan",
      },
      {
        title: "Soup",
        tagline: "Made fresh daily",
        description:
          "Warm, hearty, and rotating every day — the comfort pick on a cold afternoon.",
        image: "/images/appetizers-highlight-soup-v2.jpg",
        imageAlt: "Fresh homemade soup in a ceramic bowl with artisan bread",
        accent: "gold",
      },
    ],
    exploreSection: {
      eyebrow: "Keep exploring",
      title: "Try something",
      highlight: "else.",
      description:
        "Appetizers are a great start — discover more from our full menu.",
      items: [
        {
          title: "Specialty Sandwiches",
          tagline: "Stacked fresh",
          description:
            "Hot Italian beef, melts, and stacked subs — made fresh when you walk in.",
          image: "/images/appetizers-explore-sandwiches-v2.jpg",
          imageAlt: "Stacked Italian beef specialty sandwich with au jus",
          ctaLabel: "Explore Menu",
          href: "/our-menu#specialty-sandwiches",
          accent: "gold",
        },
        {
          title: "Smash Burgers",
          tagline: "Never frozen",
          description:
            "Never-frozen beef smashed on caramelized onions, served with fries.",
          image: "/images/appetizers-explore-burgers-v2.jpg",
          imageAlt: "Bacon smash burger with melted cheese and fries",
          ctaLabel: "Explore Menu",
          href: "/our-menu#smash-burgers",
          accent: "pink",
        },
        {
          title: "Dirty Sodas",
          tagline: "From the bar",
          description:
            "Cream, syrups, and candy rims — build your own at our soda bar.",
          image: "/images/appetizers-explore-sodas-v2.jpg",
          imageAlt: "Colorful dirty sodas with candy rims at the soda bar",
          ctaLabel: "Explore Menu",
          href: "/our-menu/wine-cocktails",
          accent: "cyan",
        },
        {
          title: "Breakfast",
          tagline: "Served hot",
          description:
            "Bacon, egg & cheese sandwiches and the Gut Buster — served hot.",
          image: "/images/appetizers-explore-breakfast-v2.jpg",
          imageAlt: "Bacon egg and cheese breakfast sandwich",
          ctaLabel: "Explore Menu",
          href: "/our-menu#breakfast",
          accent: "gold",
        },
      ],
    },
    editorial: {
      eyebrow: "Pairing tip",
      title: "Start with curds,",
      highlight: "finish with a sub.",
      paragraphs: [
        "Our Wisconsin cheese curds are the perfect opener before a stacked Italian beef or smash burger. Add a dirty soda and you've got the full Sandwich Shop experience.",
      ],
      image: "/images/appetizers-highlight-cheese-curds-v2.jpg",
      imageAlt: "Crispy golden Wisconsin cheese curds",
      ctaLabel: "Explore main courses",
      ctaHref: "/our-menu/main-courses",
    },
    cta: {
      eyebrow: "Hungry for more?",
      title: "See the",
      highlight: "full menu.",
      description:
        "Appetizers are just the beginning — explore subs, burgers, dirty sodas, and more.",
      backgroundImage: "/images/menu-cat-main-courses-hero.jpg",
      primaryLabel: "View All Menu",
      primaryHref: "/our-menu",
      secondaryLabel: "Main Courses",
      secondaryHref: "/our-menu/main-courses",
    },
  },

  "main-courses": {
    slug: "main-courses",
    title: "Main Courses",
    metaDescription:
      "Stacked specialty sandwiches, smash burgers, and cold subs — made fresh daily in Downtown La Crosse.",
    intro: {
      primaryImage: "/images/menu-cat-main-courses-hero.jpg",
      primaryImageAlt: "Italian beef sandwich and smash burger",
      description:
        "The heart of our menu — hot sandwiches, smash burgers, and cold subs stacked high on fresh-baked bread.",
    },
    opening: {
      eyebrow: "The main event",
      title: "Stacked fresh,",
      highlight: "served hot.",
      description:
        "From Italian beef with au jus to smash burgers on a bed of caramelized onions — every main course is made when you order.",
    },
    menuSections: [
      {
        id: "specialty-sandwiches",
        title: MENU_SPECIALTY_SANDWICHES.title,
        scriptSubtitle: MENU_SPECIALTY_SANDWICHES.scriptSubtitle,
        headingImage: MENU_SPECIALTY_SANDWICHES.headingImage,
        headingImageAlt: MENU_SPECIALTY_SANDWICHES.headingImageAlt,
        items: MENU_SPECIALTY_SANDWICHES.items,
      },
      {
        id: "smash-burgers",
        title: MENU_BURGERS.title,
        scriptSubtitle: MENU_BURGERS.scriptSubtitle,
        headingImage: MENU_BURGERS.headingImage,
        headingImageAlt: MENU_BURGERS.headingImageAlt,
        note: MENU_BURGERS.note,
        items: MENU_BURGERS.items,
      },
    ],
    includeColdSandwiches: true,
    highlights: [
      {
        title: "Hot Italian Beef",
        tagline: "House specialty",
        description:
          "Tender beef piled high with peppers and au jus — a downtown La Crosse staple.",
        image: "/images/gallery/gallery-italian-beef-au-jus.png",
        imageAlt: "Italian beef sandwich with au jus",
        accent: "gold",
      },
      {
        title: "Smash burgers",
        tagline: "Never frozen",
        description:
          "Fresh beef smashed on caramelized onions — served with fries, every time.",
        image: "/images/smash-burger.jpg",
        imageAlt: "Bacon smash burger with fries",
        accent: "pink",
      },
      {
        title: "Cold subs",
        tagline: "Your way",
        description:
          "Choose your bread, meats, cheeses, and toppings — from a quick hoagie to a 20-inch party sub.",
        image: "/images/gallery/gallery-italian-sub.png",
        imageAlt: "Cold Italian sub on fresh bread",
        accent: "cyan",
      },
    ],
    editorial: {
      eyebrow: "Made to order",
      title: "Fresh every",
      highlight: "single time.",
      paragraphs: [
        "No warming trays. No pre-made patties sitting under a lamp. We stack your sandwich and smash your burger the moment you walk in — the same way we've done it on 3rd Street since day one.",
      ],
      image: "/images/signature-sandwich.png",
      imageAlt: "Toasted steak and cheese sandwich",
      ctaLabel: "View full menu",
      ctaHref: "/our-menu",
    },
    cta: {
      eyebrow: "Feed a crowd?",
      title: "Ready to",
      highlight: "Order?",
      description:
        "Sandwich trays, burger spreads, and a dirty soda bar for offices, parties, and family gatherings.",
      backgroundImage: "/images/catering-cta-event.jpg",
      primaryLabel: "Explore Catering",
      primaryHref: "/services/catering-services",
      secondaryLabel: "Contact Us",
      secondaryHref: "/contact-us",
    },
  },

  desserts: {
    slug: "desserts",
    title: "Desserts",
    metaDescription:
      "Sweet finishes at The Sandwich Shop — dessert cups, treat boxes, and the perfect pairing with our dirty soda bar.",
    intro: {
      primaryImage: "/images/menu-cat-desserts-hero.jpg",
      primaryImageAlt: "Colorful dessert cups and sweet treats",
      description:
        "A sweet finish to your meal — treat yourself to something special from our counter or pair it with a dirty soda.",
    },
    opening: {
      eyebrow: "Sweet finishes",
      title: "Save room for",
      highlight: "something sweet.",
      description:
        "We may be known for stacked subs and smash burgers, but our dessert counter has become a favorite stop on the way out the door.",
    },
    showcaseImages: [
      {
        src: "/images/desserts-showcase-cups.jpg",
        alt: "Colorful layered dessert cups with whipped cream and toppings",
        tagline: "Made fresh",
        label: "Dessert cups",
      },
      {
        src: "/images/desserts-showcase-boxes.jpg",
        alt: "Handmade dessert treat boxes on the counter",
        tagline: "Take home",
        label: "Treat boxes",
      },
      {
        src: "/images/desserts-showcase-cake.jpg",
        alt: "Chocolate layer cake slice with a frosted cupcake",
        tagline: "Baked daily",
        label: "Layer cake",
      },
      {
        src: "/images/desserts-showcase-tray.jpg",
        alt: "Assorted dessert cups packaged to go on a rustic tray",
        tagline: "To go",
        label: "Sweet treats",
      },
    ],
    highlights: [
      {
        title: "Dessert cups",
        tagline: "Made fresh",
        description:
          "Layered cups with whipped cream and toppings — colorful, generous, and perfect for sharing or keeping all to yourself.",
        image: "/images/menu-cat-desserts-hero.jpg",
        imageAlt: "Colorful dessert cups with whipped cream and toppings",
        accent: "pink",
      },
      {
        title: "Treat boxes",
        tagline: "Take home",
        description:
          "Grab a box of sweets for the office, a party, or a late-night snack — easy to share, hard to resist.",
        image: "/images/dessert-boxes.jpg",
        imageAlt: "Assorted dessert treat boxes",
        accent: "gold",
      },
      {
        title: "Dirty soda pairings",
        tagline: "The perfect match",
        description:
          "Nothing pairs better with something sweet than a cream-topped dirty soda from our soda bar.",
        image: "/images/signature-dirty-sodas.png",
        imageAlt: "Three colorful dirty sodas",
        accent: "cyan",
      },
    ],
    editorial: {
      eyebrow: "At the counter",
      title: "Ask what's",
      highlight: "fresh today.",
      paragraphs: [
        "Our dessert selection rotates with what's fresh — stop by the counter and see what's available. Pair it with a dirty soda and you've got the full Sandwich Shop experience.",
        "Dine in, carry out, or add sweet treats to your next catering order — just ask when you order.",
      ],
      image: "/images/dessert-boxes.jpg",
      imageAlt: "Dessert boxes on the counter",
      ctaLabel: "Visit the soda bar",
      ctaHref: "/our-menu/wine-cocktails",
    },
    secondaryEditorial: {
      eyebrow: "Quality promise",
      title: "Same care as",
      highlight: "everything else.",
      paragraphs: [
        "Just like our sandwiches and burgers, our sweets are made with the same attention to quality and presentation — because every part of your visit should feel worth it.",
      ],
      image: "/images/gallery/gallery-dessert-display.png",
      imageAlt: "Fresh dessert cups on display at the counter",
      ctaLabel: "See the full menu",
      ctaHref: "/our-menu",
    },
    cta: {
      eyebrow: "Plan your visit",
      title: "Stop by",
      highlight: "3rd Street.",
      description:
        "We're in Downtown La Crosse — grab lunch, a sweet treat, and a dirty soda all in one stop.",
      backgroundImage: "/images/dessert-boxes.jpg",
      primaryLabel: "Contact & Hours",
      primaryHref: "/contact-us",
      secondaryLabel: "Full Menu",
      secondaryHref: "/our-menu",
    },
  },

  "wine-cocktails": {
    slug: "wine-cocktails",
    title: "Wine & Cocktails",
    metaDescription:
      "The Dirty Soda Bar — colorful cream sodas, candy rims, and custom combos. La Crosse's signature drink experience.",
    intro: {
      primaryImage: "/images/menu-cat-wine-cocktails-hero.jpg",
      primaryImageAlt: "Colorful dirty sodas and craft drinks at the soda bar",
      description:
        "This isn't your average drink menu — it's a full dirty soda bar with cream, syrups, fruit, and candy rims.",
    },
    opening: {
      eyebrow: "The soda bar",
      title: "Your favorite fizz,",
      highlight: "leveled up.",
      description:
        "Rootbeer Float, Orange Dream, Dirty Dr Pepper — build your own combo or try one of our signatures. No one else in La Crosse does it like we do.",
    },
    showcaseImages: [
      {
        src: "/images/drinks-showcase-trio.jpg",
        alt: "Three colorful dirty sodas with cream tops and candy rims",
        tagline: "Signatures",
        label: "Dirty sodas",
        accent: "cyan",
      },
      {
        src: "/images/drinks-showcase-candy-rim.jpg",
        alt: "Green cream soda with a bright candy rim",
        tagline: "Fan favorite",
        label: "Candy rims",
        accent: "pink",
      },
      {
        src: "/images/drinks-showcase-cream-float.jpg",
        alt: "Orange cream float with whipped cream and cherry",
        tagline: "Creamy",
        label: "Cream floats",
        accent: "cyan",
      },
      {
        src: "/images/drinks-showcase-bar-lineup.jpg",
        alt: "Assorted dirty sodas lined up at the soda bar",
        tagline: "At the bar",
        label: "Build your own",
        accent: "gold",
      },
    ],
    highlights: [
      {
        title: "Candy rims",
        tagline: "Signature touch",
        description:
          "The finishing detail that makes every cup unmistakably ours — sweet, colorful, and totally craveable.",
        image: "/images/dirty-soda-green.jpg",
        imageAlt: "Green dirty soda with candy rim",
        accent: "cyan",
      },
      {
        title: "Cream & syrup bar",
        tagline: "Customize it",
        description:
          "Mix flavors, add cream, layer syrups — build something that's entirely yours.",
        image: "/images/gallery/gallery-dirty-sodas-lineup.png",
        imageAlt: "Dirty soda bar lineup",
        accent: "pink",
      },
      {
        title: "For every occasion",
        tagline: "Events welcome",
        description:
          "Add a full dirty soda bar to any catering order — the wow factor your guests will talk about.",
        image: "/images/dirty-sodas-trio.jpg",
        imageAlt: "Three colorful dirty sodas",
        accent: "gold",
      },
    ],
    editorial: {
      eyebrow: "Only in La Crosse",
      title: "A soda bar",
      highlight: "worth the trip.",
      paragraphs: [
        "The dirty soda bar is what sets us apart from every other sandwich shop in town. Families, lunch crowds, and anyone with a sweet tooth — there's something for everyone at the bar.",
        "Ask our team for recommendations or go off-menu with your own creation. That's the fun of it.",
      ],
      image: "/images/wine-cocktails-editorial-soda-bar.jpg",
      imageAlt: "Colorful dirty sodas and syrup bar at The Sandwich Shop",
      ctaLabel: "Add to catering",
      ctaHref: "/services/catering-services",
    },
    cta: {
      eyebrow: "Thirsty?",
      title: "Come see",
      highlight: "the bar.",
      description:
        "411 3rd Street, Downtown La Crosse — walk in anytime during our hours and order at the soda bar.",
      backgroundImage: "/images/dirty-sodas-trio.jpg",
      primaryLabel: "Contact & Hours",
      primaryHref: "/contact-us",
      secondaryLabel: "Full Menu",
      secondaryHref: "/our-menu",
    },
  },

  "kids-menu": {
    slug: "kids-menu",
    title: "Kids Menu",
    metaDescription:
      "Kid-approved portions — chicken strip basket, sandwich basket, and smash burger basket. Same quality, right-sized for younger appetites.",
    intro: {
      primaryImage: "/images/menu-cat-kids-hero.jpg",
      primaryImageAlt: "Kid's burger basket with fries and dirty soda",
      description:
        "Same fresh ingredients and care as our full menu — just sized and priced for younger appetites.",
    },
    opening: {
      eyebrow: "For the little ones",
      title: "Big taste,",
      highlight: "right-sized.",
      description:
        "Kid-approved baskets with portions that make sense — and the same quality you'd expect from everything else on our menu.",
    },
    menuSections: [
      {
        id: "kids-menu",
        title: MENU_KIDS_MENU.title,
        scriptSubtitle: MENU_KIDS_MENU.scriptSubtitle,
        headingImage: MENU_KIDS_MENU.headingImage,
        headingImageAlt: MENU_KIDS_MENU.headingImageAlt,
        items: MENU_KIDS_MENU.items,
      },
    ],
    highlights: [
      {
        title: "Kid's Smash Burger Basket",
        tagline: "Most popular",
        description:
          "A kid-sized smash burger with fries — the same never-frozen beef we use on our full menu.",
        image: "/images/kids-highlight-smash-burger.jpg",
        imageAlt: "Kid's smash burger basket with fries",
        accent: "gold",
      },
      {
        title: "Chicken Strip Basket",
        tagline: "Crispy & golden",
        description:
          "Crispy chicken strips served with fries — a kid-menu favorite made fresh when you order.",
        image: "/images/kids-highlight-chicken-strips.jpg",
        imageAlt: "Kid's chicken strip basket with fries",
        accent: "pink",
      },
      {
        title: "Dirty sodas for kids",
        tagline: "Fan favorite",
        description:
          "Colorful, fun, and customizable — the soda bar is a hit with kids of every age.",
        image: "/images/kids-highlight-sodas.jpg",
        imageAlt: "Colorful kid-friendly dirty sodas",
        accent: "cyan",
      },
    ],
    editorial: {
      eyebrow: "Family friendly",
      title: "A spot the whole",
      highlight: "family loves.",
      paragraphs: [
        "From quick weekday lunches to weekend treats, there's something on the menu for everyone — including our famous dirty soda bar that kids absolutely adore.",
        "High chairs available. Friendly staff. Generous portions for growing appetites.",
      ],
      image: "/images/smash-burger.jpg",
      imageAlt: "Smash burger with fries",
      ctaLabel: "Plan your visit",
      ctaHref: "/contact-us",
    },
    cta: {
      eyebrow: "Bring the crew",
      title: "We're on",
      highlight: "3rd Street.",
      description:
        "Downtown La Crosse — dine in, carry out, or call ahead. We'd love to see your family.",
      backgroundImage: "/images/menu-cat-kids-hero.jpg",
      primaryLabel: "Contact & Hours",
      primaryHref: "/contact-us",
      secondaryLabel: "Full Menu",
      secondaryHref: "/our-menu",
    },
  },
};

export function getMenuCategoryPage(slug: string): MenuCategoryPageData | null {
  return MENU_CATEGORY_PAGES[slug as MenuCategorySlug] ?? null;
}
