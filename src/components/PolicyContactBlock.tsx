import Link from "next/link";
import { MailIcon, MapPinIcon, PhoneIcon } from "@/components/icons";
import { SITE } from "@/lib/constants";

type PolicyContactBlockProps = {
  intro?: string;
};

export function PolicyContactBlock({
  intro = "If you have questions about this Privacy Policy, please contact us at:",
}: PolicyContactBlockProps) {
  return (
    <div className="space-y-5 text-base leading-relaxed text-brand-muted">
      <p className="text-brand-muted">{intro}</p>
      <ul className="space-y-3">
        <li>
          <a
            href={SITE.emailHref}
            className="inline-flex items-center gap-2.5 !text-black transition-colors hover:!text-black"
          >
            <MailIcon size={18} className="shrink-0 text-brand-pink" />
            <span className="underline decoration-black/35 underline-offset-[3px]">
              {SITE.email}
            </span>
          </a>
        </li>
        <li>
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center gap-2.5 !text-black transition-colors hover:!text-black"
          >
            <PhoneIcon size={18} className="shrink-0 text-brand-pink" />
            <span className="underline decoration-black/35 underline-offset-[3px]">
              {SITE.phone}.
            </span>
          </a>
        </li>
      </ul>
      <p className="text-brand-muted">You may also visit us at:</p>
      <Link
        href={SITE.mapsHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-start gap-2.5 !text-black transition-colors hover:!text-black"
      >
        <MapPinIcon size={18} className="mt-0.5 shrink-0 text-brand-pink" />
        <span className="underline decoration-black/35 underline-offset-[3px]">
          {SITE.address}
          <br />
          {SITE.city}.
        </span>
      </Link>
    </div>
  );
}
