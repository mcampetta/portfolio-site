import { SectionShell } from "@/components/section-shell";

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string;
  detailPoints: readonly string[];
};

type ExperienceSectionProps = {
  items: readonly ExperienceItem[];
};

export function ExperienceSection({ items }: ExperienceSectionProps) {
  return (
    <SectionShell
      id="experience"
      eyebrow="Experience"
      title="Experience summary"
      copy="A short view of the environments and responsibilities behind the work shown above."
    >
      <div className="max-w-7xl border-t border-white/10">
        {items.map((item) => (
          <article key={`${item.company}-${item.role}`} className="grid gap-6 border-b border-white/10 py-10 lg:grid-cols-[minmax(220px,0.45fr)_minmax(0,1.55fr)] lg:gap-10">
            <div className="space-y-3">
              <div>
                <h3 className="text-xl font-semibold text-white sm:text-[1.35rem]">{item.role}</h3>
                <p className="mt-1 text-sm uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]">
                  {item.company}
                </p>
              </div>
              <p className="font-mono text-xs tracking-[0.16em] text-[color:var(--color-accent)] uppercase">
                {item.period}
              </p>
            </div>
            <div>
              <p className="text-base leading-8 text-[color:var(--color-text-muted)]">{item.description}</p>
              <ul className="mt-5 grid gap-3">
                {item.detailPoints.slice(0, 2).map((point) => (
                  <li key={point} className="border-l border-[color:var(--color-accent)]/50 pl-4 text-base leading-8 text-[color:var(--color-text-muted)]">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
