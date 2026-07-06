import Link from "next/link";
import type { ReactNode } from "react";
import { SITE } from "@/lib/constants";

const FULL_ADDRESS = `${SITE.address}, ${SITE.city}`;

const CONTACT_PATTERNS = [
  {
    value: FULL_ADDRESS,
    href: SITE.mapsHref,
    external: true,
  },
  {
    value: SITE.email,
    href: SITE.emailHref,
    external: false,
  },
  {
    value: SITE.phone,
    href: SITE.phoneHref,
    external: false,
  },
  {
    value: SITE.address,
    href: SITE.mapsHref,
    external: true,
  },
  {
    value: SITE.city,
    href: SITE.mapsHref,
    external: true,
  },
] as const;

const linkClassName =
  "font-medium text-inherit underline decoration-brand-pink/35 underline-offset-[3px] transition-colors hover:text-brand-pink-dark hover:decoration-brand-pink";

type ContactInfoLinkProps = {
  className?: string;
  children?: ReactNode;
};

export function AddressLink({
  className = "",
  showCity = true,
  variant = "default",
}: {
  className?: string;
  showCity?: boolean;
  variant?: "default" | "on-dark";
}) {
  const darkClass =
    variant === "on-dark"
      ? "font-semibold !text-white hover:!text-brand-pink-light decoration-white/40 underline-offset-[3px]"
      : linkClassName;

  return (
    <Link
      href={SITE.mapsHref}
      target="_blank"
      rel="noopener noreferrer"
      className={`${darkClass} ${className}`.trim()}
    >
      <span className="block font-semibold">{SITE.address}</span>
      {showCity ? <span className="block">{SITE.city}</span> : null}
    </Link>
  );
}

export function PhoneLink({
  className = "",
  variant = "default",
}: ContactInfoLinkProps & { variant?: "default" | "on-dark" }) {
  const darkClass =
    variant === "on-dark"
      ? "font-semibold !text-white hover:!text-[#fcd98a]"
      : linkClassName;

  return (
    <Link href={SITE.phoneHref} className={`${darkClass} ${className}`.trim()}>
      {SITE.phone}
    </Link>
  );
}

export function EmailLink({
  className = "",
  variant = "default",
}: ContactInfoLinkProps & { variant?: "default" | "on-dark" }) {
  const darkClass =
    variant === "on-dark"
      ? "break-all font-semibold !text-white hover:!text-[#fcd98a]"
      : `${linkClassName} break-all`;

  return (
    <Link href={SITE.emailHref} className={`${darkClass} ${className}`.trim()}>
      {SITE.email}
    </Link>
  );
}

export function ContactMethodLine({
  line,
  className = "text-[16px] font-medium leading-relaxed text-brand-dark transition-colors hover:text-brand-pink-dark",
}: {
  line: string;
  className?: string;
}) {
  if (line === SITE.phone) {
    return (
      <Link href={SITE.phoneHref} className={`block ${className}`}>
        {line}
      </Link>
    );
  }

  if (line === SITE.email) {
    return (
      <Link href={SITE.emailHref} className={`block break-all ${className}`}>
        {line}
      </Link>
    );
  }

  if (line === SITE.address || line === SITE.city || line === FULL_ADDRESS) {
    return (
      <Link
        href={SITE.mapsHref}
        target="_blank"
        rel="noopener noreferrer"
        className={`block ${className}`}
      >
        {line}
      </Link>
    );
  }

  return <p className={className}>{line}</p>;
}

export function linkifyContactText(text: string): ReactNode {
  const match = CONTACT_PATTERNS.find((pattern) => text.includes(pattern.value));

  if (!match) {
    return text;
  }

  const index = text.indexOf(match.value);
  const before = text.slice(0, index);
  const after = text.slice(index + match.value.length);

  return (
    <>
      {before}
      <Link
        href={match.href}
        target={match.external ? "_blank" : undefined}
        rel={match.external ? "noopener noreferrer" : undefined}
        className={linkClassName}
      >
        {match.value}
      </Link>
      {typeof after === "string" && after.length > 0
        ? linkifyContactText(after)
        : null}
    </>
  );
}
