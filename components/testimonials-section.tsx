import Image from "next/image";
import { SectionShell } from "@/components/section-shell";
import type { Testimonial } from "@/data/site";

type TestimonialsSectionProps = {
  items: readonly Testimonial[];
};

export function TestimonialsSection({ items }: TestimonialsSectionProps) {
  return (
    <SectionShell
      id="testimonials"
      eyebrow="Testimonials"
      title="Professional endorsements"
      copy="A short set of references from people who worked closely with me in technical environments."
      compactTop
    >
      <div className="max-w-7xl grid gap-8 border-t border-white/10 pt-8 lg:grid-cols-2 lg:gap-10">
        {items.map((item) => (
          <article key={item.author} className="border-b border-white/10 pb-8">
            <blockquote className="text-[1.02rem] leading-8 text-[color:var(--color-text-muted)]">
              “{item.quote}”
            </blockquote>
            <div className="mt-6 flex items-center gap-4">
              <div className="relative h-14 w-14 overflow-hidden border border-white/10 bg-black">
                <Image src={item.image} alt={item.author} fill className="object-cover" />
              </div>
              <div>
                <p className="text-base font-semibold text-white">{item.author}</p>
                {item.link ? (
                  <a
                    className="anchor-link text-sm text-[color:var(--color-text-muted)]"
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.roleOrCompany}
                  </a>
                ) : (
                  <p className="text-sm text-[color:var(--color-text-muted)]">{item.roleOrCompany}</p>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
