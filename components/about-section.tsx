import Image from "next/image";
import { SectionShell } from "@/components/section-shell";

type AboutSectionProps = {
  content: {
    title: string;
    headshot: string;
    copy: string;
    points: readonly string[];
  };
};

export function AboutSection({ content }: AboutSectionProps) {
  return (
    <SectionShell id="about" eyebrow="About" title={content.title} copy={content.copy}>
      <div className="max-w-6xl border-t border-white/10 pt-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_140px] lg:items-start lg:gap-12">
          <div className="grid gap-5 lg:grid-cols-3 lg:gap-10">
            {content.points.map((point) => (
              <p key={point} className="text-base leading-8 text-[color:var(--color-text-muted)]">
                {point}
              </p>
            ))}
          </div>
          <div className="hidden lg:block">
            <div className="overflow-hidden border border-white/10 bg-black">
              <Image
                src={content.headshot}
                alt="Portrait of Martin Campetta"
                width={1024}
                height={1536}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
