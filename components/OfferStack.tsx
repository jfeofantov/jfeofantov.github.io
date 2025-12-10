'use client';

import { motion } from 'framer-motion';
import { BadgeCheck, CalendarClock, ClipboardCheck, ShieldCheck, Smartphone } from 'lucide-react';

const workflow = [
  {
    title: 'WhatsApp brief',
    description: 'Share photos or a short voice note. We respond within 15 minutes and assign one project lead.',
    icon: Smartphone
  },
  {
    title: 'Survey & specification',
    description: 'Moisture checks, colour planning, and a fixed-price proposal within 24 hours.',
    icon: CalendarClock
  },
  {
    title: 'Protection & painting',
    description: 'Floor-to-ceiling protection, labelled storage, and daily WhatsApp snapshots mid-shift.',
    icon: ShieldCheck
  },
  {
    title: 'Handover & aftercare',
    description: 'Snag list, warranty pack, and optional maintenance visits for landlords or property managers.',
    icon: ClipboardCheck
  }
];

export default function OfferStack() {
  return (
    <section id="offer" className="section-padding bg-white">
      <div className="mx-auto max-w-6xl">
        <div className="space-y-6 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
          <header className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">4-step process</p>
            <h3 className="text-2xl font-semibold text-slate-900 sm:text-[2.35rem]">Premium control from survey to spotless sign-off.</h3>
            <p className="text-base text-slate-600">Homeowners, landlords, and property teams all receive the same single point of contact and transparent roadmap.</p>
          </header>
          <ol className="grid gap-4 text-sm text-slate-700 md:grid-cols-2">
            {workflow.map(({ title, description, icon: Icon }, index) => (
              <motion.li
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20%' }}
                transition={{ delay: index * 0.08, duration: 0.55, ease: 'easeOut' }}
                className="flex flex-col gap-2 rounded-[1.5rem] border border-slate-200 bg-slate-50 px-5 py-5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                  <div>
                    <p className="text-[0.6rem] font-semibold uppercase tracking-[0.4em] text-slate-500">Step {index + 1}</p>
                    <p className="text-base font-semibold text-slate-900">{title}</p>
                  </div>
                </div>
                <p>{description}</p>
              </motion.li>
            ))}
          </ol>
          <div className="rounded-2xl border border-slate-200 bg-slate-900 px-5 py-5 text-sm text-white">
            <p className="flex items-center gap-2 text-base font-semibold text-white">
              <ShieldCheck className="h-5 w-5 text-blue-400" aria-hidden />
              Quality promise
            </p>
            <p className="mt-1 text-white/80">
              Daily WhatsApp reports, DBS-checked crews, and a signed warranty on workmanship covering every finish we apply.
            </p>
            <p className="mt-2 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/60">
              <BadgeCheck className="h-4 w-4 text-blue-400" aria-hidden />
              CIS · £5m insurance · Waste carriers licence
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
