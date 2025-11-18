'use client';

import Link from 'next/link';
import FadeIn from './FadeIn';

const navigation = [
  { label: 'Why Us', href: '#why-us' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Areas', href: '#areas' },
  { label: 'Contact', href: '#final-cta' }
];

const policies = [
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Cookie Policy', href: '/cookies' }
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-10">
        <FadeIn className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/60">Prime Coat London</p>
            <p className="mt-4 text-base text-white/80">
              Painting & decorating specialists delivering boutique finishes across Central London. Fully insured, CIS registered, and available seven days.
            </p>
            <div className="mt-6 space-y-2 text-sm text-white/80">
              <p>📍 Belgravia, SW1 — mobile crews city-wide</p>
              <p>
                📞{' '}
                <a href="tel:+442036950210" className="underline decoration-white/40 decoration-dotted underline-offset-4">
                  +44 2036 950210
                </a>
              </p>
              <p>
                ✉️{' '}
                <a href="mailto:hello@primecoatlondon.com" className="underline decoration-white/40 decoration-dotted underline-offset-4">
                  hello@primecoatlondon.com
                </a>
              </p>
              <p>VAT: GB123456789 • Company No. 09876543</p>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">Menu</p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="transition hover:text-white">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">Legal & Ads</p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {policies.map((policy) => (
                  <li key={policy.href}>
                    <Link href={policy.href} className="transition hover:text-white">
                      {policy.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <span className="text-white/70">Public Liability Insurance:</span> £5m cover
                </li>
                <li>
                  <span className="text-white/70">Ad disclosures:</span> All testimonials verified; materials supplied at trade pricing.
                </li>
              </ul>
            </div>
          </div>
        </FadeIn>
        <FadeIn className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Prime Coat London. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.3em]">
            <span>DBS-checked crews</span>
            <span>CIS registered</span>
            <span>Waste carriers licence</span>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
