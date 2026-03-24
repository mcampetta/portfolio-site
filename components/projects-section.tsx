"use client";

import Link from "next/link";
import { useState } from "react";
import { LightboxImage } from "@/components/lightbox-image";
import { SectionShell } from "@/components/section-shell";
import type { FeaturedProject } from "@/data/site";

type ProjectsSectionProps = {
  items: readonly FeaturedProject[];
  githubCta: {
    title: string;
    copy: string;
    href: string;
    label: string;
  };
};

export function ProjectsSection({ items, githubCta }: ProjectsSectionProps) {
  const [activeSlug, setActiveSlug] = useState(items[0]?.slug ?? "");
  const activeProject = items.find((item) => item.slug === activeSlug) ?? items[0];

  if (!activeProject) {
    return null;
  }

  return (
    <SectionShell
      id="projects"
      eyebrow="Selected Projects"
      title="Featured software work"
      copy="A guided view of the main software projects, with one focused panel instead of multiple wide rows."
      compactTop
    >
      <div className="border-t border-white/10 pt-8">
        <div className="flex flex-wrap gap-3">
          {items.map((item) => {
            const isActive = item.slug === activeProject.slug;

            return (
              <button
                key={item.slug}
                type="button"
                onClick={() => setActiveSlug(item.slug)}
                className={`border px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "border-[color:var(--color-accent)] bg-[color:var(--color-accent-soft)] text-white"
                    : "border-white/10 text-[color:var(--color-text-muted)] hover:border-white/25 hover:text-white"
                }`}
              >
                {item.name}
              </button>
            );
          })}
        </div>

        <article className="mt-8 border border-white/10 bg-[rgba(10,14,18,0.78)] p-5 sm:p-6 lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.28fr)_minmax(320px,0.72fr)] lg:items-start lg:gap-10">
            <LightboxImage
              src={activeProject.images[0].src}
              alt={activeProject.images[0].alt}
              width={1600}
              height={1000}
              frameClassName="aspect-[16/10] overflow-hidden border border-white/10 bg-black"
              imageClassName="h-full w-full object-contain"
            />
            <div className="flex flex-col justify-between gap-6">
              <div>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-[1.7rem] leading-tight font-semibold tracking-[-0.04em] text-white">
                    {activeProject.name}
                  </h3>
                  <Link
                    className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-[color:var(--color-accent)] transition hover:text-white"
                    href={`/projects/${activeProject.slug}`}
                  >
                    Case Study
                  </Link>
                </div>

                <p className="mt-4 text-base leading-8 text-[color:var(--color-text-muted)]">
                  {activeProject.summary}
                </p>
                <p className="mt-4 text-[0.98rem] leading-8 text-[color:var(--color-text-muted)]">
                  {activeProject.caseStudy}
                </p>

                <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-1">
                  {activeProject.tags.map((tag) => (
                    <li
                      key={tag}
                      className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-[color:var(--color-text-strong)]"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-5 text-sm font-semibold">
                {activeProject.github ? (
                  <a className="anchor-link w-fit text-white" href={activeProject.github.href} target="_blank" rel="noreferrer">
                    {activeProject.github.label}
                  </a>
                ) : null}
                {activeProject.demo ? (
                  <a className="anchor-link w-fit text-white" href={activeProject.demo.href} target="_blank" rel="noreferrer">
                    {activeProject.demo.label}
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </article>
      </div>

      <aside className="mt-12 border-t border-white/10 pt-10">
        <p className="eyebrow">{githubCta.title}</p>
        <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-4xl text-base leading-8 text-[color:var(--color-text-muted)]">
            {githubCta.copy}
          </p>
          <a
            className="anchor-link w-fit text-base font-semibold text-white"
            href={githubCta.href}
            target="_blank"
            rel="noreferrer"
          >
            {githubCta.label}
          </a>
        </div>
      </aside>
    </SectionShell>
  );
}
