import FadeIn from './FadeIn';
import { ImageComparisonSlider } from './ui/image-comparison-slider';
import { buildWhatsAppLink } from '../lib/contact';

const projects = [
  {
    title: 'Belgravia townhouse',
    location: 'SW1',
    scope: 'Plaster repairs and colour-drench living spaces',
    duration: '8 days',
    before: '/before.JPG',
    after: '/after.JPG'
  },
  {
    title: 'Chelsea flat',
    location: 'SW3',
    scope: 'Feature walls, enamel woodwork, snag-free final walk',
    duration: '5 days',
    before: '/before.JPG',
    after: '/after.JPG'
  },
  {
    title: 'Kensington exterior',
    location: 'W8',
    scope: 'Render repair, sash repaint, and ironmongery refresh',
    duration: '6 days',
    before: '/before.JPG',
    after: '/after.JPG'
  }
];

const portfolioWhatsAppLink = buildWhatsAppLink("Hi Prime Coat London, can you share more of your recent painting projects in London?");

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-padding bg-slate-50/70">
      <div className="mx-auto max-w-6xl space-y-8">
        <FadeIn className="space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Portfolio</p>
          <h2 className="text-balance text-3xl font-semibold text-slate-900 sm:text-4xl">Recent before-and-afters</h2>
          <p className="text-base text-slate-600">A quick look at the clean handovers clients book us for.</p>
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 80}>
              <article className="hover-lift flex h-full flex-col rounded-[1.25rem] border border-slate-200 bg-white p-4 shadow-sm">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-2">
                  <ImageComparisonSlider
                    leftImage={project.before}
                    rightImage={project.after}
                    altLeft={`Before ${project.title}`}
                    altRight={`After ${project.title}`}
                    className="h-[220px] rounded-lg"
                    loading="lazy"
                  />
                </div>
                <div className="mt-3 space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">{project.location}</p>
                  <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>
                  <p className="text-sm text-slate-600">{project.scope}</p>
                </div>
                <div className="mt-auto flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">
                  <span>Duration: {project.duration}</span>
                  <span className="rounded-full bg-white px-2 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-slate-700">
                    Clean handover
                  </span>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-amber-600"
          >
            Request a similar finish
          </a>
          <a
            href={portfolioWhatsAppLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-amber-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-700 transition hover:bg-amber-500 hover:text-white"
          >
            See more on WhatsApp
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
