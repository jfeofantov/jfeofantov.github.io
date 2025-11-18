'use client';

import Image from 'next/image';
import FadeIn from './FadeIn';

const suppliers = [
  { name: 'Farrow & Ball', file: '/brands/farrow.png' },
  { name: 'Little Greene', file: '/brands/littlegreene.png' },
  { name: 'Dulux Heritage', file: '/brands/dulux.png' },
  { name: 'Tikkurila', file: '/brands/tikkurila.png' }
];

export default function MaterialBadges() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-5 text-center">
        <FadeIn className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Preferred materials</p>
          <p className="text-base text-slate-600">
            Coatings and finishes we specify on most Prime Coat sites.
          </p>
        </FadeIn>
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-100 bg-white/90 px-6 py-5 shadow-[0_35px_95px_-60px_rgba(15,23,42,0.9)]">
          <div className="pointer-events-none absolute inset-x-10 top-0 h-1 rounded-full bg-gradient-to-r from-[#0B2545] via-[#C0583A] to-[#f97316]" aria-hidden />
          <FadeIn className="flex flex-wrap items-center justify-center gap-6">
            {suppliers.map((supplier, index) => (
              <div
                key={supplier.name}
                className="relative flex h-22 w-48 items-center justify-center rounded-2xl border border-slate-100/70 bg-white px-5 py-3 shadow-[0_35px_90px_-65px_rgba(15,23,42,0.95)] transition hover:-translate-y-0.5"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <Image
                  src={supplier.file}
                  alt={`${supplier.name} logo`}
                  width={140}
                  height={44}
                  className="h-auto max-h-12 w-auto object-contain"
                  priority={index === 0}
                />
              </div>
            ))}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
