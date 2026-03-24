type FooterProps = {
  footerText: string;
};

export function Footer({ footerText }: FooterProps) {
  return (
    <footer className="border-t border-white/8 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 text-sm text-[color:var(--color-text-muted)] sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>{footerText}</p>
        <a className="anchor-link w-fit" href="#hero">
          Back to top
        </a>
      </div>
    </footer>
  );
}
