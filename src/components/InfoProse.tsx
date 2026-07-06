import { linkifyContactText } from "@/components/contact/ContactInfoLink";

export type InfoProseSection = {
  id: string;
  title: string;
  paragraphs?: readonly string[];
  list?: readonly string[];
};

type InfoProseProps = {
  sections: readonly InfoProseSection[];
  lastUpdated?: string;
  embedded?: boolean;
};

export function InfoProse({
  sections,
  lastUpdated,
  embedded = false,
}: InfoProseProps) {
  const content = (
    <>
      {lastUpdated ? (
        <p className="mb-6 text-sm font-medium text-brand-subtle">
          Last updated: {lastUpdated}
        </p>
      ) : null}
      <div className="space-y-10">
        {sections.map((section) => (
          <section key={section.id} id={section.id}>
            <h2 className="mb-4 text-[20px] font-semibold text-brand-dark">
              {section.title}
            </h2>
            {section.paragraphs?.map((paragraph) => (
              <p
                key={paragraph}
                className="mb-4 text-base leading-relaxed text-brand-muted last:mb-0"
              >
                {linkifyContactText(paragraph)}
              </p>
            ))}
            {section.list ? (
              <ul className="ml-5 list-disc space-y-2 text-base leading-relaxed text-brand-muted">
                {section.list.map((item) => (
                  <li key={item}>{linkifyContactText(item)}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>
    </>
  );

  if (embedded) {
    return content;
  }

  return (
    <article className="mx-auto max-w-[1180px] px-7 py-16 md:py-20">
      <div className="mx-auto max-w-[820px] rounded-3xl border border-brand-border bg-white p-8 shadow-[0_12px_30px_rgba(52,36,47,0.06)] md:p-12">
        {content}
      </div>
    </article>
  );
}
