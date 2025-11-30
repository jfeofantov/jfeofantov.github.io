import { BadgeCheck, CalendarClock, CheckCircle2, ShieldCheck } from 'lucide-react';
import FadeIn from './FadeIn';

const offerItems = [
  {
    title: 'Same-week surveys',
    description: 'We book your walk-through and return an estimate within 24 hours.',
    icon: CalendarClock
  },
  {
    title: 'Mess-free prep',
    description: 'Floors, furniture, and artwork are labelled and protected first.',
    icon: ShieldCheck
  },
  {
    title: 'On-time crews',
    description: 'Respectful teams that communicate arrivals and wrap times daily.',
    icon: CheckCircle2
  },
  {
    title: 'Fair pricing',
    description: 'Value-based proposals with coatings and sheens listed upfront.',
    icon: BadgeCheck
  }
];

const checklist = ['Fixed-price proposals', 'Trade paint discounts', 'Fully insured & DBS checked'];

export default function OfferStack() {
  return (
    <section id="offer" className="section-padding bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
        <FadeIn className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-600">Why choose us</p>
          <h2 className="text-balance text-3xl font-semibold text-slate-900 sm:text-4xl">Stress-free, mess-free painting.</h2>
          <p className="text-base text-slate-600">Local crews, tidy prep, and steady communication until handover.</p>
          <ul className="space-y-2 text-sm text-slate-700">
            {checklist.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-200 text-xs font-semibold text-slate-900">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-md transition hover:bg-amber-600 sm:w-auto"
          >
            Get a free estimate
          </a>
        </FadeIn>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
          {offerItems.map(({ title, description, icon: Icon }, index) => (
            <FadeIn key={title} delay={index * 70}>
              <article className="hover-lift h-full rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-900">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm text-slate-600">{description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
