import { Building2, Droplets, Paintbrush, ShieldCheck } from 'lucide-react';
import FadeIn from './FadeIn';

const offerings = [
  {
    title: 'Interior painting',
    description: 'Hand-brushed or spray-finished walls, ceilings, trim, wardrobes, and built-ins with gallery edges.',
    details: ['Colour mockups + samples', 'Designer-approved eco paints'],
    icon: Paintbrush
  },
  {
    title: 'Exterior painting',
    description: 'Sash windows, render, balconies, and metalwork restored with scaffold coordination and compliance paperwork.',
    details: ['Weather monitoring + reports', 'Warranty against peeling'],
    icon: Building2
  },
  {
    title: 'Wallpaper removal + installation',
    description: 'Careful stripping, lining, moisture readings, and seamless relining or mural installation for feature walls.',
    details: ['Steam-free removal', 'Pattern matched + documented'],
    icon: ShieldCheck
  },
  {
    title: 'Mould + damp treatment',
    description: 'Survey-led treatment with breathable systems, ventilation advice, and aftercare to keep kitchens and baths healthy.',
    details: ['Thermal imaging add-ons', 'Anti-mould maintenance plan'],
    icon: Droplets
  }
];

export default function ServiceHighlights() {
  return (
    <section id="services" className="section-padding bg-slate-50">
      <div className="mx-auto max-w-6xl space-y-10">
        <FadeIn className="space-y-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Signature services</p>
          <h2 className="text-balance text-3xl font-semibold text-slate-900 sm:text-4xl">Interior & exterior expertise under one roof.</h2>
          <p className="text-base text-slate-600">Every crew arrives with the right primers, dust-free prep gear, and finish schedules for your property type.</p>
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-2">
          {offerings.map(({ title, description, details, icon: Icon }, index) => (
            <FadeIn key={title} delay={index * 60}>
              <article className="hover-lift flex h-full flex-col gap-4 rounded-[1.5rem] border border-slate-200 bg-white p-6 text-left shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                </div>
                <p className="text-base text-slate-600">{description}</p>
                <ul className="space-y-2 text-sm text-slate-600">
                  {details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600" aria-hidden />
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
