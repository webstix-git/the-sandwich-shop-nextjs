import type { MenuNavIconKey } from "@/components/menu/menu-icons";
import { SITE } from "@/lib/constants";

export type MenuTextItem = {
  name: string;
  price: string;
  description?: string;
  badge?: string;
};

export type MenuSideItem = {
  name: string;
  price: string;
  description?: string;
};

export type ColdSandwichPrices = {
  inch20: number;
  inch10: number;
  hoagie: number;
  farmHouse: number;
};

export type ColdSandwichItem = {
  number: number;
  name: string;
  description?: string;
  marked?: boolean;
  prices: ColdSandwichPrices;
};

export type ColdSandwichExtra = {
  number: number;
  name: string;
  price: string;
  note?: string;
};

export const COLD_SANDWICH_SIZE_COLUMNS = [
  { key: "inch20" as const, label: '20"' },
  { key: "inch10" as const, label: '10"' },
  { key: "hoagie" as const, label: "Hoagie" },
  { key: "farmHouse" as const, label: "Farm House" },
] as const;

export type MenuCategoryChip = {
  id: string;
  label: string;
  icon: MenuNavIconKey;
};

export const MENU_CATEGORY_CHIPS: MenuCategoryChip[] = [
  { id: "specialty-sandwiches", label: "Hot Sandwiches", icon: "sandwich" },
  { id: "cold-sandwiches", label: "Cold Sandwiches", icon: "sandwich" },
  { id: "smash-burgers", label: "Burgers", icon: "burger" },
  { id: "sides", label: "Sides", icon: "sides" },
  { id: "soup", label: "Soup", icon: "soup" },
  { id: "breakfast", label: "Breakfast", icon: "breakfast" },
  { id: "kids-menu", label: "Kids", icon: "kids" },
];

export const MENU_INTRO = {
  primaryImage: "/images/menu-intro-bg.jpg",
  primaryImageAlt: "Loaded steak and cheese sandwich on a fresh roll",
  secondaryImage: "/images/dirty-sodas-trio.jpg",
  secondaryImageAlt: "Colorful dirty sodas with candy rims",
  description:
    "Specialty sandwiches, smash burgers, sides, breakfast, and dirty sodas — everything made fresh when you order.",
} as const;

export const MENU_SIGNATURE_SECTION = {
  eyebrow: "Start here",
  title: "Signature favorites",
  subtitle: "The ones our regulars order on repeat.",
} as const;

export const MENU_SIGNATURE_FAVORITES = [
  {
    name: "Sandwiches",
    eyebrow: "Stacked fresh",
    headline: "Sandwiches",
    headlineAccent: "",
    description:
      "Stacked high on fresh-baked rolls — from Italian beef with au jus to toasted melts piled with the good stuff.",
    image: "/images/signature-sandwich.png",
    imageAlt: "Toasted steak and cheese sandwich with melted cheese on a fresh roll",
    href: "#specialty-sandwiches",
  },
  {
    name: "Dirty Sodas",
    eyebrow: "From the soda bar",
    headline: "Dirty",
    headlineAccent: "Sodas",
    description:
      "Your favorite fizz, leveled up with cream, syrups, fruit and candy rims. Refreshing, fun, totally craveable.",
    image: "/images/signature-dirty-sodas.png",
    imageAlt: "Three colorful dirty sodas in cups on the counter",
    href: "/our-menu/wine-cocktails",
  },
] as const;

export const MENU_SPECIALTY_SANDWICHES = {
  id: "specialty-sandwiches",
  title: "Specialty Sandwiches",
  scriptSubtitle: "Served Hot",
  headingImage: "/images/gallery/gallery-italian-beef-au-jus.png",
  headingImageAlt: "Italian beef sandwich with au jus",
  items: [
    { name: "All American Chicken", price: "$14", description: "lettuce, tomato, pickle" },
    { name: "Chicken Bacon Ranch Wrap", price: "$14" },
    { name: "Chicken Parm", price: "$13" },
    {
      name: "Chuckie Cheese Steak",
      price: "$18",
      description: "green, red & yellow peppers, onion, steak, cheese & red sauce",
    },
    {
      name: "Chuck's Yum Yum Chicken",
      price: "$14",
      description: "lettuce, tomato, Yum Yum Sauce",
    },
    { name: "Hot Ham & Cheese", price: "$10" },
    {
      name: "Hot Italian Beef",
      price: "$14",
    },
    { name: "Rachel", price: "$12" },
    { name: "Rueben", price: "$12" },
    { name: "Turkey Melt", price: "$10" },
  ] satisfies MenuTextItem[],
};

export const MENU_COLD_SANDWICHES = {
  id: "cold-sandwiches",
  title: "Cold Sandwiches",
  scriptSubtitle: "Choice of Bread",
  headingImage: "/images/gallery/gallery-italian-sub.png",
  headingImageAlt: "Cold Italian sub on fresh bread",
  items: [
    {
      number: 1,
      name: "All Cheese",
      description: "Choose up to 3 cheeses",
      prices: { inch20: 30, inch10: 15, hoagie: 13, farmHouse: 11 },
    },
    {
      number: 2,
      name: "Chicken & Cheese",
      prices: { inch20: 28, inch10: 14, hoagie: 12, farmHouse: 10 },
    },
    {
      number: 3,
      name: "Ham, Capocollo, Cheese",
      prices: { inch20: 28, inch10: 14, hoagie: 12, farmHouse: 10 },
    },
    {
      number: 4,
      name: "Ham, Salami, Cheese",
      prices: { inch20: 28, inch10: 14, hoagie: 12, farmHouse: 10 },
    },
    {
      number: 5,
      name: "Pastrami & Cheese",
      prices: { inch20: 32, inch10: 16, hoagie: 14, farmHouse: 12 },
    },
    {
      number: 6,
      name: "Pepperoni & Cheese",
      prices: { inch20: 28, inch10: 14, hoagie: 14, farmHouse: 12 },
    },
    {
      number: 7,
      name: "Roast Beef & Cheese",
      prices: { inch20: 32, inch10: 16, hoagie: 14, farmHouse: 12 },
    },
    {
      number: 8,
      name: "Salad Sub",
      description: "No meat or cheese",
      prices: { inch20: 26, inch10: 13, hoagie: 11, farmHouse: 10 },
    },
    {
      number: 9,
      name: "Salami & Cheese",
      prices: { inch20: 28, inch10: 14, hoagie: 12, farmHouse: 10 },
    },
    {
      number: 10,
      name: "Soppressata & Cheese",
      prices: { inch20: 28, inch10: 14, hoagie: 12, farmHouse: 10 },
    },
    {
      number: 11,
      name: "Super Sub",
      description: "Combination of #3, #4 & #10",
      prices: { inch20: 34, inch10: 17, hoagie: 15, farmHouse: 13 },
    },
    {
      number: 12,
      name: "Turkey Breast & Cheese",
      prices: { inch20: 28, inch10: 14, hoagie: 12, farmHouse: 10 },
    },
  ] satisfies ColdSandwichItem[],
  extras: [
    {
      number: 13,
      name: "Build Your Own Salad — 1 meat & 1 cheese",
      price: "$15",
    },
    {
      number: 14,
      name: "Peanut Butter & Jelly (Strawberry or Grape)",
      price: "$10",
      note: "Only on Farm House bread.",
    },
  ] satisfies ColdSandwichExtra[],
};

export const MENU_COLD_CUSTOMIZE = {
  cheeses: [
    "American",
    "Cheddar",
    "Fire Colby",
    "Jalapeno",
    "Mozzarella",
    "Muenster",
    "Pepper Jack",
    "Provolone",
    "Sharp Cheddar",
    "Smoked Gouda",
    "Swiss",
  ],
  toppingGroups: [
    {
      label: "Fresh",
      items: ["Lettuce", "Spinach", "Tomatoes", "Cucumber", "Mushrooms", "Onions"],
    },
    {
      label: "Peppers & pickles",
      items: [
        "Banana Peppers",
        "Jalapenos",
        "Giardiniera (Hot or Mild)",
        "Olives (Black or Green)",
        "Peppers (Green, Red or Yellow)",
        "Pickles",
      ],
    },
    {
      label: "Finish",
      items: ["Oregano", "Pepper", "Salt"],
    },
  ],
  sauces: [
    "Chipotle",
    "French",
    "Garlic Aioli",
    "Horseradish",
    "Ketchup",
    "Mayo",
    "Mustard (Deli, Honey or Yellow)",
    "Oil",
    "Ranch",
    "Red Wine Vinegar",
    "Sriracha",
    "Thousand Island",
    "Vinaigrette",
  ],
} as const;

export const MENU_BURGERS = {
  id: "smash-burgers",
  title: "Smash Burgers",
  scriptSubtitle: "Served with Fries",
  headingImage: "/images/smash-burger.jpg",
  headingImageAlt: "Bacon smash burger with fries",
  note: "All hamburgers are fresh, never frozen, and smashed on a bed of caramelized onions.",
  items: [
    { name: "All American", price: "$14", description: "lettuce, tomato, pickle" },
    { name: "Bacon & Egg", price: "$14" },
    { name: "Bacon Smash", price: "$13" },
    { name: "Mushroom & Swiss", price: "$14" },
    { name: "Oklahoma City", price: "$12" },
    { name: "Peanut Butter & Bacon", price: "$14" },
    { name: "Texan", price: "$14", description: "onion rings & BBQ sauce" },
    {
      name: "Windy City",
      price: "$15",
      description: "Italian Beef with hot or mild Giardiniera",
    },
  ] satisfies MenuTextItem[],
};

export const MENU_SIDES = {
  id: "sides",
  title: "Sides",
  scriptSubtitle: "The Perfect Sidekick",
  headingImage: "/images/gallery/gallery-steak-sub-tots.png",
  headingImageAlt: "French fries and tater tots",
  items: [
    { name: "Cheese Curds", price: "$6" },
    { name: "French Fries", price: "$4" },
    { name: "Onion Rings", price: "$5" },
  ] satisfies MenuSideItem[],
};

export const MENU_SOUP = {
  id: "soup",
  title: "Soup",
  scriptSubtitle: "Made Fresh Daily",
  headingImage: "/images/gallery/gallery-brisket-bowl.png",
  headingImageAlt: "Bowl of hot soup",
  items: [{ name: "Soup", price: "$6" }] satisfies MenuSideItem[],
};

export const MENU_BREAKFAST = {
  id: "breakfast",
  title: "Breakfast",
  scriptSubtitle: "Served Hot",
  headingImage: "/images/gallery/gallery-steak-cheese-plate.png",
  headingImageAlt: "Breakfast sandwich plate",
  items: [
    { name: "Bacon, Egg & Cheese", price: "$10" },
    { name: "Sausage, Egg & Cheese", price: "$10" },
    { name: "Ham, Egg & Cheese", price: "$10" },
    {
      name: "Gut Buster",
      price: "$15",
      description:
        "bacon, sausage, ham, hash browns, egg & cheese topped with ketchup",
    },
  ] satisfies MenuSideItem[],
};

export const MENU_KIDS_MENU = {
  id: "kids-menu",
  title: "Kid's Menu",
  scriptSubtitle: "Kid-Approved Portions",
  headingImage: "/images/gallery/gallery-brisket-burger.png",
  headingImageAlt: "Kid's burger basket",
  items: [
    { name: "Chicken Strip Basket", price: "$10" },
    { name: "Kid's Sandwich Basket", price: "$6" },
    { name: "Kid's Smash Burger Basket", price: "$5" },
  ] satisfies MenuSideItem[],
};

export const MENU_GALLERY_IMAGES = [
  {
    src: "/images/gallery/gallery-steak-sub-tots.png",
    alt: "Toasted steak and cheese sub with tater tots",
  },
  {
    src: "/images/gallery/gallery-brisket-bowl.png",
    alt: "Bowl of hot soup with brisket",
  },
  {
    src: "/images/gallery/gallery-steak-cheese-plate.png",
    alt: "Steak and cheese breakfast plate",
  },
  {
    src: "/images/gallery/gallery-brisket-burger.png",
    alt: "Smash burger with melted cheese",
  },
  {
    src: "/images/signature-sandwich.png",
    alt: "Toasted steak and cheese sandwich",
  },
  {
    src: "/images/signature-dirty-sodas.png",
    alt: "Three colorful dirty sodas on the counter",
  },
  {
    src: "/images/gallery/gallery-italian-beef-peppers.png",
    alt: "Italian beef sandwich with peppers",
  },
  {
    src: "/images/gallery/gallery-dirty-sodas-trio.png",
    alt: "Colorful dirty sodas lineup",
  },
  {
    src: "/images/smash-burger.jpg",
    alt: "Bacon smash burger with fries",
  },
  {
    src: "/images/gallery/gallery-reuben.png",
    alt: "Toasted Reuben sandwich with onion rings",
  },
  {
    src: "/images/gallery/gallery-dirty-soda-green-foam.png",
    alt: "Green dirty soda at the soda bar",
  },
  {
    src: "/images/gallery/gallery-peach-slushie.png",
    alt: "Peach frozen slushie with straw",
  },
] as const;

export const MENU_HASH_BROWNS_NOTE =
  "Add hash browns to any sandwich for $1.50";

export const MENU_CATERING_CTA = {
  badge: "Catering & Events",
  title: "We'll cater your",
  titleAccent: "next gathering.",
  description:
    "Sandwich trays, smash burger spreads, and a full dirty soda bar — fresh, generous, and ready for offices, parties, and family celebrations.",
  highlights: [
    "Custom menu packages for any crowd size",
    "Dirty soda bar add-ons for events",
    "Locally owned — Downtown La Crosse",
  ],
  primaryLabel: "Explore Catering",
  primaryHref: "/services/catering-services",
  secondaryLabel: "Request a Quote",
  secondaryHref: SITE.cateringEmail,
  backgroundImage: "/images/catering-cta-event.jpg",
} as const;
