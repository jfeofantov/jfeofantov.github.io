'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Menu, MessageCircle, Phone, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { buildWhatsAppLink, PHONE_NUMBER_DISPLAY, PHONE_NUMBER_LINK } from '../lib/contact';

const navLinks = [
  { href: '#offer', label: 'Process' },
  { href: '#services', label: 'Services' },
  { href: '#areas', label: 'Areas' },
  { href: '#boroughs', label: 'Boroughs' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#contact', label: 'Contact' }
];

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const whatsappLink = buildWhatsAppLink('Hi Prime Coat London, can we discuss my property in London?');

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
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/90 text-slate-900 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-3 text-left">
          <Image src="/logo-reade.png" alt="Prime Coat London logo" width={40} height={40} sizes="40px" className="h-10 w-auto" priority />
          <div className="hidden sm:block">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Prime Coat</p>
            <p className="text-sm font-semibold text-slate-900">London decorators</p>
          </div>
        </Link>
        <nav aria-label="Primary" className="hidden flex-1 items-center justify-center gap-1 text-sm font-medium text-slate-600 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-flex items-center gap-1 rounded-full px-3 py-1.5 transition hover:bg-slate-100 hover:text-slate-900"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white shadow-sm transition hover:bg-blue-700"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            WhatsApp
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 px-3 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-800 transition hover:border-slate-300"
          >
            Form
          </a>
          <a
            href={`tel:${PHONE_NUMBER_LINK}`}
            className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-500"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {PHONE_NUMBER_DISPLAY}
          </a>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:bg-slate-100"
            aria-label="Open navigation menu"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="h-5 w-5" aria-hidden />
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col">
          <div className="absolute inset-0 bg-slate-900/70" onClick={closeMenu} />
          <div className="relative z-10 h-full w-full bg-white px-5 py-6">
            <div className="flex items-center justify-between">
              <Link href="/" className="inline-flex items-center gap-2" onClick={closeMenu}>
                <Image src="/logo-reade.png" alt="Prime Coat London logo" width={40} height={40} sizes="40px" className="h-10 w-auto" priority />
              </Link>
              <button
                type="button"
                onClick={closeMenu}
                className="rounded-full p-1 text-slate-500 transition hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/30"
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
                  className="block rounded-2xl border border-slate-200 px-4 py-3 text-slate-700 uppercase tracking-[0.35em] transition hover:bg-slate-50 hover:text-slate-900"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-10 space-y-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-4 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white transition hover:bg-blue-700"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                WhatsApp us
              </a>
              <a
                href="#contact"
                onClick={closeMenu}
                className="inline-flex w-full items-center justify-center rounded-full border border-slate-200 px-4 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-slate-900"
              >
                Form
              </a>
              <a
                href={`tel:${PHONE_NUMBER_LINK}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-slate-500"
              >
                <Phone className="h-4 w-4" aria-hidden />
                {PHONE_NUMBER_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
