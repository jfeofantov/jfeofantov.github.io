import { Brush, Building, Droplets, Hammer, Paintbrush, Sparkles } from 'lucide-react';
import FadeIn from './FadeIn';

const offerings = [
  {
    title: 'Interior painting & decorating',
    description: 'Walls, ceilings, trim, and bespoke joinery finished with low-VOC systems matched to your palette.',
    details: ['Two-coat systems & snag-free handover', 'Colour sampling and sheen recommendations', 'Nightly tidy downs so you can live around us'],
    icon: Paintbrush
  },
  {
    title: 'Plaster & surface repairs',
    description: 'From skim coats to cornice restoration, we repair surfaces before a brush ever lifts.',
    details: ['Moisture readings & substrate reports', 'Crack stitching and skim coating', 'Heritage cornice & moulding replication'],
    icon: Hammer
  },
  {
    title: 'Cabinet & furniture spraying',
    description: 'Kitchen, wardrobe, and bespoke joinery spraying with lacquer-quality finishes.',
    details: ['Dedicated spray booth setups', 'Labelled dismantle & reinstall', 'Durable lacquers & enamel systems'],
    icon: Sparkles
  },
  {
    title: 'Wallpaper & feature walls',
    description: 'Hand-cut wallpaper, mural installations, and colour-drench feature rooms.',
    details: ['Pattern matching & panel detailing', 'Lining paper & surface prep included', 'Weekend turnarounds available'],
    icon: Brush
  },
  {
    title: 'Exterior refresh & protection',
    description: 'Render, stucco, windows, and ironmongery restored with weather-ready coatings.',
    details: ['Scaffold & access coordinated', 'Flexible working hours for facades', 'Masonry, timber, and metal systems'],
    icon: Building
  },
  {
    title: 'Moisture & mould solutions',
    description: 'Breathable paints, anti-mould primers, and ventilation upgrades for kitchens, baths & basements.',
    details: ['Root-cause moisture diagnostics', 'Anti-microbial coatings', 'Aftercare guidance & maintenance visits'],
    icon: Droplets
  }
];

export default function ServiceHighlights() {
  return (
    <section id="services" className="section-padding bg-slate-50/80">
      <div className="mx-auto max-w-6xl space-y-10">
        <FadeIn className="space-y-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Services</p>
          <h2 className="text-balance text-3xl font-semibold text-slate-900 sm:text-4xl">Painters & decorators in London for every finish</h2>
          <p className="text-base text-slate-600">
            From plaster repairs to final touch-ups, Prime Coat London sends tidy, DBS-checked crews so you do not have to juggle multiple
            trades.
          </p>
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-2">
          {offerings.map(({ title, description, details, icon: Icon }, index) => (
            <FadeIn key={title} delay={index * 60}>
              <article className="hover-lift flex h-full flex-col gap-4 rounded-[1.5rem] border border-slate-200 bg-white p-6 text-left shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-900">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                </div>
                <p className="text-sm text-slate-600">{description}</p>
                <ul className="space-y-2 text-sm text-slate-600">
                  {details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900" aria-hidden />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
