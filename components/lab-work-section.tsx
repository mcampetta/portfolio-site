import { LightboxImage } from "@/components/lightbox-image";
import { SectionShell } from "@/components/section-shell";
import type { LabWorkItem } from "@/data/site";

type LabWorkSectionProps = {
  items: readonly LabWorkItem[];
};

export function LabWorkSection({ items }: LabWorkSectionProps) {
  return (
    <SectionShell
      id="lab-work"
      eyebrow="Lab / Recovery Highlights"
      title="Bench-level work behind the software"
      compactTop
    >
      <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-10 xl:gap-y-14">
        {items.map((item) => (
          <article key={item.title} className="border-t border-white/10 pt-8">
            <LightboxImage
              src={item.image}
              alt={item.imageAlt}
              width={1200}
              height={900}
              frameClassName="aspect-[4/3] overflow-hidden border border-white/10 bg-black"
              imageClassName="h-full w-full object-cover object-center"
            />
            <div className="mt-5 max-w-xl">
              <h3 className="text-[1.3rem] leading-tight font-semibold tracking-[-0.04em] text-white">{item.title}</h3>
              <p className="mt-2 text-[1rem] leading-8 text-[color:var(--color-text-muted)]">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
