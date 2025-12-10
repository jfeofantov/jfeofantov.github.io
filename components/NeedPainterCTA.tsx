import FadeIn from './FadeIn';
import { PHONE_NUMBER_DISPLAY, PHONE_NUMBER_LINK, buildWhatsAppLink } from '../lib/contact';

const promoPoints = ['Homeowners, landlords & property teams', 'Fixed price estimates available', 'Guarantee on workmanship', 'WhatsApp check-ins daily'];

const whatsappLink = buildWhatsAppLink('Hi Prime Coat London, I need a painter ASAP.');

export default function NeedPainterCTA() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex w-full flex-col gap-8 rounded-[1.75rem] border border-slate-200 bg-slate-50 px-6 py-10 shadow-sm sm:flex-row sm:items-center sm:justify-between lg:gap-16 lg:px-12">
          <FadeIn className="space-y-4 sm:flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-slate-500">Need painters next day?</p>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-[2.5rem]">One WhatsApp. One clean crew. One guaranteed result.</h2>
            <p className="text-base text-slate-600">
              Same-week surveys, discreet crews, and daily updates via WhatsApp for every project lead.
            </p>
            <ul className="space-y-3 text-sm text-slate-700 sm:text-base">
              {promoPoints.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-[0.75rem] font-semibold text-blue-600" aria-hidden>
                    ✓
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn className="space-y-4 rounded-[1.5rem] bg-slate-900 px-6 py-6 text-center text-white sm:w-[320px]">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">Whatsapp → form → call</p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-4 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-blue-700"
            >
              WhatsApp us now
            </a>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/30 px-4 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white"
            >
              Use the form
            </a>
            <div className="space-y-1 text-sm text-white/80">
              <p>or call</p>
              <a href={`tel:${PHONE_NUMBER_LINK}`} className="text-2xl font-semibold text-white">
                {PHONE_NUMBER_DISPLAY}
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
