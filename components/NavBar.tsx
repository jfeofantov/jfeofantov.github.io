'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const navLinks = [
  { href: '#offer', label: 'Offer' },
  { href: '#services', label: 'Services' },
  { href: '#areas', label: 'Areas' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#contact', label: 'Contact' }
];

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMobileMenuOpen || typeof document === 'undefined') return;
    const preventScroll = () => {
      document.body.style.overflow = 'hidden';
    };
    const restoreScroll = () => {
      document.body.style.overflow = '';
    };
    preventScroll();
    return restoreScroll;
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen || typeof window === 'undefined') return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 bg-brand text-white shadow-[0_1px_0_0_rgba(15,23,42,0.15)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-3 sm:gap-4 sm:px-6 lg:gap-8 lg:px-0 min-w-0">
        <Link href="/" className="inline-flex items-center gap-2">
          <Image
              src="/logo-reade.png"
              alt="Prime Coat London logo"
              width={40}
              height={40}
              sizes="40px"
              className="h-[40px] w-auto filter brightness-0 invert"
              priority
            />
          </Link>
        <nav aria-label="Primary" className="hidden items-center gap-1 text-sm font-semibold text-white/80 sm:flex min-w-0">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs uppercase tracking-[0.22em] text-white/80 transition hover:text-white hover:bg-white/10"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-3 py-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-slate-900 transition hover:bg-slate-100 shadow-[0_12px_30px_-18px_rgba(15,23,42,0.3)] sm:px-4 sm:py-2 sm:text-xs"
          >
            Free estimate
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand sm:hidden"
            aria-label="Open navigation menu"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="h-5 w-5" aria-hidden />
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col">
          <div className="absolute inset-0 bg-slate-900/60" onClick={closeMenu} />
          <div className="relative z-10 h-full w-full bg-brand p-6">
            <div className="flex items-center justify-between">
              <Link href="/" className="inline-flex items-center gap-2" onClick={closeMenu}>
                <Image
                  src="/logo-reade.png"
                  alt="Prime Coat London logo"
                  width={40}
                  height={40}
                  sizes="40px"
                  className="h-[40px] w-auto filter brightness-0 invert"
                  priority
                />
              </Link>
              <button
                type="button"
                onClick={closeMenu}
                className="rounded-full p-1 text-white/80 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand"
                aria-label="Close navigation menu"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>
            <nav aria-label="Mobile primary" className="mt-8 space-y-4 text-sm font-semibold">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="block rounded-2xl px-4 py-3 text-white/80 uppercase tracking-[0.35em] transition hover:text-white hover:bg-white/10"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-10">
              <a
                href="#contact"
                onClick={closeMenu}
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white transition hover:border-white hover:bg-white/10"
              >
                Free estimate
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
