'use client';

import Image from 'next/image';
import { useState } from 'react';
import { X } from 'lucide-react';
import FadeIn from './FadeIn';

const portfolioProjects = [
  {
    title: 'Belgravia Drawing Room',
    location: 'Belgravia, SW1',
    scope: 'Heritage repaint & plaster repair',
    turnaround: '9 days',
    before: 'https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=900&q=80',
    after: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80',
    result:
      'Far-reaching cracks were stitched, skimmed, and finished with layered off-whites for a calm, gallery-grade finish.',
    highlights: ['Colour testing with natural-light swatches', 'Dustless sanding with HEPA capture', 'Heritage cornice replication']
  },
  {
    title: 'Marylebone Kitchen Diner',
    location: 'Marylebone, W1',
    scope: 'Cabinet refinishing & protection',
    turnaround: '6 days',
    before: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80',
    after: 'https://images.unsplash.com/photo-1505692794400-0296f8e87cc0?auto=format&fit=crop&w=900&q=80',
    result: 'Degreased cabinets, sprayed satin top coats, and fresh enamel trims keep this kitchen brighter for longer.',
    highlights: ['All cabinetry dismantled & labelled', 'Oil-blocking primer & enamel finish', 'Child-safe, low-VOC products']
  },
  {
    title: 'Shoreditch Creative Loft',
    location: 'Shoreditch, E2',
    scope: 'Feature wall & ceiling refresh',
    turnaround: '4 days',
    before: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    after: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=900&q=80',
    result: 'Colour drenched accent wall with clean ceiling respray to make filming sessions punchy on camera.',
    highlights: ['Brand colour sampling with client team', 'Acoustic panel masking', 'Weekend turnaround']
  }
] as const;

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState<(typeof portfolioProjects)[number] | null>(null);

  const openProject = (project: (typeof portfolioProjects)[number]) => setActiveProject(project);
  const closeProject = () => setActiveProject(null);

  const handleKeyOpen = (event: React.KeyboardEvent<HTMLElement>, project: (typeof portfolioProjects)[number]) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openProject(project);
    }
  };

  return (
    <section id="portfolio" className="section-padding bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white">
      <div className="mx-auto max-w-6xl space-y-8">
        <FadeIn className="space-y-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-300">Portfolio</p>
          <h2 className="text-balance text-3xl font-semibold sm:text-4xl">London spaces before &amp; after Prime Coat</h2>
          <p className="mx-auto max-w-2xl text-sm sm:text-base text-slate-300">
            Each project balances technical prep with an eye for proportion. Tap any story to zoom into the full project notes.
          </p>
        </FadeIn>
        <div className="grid gap-6 lg:grid-cols-3">
          {portfolioProjects.map((project, index) => (
            <FadeIn
              key={project.title}
              delay={index * 120}
              className="flex flex-col rounded-[1.75rem] border border-white/10 bg-white/95 p-5 shadow-[0_25px_65px_-35px_rgba(15,23,42,0.9)] text-slate-900"
              role="button"
              tabIndex={0}
              aria-haspopup="dialog"
              aria-label={`View details for ${project.title}`}
              onClick={() => openProject(project)}
              onKeyDown={(event) => handleKeyOpen(event, project)}
            >
              <div className="space-y-1">
                <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-500">
                  <span>{project.location}</span>
                  <span>{project.turnaround}</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
                <p className="text-sm text-slate-600">{project.scope}</p>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <figure className="relative h-40 overflow-hidden rounded-2xl border border-slate-100">
                  <Image
                    src={project.before}
                    alt={`${project.title} before`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 80vw, 280px"
                  />
                  <figcaption className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700">
                    Before
                  </figcaption>
                </figure>
                <figure className="relative h-40 overflow-hidden rounded-2xl border border-slate-100">
                  <Image
                    src={project.after}
                    alt={`${project.title} after`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 80vw, 280px"
                  />
                  <figcaption className="absolute left-3 top-3 rounded-full bg-slate-900/90 px-3 py-1 text-xs font-semibold text-white">
                    After
                  </figcaption>
                </figure>
              </div>
              <p className="mt-4 flex-1 text-sm text-slate-600">{project.result}</p>
              <div className="mt-4 flex items-center justify-between rounded-2xl border border-slate-100/80 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                <span>Project sign-off</span>
                <span>100% snag-free</span>
              </div>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Tap to open story</p>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="text-center">
          <a
            href="#final-cta"
            className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-white/10"
          >
            Book a site survey
          </a>
        </FadeIn>
      </div>
      {activeProject ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/70 px-4 py-10"
          role="dialog"
          aria-modal="true"
          aria-labelledby="portfolio-dialog-title"
          onClick={closeProject}
        >
          <div
            className="relative w-full max-w-3xl rounded-[2rem] border border-white/30 bg-white p-6 text-slate-900 shadow-[0_35px_85px_-45px_rgba(15,23,42,0.95)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeProject}
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-slate-900 hover:text-slate-900"
              aria-label="Close portfolio details"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="space-y-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-500">{activeProject.location}</p>
              <h3 id="portfolio-dialog-title" className="text-2xl font-semibold text-slate-900">
                {activeProject.title}
              </h3>
              <p className="text-sm text-slate-600">{activeProject.scope}</p>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <figure className="relative h-52 overflow-hidden rounded-2xl border border-slate-100">
                <Image
                  src={activeProject.before}
                  alt={`${activeProject.title} before`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 320px"
                />
                <figcaption className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700">
                  Before
                </figcaption>
              </figure>
              <figure className="relative h-52 overflow-hidden rounded-2xl border border-slate-100">
                <Image
                  src={activeProject.after}
                  alt={`${activeProject.title} after`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 320px"
                />
                <figcaption className="absolute left-4 top-4 rounded-full bg-slate-900/90 px-3 py-1 text-xs font-semibold text-white">
                  After
                </figcaption>
              </figure>
            </div>
            <div className="mt-5 space-y-3">
              <p className="text-base text-slate-600">{activeProject.result}</p>
              <div className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Site notes</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
                  {activeProject.highlights.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
