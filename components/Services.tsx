import FadeIn from './FadeIn';

const services = [
  {
    title: 'Interior Painting',
    description: 'Immaculate walls, ceilings, and trim with colour consultation included.'
  },
  {
    title: 'Exterior Painting',
    description: 'Weather-ready coatings for stucco, brick, and timber with scaffold partners.'
  },
  {
    title: 'Wallpaper Removal',
    description: 'Steam-assisted stripping and skim coats that prep surfaces for flawless paint.'
  },
  {
    title: 'Mold Treatment',
    description: 'Remediation, stain-block primers, and ventilation advice to keep rooms healthy.'
  },
  {
    title: 'Plaster Repair',
    description: 'From small cracks to full re-plastering, we restore perfectly smooth surfaces.'
  },
  {
    title: 'Feature Walls',
    description: 'Microcement, Venetian plaster, and statement colours applied with artisan care.'
  }
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="flex flex-col gap-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">Services</p>
          <h2 className="text-balance text-3xl font-semibold text-slate-900 sm:text-4xl">Painting & Decorating Services</h2>
          <p className="mx-auto max-w-3xl text-base text-slate-600">
            Built for busy property managers and design-led homeowners who demand polished finishes without project headaches.
          </p>
        </FadeIn>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description }, index) => (
            <FadeIn key={title} delay={index * 60} className="h-full">
              <article className="card-shadow flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 text-left">
                <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
                <p className="mt-3 flex-1 text-sm text-slate-600">{description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="mt-10 flex justify-center">
          <a
            href="#services"
            className="inline-flex items-center rounded-full border border-slate-900 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-900 hover:text-white"
          >
            View All Services
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
