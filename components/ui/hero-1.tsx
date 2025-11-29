'use client';

import Image from 'next/image';
import { Check, MapPin, Phone, ShieldCheck, Timer } from 'lucide-react';
import { PHONE_NUMBER_DISPLAY, PHONE_NUMBER_LINK } from '../../lib/contact';
import WhatsAppForm from '../WhatsAppForm';
import { ImageComparisonSlider } from './image-comparison-slider';

const CONTACT_EMAIL = 'hello@primecoatlondon.co.uk';
const NAV_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#faqs', label: 'FAQs' },
  { href: '#contact', label: 'Contact' }
];

const sellingPoints = [
  'Same-week surveys anywhere in London',
  'Dust-free prep, tidy DBS-checked crews',
  'Fixed quotes with primers and sheens listed'
];

const stats = [
  { label: 'Avg. response', value: '12 min' },
  { label: '5.0 rating', value: 'Google' },
  { label: 'Start date', value: 'Guaranteed' }
];

export function Hero1() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="spotlight" />
      </div>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
        <div className="flex flex-wrap items-center gap-2 text-[0.7rem] uppercase tracking-[0.28em] text-slate-500">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full border border-slate-200 bg-white px-3 py-1 transition hover:border-slate-400 hover:text-slate-800"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <Image src="/prime-coat-logo.png" alt="Prime Coat London logo" width={150} height={42} className="h-10 w-auto" priority />
                <span className="rounded-full bg-slate-100 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-slate-700">
                  Painting & decorating
                </span>
              </div>
              <div className="space-y-3">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-amber-600">Painters & decorators in London</p>
                <h1 className="text-3xl font-black leading-tight text-slate-900 sm:text-4xl lg:text-[2.75rem]">
                Simple, tidy painting crews ready this week.
              </h1>
              <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
                Book a vetted crew for interiors, exteriors, or wallpaper. We confirm times, protect every surface, and keep you updated with
                photos.
              </p>
            </div>
            <ul className="grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
              {sellingPoints.map((point) => (
                <li key={point} className="hover-lift flex items-start gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                    <Check className="h-4 w-4" aria-hidden />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-amber-600 sm:w-auto"
              >
                Book my painter
              </a>
              <a
                href={`tel:${PHONE_NUMBER_LINK}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-800 transition hover:border-slate-500 sm:w-auto"
              >
                <Phone className="h-4 w-4" aria-hidden />
                Call {PHONE_NUMBER_DISPLAY}
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
              <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1">
                <ShieldCheck className="h-4 w-4 text-slate-700" aria-hidden />
                Insured & DBS-checked
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1">
                <MapPin className="h-4 w-4 text-slate-700" aria-hidden />
                Central & Greater London
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1">
                <Timer className="h-4 w-4 text-slate-700" aria-hidden />
                Same-day responses
              </span>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="hover-lift rounded-xl border border-slate-200 bg-white p-3 text-center shadow-sm">
                  <p className="text-xl font-semibold text-slate-900">{stat.value}</p>
                  <p className="text-[0.6rem] uppercase tracking-[0.28em] text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="hover-lift overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50/70 p-4 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-[0.65rem] uppercase tracking-[0.35em] text-slate-500">Live London project</p>
                  <p className="text-base font-semibold text-slate-900">Before / after — Chelsea repaint</p>
                </div>
                <span className="rounded-full bg-white px-3 py-1 text-[0.65rem] uppercase tracking-[0.3em] text-slate-700">
                  Painters London
                </span>
              </div>
              <div className="mt-3 rounded-xl border border-slate-200 bg-white p-2">
                <ImageComparisonSlider
                  leftImage="/before.JPG"
                  rightImage="/after.JPG"
                  altLeft="Before painting project in Chelsea"
                  altRight="After painting project in Chelsea"
                  className="h-[300px] rounded-lg sm:h-[360px]"
                  initialPosition={55}
                  loading="lazy"
                />
              </div>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm">
                  Painters near you across Zones 1–4: Belgravia, Chelsea, Kensington, Canary Wharf, and more.
                </div>
                <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm">
                  Protection plans, dust-free sanding, and daily WhatsApp photos until sign-off.
                </div>
              </div>
            </div>

            <div className="hover-lift rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <p className="text-[0.65rem] uppercase tracking-[0.35em] text-slate-500">WhatsApp quote</p>
                  <p className="text-sm font-semibold text-slate-900">Drop your number — we reply in minutes.</p>
                </div>
                <Timer className="h-5 w-5 text-amber-500" aria-hidden />
              </div>
              <div className="mt-3">
                <WhatsAppForm
                  heading=""
                  description=""
                  buttonLabel="Send"
                  className="mt-0"
                  compact
                  buttonClassName="inline-flex items-center justify-center rounded-full bg-amber-500 px-3 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-amber-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 disabled:opacity-70"
                  appearance="light"
                  source="hero-1"
                  idPrefix="hero1-whatsapp"
                  animatedBorder
                />
              </div>
              <p className="mt-2 text-[0.75rem] text-slate-600">
                Or email{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-slate-900 underline decoration-slate-200 underline-offset-4">
                  {CONTACT_EMAIL}
                </a>{' '}
                · Call {PHONE_NUMBER_DISPLAY}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
