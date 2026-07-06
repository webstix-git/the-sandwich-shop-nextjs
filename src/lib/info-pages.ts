import type { InfoProseSection } from "@/components/InfoProse";
import { SITE } from "@/lib/constants";

export const PRIVACY_POLICY_SECTIONS: readonly InfoProseSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    paragraphs: [
      `${SITE.name} ("we," "us," or "our") respects your privacy. This Privacy Policy explains how we handle information when you visit our website, contact us, or visit our restaurant at ${SITE.address}, ${SITE.city}.`,
      "By using our website or services, you agree to the practices described in this policy.",
    ],
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    paragraphs: [
      "We may collect information you provide directly to us, such as when you:",
    ],
    list: [
      "Submit a contact or catering inquiry form",
      "Call, email, or visit us in person",
      "Subscribe to updates or promotions (if offered)",
      "Interact with us on social media",
    ],
  },
  {
    id: "automatic-data",
    title: "Automatically Collected Data",
    paragraphs: [
      "When you browse our website, we may automatically collect certain technical information, including your browser type, device type, pages visited, and general usage data. This helps us improve site performance and user experience.",
    ],
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    list: [
      "Respond to your questions, orders, and catering requests",
      "Provide and improve our website and restaurant services",
      "Send confirmations or follow-ups related to your inquiries",
      "Comply with legal obligations and protect our business",
    ],
  },
  {
    id: "cookies",
    title: "Cookies & Analytics",
    paragraphs: [
      "Our website may use cookies and similar technologies to remember preferences and understand how visitors use our site. You can adjust cookie settings through your browser at any time.",
    ],
  },
  {
    id: "sharing",
    title: "Information Sharing",
    paragraphs: [
      "We do not sell your personal information. We may share limited data with trusted service providers who help us operate our website, process communications, or deliver services — always under confidentiality obligations.",
    ],
  },
  {
    id: "security",
    title: "Data Security",
    paragraphs: [
      "We take reasonable measures to protect your information from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is completely secure.",
    ],
  },
  {
    id: "your-rights",
    title: "Your Rights",
    paragraphs: [
      "Depending on your location, you may have the right to request access to, correction of, or deletion of personal information we hold about you. Contact us using the details below to make a request.",
    ],
  },
  {
    id: "contact",
    title: "Contact Us",
    paragraphs: [
      `If you have questions about this Privacy Policy, please contact us at ${SITE.email} or ${SITE.phone}. You may also visit us at ${SITE.address}, ${SITE.city}.`,
    ],
  },
];

export const AI_POLICY_SECTIONS: readonly InfoProseSection[] = [
  {
    id: "commitment",
    title: "Our Commitment",
    paragraphs: [
      `${SITE.name} believes in transparency. This AI Policy explains how artificial intelligence may be used in connection with our website, marketing materials, and digital presence.`,
      "We use technology thoughtfully — always with the goal of serving our guests better while keeping our brand authentic and our information accurate.",
    ],
  },
  {
    id: "website-use",
    title: "Use of AI on This Website",
    paragraphs: [
      "Parts of this website may be developed, maintained, or enhanced with the assistance of AI-powered tools. This can include layout suggestions, code generation, content drafting, accessibility improvements, and performance optimization.",
      "All AI-assisted output is reviewed and approved by our team before publication.",
    ],
  },
  {
    id: "content-imagery",
    title: "Content & Imagery",
    paragraphs: [
      "Written content on this site reflects our menu, services, hours, and story to the best of our knowledge. Food photography and brand imagery represent our actual offerings and atmosphere unless otherwise noted.",
      "If any AI-generated or AI-assisted imagery is used, it is clearly aligned with our real products and brand identity — never intended to mislead guests.",
    ],
  },
  {
    id: "accuracy",
    title: "Accuracy & Limitations",
    paragraphs: [
      "While we strive for accuracy, AI-assisted content may occasionally contain errors. Menu items, prices, hours, and availability are always subject to change. When in doubt, please contact us directly or visit in person for the most current information.",
    ],
  },
  {
    id: "human-oversight",
    title: "Human Oversight",
    paragraphs: [
      "AI tools support our work — they do not replace human judgment. Our owners and staff review important content, respond to guest inquiries personally, and make all final decisions about menu, pricing, and service offerings.",
    ],
  },
  {
    id: "data",
    title: "AI & Your Data",
    paragraphs: [
      "We do not use AI to make automated decisions that significantly affect you without human review. Any personal information handled through our site is governed by our Privacy Policy.",
    ],
  },
  {
    id: "updates",
    title: "Updates to This Policy",
    paragraphs: [
      "We may update this AI Policy as our technology practices evolve. Changes will be posted on this page with an updated revision date.",
    ],
  },
  {
    id: "contact",
    title: "Questions",
    paragraphs: [
      `For questions about our use of AI, contact us at ${SITE.email} or call ${SITE.phone}.`,
    ],
  },
];

export type SitemapLink = {
  href: string;
  label: string;
  description?: string;
};

export const SITEMAP_PAGES: readonly SitemapLink[] = [
  { href: "/", label: "Home", description: "Our homepage" },
  { href: "/contact-us", label: "Contact Us", description: "Hours, location & inquiries" },
  { href: "/our-menu", label: "Our Menu" },
  { href: "/our-menu/appetizers", label: "Appetizers" },
  { href: "/our-menu/main-courses", label: "Main Courses" },
  { href: "/our-menu/desserts", label: "Desserts" },
  { href: "/our-menu/wine-cocktails", label: "Wine & Cocktails" },
  { href: "/our-menu/kids-menu", label: "Kids Menu" },
  { href: "/about-us", label: "About Us" },
  { href: "/about-us/our-story", label: "Our Story" },
  { href: "/services", label: "Services" },
  { href: "/services/catering-services", label: "Catering Services" },
];

export type ServiceIndexItem = {
  title: string;
  description: string;
  href: string;
  tag: string;
  accent: "pink" | "cyan" | "gold";
};

export const SERVICE_INDEX_ITEMS: readonly ServiceIndexItem[] = [
  {
    title: "Dine In",
    description:
      "Enjoy our full menu in our cozy downtown space — fresh sandwiches, smash burgers, and signature dirty sodas made to order.",
    href: "/contact-us",
    tag: "Walk in welcome",
    accent: "pink",
  },
  {
    title: "Carry Out",
    description:
      "Call ahead or order at the counter. We'll have your food hot, fresh, and ready when you are.",
    href: "/contact-us",
    tag: "Quick pickup",
    accent: "cyan",
  },
  {
    title: "Catering Services",
    description:
      "Sandwich trays, burger spreads, and dirty soda bar experiences for offices, parties, and family gatherings.",
    href: "/services/catering-services",
    tag: "Events & groups",
    accent: "pink",
  },
  {
    title: "Sandwich Trays",
    description:
      "Assorted subs cut and ready to serve — perfect for meetings and celebrations. Serves 10–15 guests.",
    href: "/services/catering-services",
    tag: "Catering package",
    accent: "cyan",
  },
  {
    title: "Burger Spreads",
    description:
      "Smash burgers with all the fixings, scaled for your crowd. A crowd-pleaser for any occasion.",
    href: "/services/catering-services",
    tag: "Catering package",
    accent: "pink",
  },
  {
    title: "Dirty Soda Bar",
    description:
      "Bring the legendary soda bar to your event — custom flavors, cream, syrups, and candy rims included.",
    href: "/services/catering-services",
    tag: "Signature experience",
    accent: "cyan",
  },
];
