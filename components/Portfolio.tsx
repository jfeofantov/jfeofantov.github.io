import FadeIn from './FadeIn';
import { ImageComparisonSlider } from './ui/image-comparison-slider';
import { buildWhatsAppLink } from '../lib/contact';

const projects = [
  {
    title: 'Belgravia townhouse',
    location: 'SW1',
    scope: 'Colour-drenched reception rooms + bespoke joinery respray',
    duration: '8 days',
    focus: 'Interior painting',
    before: '/before-1600.jpg',
    after: '/after-1600.jpg'
  },
  {
    title: 'Chelsea penthouse',
    location: 'SW3',
    scope: 'Wallpaper removal, Venetian plaster, and gallery-white ceilings',
    duration: '7 days',
    focus: 'Wallpaper removal + interiors',
    before: '/before-optim.jpg',
    after: '/after-optim.jpg'
  },
  {
    title: 'Kensington exterior',
    location: 'W8',
    scope: 'Render repair, sash repaint, damp treatment, ironmongery refresh',
    duration: '6 days',
    focus: 'Exterior painting + mould treatment',
    before: '/before.JPG',
    after: '/after.JPG'
  }
];

const portfolioWhatsAppLink = buildWhatsAppLink("Hi Prime Coat London, can you share more of your recent painting projects in London?");

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="mx-auto max-w-6xl space-y-8">
        <FadeIn className="space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Before + After Gallery</p>
          <h2 className="text-balance text-3xl font-semibold text-slate-900 sm:text-4xl">Dust-free prep, luxury finishes.</h2>
          <p className="text-base text-slate-600">Interiors, exteriors, wallpaper removal, and mould treatment shown exactly as we hand them over.</p>
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 80}>
              <article className="hover-lift flex h-full flex-col rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm">
                <div className="rounded-2xl border border-slate-100 bg-white p-2">
                  <ImageComparisonSlider
                    leftImage={project.before}
                    rightImage={project.after}
                    altLeft={`Before ${project.title}`}
                    altRight={`After ${project.title}`}
                    className="h-[240px] rounded-xl"
                    loading="lazy"
                  />
                </div>
                <div className="mt-3 space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">{project.location} · {project.focus}</p>
                  <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>
                  <p className="text-sm text-slate-600">{project.scope}</p>
                </div>
                <div className="mt-auto flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-3 py-2 text-sm text-slate-700">
                  <span>Duration: {project.duration}</span>
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-blue-700">
                    Clean handover
                  </span>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href={portfolioWhatsAppLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-blue-700"
          >
            See live updates on WhatsApp
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-900"
          >
            Request a similar finish
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
