import Link from 'next/link';
import FadeIn from './FadeIn';
import { PHONE_NUMBER_DISPLAY, PHONE_NUMBER_LINK, WHATSAPP_NUMBER_DISPLAY } from '../lib/contact';

const navigation = [
  { label: 'Offer', href: '#offer' },
  { label: 'Services', href: '#services' },
  { label: 'Areas', href: '#areas' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact', href: '#contact' }
];

const policies = [
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Cookie Policy', href: '/cookies' }
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <FadeIn className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-400">Prime Coat London</p>
            <p className="mt-4 text-base text-slate-300">
              Painting & decorating specialists keeping London projects on schedule with meticulous prep, dust-free systems, and proactive communication.
            </p>
            <div className="mt-6 space-y-2 text-sm text-slate-300">
              <p>📍 Belgravia, SW1 — mobile crews city-wide</p>
              <p>
                📞{' '}
                <a href={`tel:${PHONE_NUMBER_LINK}`} className="underline decoration-slate-500 underline-offset-4">
                  {PHONE_NUMBER_DISPLAY}
                </a>
              </p>
              <p>💬 WhatsApp: {WHATSAPP_NUMBER_DISPLAY}</p>
              <p>
                ✉️{' '}
                <a href="mailto:hello@primecoatlondon.co.uk" className="underline decoration-slate-500 underline-offset-4">
                  hello@primecoatlondon.co.uk
                </a>
              </p>
              <p>VAT: GB123456789 • Company No. 09876543</p>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Menu</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
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
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Legal & Ads</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {policies.map((policy) => (
                  <li key={policy.href}>
                    <Link href={policy.href} className="transition hover:text-white">
                      {policy.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <span className="text-slate-400">Public Liability Insurance:</span> £5m cover
                </li>
                <li>
                  <span className="text-slate-400">Ad disclosures:</span> All testimonials verified; materials supplied at trade pricing.
                </li>
                <li>
                  <Link href="/about" className="transition hover:text-white">
                    Meet the team
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </FadeIn>
        <FadeIn className="mt-10 flex flex-col gap-4 border-t border-slate-800 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Prime Coat London. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.3em] text-slate-400">
            <span>DBS-checked crews</span>
            <span>CIS registered</span>
            <span>Waste carriers licence</span>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
