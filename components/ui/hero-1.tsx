'use client';

import { ShieldCheck, Timer, BadgeCheck, PiggyBank } from 'lucide-react';
import { PHONE_NUMBER_DISPLAY, PHONE_NUMBER_LINK } from '../../lib/contact';
import WhatsAppForm from '../WhatsAppForm';
import { ImageComparisonSlider } from './image-comparison-slider';

const CONTACT_EMAIL = 'info@primecoatlondon.co.uk';

export function Hero1() {
  return (
    <section className="relative overflow-hidden bg-white hero-bg-fade lg:animate-heroFade">
      <div className="pointer-events-none absolute inset-0">
        <div className="spotlight" />
      </div>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-0 sm:px-6 sm:py-0 lg:px-0 lg:py-0">
        <div className="grid gap-12 lg:gap-20 lg:grid-cols-[60%_40%] lg:items-center px-0 sm:px-0 lg:px-0 py-6 sm:py-8 lg:py-10">
          <div className="space-y-6 min-w-0">
            <div className="space-y-3 max-w-full sm:max-w-3xl">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-slate-700">
                We don&apos;t compete on price — only on quality
              </p>
              <h1 className="text-4xl font-black leading-tight text-slate-900 sm:text-[3rem] lg:text-[3.25rem]">
                <span className="block">PAINTING &amp; DECORATING</span>
                <span className="block text-slate-700 text-3xl">in London</span>
              </h1>
              <p className="text-[17px] leading-relaxed text-slate-600 max-w-full sm:max-w-[90%]">
                At Prime Coat London, we bring your vision to life with top-quality painting and decorating services. Trusted local decorators
                deliver outstanding results every time.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
              <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1">
                <BadgeCheck className="h-4 w-4 text-slate-700" aria-hidden />
                1 Year Guarantee*
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1">
                <PiggyBank className="h-4 w-4 text-slate-700" aria-hidden />
                Competitive Rates
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1">
                <ShieldCheck className="h-4 w-4 text-slate-700" aria-hidden />
                Certified & Insured
              </span>
            </div>
            <div className="relative w-full max-w-2xl overflow-hidden rounded-[1.25rem] border-2 border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-4 text-white">
              <div className="pointer-events-none absolute inset-0 rounded-[1.1rem] border border-white/10" aria-hidden />
              <div className="flex items-center justify-between gap-2">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-[#25D366]">WhatsApp quote</p>
                <span className="inline-flex items-center gap-1 rounded-full bg-[#25D366]/15 px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-[#25D366]">
                  <Timer className="h-3.5 w-3.5" aria-hidden />
                </span>
              </div>
              <p className="mt-1 text-[12px] text-white/80 whitespace-normal md:whitespace-nowrap">
                Leave your number and we&apos;ll contact you instantly — share details or wait for a call.
              </p>
              <div className="mt-2">
                <WhatsAppForm
                  heading=""
                  description=""
                  buttonLabel="Send"
                  className="mt-0"
                  compact
                  buttonClassName="inline-flex items-center justify-center rounded-full bg-white px-3 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-900 transition hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 disabled:opacity-70"
                  appearance="dark"
                  source="hero-1"
                  idPrefix="hero1-whatsapp-inline"
                />
              </div>
              <p className="mt-2 text-xs text-white/80">
                Prefer a call?{' '}
                <a href={`tel:${PHONE_NUMBER_LINK}`} className="font-semibold text-white underline decoration-white/40 underline-offset-4">
                  {PHONE_NUMBER_DISPLAY}
                </a>{' '}
                · Email {CONTACT_EMAIL}
              </p>
            </div>
          </div>

          <div className="space-y-3 min-w-0">
            <div className="overflow-hidden rounded-[1.25rem] border border-slate-200 bg-white p-3">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-base font-semibold text-slate-900">Shoreditch ceiling repaint</p>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-[0.65rem] uppercase tracking-[0.3em] text-slate-800">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
                  Completed in 5 days
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
                <div className="mt-2 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                  <span>Before</span>
                  <span>After</span>
                </div>
              </div>
              <p className="mt-3 text-sm text-slate-600">Clean prep, careful protection, and tidy handovers.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
