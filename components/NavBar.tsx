'use client';

import Link from 'next/link';
import { Menu, PhoneCall, Sparkles, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const navLinks = [
  { label: 'Why Us', href: '#why-us' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Areas', href: '#areas' },
  { label: 'Contact', href: '#final-cta' }
];

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = () => setIsMenuOpen(false);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${isScrolled ? 'bg-white/90 shadow-subtle backdrop-blur' : 'bg-white/70 backdrop-blur lg:bg-transparent'}`}>
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white">
            <Sparkles className="h-5 w-5" aria-hidden />
          </span>
          <div className="leading-none">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Prime Coat</p>
            <p className="text-base font-semibold text-slate-900">London</p>
          </div>
        </Link>
        <nav aria-label="Primary navigation" className="hidden gap-6 lg:flex">
          {navLinks.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="tel:+442036950210"
            className="hidden rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-slate-900 hover:bg-slate-900 hover:text-white sm:inline-flex sm:items-center sm:gap-2"
          >
            <PhoneCall className="h-4 w-4" aria-hidden />
            Call
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 text-slate-900 transition hover:border-slate-900 lg:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
          <a
            href="https://wa.me/447700123456?text=Hi%20Prime%20Coat%20London,%20I%E2%80%99d%20like%20a%20quote."
            className="hidden rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-700 lg:inline-flex"
            target="_blank"
            rel="noreferrer"
          >
            Get Quote
          </a>
        </div>
      </div>
      {isMenuOpen ? (
        <div className="px-4 pb-6 sm:px-6 lg:hidden">
          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-subtle">
            <nav className="flex flex-col gap-3" aria-label="Mobile navigation">
              {navLinks.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-3 py-2 text-base font-semibold text-slate-700 transition hover:bg-slate-50"
                  style={{ transitionDelay: `${index * 50}ms` }}
                  onClick={handleNavClick}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-5 flex flex-col gap-3">
              <a
                href="tel:+442036950210"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-900"
                onClick={handleNavClick}
              >
                <PhoneCall className="h-4 w-4" aria-hidden />
                Call Now
              </a>
              <a
                href="https://wa.me/447700123456?text=Hi%20Prime%20Coat%20London,%20I%E2%80%99d%20like%20a%20quote."
                className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
                target="_blank"
                rel="noreferrer"
                onClick={handleNavClick}
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
