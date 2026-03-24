import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, siteContent } from "@/data/site";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return siteContent.projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.name} | ${siteContent.name}`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <Link className="anchor-link text-sm" href="/#projects">
            Back to projects
          </Link>
        </div>

        <article className="border-t border-white/10 pt-8">
          <div className="grid gap-4">
            {project.images.map((image, index) => (
              <div key={image.src} className={`${index === 1 ? "max-w-3xl" : ""} overflow-hidden border border-white/10 bg-black/30`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1600}
                  height={1000}
                  className="h-auto w-full object-contain"
                />
              </div>
            ))}
          </div>

          <div className="pt-8">
            <p className="eyebrow">Project Detail</p>
            <h1 className="mt-4 text-[clamp(2.2rem,5vw,4rem)] leading-[0.96] font-semibold tracking-[-0.05em] text-white">
              {project.name}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-[color:var(--color-text-muted)] sm:text-lg">
              {project.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-5 text-sm font-semibold">
              {project.github ? (
                <a
                  className="anchor-link w-fit text-white"
                  href={project.github.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.github.label}
                </a>
              ) : null}
              {project.demo ? (
                <a
                  className="anchor-link w-fit text-white"
                  href={project.demo.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.demo.label}
                </a>
              ) : null}
            </div>

            <div className="section-divider my-8" />

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(260px,0.75fr)]">
              <div>
                <h2 className="text-2xl font-semibold text-white">{project.detailTitle}</h2>
                <p className="mt-4 text-sm leading-8 text-[color:var(--color-text-muted)] sm:text-base">
                  {project.caseStudy}
                </p>
                <ul className="mt-6 grid gap-3">
                  {project.detailPoints.map((point) => (
                    <li key={point} className="border-l border-[color:var(--color-accent)]/50 pl-4 text-sm leading-7 text-[color:var(--color-text-muted)]">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <aside className="border-t border-white/10 pt-4 lg:border-t-0 lg:border-l lg:pl-6">
                <p className="eyebrow">Tags / Stack</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="border border-white/10 px-3 py-1 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-[color:var(--color-text-strong)]"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm leading-7 text-[color:var(--color-text-muted)]">
                  Expand this page later by adding architecture notes, screenshots, implementation details, or lessons learned in{" "}
                  <code>data/site.ts</code>.
                </p>
              </aside>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
