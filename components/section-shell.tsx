type SectionShellProps = {
  id: string;
  eyebrow: string;
  title: string;
  copy?: string;
  compactTop?: boolean;
  children: React.ReactNode;
};

export function SectionShell({ id, eyebrow, title, copy, compactTop = false, children }: SectionShellProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`scroll-mt-24 px-5 pb-10 sm:px-6 sm:pb-14 lg:px-8 ${compactTop ? "pt-2 sm:pt-4" : "pt-10 sm:pt-14"}`}
    >
      <div className="mx-auto max-w-[104rem]">
        <div className="section-divider mb-5 sm:mb-7" />
        <div className="fade-up max-w-4xl space-y-4">
          <p className="eyebrow">{eyebrow}</p>
          <h2 id={`${id}-title`} className="section-title">
            {title}
          </h2>
          {copy ? <p className="section-copy">{copy}</p> : null}
        </div>
        <div className="fade-up mt-5 [animation-delay:120ms]">{children}</div>
      </div>
    </section>
  );
}
