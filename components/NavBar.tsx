'use client';

import Link from 'next/link';
import { Menu, PaintRoller, PhoneCall, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const navLinks = [
  { label: 'Why Us', href: '#why-us' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Areas', href: '#areas' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '#final-cta' }
];

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const sectionIds = navLinks.filter((link) => link.href.startsWith('#')).map((link) => link.href.replace('#', ''));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href?: string) => {
    if (href && href.startsWith('#')) {
      setActiveSection(href);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${isScrolled ? 'bg-white/90 shadow-subtle backdrop-blur' : 'bg-white/70 backdrop-blur lg:bg-transparent'}`}>
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
            <PaintRoller className="h-6 w-6" aria-hidden />
          </span>
          <div className="leading-tight">
            <p className="text-base font-black uppercase tracking-[0.1em] text-slate-900">PRIME COAT LONDON </p>

          </div>
        </Link>
        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/447700123456?text=Hi%20Prime%20Coat%20London,%20I%E2%80%99d%20like%20a%20quote."
            className="rounded-full bg-[#F38B3E] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:opacity-90"
            target="_blank"
            rel="noreferrer"
          >
            Get Free Quote
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 text-slate-900 transition hover:border-slate-900"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
        </div>
      </div>
      <div className="hidden border-t border-white/60 bg-white/80 px-4 py-2 lg:block">
        <div className="mx-auto flex max-w-6xl items-center gap-6">
          {navLinks.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-semibold transition ${isActive ? 'text-[#C0583A]' : 'text-slate-600 hover:text-slate-900'}`}
                onClick={() => handleNavClick(item.href)}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
      {isMenuOpen ? (
        <div className="px-4 pb-6 sm:px-6 lg:hidden">
          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-subtle">
            <nav className="flex flex-col gap-3" aria-label="Mobile navigation">
              {navLinks.map((item, index) => {
                const isActive = activeSection === item.href;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`rounded-2xl px-3 py-2 text-base font-semibold transition ${
                      isActive ? 'bg-slate-100 text-[#0B2545]' : 'text-slate-700 hover:bg-slate-50'
                    }`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                    onClick={() => handleNavClick(item.href)}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
            <div className="mt-5 flex flex-col gap-3">
              <a
                href="tel:+442036950210"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-900"
                onClick={() => handleNavClick()}
              >
                <PhoneCall className="h-4 w-4" aria-hidden />
                Call Now
              </a>
              <a
                href="https://wa.me/447700123456?text=Hi%20Prime%20Coat%20London,%20I%E2%80%99d%20like%20a%20quote."
                className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
                target="_blank"
                rel="noreferrer"
                onClick={() => handleNavClick()}
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
