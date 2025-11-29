import FadeIn from './FadeIn';
import { buildWhatsAppLink } from '../lib/contact';

const guarantees = [
  {
    title: '14-day start guarantee',
    detail: 'If we miss the agreed kickoff window we credit the first day of labour — no questions asked.'
  },
  {
    title: 'Daily WhatsApp accountability',
    detail: 'You receive progress photos, checklist updates, and the next-day plan by 7pm.'
  },
  {
    title: '12-month touch-up cover',
    detail: 'We return once within a year for complimentary snagging if anything settles or gets scuffed.'
  }
];

export default function Guarantee() {
  const guaranteeLink = buildWhatsAppLink("Hi Prime Coat London, I'd like to secure my project under your guarantee.");

  return (
    <section className="section-padding bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white">
      <div className="mx-auto max-w-5xl space-y-8 text-center">
        <FadeIn className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">Prime Coat guarantee</p>
          <h2 className="text-balance text-3xl font-semibold sm:text-4xl">We remove the risk from decorating projects</h2>
          <p className="text-base text-white/75">
            You&apos;re trusting us with valuable spaces. That&apos;s why every booking is backed by written guarantees and proactive updates.
          </p>
        </FadeIn>
        <div className="grid gap-6 sm:grid-cols-3">
          {guarantees.map((item, index) => (
            <FadeIn key={item.title} delay={index * 80}>
              <article className="rounded-[1.5rem] border border-white/15 bg-white/5 px-5 py-6 text-left shadow-[0_35px_95px_-65px_rgba(15,23,42,0.9)]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/60">Promise {index + 1}</p>
                <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-white/80">{item.detail}</p>
              </article>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="space-y-4 rounded-[2rem] border border-white/15 bg-white/5 px-6 py-8">
          <p className="text-lg font-semibold">Next steps:</p>
          <ol className="space-y-1 text-sm text-white/80">
            <li>1. Share photos or room counts.</li>
            <li>2. Lock a same-week site visit.</li>
            <li>3. Approve the quote & secure your start date.</li>
          </ol>
          <a
            href={guaranteeLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-900 transition hover:bg-slate-100"
          >
            Secure my project
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
