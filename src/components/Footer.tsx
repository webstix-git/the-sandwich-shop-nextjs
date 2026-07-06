import Image from "next/image";
import Link from "next/link";
import { FOOTER_LEGAL_LINKS, FOOTER_MENU_LINKS, FOOTER_QUICK_LINKS } from "@/lib/navigation";
import { HOURS, SITE } from "@/lib/constants";
import {
  FacebookIcon,
  InstagramIcon,
  MapPinIcon,
  PhoneIcon,
  MailIcon,
} from "./icons";

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-5 text-[13px] font-extrabold uppercase tracking-[1.6px] text-white">
      {children}
    </h3>
  );
}

function FooterLinkList({
  links,
}: {
  links: readonly { href: string; label: string }[];
}) {
  return (
    <ul className="flex flex-col gap-2.5">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="text-[15px] text-brand-footer-link transition-colors duration-200 hover:text-white"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function Footer() {
  return (
    <footer
      id="visit"
      className="relative bg-brand-footer px-7 pb-8 pt-14 text-brand-footer-text md:pt-[72px]"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-gold/35 to-transparent"
        aria-hidden
      />

      <div className="mx-auto max-w-[1240px]">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-8">
          <div className="sm:col-span-2 lg:col-span-3 xl:col-span-1">
            <Link href="/" className="mb-6 inline-block shrink-0">
              <Image
                src="/images/logo.png"
                alt="The Sandwich Shop & Dirty Soda Bar logo"
                width={130}
                height={130}
                className="h-[130px] w-[130px] rounded-full border-0 object-cover shadow-[0_6px_18px_rgba(237,78,141,0.28)]"
              />
            </Link>
            <p className="mb-6 max-w-[280px] text-[15px] leading-relaxed text-brand-footer-muted">
              {SITE.description}
            </p>
            <div className="flex gap-2.5">
              <Link
                href={SITE.facebookHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-all duration-200 hover:border-brand-pink/50 hover:bg-brand-pink"
              >
                <FacebookIcon size={17} className="text-white" />
              </Link>
              <Link
                href={SITE.instagramHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-all duration-200 hover:border-brand-pink/50 hover:bg-brand-pink"
              >
                <InstagramIcon size={17} className="text-white" />
              </Link>
            </div>
          </div>

          <div>
            <FooterHeading>Quick Links</FooterHeading>
            <FooterLinkList links={FOOTER_QUICK_LINKS} />
          </div>

          <div>
            <FooterHeading>Our Menu</FooterHeading>
            <FooterLinkList links={FOOTER_MENU_LINKS} />
          </div>

          <div>
            <FooterHeading>Hours</FooterHeading>
            <div className="space-y-3">
              {HOURS.map((row) => (
                <div key={row.day} className="text-[14px] leading-snug">
                  <span className="block whitespace-nowrap text-brand-footer-muted">
                    {row.day}
                  </span>
                  <span className="mt-0.5 block whitespace-nowrap font-medium text-brand-footer-text">
                    {row.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="sm:col-span-2 lg:col-span-1 xl:col-span-1">
            <FooterHeading>Visit Us</FooterHeading>
            <div className="space-y-4">
              <Link
                href={SITE.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-3"
              >
                <MapPinIcon
                  size={18}
                  className="mt-0.5 shrink-0 text-white"
                />
                <span className="text-[15px] leading-relaxed text-brand-footer-link transition-colors group-hover:text-white">
                  {SITE.address}
                  <br />
                  {SITE.city}
                </span>
              </Link>
              <Link href={SITE.phoneHref} className="group flex gap-3">
                <PhoneIcon
                  size={18}
                  className="mt-0.5 shrink-0 text-white"
                />
                <span className="text-[15px] text-brand-footer-link transition-colors group-hover:text-white">
                  {SITE.phone}
                </span>
              </Link>
              <Link
                href={SITE.emailHref}
                className="group flex gap-3"
              >
                <MailIcon
                  size={18}
                  className="mt-0.5 shrink-0 text-white"
                />
                <span className="break-all text-[15px] text-brand-footer-link transition-colors group-hover:text-white">
                  {SITE.email}
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-center text-sm text-brand-footer-copyright sm:text-left">
            © 2026 {SITE.name}. All rights reserved.
          </span>
          <nav
            aria-label="Legal and resources"
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:justify-end"
          >
            {FOOTER_LEGAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-brand-footer-link transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
