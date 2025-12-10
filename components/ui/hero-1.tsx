'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, MessageCircle, ShieldCheck, Timer } from 'lucide-react';
import { PHONE_NUMBER_DISPLAY, PHONE_NUMBER_LINK, buildWhatsAppLink } from '../../lib/contact';
import WhatsAppForm from '../WhatsAppForm';
import { ImageComparisonSlider } from './image-comparison-slider';

const CONTACT_EMAIL = 'info@primecoatlondon.co.uk';

const serviceTags = ['Interior painting', 'Exterior painting', 'Wallpaper removal', 'Mould treatment'];
const stats = [
  { label: 'Projects led for homeowners', value: '480+' },
  { label: 'Property teams on retainer', value: '30+' },
  { label: 'Survey availability', value: 'Within 48h' }
];

export function Hero1() {
  const whatsappLink = buildWhatsAppLink('Hi Prime Coat London, can we discuss a painting project in London?');

  return (
    <section className="relative overflow-hidden bg-slate-50">
      <div className="pointer-events-none absolute inset-0 opacity-80" aria-hidden>
        <div className="spotlight" />
      </div>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[58%_42%] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.35em] text-slate-500">
                Bespoke painting & decorating in Greater London
              </p>
              <h1 className="hero-heading text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
                Creative finishes for homeowners, landlords, and property teams who demand spotless handovers.
              </h1>
              <p className="text-lg text-slate-600 sm:text-xl">
                Prime Coat London runs interior and exterior transformations with the meticulous prep, architectural colour advice, and
                WhatsApp-managed updates high-end clients expect.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {serviceTags.map((tag) => (
                <span key={tag} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                WhatsApp
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-300"
              >
                <ArrowUpRight className="h-4 w-4" aria-hidden />
                Form
              </a>
              <a
                href={`tel:${PHONE_NUMBER_LINK}`}
                className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-slate-500"
              >
                <ShieldCheck className="h-4 w-4" aria-hidden />
                Call {PHONE_NUMBER_DISPLAY}
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm">
                  <p className="text-2xl font-semibold">{stat.value}</p>
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
            className="space-y-4"
          >
            <div className="rounded-[1.75rem] border border-white/60 bg-white/95 p-4 shadow-md">
              <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-slate-600">
                <p className="font-semibold text-slate-900">Chelsea duplex refresh</p>
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-[0.65rem] uppercase tracking-[0.35em] text-slate-600">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
                  6 day turn-key
                </span>
              </div>
              <div className="mt-3 rounded-2xl border border-slate-200 bg-white p-2">
                <ImageComparisonSlider
                  leftImage="/before.JPG"
                  rightImage="/after.JPG"
                  altLeft="Before Prime Coat London repaint"
                  altRight="After Prime Coat London repaint"
                  className="h-[320px] rounded-xl"
                  initialPosition={60}
                  loading="lazy"
                />
                <div className="mt-2 flex items-center justify-between text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-slate-400">
                  <span>Before</span>
                  <span>After</span>
                </div>
              </div>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-900 p-4 text-white shadow-md">
              <div className="flex items-center justify-between text-[0.7rem] uppercase tracking-[0.4em] text-white/80">
                <span>WhatsApp brief</span>
                <Timer className="h-4 w-4 text-blue-400" aria-hidden />
              </div>
              <p className="mt-2 text-sm text-white/80">Share a number or quick property note. We reply within &lt;15 min daily.</p>
              <WhatsAppForm
                heading=""
                description=""
                buttonLabel="Send"
                className="mt-3"
                compact
                minimal
                animatedBorder
                buttonClassName="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-slate-900 transition hover:bg-slate-100"
                appearance="dark"
                source="hero-1"
                idPrefix="hero1-whatsapp-inline"
              />
              <p className="mt-3 text-[0.75rem] text-white/70">
                Prefer email? <a href={`mailto:${CONTACT_EMAIL}`} className="underline decoration-white/30 underline-offset-4">{CONTACT_EMAIL}</a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
