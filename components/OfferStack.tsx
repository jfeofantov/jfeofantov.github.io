import { BadgeCheck, CalendarClock, ClipboardCheck, ShieldCheck } from 'lucide-react';
import FadeIn from './FadeIn';

const workflow = [
  {
    title: 'Plan the visit',
    description: 'Same-week survey, moisture checks, and a fixed quote by the next day.',
    icon: CalendarClock
  },
  {
    title: 'Protect & paint',
    description: 'Crew wraps furniture, labels storage, and shares midday progress snaps.',
    icon: ShieldCheck
  },
  {
    title: 'Daily wrap + handover',
    description: 'WhatsApp snag list, final walkthrough, and warranty pack delivered.',
    icon: ClipboardCheck
  }
];

export default function OfferStack() {
  return (
    <section id="offer" className="section-padding bg-white">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="space-y-6 rounded-[1.75rem] bg-white p-6 shadow-sm lg:p-8">
          <header className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">How it runs</p>
            <h3 className="text-2xl font-semibold text-slate-900 sm:text-[2.35rem]">Three clean phases, one point of contact.</h3>
            <p className="text-sm text-slate-600">Survey, daily updates, and a tidy handover—condensed into one predictable plan.</p>
          </header>
          <ol className="grid gap-3 text-sm text-slate-700 sm:grid-cols-3">
            {workflow.map(({ title, description, icon: Icon }, index) => (
              <li
                key={title}
                className="fade-in flex flex-col gap-2 rounded-2xl bg-white px-4 py-4 text-sm shadow-[0_25px_60px_-55px_rgba(15,23,42,0.6)]"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-slate-900 text-white">
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                  <div>
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-slate-500">Step {index + 1}</p>
                    <p className="text-base font-semibold text-slate-900">{title}</p>
                  </div>
                </div>
                <p className="text-slate-600">{description}</p>
              </li>
            ))}
          </ol>
          <div className="rounded-2xl bg-slate-50 px-5 py-4 text-sm text-slate-700">
            <p className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <ShieldCheck className="h-5 w-5 text-amber-500" aria-hidden />
              Quality promise
            </p>
            <p className="mt-1">
              Fixed-price proposals, verified crew lists, and a written warranty after handover—exactly the same standards we lead with in the hero section.
            </p>
            <p className="mt-2 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-slate-500">
              <BadgeCheck className="h-4 w-4 text-slate-700" aria-hidden />
              Fully insured · DBS checked
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
