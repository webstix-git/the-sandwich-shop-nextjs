import { SITE } from "@/lib/constants";

export const CONTACT_INTRO = {
  primaryImage: "/images/about-intro-storefront.png",
  primaryImageAlt: "The Sandwich Shop storefront on 3rd Street in downtown La Crosse",
  description:
    "411 3rd Street in downtown La Crosse. Stop in, call ahead, or reach out about catering for your next event.",
} as const;

export const CONTACT_METHODS_SECTION = {
  eyebrow: "Get in touch",
  title: "We're easy",
  highlight: "to find.",
  description:
    "411 3rd Street, right downtown. Dine in, grab takeout, or ask about catering for your next event.",
} as const;

export const CONTACT_METHODS = [
  {
    title: "Visit us",
    highlight: "downtown",
    description: "Pull up a chair or grab carry out. We're on 3rd Street in the heart of La Crosse.",
    lines: [SITE.address, SITE.city],
    action: {
      label: "Get directions",
      href: SITE.mapsHref,
      external: true,
    },
    accent: "gold" as const,
  },
  {
    title: "Call",
    highlight: "ahead",
    description: "Phone in your order or ask a question. We're happy to help.",
    lines: [SITE.phone],
    action: { label: "Call now", href: SITE.phoneHref, external: false },
    accent: "cyan" as const,
  },
  {
    title: "Email",
    highlight: "us",
    description: "Catering inquiries, feedback, or general questions. We reply within 24 hours.",
    lines: [SITE.email],
    action: {
      label: "Send a message",
      href: "/contact-us#send-message",
      external: false,
    },
    accent: "pink" as const,
  },
] as const;

export const CONTACT_HOURS_SECTION = {
  eyebrow: "Hours",
  title: "When to",
  highlight: "stop by.",
  note: "Closed Sunday and Monday. Open Tuesday through Saturday for lunch and dinner.",
} as const;

export const CONTACT_FORM_SECTION = {
  eyebrow: "Send a message",
  title: "We'd love to",
  highlight: "hear from you.",
  description:
    "Questions about the menu, catering, or a large order? Drop us a line and we'll get back to you soon.",
  submitLabel: "Send message",
} as const;

export const CONTACT_MAP_CTA = {
  badge: "Find us",
  title: "Right in the heart of",
  titleAccent: "Downtown La Crosse.",
  description:
    "Street parking and downtown foot traffic make us an easy stop for lunch, a dirty soda run, or dinner to go.",
  backgroundImage: "/images/about-cta-signs-bg.png",
  directionsLabel: "Open in Google Maps",
  directionsHref: SITE.mapsHref,
} as const;
