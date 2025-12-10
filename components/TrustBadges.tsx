'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles, Star } from 'lucide-react';

const logos = [
  { src: '/brands/dulux.png', alt: 'Dulux logo' },
  { src: '/brands/farrow.png', alt: 'Farrow & Ball logo' },
  { src: '/brands/littlegreene.png', alt: 'Little Greene logo' },
  { src: '/brands/tikkurila.png', alt: 'Tikkurila logo' }
];

const trustStats = [
  {
    label: 'Warranty on workmanship',
    value: '5 years',
    icon: ShieldCheck
  },
  {
    label: 'Client satisfaction',
    value: '5.0 ★',
    icon: Star
  },
  {
    label: 'Dust-free prep + handovers',
    value: 'Daily checks',
    icon: Sparkles
  }
];

export default function TrustBadges() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="flex flex-col gap-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">Trusted by leading finishes</p>
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Specified by designers, asset managers, and hosts.</h2>
          <p className="text-base text-slate-600">Premium materials, insured crews, and transparent communication keep every project calm.</p>
        </div>
        <div className="grid gap-6 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 shadow-sm lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">Specified materials</p>
            <div className="grid gap-4 sm:grid-cols-4">
              {logos.map((logo, index) => (
                <motion.div
                  key={logo.src}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20%' }}
                  transition={{ delay: index * 0.05, ease: 'easeOut', duration: 0.6 }}
                  className="flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-2 py-4 shadow-sm"
                >
                  <Image src={logo.src} alt={logo.alt} width={120} height={48} className="h-8 w-auto" />
                </motion.div>
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            {trustStats.map(({ label, value, icon: Icon }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20%' }}
                transition={{ delay: 0.1 * (index + 1), duration: 0.6, ease: 'easeOut' }}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="text-2xl font-semibold text-slate-900">{value}</p>
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-500">{label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
