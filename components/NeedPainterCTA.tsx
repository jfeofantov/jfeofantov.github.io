import FadeIn from './FadeIn';
import { PHONE_NUMBER_DISPLAY, PHONE_NUMBER_LINK } from '../lib/contact';

const promoPoints = ['Small jobs & large projects', 'Fixed price estimates available', 'Guarantee on workmanship', 'Flat rates from £500*'];

export default function NeedPainterCTA() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-0">
        <div className="flex w-full flex-col gap-8 rounded-[1.5rem] border border-slate-200 bg-white px-6 py-8 shadow-[0_35px_90px_-70px_rgba(15,23,42,1)] sm:flex-row sm:items-center sm:justify-between lg:gap-16 lg:px-10">
          <FadeIn className="space-y-4 sm:flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-slate-600">Need a painter next day?</p>
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-[2.5rem]">Professional painters ready to transform your property.</h2>
            <p className="text-sm text-slate-600 sm:text-base">
              Same-week surveys, tidy crews, and WhatsApp updates from a dedicated project lead.
            </p>
            <ul className="space-y-3 text-sm text-slate-800 sm:text-base">
              {promoPoints.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-[0.75rem] font-semibold text-white" aria-hidden>
                    ✓
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn className="space-y-5 rounded-[1.5rem] bg-slate-900 px-6 py-6 text-center text-white sm:w-[320px]">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">Book online for 10% off labour</p>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-full bg-white px-4 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-900 transition hover:bg-white/90"
            >
              Book a painter decorator
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
