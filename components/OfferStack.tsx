import { Bolt, CalendarClock, CheckCircle2, ShieldCheck } from 'lucide-react';
import FadeIn from './FadeIn';
import { buildWhatsAppLink } from '../lib/contact';

const offerItems = [
  {
    title: 'Immediate triage',
    description: 'Your enquiry routes straight to our operations lead for a same-day London survey slot.',
    detail: 'Average quote issued within 24 hours.',
    icon: Bolt
  },
  {
    title: 'Protection-first crews',
    description: 'Floors, furniture, and artwork receive labelled protection plans before prep begins.',
    detail: 'Dust-free sanding and nightly clean downs.',
    icon: ShieldCheck
  },
  {
    title: 'Daily WhatsApp dossier',
    description: 'Photos, punch lists, and micro-updates keep you informed even if you are abroad.',
    detail: 'Sign off remotely with HD walkthroughs.',
    icon: CheckCircle2
  },
  {
    title: 'Start-date guaranteed',
    description: 'We hold the agreed kickoff date once the deposit hits, or we credit your invoice.',
    detail: 'Teams available 6 days per week.',
    icon: CalendarClock
  }
];

const checklist = ['Fixed-price proposals', 'Trade discount on paint', 'Fully insured & DBS checked'];

const strategyCallLink = buildWhatsAppLink("Hi Prime Coat London, I'd like to book a 15-minute WhatsApp consultation about my painting project.");

export default function OfferStack() {
  return (
    <section id="offer" className="section-padding bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <FadeIn className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-600">Prime Coat offer</p>
          <h2 className="text-balance text-3xl font-semibold text-slate-900 sm:text-4xl">London painting crews on standby.</h2>
          <p className="text-base text-slate-600">
            Looking for painters near you? We scope the site, map the protection plan, and send you a straight-talking proposal with every
            coating listed. The same person that priced the job runs the crew, so nothing gets lost in translation.
          </p>
          <ul className="space-y-3 text-sm text-slate-700">
            {checklist.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-200 text-xs font-semibold text-slate-900">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={strategyCallLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-amber-500 px-7 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-md transition hover:bg-amber-600"
            >
              Chat for 15-min plan
            </a>
            <p className="text-sm text-slate-500">Limited to 8 booked projects per month.</p>
          </div>
        </FadeIn>
        <div className="grid gap-4 sm:grid-cols-2">
          {offerItems.map(({ title, description, detail, icon: Icon }, index) => (
            <FadeIn key={title} delay={index * 70}>
              <article className="hover-lift h-full rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-900">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm text-slate-600">{description}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">{detail}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
