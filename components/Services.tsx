import Image from 'next/image';
import { Brush, Building, Droplets, Hammer, ShieldCheck, Sparkles } from 'lucide-react';
import FadeIn from './FadeIn';

type Service = {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  details: string[];
};

const services: Service[] = [
  {
    title: 'Interior repainting',
    description: 'Flawless walls, ceilings, and trim with low-VOC systems matched to your palette.',
    icon: Brush,
    details: ['Colour sampling & procurement', 'Dust-free sanding & skim patching', 'Two-coat premium finish']
  },
  {
    title: 'Exterior restoration',
    description: 'Weather-ready coatings for stucco, brick, windows, and decorative ironwork.',
    icon: Building,
    details: ['Partnerships with scaffold firms', 'Masonry repairs & sealing', 'Anti-fungal coastal systems']
  },
  {
    title: 'Wallpaper & mural works',
    description: 'Strip, skim, and relaunch feature walls with bespoke coverings or Venetian plaster.',
    icon: Sparkles,
    details: ['Steam or dry removal', 'Surface balancing skim coats', 'Hand-applied decorative finishes']
  },
  {
    title: 'Moisture & mould treatment',
    description: 'Diagnosis, remediation, and breathable coatings to keep kitchens and baths healthy.',
    icon: Droplets,
    details: ['Cause tracking & ventilation plan', 'Anti-microbial priming', 'Humidity monitoring guides']
  },
  {
    title: 'Plaster & cornice repair',
    description: 'From hairline cracks to full ceilings, we restore perfectly smooth substrates.',
    icon: Hammer,
    details: ['Lime & gypsum options', 'Cornice replication & casting', 'Laser-level skim finishing']
  },
  {
    title: 'Protective coatings & sealers',
    description: 'Staircases, bannisters, and joinery sealed for heavy daily use.',
    icon: ShieldCheck,
    details: ['Oil-to-water conversions', 'Sprayed or brushed application', 'Maintenance care notes']
  }
];

const serviceImages = [
  {
    src: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80',
    alt: 'Bespoke lounge redecorated by Prime Coat'
  },
  {
    src: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80',
    alt: 'Feature wall and cabinetry refinishing'
  },
  {
    src: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=900&q=80',
    alt: 'High-end dining space after repaint'
  }
];

export default function Services() {
  return (
    <section id="services" className="section-padding relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0B2545]/5 to-transparent" aria-hidden />
      <div className="pointer-events-none absolute inset-y-20 right-[-10%] h-64 w-64 rounded-full bg-[radial-gradient(circle,_rgba(11,37,69,0.15),_transparent_65%)] blur-3xl" aria-hidden />
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <FadeIn className="flex flex-col gap-4 text-center lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">Services</p>
            <h2 className="text-balance text-3xl font-semibold text-slate-900 sm:text-4xl">Painting & Decorating Services</h2>
            <p className="text-base text-slate-600">
              Built for busy property managers and design-led homeowners who demand polished finishes without project headaches.
            </p>
          </FadeIn>
          <FadeIn className="grid gap-4 sm:grid-cols-2" delay={120}>
            {serviceImages.map((image, index) => (
              <div
                key={image.src}
                className={`relative h-48 overflow-hidden rounded-[1.5rem] border border-white/50 shadow-[0_35px_90px_-60px_rgba(15,23,42,0.9)] ${index === 1 ? 'sm:row-span-2 sm:h-full sm:min-h-[14rem]' : ''}`}
              >
                <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="(max-width:768px) 100vw, 300px" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" aria-hidden />
              </div>
            ))}
          </FadeIn>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, details, icon: Icon }, index) => (
            <FadeIn key={title} delay={index * 50} className="h-full">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/60 bg-white/90 p-6 text-left shadow-[0_30px_80px_-55px_rgba(15,23,42,0.85)] transition duration-300 hover:-translate-y-1 hover:border-[#C0583A]/40 hover:bg-white">
                <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0B2545]/2 via-transparent to-[#C0583A]/10" />
                </div>
                <div className="relative flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900/5 text-slate-900 transition duration-300 group-hover:bg-[#0B2545]/10 group-hover:text-[#0B2545]">
                    <Icon className="h-5 w-5 transition duration-300 group-hover:scale-110" aria-hidden />
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-400 transition duration-300 group-hover:text-[#C0583A]">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="relative mt-4 text-lg font-semibold text-slate-900 transition duration-300 group-hover:text-[#0B2545]">{title}</h3>
                <p className="relative mt-2 text-sm text-slate-600 transition duration-300 group-hover:text-slate-700">{description}</p>
                <ul className="relative mt-4 space-y-2 text-sm text-slate-600">
                  {details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900 transition duration-300 group-hover:bg-[#C0583A]" aria-hidden />
                      <span className="transition duration-300 group-hover:text-slate-700">{detail}</span>
                    </li>
                  ))}
                </ul>
                <div className="relative mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 transition duration-300 group-hover:text-[#C0583A]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C0583A] transition duration-300 group-hover:scale-125" aria-hidden />
                  Bookable within 7 days
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="mt-12 grid gap-5 rounded-[1.9rem] border border-slate-100 bg-white/90 p-6 text-left shadow-[0_40px_95px_-60px_rgba(15,23,42,0.8)] sm:grid-cols-[2fr_1fr] sm:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Need something bespoke?</p>
            <h3 className="mt-2 text-2xl font-semibold text-slate-900">Send us a mood board or architect pack.</h3>
            <p className="mt-1 text-sm text-slate-600">
              We coordinate directly with designers to match finishes across joinery, metalwork, and feature walls.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:items-end">
            <a
              href="https://wa.me/447700123456?text=Hi%20Prime%20Coat%20London,%20let%E2%80%99s%20talk%20about%20my%20project."
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              target="_blank"
              rel="noreferrer"
            >
              Message on WhatsApp
            </a>
            <a
              href="mailto:hello@primecoatlondon.com"
              className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 underline underline-offset-4"
            >
              email plans
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
