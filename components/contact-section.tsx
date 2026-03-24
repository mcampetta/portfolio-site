import { SectionShell } from "@/components/section-shell";

type ContactProps = {
  title: string;
  copy: string;
  email: { label: string; href: string };
  linkedin: { label: string; href: string };
  github: { label: string; href: string };
  resumeHref: string;
};

export function ContactSection({ contact }: { contact: ContactProps }) {
  const links = [
    { label: "Email", value: contact.email.label, href: contact.email.href },
    { label: "LinkedIn", value: contact.linkedin.label, href: contact.linkedin.href },
    { label: "GitHub", value: contact.github.label, href: contact.github.href },
    { label: "Resume", value: "Download Resume", href: contact.resumeHref },
  ];

  return (
    <SectionShell id="contact" eyebrow="Resume / Contact" title={contact.title} copy={contact.copy}>
      <div className="max-w-6xl border-t border-white/10">
        <div className="grid gap-0 sm:grid-cols-2">
          {links.map((link) => (
            <a
              key={link.label}
              className="group border-b border-white/10 py-5 pr-6 transition hover:text-white"
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            >
              <p className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-[color:var(--color-accent)]">
                {link.label}
              </p>
              <p className="mt-2 text-lg font-semibold text-white transition group-hover:text-[color:var(--color-accent)]">
                {link.value}
              </p>
            </a>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
