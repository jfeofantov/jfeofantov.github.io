import { Brush, Building, Droplets, Hammer, Paintbrush, Sparkles } from 'lucide-react';
import FadeIn from './FadeIn';

const offerings = [
  {
    title: 'Interiors',
    description: 'Walls, ceilings, trim, and feature walls finished with clean lines.',
    details: ['Colour sampling help', 'Low-VOC, low-odour systems'],
    icon: Paintbrush
  },
  {
    title: 'Repairs before paint',
    description: 'Plaster patches, caulking, and sanding so the finish stays smooth.',
    details: ['Crack repair & skim coat', 'Dust-free sanding'],
    icon: Hammer
  },
  {
    title: 'Spraying & woodwork',
    description: 'Kitchens, wardrobes, and bespoke joinery sprayed for a factory feel.',
    details: ['Lacquer-grade finishes', 'Labelled dismantle & reinstall'],
    icon: Sparkles
  },
  {
    title: 'Wallpaper & murals',
    description: 'Pattern matching and feature walls that sit perfectly square.',
    details: ['Lining paper included', 'Weekend turnarounds'],
    icon: Brush
  },
  {
    title: 'Exteriors',
    description: 'Render, sash windows, and metalwork weather-protected for years.',
    details: ['Access coordinated', 'Masonry, timber, and metal systems'],
    icon: Building
  },
  {
    title: 'Damp & mould',
    description: 'Breathable paints and anti-mould primers for kitchens, baths, and basements.',
    details: ['Moisture checks', 'Aftercare guidance'],
    icon: Droplets
  }
];

export default function ServiceHighlights() {
  return (
    <section id="services" className="section-padding bg-slate-50/80">
      <div className="mx-auto max-w-6xl space-y-10">
        <FadeIn className="space-y-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Services</p>
          <h2 className="text-balance text-3xl font-semibold text-slate-900 sm:text-4xl">What we paint (and protect) daily.</h2>
          <p className="text-base text-slate-600">Select the finish you need and we will size the visit and lock a start date.</p>
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
