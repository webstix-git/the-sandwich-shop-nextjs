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
      "We do not sell your personal information. We may share limited data with trusted service providers who help us operate our website, process communications, or deliver services, always under confidentiality obligations.",
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
      `${SITE.name} prepares its menu, guest tools, and website content so artificial intelligence can support the shop while our team stays in charge.`,
      "The sections below follow the AI Readiness Service Index: structured menu data, personal replies, staff review, current information, privacy limits, and catering that stays a conversation.",
    ],
  },
  {
    id: "menu-data",
    title: "Menu Data",
    paragraphs: [
      "Item names, prices, and descriptions follow one format so guests and assistive tools can read the menu without guessing.",
      "What is published on the menu is the same information our staff uses at the counter.",
    ],
  },
  {
    id: "guest-messages",
    title: "Guest Messages",
    paragraphs: [
      "The contact form labels every field, marks name and email as required, and sends each note to our team for a personal reply.",
      "We do not send automated answers in place of a person.",
    ],
  },
  {
    id: "content-review",
    title: "Content Review",
    paragraphs: [
      "AI-assisted drafts are checked by our staff before they go live. Menu, hours, and prices stay under human approval.",
      "Tools may help draft or lay out a page. They do not publish it.",
    ],
  },
  {
    id: "accuracy-checks",
    title: "Accuracy Checks",
    paragraphs: [
      "Published details can change. When a page and the counter disagree, the team on 3rd Street is the source of truth.",
      `Call ${SITE.phone} or visit ${SITE.address}, ${SITE.city}, for the current menu, hours, and availability.`,
    ],
  },
  {
    id: "privacy-limits",
    title: "Privacy Limits",
    paragraphs: [
      "We do not use AI to make automated decisions about guests. Information from forms is handled under our privacy policy.",
      "Personal details you send us are used to answer you, not to score or profile you.",
    ],
  },
  {
    id: "catering-inquiries",
    title: "Catering Inquiries",
    paragraphs: [
      "Event requests stay a conversation. We confirm guest count, menu, and timing with you before anything is booked.",
      "A form or message is a request. It is not a confirmed order.",
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
  { href: "/services/catering-services", label: "Catering" },
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
    title: "Menu Data",
    description:
      "Item names, prices, and descriptions follow one format so guests and assistive tools can read the menu without guessing.",
    href: "/our-menu",
    tag: "Structured content",
    accent: "pink",
  },
  {
    title: "Guest Messages",
    description:
      "The contact form labels every field, marks name and email as required, and sends each note to our team for a personal reply.",
    href: "/contact-us",
    tag: "Human reply",
    accent: "cyan",
  },
  {
    title: "Content Review",
    description:
      "AI-assisted drafts are checked by our staff before they go live. Menu, hours, and prices stay under human approval.",
    href: "/ai-policy",
    tag: "Staff oversight",
    accent: "pink",
  },
  {
    title: "Accuracy Checks",
    description:
      "Published details can change. When a page and the counter disagree, the team on 3rd Street is the source of truth.",
    href: "/ai-policy",
    tag: "Current information",
    accent: "cyan",
  },
  {
    title: "Privacy Limits",
    description:
      "We do not use AI to make automated decisions about guests. Information from forms is handled under our privacy policy.",
    href: "/privacy-policy",
    tag: "Your information",
    accent: "pink",
  },
  {
    title: "Catering Inquiries",
    description:
      "Event requests stay a conversation. We confirm guest count, menu, and timing with you before anything is booked.",
    href: "/services/catering-services",
    tag: "Events",
    accent: "cyan",
  },
];
