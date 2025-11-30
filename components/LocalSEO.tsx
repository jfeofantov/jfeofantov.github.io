import { MapPin, ShieldCheck } from 'lucide-react';
import FadeIn from './FadeIn';
import { PHONE_NUMBER_DISPLAY, PHONE_NUMBER_LINK, buildWhatsAppLink } from '../lib/contact';

const areas = ['Belgravia', 'Chelsea', 'Kensington', 'Canary Wharf', 'Mayfair', 'Clapham', 'Islington', 'Richmond', 'Notting Hill'];
const CONTACT_EMAIL = 'hello@primecoatlondon.co.uk';
const whatsappLink = buildWhatsAppLink("Hi Prime Coat London, can I book a painting survey in London?");

export default function LocalSEO() {
  return (
    <section id="areas" className="section-padding bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
        <FadeIn className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-600">Locally owned</p>
          <h2 className="text-balance text-3xl font-semibold text-slate-900 sm:text-4xl">London painters near you.</h2>
          <p className="text-base text-slate-600">Same-week surveys across Zones 1–4. We keep it tidy and stay on schedule.</p>
          <div className="flex flex-wrap gap-2">
            {areas.map((area) => (
              <span key={area} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700">
                {area}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-amber-600"
            >
              Get a free estimate
            </a>
            <a
              href={`tel:${PHONE_NUMBER_LINK}`}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-800 transition hover:border-slate-500"
            >
              Call {PHONE_NUMBER_DISPLAY}
            </a>
          </div>
        </FadeIn>

        <FadeIn className="space-y-4 rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Need us fast?</p>
          <h3 className="text-2xl font-semibold text-slate-900">Share photos for a 24-hour estimate.</h3>
          <p className="text-base text-slate-600">WhatsApp or email us and we will size the job and hold your start date.</p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center rounded-full border border-amber-500 px-5 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-700 transition hover:bg-amber-500 hover:text-white"
          >
            WhatsApp now
          </a>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
            <p className="font-semibold text-slate-900">Contact info</p>
            <p className="mt-1 inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-slate-700" aria-hidden />
              Central & Greater London
            </p>
            <p className="mt-2">Call: {PHONE_NUMBER_DISPLAY}</p>
            <p className="mt-1">
              Email:{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold underline decoration-slate-300 underline-offset-4">
                {CONTACT_EMAIL}
              </a>
            </p>
            <p className="mt-2 inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-slate-700" aria-hidden />
              Written warranty on every project
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
