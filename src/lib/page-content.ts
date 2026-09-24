import { DESSERT_CUPS_IMAGE } from "./dessert-cups-image";

export type MenuItem = {
  name: string;
  description: string;
  price?: string;
  tag?: string;
  tagColor?: string;
};

export type PageHeroContent = {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
  image: string;
  imageAlt: string;
  accent?: "pink" | "cyan" | "gold";
};

export type CategoryCard = {
  href: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tag: string;
  tagColor: string;
};

export const MENU_CATEGORIES: CategoryCard[] = [
  {
    href: "/our-menu/appetizers",
    title: "Appetizers",
    description: "Shareable starters and light bites to kick off your meal.",
    image: DESSERT_CUPS_IMAGE,
    imageAlt: "Assorted appetizer cups",
    tag: "Start here",
    tagColor: "text-brand-gold",
  },
  {
    href: "/our-menu/main-courses",
    title: "Main Courses",
    description: "Stacked subs, smash burgers, and hearty plates made to order.",
    image: "/images/hero-sandwich.jpg",
    imageAlt: "Steak and cheese sub",
    tag: "House favorites",
    tagColor: "text-brand-pink",
  },
  {
    href: "/our-menu/desserts",
    title: "Desserts",
    description: "Sweet finishes baked fresh and served with a smile.",
    image: "/images/dessert-boxes.jpg",
    imageAlt: "Handmade dessert boxes",
    tag: "Sweet tooth",
    tagColor: "text-brand-pink",
  },
  {
    href: "/our-menu/wine-cocktails",
    title: "Wine & Cocktails",
    description: "Dirty sodas, craft pours, and fizzy creations from our soda bar.",
    image: "/images/dirty-sodas-trio.jpg",
    imageAlt: "Colorful dirty sodas",
    tag: "The Soda Bar",
    tagColor: "text-brand-cyan",
  },
  {
    href: "/our-menu/kids-menu",
    title: "Kids Menu",
    description: "Kid-approved portions and flavors the whole family loves.",
    image: "/images/smash-burger.jpg",
    imageAlt: "Smash burger for kids",
    tag: "Family friendly",
    tagColor: "text-brand-gold",
  },
];

export const APPETIZERS: MenuItem[] = [
  {
    name: "Cheese Curd Basket",
    description: "Golden-fried Wisconsin cheese curds with house ranch.",
    price: "$8",
    tag: "Crowd favorite",
    tagColor: "text-brand-gold",
  },
  {
    name: "Garlic Parmesan Fries",
    description: "Crispy shoestring fries tossed in garlic butter and parmesan.",
    price: "$7",
  },
  {
    name: "Italian Beef Sliders",
    description: "Mini Italian beef sandwiches with au jus for dipping.",
    price: "$10",
    tag: "Shareable",
    tagColor: "text-brand-pink",
  },
  {
    name: "Soup of the Day",
    description: "Rotating homemade soups. Ask your server what's simmering.",
    price: "$6",
  },
];

export const MAIN_COURSES: MenuItem[] = [
  {
    name: "Italian Beef Sub",
    description: "Thin-sliced beef piled high on a fresh roll with giardiniera and au jus.",
    price: "$13",
    tag: "Signature",
    tagColor: "text-brand-pink",
  },
  {
    name: "Steak & Cheese Sub",
    description: "Tender steak, melted provolone, and sautéed peppers on a toasted roll.",
    price: "$14",
  },
  {
    name: "BBQ Brisket Smash Burger",
    description: "Crispy smash patty, brisket, cheddar, and tangy BBQ on a brioche bun.",
    price: "$15",
    tag: "Best seller",
    tagColor: "text-brand-gold",
  },
  {
    name: "Classic Smash Burger",
    description: "Double smash patties, American cheese, lettuce, tomato, and house sauce.",
    price: "$12",
  },
  {
    name: "Turkey Avocado Melt",
    description: "Sliced turkey, avocado, swiss, and chipotle mayo on sourdough.",
    price: "$13",
  },
  {
    name: "Veggie Caprese Sub",
    description: "Fresh mozzarella, tomato, basil pesto, and balsamic on ciabatta.",
    price: "$11",
  },
];

export const DESSERTS: MenuItem[] = [
  {
    name: "Buttercream Cup",
    description: "Single-serving cake cup with swirled buttercream frosting.",
    price: "$5",
    tag: "Made daily",
    tagColor: "text-brand-pink",
  },
  {
    name: "Dessert Box",
    description: "Assorted mini desserts in a beautiful to-go box.",
    price: "$12",
  },
  {
    name: "Chocolate Chip Cookie",
    description: "Warm, gooey cookie baked fresh throughout the day.",
    price: "$3",
  },
  {
    name: "Dirty Soda Float",
    description: "Your favorite dirty soda topped with a scoop of vanilla ice cream.",
    price: "$7",
    tag: "Must try",
    tagColor: "text-brand-cyan",
  },
];

export const DRINKS: MenuItem[] = [
  {
    name: "Strawberry Dream",
    description: "Strawberry soda, coconut cream, fresh purée, and candy rim.",
    price: "$6",
    tag: "Fan favorite",
    tagColor: "text-brand-cyan",
  },
  {
    name: "Peach Cream",
    description: "Peach fizz with vanilla cream and a sugared rim.",
    price: "$6",
  },
  {
    name: "Rainbow Sour",
    description: "Tangy sour candy rim with layered fruit syrups over sparkling soda.",
    price: "$7",
    tag: "Instagram worthy",
    tagColor: "text-brand-pink",
  },
  {
    name: "Coconut Lime",
    description: "Tropical coconut cream with fresh lime and crushed ice.",
    price: "$6",
  },
  {
    name: "House Wine",
    description: "Red or white. Ask about today's selection.",
    price: "$8",
  },
  {
    name: "Craft Cocktail",
    description: "Seasonal cocktail specials crafted behind the bar.",
    price: "$10",
    tag: "Seasonal",
    tagColor: "text-brand-gold",
  },
];

export const KIDS_MENU: MenuItem[] = [
  {
    name: "Mini Smash Burger",
    description: "Single patty with cheese on a soft bun, fries included.",
    price: "$8",
    tag: "Includes fries",
    tagColor: "text-brand-gold",
  },
  {
    name: "Grilled Cheese & Fries",
    description: "Melty American cheese on white bread with crispy fries.",
    price: "$7",
  },
  {
    name: "Turkey & Cheese Sub",
    description: "Half-size sub with turkey, cheese, and a side of chips.",
    price: "$7",
  },
  {
    name: "Kids Dirty Soda",
    description: "A smaller cup of any dirty soda flavor, candy rim optional.",
    price: "$4",
    tag: "Soda bar",
    tagColor: "text-brand-cyan",
  },
];

export const PAGE_HEROES = {
  menu: {
    eyebrow: "Our Menu",
    title: "Every craving,",
    highlight: "covered.",
    description:
      "From shareable starters to stacked subs, smash burgers, sweet treats, and our famous dirty soda bar, everything is made fresh and served generous.",
    image: "/images/hero-sandwich.jpg",
    imageAlt: "Signature sandwich platter",
    accent: "cyan",
  },
  appetizers: {
    eyebrow: "Appetizers",
    title: "Start with",
    highlight: "something good.",
    description:
      "Light bites and shareable plates to warm up your appetite before the main event.",
    image: DESSERT_CUPS_IMAGE,
    imageAlt: "Appetizer cups",
    accent: "gold",
  },
  mainCourses: {
    eyebrow: "Main Courses",
    title: "Stacked, smashed,",
    highlight: "served hot.",
    description:
      "Our subs and burgers are the heart of the shop, built fresh, piled high, and made exactly how you like them.",
    image: "/images/italian-beef.jpg",
    imageAlt: "Italian beef sub",
    accent: "pink",
  },
  desserts: {
    eyebrow: "Desserts",
    title: "Sweet endings,",
    highlight: "made by hand.",
    description:
      "Handcrafted treats baked throughout the day, the perfect finish to any meal.",
    image: "/images/dessert-boxes.jpg",
    imageAlt: "Dessert boxes with buttercream",
    accent: "pink",
  },
  wineCocktails: {
    eyebrow: "Wine & Cocktails",
    title: "Sip something",
    highlight: "extraordinary.",
    description:
      "Our dirty soda bar is legendary, but we also pour wine and seasonal cocktails worth lingering over.",
    image: "/images/dirty-sodas-trio.jpg",
    imageAlt: "Colorful dirty sodas",
    accent: "cyan",
  },
  kidsMenu: {
    eyebrow: "Kids Menu",
    title: "Big flavors,",
    highlight: "kid-sized.",
    description:
      "Portions and prices made for little appetites, with all the same care and quality as the grown-up menu.",
    image: "/images/smash-burger.jpg",
    imageAlt: "Kids smash burger",
    accent: "gold",
  },
  about: {
    eyebrow: "About Us",
    title: "More than a",
    highlight: "sandwich shop.",
    description:
      "We're a locally owned neighborhood spot in Downtown La Crosse where good food, friendly faces, and a little soda-bar magic come together.",
    image: "/images/dessert-boxes.jpg",
    imageAlt: "Fresh handmade treats",
    accent: "pink",
  },
  ourStory: {
    eyebrow: "Our Story",
    title: "Rooted in",
    highlight: "La Crosse.",
    description:
      "From a dream to a downtown destination: here's how The Sandwich Shop & Dirty Soda Bar came to be.",
    image: "/images/hero-sandwich.jpg",
    imageAlt: "Fresh sandwich preparation",
    accent: "pink",
  },
  services: {
    eyebrow: "Services",
    title: "We bring the",
    highlight: "good stuff to you.",
    description:
      "Whether you're feeding the office, hosting a party, or planning a family gathering, we've got you covered.",
    image: "/images/italian-beef.jpg",
    imageAlt: "Catering spread",
    accent: "gold",
  },
  catering: {
    eyebrow: "Catering",
    title: "Feed the whole",
    highlight: "crew.",
    description:
      "Sandwich trays, burger spreads, and a dirty soda bar for your next event. Fresh, generous, and hassle-free.",
    image: "/images/italian-beef.jpg",
    imageAlt: "Catering sandwich tray",
    accent: "pink",
  },
  contact: {
    eyebrow: "Contact Us",
    title: "Come say",
    highlight: "hello.",
    description:
      "We're right in the heart of Downtown La Crosse. Stop in, call ahead, or drop us a line. We'd love to hear from you.",
    image: "/images/dirty-soda-green.jpg",
    imageAlt: "Welcome to our soda bar",
    accent: "cyan",
  },
} as const satisfies Record<string, PageHeroContent>;

export const ABOUT_VALUES = [
  {
    title: "Made Fresh, Daily",
    description:
      "Every sandwich stacked, every burger smashed, every soda poured, right when you order it. No shortcuts, no warming trays.",
    accent: "pink" as const,
  },
  {
    title: "Locally Owned",
    description:
      "We're your neighbors. No corporate playbook, just a family-run shop invested in this community and the people in it.",
    accent: "cyan" as const,
  },
  {
    title: "Generous Portions",
    description:
      "We believe you should leave full and happy. Our portions are stacked, our sodas are loaded, and our hospitality is warm.",
    accent: "gold" as const,
  },
];

export const STORY_MILESTONES = [
  {
    year: "The Dream",
    title: "A corner shop vision",
    description:
      "The idea was simple: bring together the best sandwiches in town with a soda bar nobody had seen before, all under one roof in Downtown La Crosse.",
  },
  {
    year: "Opening Day",
    title: "Doors open on 3rd Street",
    description:
      "We opened our doors at 411 3rd Street with a small menu, a big heart, and a soda bar that quickly became the talk of the town.",
  },
  {
    year: "Today",
    title: "A neighborhood staple",
    description:
      "From weekday lunch regulars to families celebrating weekends, we've become the go-to spot for fresh food, dirty sodas, and a friendly hello.",
  },
];

export const SERVICE_OFFERINGS = [
  {
    title: "Dine In",
    description:
      "Pull up a seat in our cozy downtown space. Watch your burger get smashed, sip a dirty soda, and enjoy the buzz.",
    href: "/contact-us",
    accent: "pink" as const,
  },
  {
    title: "Carry Out",
    description:
      "Call ahead or walk in. We'll have your order hot, fresh, and ready to go. Perfect for lunch on the run.",
    href: "/contact-us",
    accent: "cyan" as const,
  },
  {
    title: "Catering",
    description:
      "Office lunches, parties, game days, and family gatherings. We bring the trays, the burgers, and the soda bar to you.",
    href: "/services/catering-services",
    accent: "gold" as const,
  },
];

export const CATERING_PACKAGES = [
  {
    name: "Sandwich Tray",
    description: "Assorted subs cut and ready to serve. Serves 10–15.",
    price: "From $89",
    includes: ["Choice of 3 sub varieties", "Chips on the side", "Plates & napkins"],
  },
  {
    name: "Burger Spread",
    description: "Smash burgers with all the fixings. Serves 10–15.",
    price: "From $99",
    includes: ["Smash burgers & buns", "Cheese, lettuce, tomato", "House sauces"],
  },
  {
    name: "Soda Bar Experience",
    description: "A full dirty soda bar setup for your event. Serves 20+.",
    price: "From $149",
    includes: ["3 soda flavors", "Cream & syrup bar", "Candy rim station"],
  },
];
