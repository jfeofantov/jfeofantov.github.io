'use client';

import * as React from 'react';
import { PHONE_NUMBER_DISPLAY, PHONE_NUMBER_LINK } from '../../lib/contact';
import WhatsAppForm from '../WhatsAppForm';
import { ImageComparisonSlider } from './image-comparison-slider';
import { Card } from './MovingBorderCard';

const gradientBarClass = 'w-[10rem] h-[22rem] bg-[linear-gradient(90deg,#ffffff,#93c5fd)] rounded-full opacity-80';
const heroVideo =
  'https://cdn.coverr.co/videos/coverr-modern-living-room-1557/1080p.mp4';
const CONTACT_EMAIL = 'hello@primecoatlondon.co.uk';
const NAV_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' }
];

export function Hero1() {
  return (
    <div className="relative flex flex-col overflow-hidden bg-[#0c0414] text-white">
      <video
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-60"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 z-[1] bg-[#070212]/75" />
      <div className="pointer-events-none absolute top-[-40rem] right-[-30rem] z-[2] flex rotate-[-20deg] gap-[10rem] skew-[-40deg] blur-[4rem] opacity-50">
        <div className={gradientBarClass} />
        <div className={gradientBarClass} />
        <div className={gradientBarClass} />
      </div>
      <div className="pointer-events-none absolute top-[-50rem] right-[-55rem] z-[2] flex rotate-[-20deg] gap-[10rem] skew-[-40deg] blur-[4rem] opacity-40">
        <div className={gradientBarClass} />
        <div className={gradientBarClass} />
        <div className={gradientBarClass} />
      </div>
      <div className="pointer-events-none absolute top-[-65rem] right-[-65rem] z-[2] flex rotate-[-20deg] gap-[10rem] skew-[-40deg] blur-[4rem] opacity-30">
        <div className="h-[30rem] w-[10rem] rounded-full bg-[linear-gradient(90deg,#ffffff,#93c5fd)]" />
        <div className="h-[30rem] w-[10rem] rounded-full bg-[linear-gradient(90deg,#ffffff,#93c5fd)]" />
        <div className="h-[30rem] w-[10rem] rounded-full bg-[linear-gradient(90deg,#ffffff,#93c5fd)]" />
      </div>

      <div className="relative z-10 px-[20px] pt-3 sm:px-[40px]">
        <div className="mx-auto flex w-full max-w-[1350px] flex-wrap items-center gap-3 rounded-full border border-white/15 bg-black/40 px-4 py-1.5 text-[0.65rem] text-white/75 backdrop-blur-sm">
          <div className="flex flex-wrap items-center gap-3 text-[0.6rem] text-white/80">
            <div className="flex items-center gap-1.5">
              <span className="text-[0.45rem] uppercase tracking-[0.25em] text-white/60">Email</span>
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-white transition hover:text-[#f39c5a]">
                {CONTACT_EMAIL}
              </a>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[0.45rem] uppercase tracking-[0.25em] text-white/60">Call</span>
              <a href={`tel:${PHONE_NUMBER_LINK}`} className="font-semibold text-white transition hover:text-[#f39c5a]">
                {PHONE_NUMBER_DISPLAY}
              </a>
            </div>
          </div>
          <div className="flex flex-1 flex-wrap items-center justify-center gap-2 text-[0.5rem] uppercase tracking-[0.3em] text-white/70">
            {NAV_LINKS.map((link, index) => (
              <React.Fragment key={link.href}>
                {index > 0 && <span className="text-white/30">•</span>}
                <a href={link.href} className="hover:text-white">
                  {link.label}
                </a>
              </React.Fragment>
            ))}
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-[#f39c5a] px-3.5 py-1 text-[0.5rem] font-semibold uppercase tracking-[0.35em] text-slate-900 shadow-[0_10px_25px_-18px_rgba(243,156,90,0.9)] transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f39c5a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#070212]"
          >
            Book a quote
          </a>
        </div>
      </div>
      <main className="relative z-10 flex flex-1 items-center px-[50px] py-4 text-left sm:py-10 lg:py-[20px]">
        <div className="ml-[50px] mr-auto grid w-full max-w-[1350px] gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="flex h-full flex-col gap-6 justify-between">
            <div className="flex justify-center sm:justify-start">
              <img
                src="/prime-coat-logo.png"
                alt="Prime Coat London"
                className="h-20 w-auto max-w-[300px] object-contain invert brightness-0 saturate-0 sm:h-24 sm:max-w-[320px]"
              />
            </div>
            <div className="flex w-fit items-center gap-2 rounded-full border border-white/20 bg-transparent px-3 py-1 text-[0.55rem] font-semibold uppercase tracking-[0.25em] text-white/70">
              <span className="font-serif text-[#f39c5a] text-base">✦</span>
              Same-week surveys &amp; dust-free prep
            </div>
            <h1 className="text-[2.2rem] font-black leading-tight text-white sm:text-[2.7rem]">
              Painting &amp; Decorating{' '}
              <span className="block text-white/80">in London</span>
            </h1>
            <p className="text-base text-white/80">
              <span className="block">At Prime Coat London, we bring your vision to life with top-quality painting and decorating services.</span>
              <span className="block">Trusted local decorators deliver outstanding results every time.</span>
            </p>
            <Card containerClassName="w-full max-w-xl">
              <div className="flex flex-col gap-0.5 text-white">
                <p className="text-[0.5rem] uppercase tracking-[0.35em] text-white/60">WhatsApp quote</p>
                <p className="text-base font-semibold">We reply in minutes with next steps.</p>
                <p className="text-[0.55rem] text-white/65">…or just wait for a call.</p>
              </div>
              <WhatsAppForm
                heading=""
                description=""
                buttonLabel="Send"
                className="mt-0.5"
                compact
                buttonClassName="inline-flex items-center justify-center rounded-full bg-[#1BD741] px-2 py-1 text-[0.45rem] font-semibold uppercase tracking-[0.15em] text-slate-900 shadow-[0_6px_16px_-16px_rgba(27,215,65,0.65)] transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BD741]/40 disabled:opacity-70"
                appearance="dark"
                source="hero-1"
                idPrefix="hero1-whatsapp"
                minimal
              />
            </Card>
          </div>

          <div
            id="why-homeowners"
            className="relative flex h-[90%] flex-col justify-between space-y-3 rounded-[1.2rem] border border-white/10 bg-black/40 p-3 text-white/85 backdrop-blur-sm lg:origin-top lg:self-end lg:scale-90 lg:mt-24"
          >
            <div className="space-y-2 pt-8">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <p className="text-[0.6rem] uppercase tracking-[0.3em] text-white/60">Why homeowners choose us</p>
                  <h2 className="mt-1 text-lg font-semibold text-white">Quality-obsessed crews</h2>
                </div>
                <div className="flex items-center gap-1 rounded-full border border-white/20 px-2.5 py-0.5 text-[0.5rem] uppercase tracking-[0.25em] text-white/70">
                  <img src="/google-logo.svg" alt="Google" className="h-2.5 w-auto" />
                  5.0
                  <span className="text-[#f8d64e]">★★★★★</span>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-[1rem] border border-white/15 bg-white/5 p-2 shadow-[0_25px_75px_-70px_rgba(0,0,0,0.8)]">
              <ImageComparisonSlider
                leftImage="/before.JPG"
                rightImage="/after.JPG"
                altLeft="Before project"
                altRight="After project"
                className="h-full rounded-lg border border-white/10"
              />
            </div>
            <div className="grid gap-1 sm:grid-cols-3">
              {[
                { label: 'Rating', value: '5.0 ★' },
                { label: 'Certified & insured', value: 'Yes' },
                { label: 'Guarantee', value: '12 mo.' }
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl border border-white/15 bg-white/5 p-2 text-center">
                  <p className="text-base font-semibold text-white">{stat.value}</p>
                  <p className="text-[0.4rem] uppercase tracking-[0.28em] text-white/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
