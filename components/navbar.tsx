type NavItem = {
  label: string;
  href: string;
};

type NavbarProps = {
  items: readonly NavItem[];
  name: string;
};

export function Navbar({ items, name }: NavbarProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-[rgba(7,10,13,0.88)] backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 sm:px-6 lg:px-8">
        <a className="text-sm font-semibold tracking-[0.22em] text-white uppercase" href="#hero">
          {name}
        </a>
        <nav aria-label="Primary">
          <ul className="flex flex-wrap items-center justify-end gap-4 text-sm sm:gap-6">
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
    </header>
  );
}
