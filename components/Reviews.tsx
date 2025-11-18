import { Star } from 'lucide-react';
import FadeIn from './FadeIn';

const reviews = [
  {
    name: 'Charlotte, SWsd',
    title: 'Flawless townhouse repaint',
    text: 'They protected our marble floors, repaired every hairline crack, and delivered the sharpest lines I have ever seen.'
  },
  {
    name: 'Ethan, Property Manager',
    title: 'Reliable partner for multi-unit works',
    text: 'Prime Coat London handles our rental refreshes with speed and consistent quality, even on tight turnarounds.'
  },
  {
    name: 'Mae, Interior Designer',
    title: 'Attention to detail rivals our studio',
    text: 'Their artisans understood the mood boards instantly and produced luxury finishes our clients love.'
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="section-padding bg-white">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">Testimonials</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold text-slate-900 sm:text-4xl">What Our Clients Say</h2>
          <p className="mt-2 text-base text-slate-600">
            Real feedback from homeowners, designers, and property teams who trust us with high-value spaces.
          </p>
        </FadeIn>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reviews.map((review, index) => (
            <FadeIn key={review.name} delay={index * 90} className="h-full">
              <article className="flex h-full flex-col rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-inner">
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4 fill-current" aria-hidden />
                  ))}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{review.title}</h3>
                <p className="mt-2 flex-1 text-sm text-slate-600">{review.text}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-500">{review.name}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
