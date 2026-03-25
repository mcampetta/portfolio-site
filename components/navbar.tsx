"use client";

import { useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

type NavbarProps = {
  items: readonly NavItem[];
  name: string;
};

export function Navbar({ items, name }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[rgba(7,10,13,0.94)] backdrop-blur">
      <div className="mx-auto max-w-[104rem] px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 py-4">
          <a className="text-sm font-semibold tracking-[0.22em] text-white uppercase" href="#hero" onClick={() => setIsOpen(false)}>
            {name}
          </a>

          <button
            type="button"
            className="inline-flex items-center justify-center border border-white/10 px-3 py-2 text-[0.72rem] font-mono tracking-[0.16em] text-white uppercase transition hover:border-white/25 hover:text-[color:var(--color-accent)] md:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? "Close" : "Menu"}
          </button>

          <nav className="hidden md:block" aria-label="Primary">
            <ul className="flex items-center justify-end gap-4 text-sm lg:gap-6">
              {items.map((item) => (
                <li key={item.href}>
                  <a className="anchor-link" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {isOpen ? (
          <nav id="mobile-navigation" className="border-t border-white/10 pb-4 pt-3 md:hidden" aria-label="Mobile">
            <ul className="grid gap-2">
              {items.map((item) => (
                <li key={item.href}>
                  <a
                    className="block border border-white/10 bg-[rgba(12,16,20,0.72)] px-4 py-3 text-sm text-[color:var(--color-text-strong)] transition hover:border-white/25 hover:text-white"
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
