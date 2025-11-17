'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import FadeIn from './FadeIn';

const projects = [
  {
    title: 'Chelsea Townhouse Lounge',
    before: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80',
    after: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80',
    detail: 'We resurfaced cracked plaster, layered Farrow & Ball tones, and hand-finished bespoke cabinetry.'
  },
  {
    title: 'Shoreditch Creative Studio',
    before: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80',
    after: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=900&q=80',
    detail: 'Acoustic panels, anti-scuff coatings, and branded feature walls delivered on a two-day turnaround.'
  },
  {
    title: 'Richmond Family Kitchen',
    before: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80',
    after: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=900&q=80',
    detail: 'Moisture-block primers and scrub-resistant enamels keep this busy kitchen fresh for years.'
  }
];

export default function BeforeAfter() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollRef.current;
    if (!container) return;
    const offset = direction === 'left' ? -360 : 360;
    container.scrollBy({ left: offset, behavior: 'smooth' });
  };

  return (
    <section id="projects" className="section-padding bg-slate-50">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">Before & After</p>
            <h2 className="text-balance text-3xl font-semibold text-slate-900 sm:text-4xl">Proof in Every Transformation</h2>
            <p className="mt-2 text-base text-slate-600">
              Slide through recent projects to see how meticulous prep and finishing redefine each space.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => scroll('left')}
              className="rounded-full border border-slate-200 p-3 text-slate-600 transition hover:border-slate-900 hover:text-slate-900"
              aria-label="Scroll previous project"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              className="rounded-full border border-slate-200 p-3 text-slate-600 transition hover:border-slate-900 hover:text-slate-900"
              aria-label="Scroll next project"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </FadeIn>
        <div ref={scrollRef} className="mt-10 flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory" aria-label="Before and after gallery">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 120} className="min-w-[85vw] flex-1 snap-start sm:min-w-[360px]">
              <article className="rounded-3xl border border-white/60 bg-white p-6 shadow-subtle">
                <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{project.detail}</p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <figure className="relative h-48 overflow-hidden rounded-2xl">
                    <Image src={project.before} alt={`${project.title} before`} fill className="object-cover" sizes="(max-width: 768px) 80vw, 300px" />
                    <figcaption className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700">
                      Before
                    </figcaption>
                  </figure>
                  <figure className="relative h-48 overflow-hidden rounded-2xl">
                    <Image src={project.after} alt={`${project.title} after`} fill className="object-cover" sizes="(max-width: 768px) 80vw, 300px" />
                    <figcaption className="absolute left-3 top-3 rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
                      After
                    </figcaption>
                  </figure>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
