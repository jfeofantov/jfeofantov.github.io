import { MapPin, ShieldCheck } from 'lucide-react';
import FadeIn from './FadeIn';
import { PHONE_NUMBER_DISPLAY, PHONE_NUMBER_LINK, buildWhatsAppLink } from '../lib/contact';

const areas = ['Belgravia', 'Chelsea', 'Kensington', 'Canary Wharf', 'Mayfair', 'Islington', 'Hampstead', 'Richmond', 'Notting Hill', 'Clapham'];
const CONTACT_EMAIL = 'hello@primecoatlondon.co.uk';
const whatsappLink = buildWhatsAppLink('Hi Prime Coat London, can I book a painting survey in London?');

export default function LocalSEO() {
  return (
    <section id="areas" className="section-padding bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <FadeIn className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Greater London coverage</p>
          <h2 className="text-balance text-3xl font-semibold text-slate-900 sm:text-4xl">Same-week surveys across Zones 1–4.</h2>
          <p className="text-base text-slate-600">We arrive discreetly, protect every surface, and keep WhatsApp groups running so remote owners and building managers stay in control.</p>
          <div className="flex flex-wrap gap-2">
            {areas.map((area) => (
              <span key={area} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700">
                {area}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              WhatsApp survey
            </a>
            <a
              href="#contact"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-300"
            >
              Book via form
            </a>
            <a
              href={`tel:${PHONE_NUMBER_LINK}`}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-slate-500"
            >
              Call {PHONE_NUMBER_DISPLAY}
            </a>
          </div>
        </FadeIn>

        <FadeIn className="space-y-4 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Need us fast?</p>
          <h3 className="text-2xl font-semibold text-slate-900">Share photos for a 24-hour estimate.</h3>
          <p className="text-base text-slate-600">WhatsApp or email us and we will size the job, coordinate access, and hold your preferred start date.</p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center rounded-full border border-blue-200 px-5 py-3 text-sm font-semibold text-blue-700"
          >
            WhatsApp now
          </a>
          <div className="rounded-2xl border border-white/70 bg-white p-4 text-sm text-slate-600 shadow-sm">
            <p className="font-semibold text-slate-900">Contact info</p>
            <p className="mt-1 inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-slate-500" aria-hidden />
              Central & Greater London
            </p>
            <p className="mt-2 text-slate-700">Call: {PHONE_NUMBER_DISPLAY}</p>
            <p className="mt-1">
              Email:{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4">
                {CONTACT_EMAIL}
              </a>
            </p>
            <p className="mt-2 inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-slate-500" aria-hidden />
              Written warranty on every project
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
