import { ArrowRight, MapPin } from 'lucide-react';
import FadeIn from './FadeIn';
import { PHONE_NUMBER_DISPLAY, PHONE_NUMBER_LINK, buildWhatsAppLink } from '../lib/contact';

const areas = ['Belgravia', 'Chelsea', 'Kensington', 'Canary Wharf', 'Mayfair', 'Clapham', 'Islington', 'Richmond', 'Notting Hill'];
const keywords = ['painters near me', 'London painters', 'decorators London', 'interior painters', 'exterior painters'];
const whatsappLink = buildWhatsAppLink("Hi Prime Coat London, I'm looking for painters near me in London. Can you quote?");

export default function LocalSEO() {
  return (
    <section id="areas" className="section-padding bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <FadeIn className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Painters near me</p>
          <h2 className="text-balance text-3xl font-semibold text-slate-900 sm:text-4xl">London painters & decorators wherever you are.</h2>
          <p className="text-base text-slate-600">
            Searching for {keywords.join(', ')}? Prime Coat London dispatches tidy, DBS-checked crews across Central and Greater London with
            same-week surveys. We handle plaster repairs, wallpaper, and exterior refreshes with dust-free prep and daily WhatsApp updates.
          </p>
          <div className="hover-lift grid gap-3 rounded-[1.5rem] border border-slate-100 bg-slate-50/70 p-4 sm:grid-cols-2">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Popular areas</p>
              <div className="flex flex-wrap gap-2">
                {areas.map((area) => (
                  <span key={area} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700">
                    {area}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">What to expect</p>
              <ul className="space-y-1 text-sm text-slate-600">
                <li>📸 Daily WhatsApp photos & snag lists</li>
                <li>🧹 Dust-free sanding & labelled protection</li>
                <li>📆 Fixed start dates & written warranties</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-slate-600">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1">
              <MapPin className="h-4 w-4 text-slate-700" aria-hidden />
              Covering Zones 1–4
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1">
              <ArrowRight className="h-4 w-4 text-slate-700" aria-hidden />
              Quotes in hours, not days
            </span>
          </div>
        </FadeIn>

        <FadeIn className="space-y-4 rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Ready to book?</p>
          <h3 className="text-2xl font-semibold text-slate-900">Tell us where you need painters in London.</h3>
          <p className="text-base text-slate-600">
            Call, message, or WhatsApp photos. We reply the same day with a brief, a fixed quote, and a guaranteed start date.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-amber-600"
            >
              Start my quote
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-amber-500 px-5 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-700 transition hover:bg-amber-500 hover:text-white"
            >
              WhatsApp now
            </a>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-600">
            <p className="font-semibold text-slate-900">You&apos;ll speak with a project lead, not a call centre.</p>
            <p className="mt-2">
              Call us on{' '}
              <a href={`tel:${PHONE_NUMBER_LINK}`} className="font-semibold underline decoration-slate-300 underline-offset-4">
                {PHONE_NUMBER_DISPLAY}
              </a>{' '}
              or share photos so we can size the job and protect your start date.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
