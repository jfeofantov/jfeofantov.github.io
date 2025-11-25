import Image from 'next/image';
import FadeIn from './FadeIn';
import HeroBadges from './HeroBadges';

// const stats = [
//   { label: 'Restored heritage rooms', value: '120+' },
//   { label: 'Dust-free prep hours', value: '8k' },
//   { label: 'Homeowners delighted', value: '300+' }
// ];

const heroImage = '/hero-mobile.jpg'; // place the provided image in public/hero-mobile.jpg
const heroAlt = 'Prime Coat London decorator preparing a living room wall for painting';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[60vh] overflow-hidden bg-gradient-to-b from-white via-[#fff3ed] to-white sm:min-h-[75vh]"
    >
      <div className="pointer-events-none absolute inset-0 sm:hidden" aria-hidden>
        <div className="absolute inset-0 bg-white" />
        <div
          className="absolute inset-y-0 right-[-35%] w-[150%] overflow-hidden rounded-l-[6rem]"
          style={{ clipPath: 'ellipse(115% 95% at 100% 50%)' }}
        >
          <Image src={heroImage} alt={heroAlt} fill priority fetchPriority="high" className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-l from-white via-white/80 to-transparent" />
        </div>
      </div>
      <div className="pointer-events-none absolute -left-16 top-10 h-60 w-60 rounded-full bg-[#f7c4a3]/40 blur-[120px]" aria-hidden />
      <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-[#f5c084]/50 blur-[120px]" aria-hidden />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-6 px-4 pt-6 pb-8 sm:gap-10 sm:px-6 sm:pb-0 lg:flex-row lg:items-center lg:px-10">
        <FadeIn className="mx-auto w-full max-w-md space-y-6 rounded-[2rem] bg-black/5 p-6 text-left shadow-[0_25px_65px_-35px_rgba(15,23,42,0.45)] backdrop-blur-xl sm:mx-0 sm:max-w-none sm:bg-transparent sm:p-0 sm:shadow-none sm:backdrop-blur-none lg:w-1/2">
          <div className="inline-flex items-center justify-start gap-1 rounded-full bg-white/90 px-2 py-0.5 text-[7px] font-semibold uppercase tracking-[0.2em] text-slate-500">
            <span
              className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(16,185,129,0.6)]"
              aria-hidden
            />
            PAINTERS AVAILABLE 7 DAYS
          </div>
          <h1 className="text-balance text-2xl font-black leading-tight text-[#c96527] sm:text-5xl">PAINTING AND DECORATING IN LONDON</h1>
          <p className="text-[15px] leading-snug text-slate-800 sm:text-lg sm:leading-relaxed">
            At Prime Coat London, we bring your vision to life with top-quality painting and decorating services. Trusted local decorators deliver outstanding results every time.
          </p>
          <div className="space-y-4 pb-5 sm:flex sm:items-center sm:gap-4 sm:pb-8">
            <a
              href="#final-cta"
              className="inline-flex w-full items-center justify-center rounded-full border border-black/60 bg-black/90 px-5 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-white shadow-lg shadow-black/20 transition hover:bg-black sm:w-auto"
            >
              Book a painter decorator
            </a>
            <a
              href="#portfolio"
              className="inline-flex w-full items-center justify-center rounded-full border border-[#c96527]/30 bg-white/70 px-5 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#c96527] shadow-[0_10px_35px_-25px_rgba(15,23,42,0.8)] transition hover:bg-white sm:w-auto"
            >
              View recent work
            </a>
          </div>
          <div className="lg:hidden">
            <HeroBadges embedded />
          </div>
        </FadeIn>
        <FadeIn className="relative hidden justify-center lg:flex lg:w-1/2" delay={120}>
          <div className="relative w-full max-w-sm">
              <Image
                src={heroImage}
                alt={heroAlt}
                width={600}
                height={720}
                className="rounded-[2.5rem] object-cover shadow-[0_35px_70px_-50px_rgba(15,23,42,0.8)]"
                priority
                fetchPriority="high"
                sizes="(max-width:1024px) 80vw, 600px"
              />
            <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] border border-white/60" aria-hidden />
          </div>
        </FadeIn>
      </div>
      <div className="hidden px-4 pb-10 lg:block">
        <HeroBadges className="mx-auto max-w-4xl" />
      </div>
    </section>
  );
}
