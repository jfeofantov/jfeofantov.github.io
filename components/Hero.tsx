import Image from 'next/image';
import FadeIn from './FadeIn';

const badges = [
  'Colour Consultations',
  'Dust-Free Sanding',
  'Premium Pigments',
  'On-Schedule Delivery'
];

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute -left-16 top-10 h-64 w-64 rounded-full bg-brand-accent/30 blur-[120px]" aria-hidden />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-amber-200/20 blur-[120px]" aria-hidden />
      <div className="section-padding relative mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-center">
        <FadeIn className="flex-1 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/70 lg:justify-start">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" aria-hidden />
            Prime Coat London
          </div>
          <h1 className="text-balance text-3xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Bespoke <span className="bg-gradient-to-r from-brand-accent to-amber-300 bg-clip-text text-transparent">Painting & Decorating</span> for Design-Led Spaces
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/70 lg:mx-0">
            We blend architectural precision with artisan finishes—bold feature walls, low-VOC systems, and immaculate surfaces that elevate every interior.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="https://wa.me/447700123456?text=Hi%20Prime%20Coat%20London,%20I%20need%20a%20painting%20quote."
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90"
              target="_blank"
              rel="noreferrer"
            >
              Book a Colour Audit
            </a>
            <a
              href="#final-cta"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
            >
              Discuss Your Project
            </a>
          </div>
          <div className="grid gap-4 pt-4 text-left sm:grid-cols-2">
            <FadeIn delay={100} className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">Featured</p>
              <p className="text-lg font-semibold">Microcement, Venetian plaster, bespoke palettes</p>
            </FadeIn>
            <FadeIn delay={200} className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">Lead Time</p>
              <p className="text-lg font-semibold">Site-ready crews in as little as 7 days</p>
            </FadeIn>
          </div>
          <div className="flex flex-wrap justify-center gap-3 pt-6 lg:justify-start">
            {badges.map((badge, index) => (
              <FadeIn key={badge} delay={120 * index} className="inline-block">
                <span className="inline-flex items-center rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/80">
                  {badge}
                </span>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
        <FadeIn className="flex-1" delay={200}>
          <div className="relative h-96 w-full overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-1 shadow-[0_25px_60px_-25px_rgba(0,0,0,0.6)]">
            <div className="relative h-full w-full overflow-hidden rounded-[2rem]">
              <Image
                src="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80"
                alt="Prime Coat artisan applying accent colour on feature wall"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-950/60" aria-hidden />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.35em] text-white/60">Signature finish</p>
                <p className="text-lg font-semibold text-white">Paint + texture systems curated for luxury interiors</p>
              </div>
            </div>
            <div className="absolute -right-3 top-8 hidden w-36 rotate-6 rounded-2xl border border-white/10 bg-white/5 p-3 text-sm font-semibold text-white shadow-lg md:block">
              <p className="text-xs uppercase tracking-[0.35em] text-brand-accent">2024</p>
              <p>32 feature walls delivered in vibrant accent tones</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
