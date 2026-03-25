import { SectionShell } from "@/components/section-shell";

type FocusItem = {
  title: string;
  copy: string;
};

type FocusSectionProps = {
  items: readonly FocusItem[];
};

export function FocusSection({ items }: FocusSectionProps) {
  return (
    <SectionShell
      id="focus"
      eyebrow="Technical Focus"
      title="Technical focus"
    >
      <div className="max-w-7xl grid border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4 sm:gap-x-12">
        {items.map((item) => (
          <article key={item.title} className="border-b border-white/10 py-5">
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-base leading-8 text-[color:var(--color-text-muted)]">{item.copy}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
