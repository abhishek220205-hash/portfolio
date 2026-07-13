'use client';

import Link from 'next/link';
import { useState } from 'react';

const links = [
  { href: '/#about', label: 'About' },
  { href: '/#work', label: 'Work' },
  { href: '/#capabilities', label: 'Capabilities' },
  { href: '/#contact', label: 'Contact' },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur border-b border-line">
      <div className="max-w-content mx-auto px-6 md:px-10 flex items-center justify-between h-16">
        <Link
          href="/"
          className="font-display font-semibold tracking-tight text-lg"
          onClick={() => setOpen(false)}
        >
          Abhishek Kumar
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="eyebrow hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="md:hidden eyebrow border border-line rounded px-3 py-1.5"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Primary mobile"
          className="md:hidden border-t border-line px-6 py-4 flex flex-col gap-4 bg-paper"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="eyebrow"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
