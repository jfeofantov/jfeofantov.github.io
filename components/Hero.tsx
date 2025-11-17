import Image from 'next/image';
import FadeIn from './FadeIn';

const badges = ['Fully Insured', 'Professional Finish', 'Fast Scheduling', '5-Star Service'];

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-slate-50">
      <div className="pointer-events-none absolute inset-x-0 top-[-18rem] h-[28rem] bg-gradient-to-b from-slate-200/60 to-transparent blur-3xl" />
      <div className="section-padding relative mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-center">
        <FadeIn className="flex-1 space-y-6 text-center lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
            Prime Coat London
          </p>
          <h1 className="text-balance text-3xl font-semibold text-slate-900 sm:text-5xl lg:text-6xl">
            London’s Trusted Painting & Decorating Specialists
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-600 lg:mx-0">
            Bespoke residential and commercial decorating with flawless finishes, ultra-clean job sites, and punctual teams who respect your schedule.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="https://wa.me/447700123456?text=Hi%20Prime%20Coat%20London,%20I%20need%20a%20painting%20quote."
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
              target="_blank"
              rel="noreferrer"
            >
              Get Free Quote
            </a>
            <a
              href="#final-cta"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-medium text-slate-900 transition hover:border-slate-900"
            >
              Book a Site Visit
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-3 pt-4 lg:justify-start">
            {badges.map((badge, index) => (
              <FadeIn key={badge} delay={100 * index} className="inline-block">
                <span className="inline-flex items-center rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-500 shadow-sm">
                  {badge}
                </span>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
        <FadeIn className="flex-1" delay={200}>
          <div className="relative h-80 w-full overflow-hidden rounded-3xl bg-white shadow-subtle sm:h-[28rem]">
            <Image
              src="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80"
              alt="Prime Coat London decorator completing a feature wall"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-4 rounded-3xl border border-white/50" aria-hidden />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
