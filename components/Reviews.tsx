import { Star } from 'lucide-react';
import FadeIn from './FadeIn';
import { reviews } from '../lib/content';

const proofBullets = ['DBS-checked crews', 'Daily WhatsApp updates', 'Fixed-price proposals'];

export default function Reviews() {
  return (
    <section id="reviews" className="section-padding bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <FadeIn className="hover-lift rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Satisfaction guaranteed</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900">Rated 5/5 by homeowners & property teams</h2>
          <p className="mt-2 text-sm text-slate-600">Written warranties and references available before you book.</p>
          <div className="mt-6 flex items-center gap-2 text-amber-400">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className="h-5 w-5 fill-current" aria-hidden />
            ))}
            <span className="text-base font-semibold text-slate-900">5.0 average on 72 reviews</span>
          </div>
          <ul className="mt-6 space-y-3 text-sm text-slate-600">
            {proofBullets.map((bullet) => (
              <li key={bullet} className="flex items-center gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-900/5 text-sm font-semibold text-slate-900">✓</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </FadeIn>
        <div className="grid gap-4 sm:grid-cols-2">
          {reviews.slice(0, 3).map((review, index) => (
            <FadeIn key={review.name} delay={index * 60} className="h-full">
              <article className="hover-lift flex h-full flex-col rounded-[1.25rem] border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">{review.role}</p>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">{review.title}</h3>
                <p className="mt-2 flex-1 text-sm text-slate-600">{review.text}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">{review.name}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
