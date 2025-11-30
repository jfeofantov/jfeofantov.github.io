import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  { href: '#offer', label: 'Offer' },
  { href: '#services', label: 'Services' },
  { href: '#areas', label: 'Areas' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#contact', label: 'Contact' }
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-40 bg-white text-slate-900 shadow-[0_1px_0_0_rgba(15,23,42,0.08)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6 lg:gap-8 lg:px-0 min-w-0">
        <Link href="/" className="inline-flex items-center gap-2">
          <Image
            src="/logo-reade.png"
            alt="Prime Coat London logo"
            width={40}
            height={40}
            sizes="40px"
            className="h-[40px] w-auto"
            priority
          />
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-1 text-sm font-semibold text-slate-800 sm:flex min-w-0">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs uppercase tracking-[0.22em] text-slate-700 transition hover:text-slate-900 hover:bg-slate-100 hover:shadow-[0_10px_30px_-24px_rgba(15,23,42,0.25)]"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-slate-800 shadow-[0_12px_30px_-18px_rgba(15,23,42,0.6)] border border-slate-900"
          >
            Free estimate
          </a>
        </div>
      </div>
    </header>
  );
}
