import type { InfoProseSection } from "@/components/InfoProse";
import { SITE } from "@/lib/constants";

export const PRIVACY_POLICY_SECTIONS: readonly InfoProseSection[] = [
  {
    id: "overview",
    title: "Overview",
    paragraphs: [
      `${SITE.name} ("we," "us," or "our") respects your privacy. This policy explains what information we collect when you visit our website, contact us, or dine with us, how we use it, and the choices you have.`,
    ],
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    paragraphs: [
      "Information you give us. When you call, email, submit a form, ask about catering, or place an order, we may collect your name, email address, phone number, and details about your request.",
      "Information collected automatically. Like most websites, our site may record basic technical information such as your browser type, device, pages visited, and the site that referred you. This helps us keep the site working and understand how it is used.",
    ],
  },
  {
    id: "how-we-use",
    title: "How We Use Information",
    list: [
      "To respond to questions, orders, and catering requests",
      "To provide dine-in, carry-out, and catering service",
      "To improve our website, menu presentation, and guest experience",
      "To send confirmations or follow-ups related to your inquiries",
      "To meet legal, tax, and accounting requirements",
    ],
  },
  {
    id: "cookies",
    title: "Cookies",
    paragraphs: [
      "Our website may use cookies and similar technologies to remember your preferences and measure site traffic. You can set your browser to refuse cookies or alert you when cookies are being sent. Some parts of the site may not work properly without them.",
    ],
  },
  {
    id: "sharing",
    title: "How We Share Information",
    paragraphs: [
      "We do not sell your personal information. We share it only when needed to serve you, including with:",
    ],
    list: [
      "Service providers who help us with website hosting, form delivery, and communications",
      "Government authorities or others when required by law or to protect our rights",
    ],
  },
  {
    id: "security",
    title: "Data Security and Retention",
    paragraphs: [
      "We use reasonable safeguards to protect your information. No method of transmission or storage is completely secure, so we cannot guarantee absolute security. We keep information only as long as needed for the purposes described in this policy or as required by law.",
    ],
  },
  {
    id: "your-choices",
    title: "Your Choices",
    paragraphs: [
      "You can ask us to access, correct, or delete the personal information we hold about you by contacting us with the details below.",
    ],
  },
  {
    id: "children",
    title: "Children's Privacy",
    paragraphs: [
      "Our website is intended for a general audience and is not directed to children under 13. We do not knowingly collect personal information from children.",
    ],
  },
  {
    id: "third-party",
    title: "Third-Party Links",
    paragraphs: [
      "Our website may link to maps, social media, or partner sites. We are not responsible for the privacy practices of those sites, and we encourage you to review their policies.",
    ],
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    paragraphs: [
      'We may update this policy from time to time. The "Last updated" date shows when it was last changed.',
    ],
  },
];

export const AI_POLICY_SECTIONS: readonly InfoProseSection[] = [
  {
    id: "approach",
    title: "Our Approach",
    paragraphs: [
      `At ${SITE.name}, our business is built on fresh food and personal service. We may use artificial intelligence (AI) tools to help our team work more efficiently, but people remain responsible for the menu, prices, hours, and service you receive.`,
    ],
  },
  {
    id: "how-we-use",
    title: "How We Use AI",
    paragraphs: [
      "Everything produced with the help of AI is reviewed by a member of our team before it is used.",
    ],
    list: [
      "Drafting and editing website and marketing content",
      "Organizing menu copy, hours, and routine website tasks",
      "Summarizing publicly available product or ingredient information when helpful",
    ],
  },
  {
    id: "what-we-do-not",
    title: "What We Do Not Use AI For",
    list: [
      "Final menu prices or catering quotes without review by our staff",
      "Guest recommendations that have not been checked by our team",
      "Pretending to be a person when you are talking with an automated tool",
    ],
  },
  {
    id: "accuracy",
    title: "Accuracy",
    paragraphs: [
      "Menu items, availability, and pricing are confirmed by our staff. If you notice information on our website that looks wrong, please let us know so we can correct it. When a page and the counter disagree, the team on 3rd Street is the source of truth.",
    ],
  },
  {
    id: "your-information",
    title: "Your Information and AI Tools",
    paragraphs: [
      "We do not enter guests' personal information into public AI tools. When we use AI services, we choose tools with appropriate privacy and security protections. See our Privacy Policy for how we handle personal information.",
    ],
  },
  {
    id: "assistants",
    title: "AI Assistants and Our Website",
    paragraphs: [
      "Search engines and AI assistants may read the public pages of our website. To help them describe our business accurately, we publish an AI Readiness Service Index with a plain summary of who we are and what we offer.",
    ],
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    paragraphs: [
      'We will update this policy as our use of AI changes. The "Last updated" date shows when it was last changed.',
    ],
  },
];

export type SitemapLink = {
  href: string;
  label: string;
  description?: string;
};

export type SitemapSection = {
  title: string;
  links: readonly SitemapLink[];
};

export const SITEMAP_SECTIONS: readonly SitemapSection[] = [
  {
    title: "Main Pages",
    links: [
      { href: "/", label: "Home" },
      { href: "/our-menu", label: "Our Menu" },
      { href: "/about-us", label: "About Us" },
      { href: "/about-us/our-story", label: "Our Story" },
      { href: "/services", label: "Services" },
      { href: "/services/catering-services", label: "Catering" },
      { href: "/contact-us", label: "Contact Us" },
    ],
  },
  {
    title: "Our Menu",
    links: [
      { href: "/our-menu/appetizers", label: "Appetizers" },
      { href: "/our-menu/main-courses", label: "Main Courses" },
      { href: "/our-menu/desserts", label: "Desserts" },
      { href: "/our-menu/wine-cocktails", label: "Wine & Cocktails" },
      { href: "/our-menu/kids-menu", label: "Kids Menu" },
    ],
  },
  {
    title: "On the Home Page",
    links: [
      { href: "/#menu", label: "What We Make" },
      { href: "/#sodas", label: "Dirty Sodas" },
      { href: "/#story", label: "Our Story" },
      { href: "/#gallery", label: "Gallery" },
      { href: "/#catering", label: "Catering & Events" },
      { href: "/#visit", label: "Visit Us" },
    ],
  },
];

/** Flat list used by the 404 page and similar link lists. */
export const SITEMAP_PAGES: readonly SitemapLink[] = SITEMAP_SECTIONS.flatMap(
  (section) => section.links,
);

export type ServiceIndexRow = {
  label: string;
  value: string;
  href?: string;
};

export type ServiceIndexTable = {
  title: string;
  rows: readonly ServiceIndexRow[];
};

export const SERVICE_INDEX_TABLES: readonly ServiceIndexTable[] = [
  {
    title: "Business Profile",
    rows: [
      { label: "Business name", value: SITE.name },
      { label: "Business type", value: "Locally owned sandwich shop and dirty soda bar" },
      { label: "Address", value: `${SITE.address}, ${SITE.city}` },
      { label: "Service area", value: "Downtown La Crosse, WI" },
      { label: "Phone", value: SITE.phone, href: SITE.phoneHref },
      { label: "Email", value: SITE.email, href: SITE.emailHref },
      {
        label: "Hours",
        value:
          "Tuesday–Saturday 10:00 AM–8:00 PM; late night Friday–Saturday 11:00 PM–3:00 AM; closed Sunday–Monday",
      },
    ],
  },
  {
    title: "What We Serve",
    rows: [
      {
        label: "Sandwiches",
        value: "Hot and cold specialty sandwiches made fresh to order",
      },
      {
        label: "Smash burgers",
        value: "Crispy-edged smash burgers stacked to order",
      },
      {
        label: "Dirty sodas",
        value: "Cream, syrups, fruit, and candy-rimmed soda bar creations",
      },
      {
        label: "Sides & more",
        value: "Appetizers, soup, desserts, breakfast, and kids menu items",
      },
      {
        label: "Catering",
        value: "Sandwich trays, burger spreads, and dirty soda bar for events",
      },
    ],
  },
  {
    title: "Key Pages",
    rows: [
      { label: "Home", value: "Homepage", href: "/" },
      { label: "Our Menu", value: "Full menu", href: "/our-menu" },
      { label: "About Us", value: "Who we are", href: "/about-us" },
      { label: "Our Story", value: "How we got here", href: "/about-us/our-story" },
      { label: "Services", value: "Dine in, carry out, catering", href: "/services" },
      { label: "Catering", value: "Event catering", href: "/services/catering-services" },
      { label: "Contact Us", value: "Hours, location, and messages", href: "/contact-us" },
    ],
  },
];

export const SERVICE_INDEX_FAQS: readonly { question: string; answer: string }[] = [
  {
    question: `Where is ${SITE.shortName} located?`,
    answer: `${SITE.address}, ${SITE.city}, in downtown La Crosse.`,
  },
  {
    question: "What do you serve?",
    answer:
      "Fresh sandwiches, smash burgers, sides, desserts, kids meals, and a dirty soda bar.",
  },
  {
    question: "Do you offer catering?",
    answer:
      "Yes. We offer sandwich trays, burger spreads, and dirty soda bar setups for offices, parties, and events.",
  },
  {
    question: "How do I get in touch?",
    answer: `Call ${SITE.phone}, email ${SITE.email}, or use the form on our Contact page.`,
  },
];
