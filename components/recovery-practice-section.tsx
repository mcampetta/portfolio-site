import { SectionShell } from "@/components/section-shell";
import { VideoEmbed } from "@/components/video-embed";
import type { VideoFeature } from "@/data/site";

type RecoveryPracticeSectionProps = {
  items: readonly VideoFeature[];
};

export function RecoveryPracticeSection({ items }: RecoveryPracticeSectionProps) {
  return (
    <SectionShell
      id="recovery-practice"
      eyebrow="Selected Recovery Work in Practice"
      title="Recovery work shown in context"
      copy="These videos are included as supporting proof of work. They show real recovery conditions, environments, and the practical constraints involved in difficult cases."
      compactTop
    >
      <div className="space-y-14">
        {items.map((item) => (
          <article
            key={item.embedId}
            className="grid gap-8 border-t border-white/10 pt-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:items-start lg:gap-12"
          >
            <VideoEmbed title={item.title} embedId={item.embedId} />
            <div className="max-w-xl">
              <h3 className="text-[1.55rem] leading-tight font-semibold tracking-[-0.04em] text-white">{item.title}</h3>
              <p className="mt-4 text-base leading-8 text-[color:var(--color-text-muted)]">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
