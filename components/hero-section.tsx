import Image from "next/image";
import { siteContent } from "@/data/site";

type HeroSectionProps = {
  content: typeof siteContent;
};

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section id="hero" className="relative min-h-[clamp(38rem,46vw,50rem)] overflow-hidden px-5 pb-12 pt-20 sm:px-6 sm:pb-16 sm:pt-24 lg:px-8 lg:pt-32">
      <div className="absolute inset-0">
        <Image
          src={content.heroBackgroundImage}
          alt=""
          fill
          priority
          aria-hidden="true"
          className="hero-background-image object-cover object-right opacity-58"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,10,13,0.66)_0%,rgba(7,10,13,0.3)_38%,rgba(7,10,13,0.04)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,13,0.01)_0%,rgba(7,10,13,0.18)_52%,rgba(7,10,13,0.44)_74%,rgba(7,10,13,0.72)_88%,rgba(7,10,13,0.9)_100%)]" />

      <div className="relative mx-auto max-w-[104rem]">
        <div className="fade-up max-w-5xl">
          <p className="eyebrow mb-6">{content.heroLabel}</p>
          <h1 className="max-w-5xl text-[clamp(3.4rem,7vw,7rem)] leading-[0.9] font-semibold tracking-[-0.065em] text-white">
            {content.name}
          </h1>
          <p className="mt-6 max-w-4xl text-[clamp(1.15rem,2vw,1.55rem)] leading-relaxed text-[color:var(--color-text-strong)]">
            {content.headline}
          </p>
          <p className="mt-8 max-w-4xl text-lg leading-9 text-[color:var(--color-text-muted)]">
            {content.intro}
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              className="inline-flex items-center justify-center border border-[color:var(--color-accent)] bg-[color:var(--color-accent)] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-105"
              href={content.contact.resumeHref}
            >
              Download Resume
            </a>
            <a
              className="inline-flex items-center justify-center border border-[color:var(--color-border-strong)] px-6 py-3 text-sm font-semibold text-white transition hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)]"
              href="#contact"
            >
              Contact
            </a>
          </div>
        </div>
        {content.heroHighlights.length > 1 ? (
          <ul className="fade-up mt-14 grid max-w-7xl gap-6 border-t border-white/10 pt-8 text-base leading-8 text-[color:var(--color-text-muted)] [animation-delay:160ms] lg:grid-cols-3">
            {content.heroHighlights.map((item) => (
              <li key={item} className="border-l border-white/10 pl-5">
                {item}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
