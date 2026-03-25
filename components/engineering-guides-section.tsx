import { SectionShell } from "@/components/section-shell";
import { VideoEmbed } from "@/components/video-embed";
import type { VideoFeature } from "@/data/site";

type EngineeringGuideSectionProps = {
  item: VideoFeature & {
    moreLabel?: string;
  };
};

export function EngineeringGuidesSection({ item }: EngineeringGuideSectionProps) {
  return (
    <SectionShell
      id="engineering-guides"
      eyebrow="Engineering Notes & Guides"
      title="Practical troubleshooting guidance"
      compactTop
    >
      <div className="border-t border-white/10 pt-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:items-start lg:gap-12">
          <div className="max-w-xl">
            <h3 className="text-[1.45rem] leading-tight font-semibold tracking-[-0.04em] text-white">{item.title}</h3>
            <p className="mt-4 text-base leading-8 text-[color:var(--color-text-muted)]">{item.description}</p>
            {item.moreLabel ? (
              <a
                className="anchor-link mt-6 inline-flex w-fit text-base font-semibold text-white"
                href={item.youtubeUrl}
                target="_blank"
                rel="noreferrer"
              >
                {item.moreLabel}
              </a>
            ) : null}
          </div>
          <VideoEmbed title={item.title} embedId={item.embedId} />
        </div>
      </div>
    </SectionShell>
  );
}
