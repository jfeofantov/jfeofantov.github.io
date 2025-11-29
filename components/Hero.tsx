import Image from 'next/image';
import FadeIn from './FadeIn';
import WhatsAppForm from './WhatsAppForm';
import { PHONE_NUMBER_LINK, buildWhatsAppLink } from '../lib/contact';

const heroImage =
  'https://static.wixstatic.com/media/38bd07_ccd50d11c4d147ddbc8d44203f1d5edf~mv2.jpg/v1/fit/w_1546,h_1172,q_90,enc_avif,quality_auto/38bd07_ccd50d11c4d147ddbc8d44203f1d5edf~mv2.jpg';
const trustBadges = [
  {
    title: '1-Year Guarantee*',
    detail: 'Signed agreement for every project'
  },
  {
    title: 'Transparent Quotations',
    detail: 'Line-by-line pricing & scope'
  },
  {
    title: 'Accredited & Insured',
    detail: 'IPAF, PASMA, £2m liability'
  }
];
const primaryCtaClasses =
  'inline-flex items-center justify-center rounded-full border border-[#c96527]/40 bg-gradient-to-r from-[#c96527] via-[#da7433] to-[#f28a48] text-white shadow-[0_25px_60px_-35px_rgba(201,101,39,0.8)] transition duration-200 hover:-translate-y-0.5 hover:brightness-110';
const heroWhatsAppLink = buildWhatsAppLink("Hi Prime Coat London, I'd like a luxury painting quote in London.");
export default function Hero() {
  return (
    <section id="hero" className="relative mx-auto min-h-[90vh] max-w-[1600px] overflow-hidden bg-white pt-[30px] text-black">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-3 px-4 pb-3 text-[0.45rem] font-semibold uppercase tracking-[0.3em] text-black/60 sm:px-6 lg:px-10">
        <Image src="/prime-coat-logo.png" alt="Prime Coat London" width={200} height={90} priority className="h-12 w-auto sm:h-14" />
        <div className="flex items-center gap-2">
          <a href={`tel:${PHONE_NUMBER_LINK}`} className="text-black/70 transition hover:text-black">
            Call: 020 8037 3201
          </a>
          <a href={heroWhatsAppLink} className={`${primaryCtaClasses} px-4 py-1.5 text-[0.5rem] font-semibold uppercase tracking-[0.3em]`}>
            Get Free Quote
          </a>
        </div>
      </div>
      <div className="mx-auto h-px w-[70%] bg-gradient-to-r from-transparent via-black/15 to-transparent" />
      <div className="relative mx-auto grid max-w-[1400px] gap-[60px] px-[50px] py-[50px] sm:px-[60px] lg:grid-cols-[0.38fr_0.62fr] lg:items-start lg:gap-[42px]">
        <FadeIn className="space-y-5">
          <div className="flex flex-col items-start gap-1 text-[7px] uppercase tracking-[0.2em] text-black/70 sm:flex-row sm:items-center sm:gap-2">
            <div className="inline-flex items-center gap-1 text-[0.58rem] font-semibold">
              <span className="text-[#34A853] text-[0.65rem]">★★★★★</span>
              <span className="text-black/80">Google Reviews</span>
            </div>
            <span className="text-[0.58rem] text-black/60">5.0 average — 72 homeowners</span>
          </div>
          <h1 className="hero-heading text-balance text-[1.7rem] font-black uppercase leading-[0.95] tracking-[0.01em] text-black sm:text-[2.8rem]">
            <span className="whitespace-nowrap">Painters &amp; Decorators</span>{' '}
            <span className="inline-flex items-center gap-2 text-[0.22em] font-semibold uppercase tracking-[0.65em] text-[#c96527]/80">
              <span className="h-[2px] w-6 bg-[#c96527]/60" aria-hidden />
              In London
              <span className="h-[2px] w-6 bg-[#c96527]/60" aria-hidden />
            </span>
          </h1>
          <p className="text-[0.95rem] leading-tight text-slate-600 w-full sm:w-11/12 sm:text-[1.1rem] sm:leading-tight">
            At Prime Coat London, we bring your vision to life with top-quality painting and decorating services. Trusted local decorators deliver
            outstanding results every time.
          </p>
          <div className="flex flex-col gap-3 pt-1 text-[10px] font-semibold uppercase tracking-[0.15em] sm:flex-row sm:items-center sm:pt-3 sm:gap-[12px]">
            <div className="flex flex-col gap-1 text-center sm:text-left sm:flex-[0.65]">
              <a
                href={heroWhatsAppLink}
                target="_blank"
                rel="noreferrer"
                className={`${primaryCtaClasses} w-full px-5 py-2.5 text-[0.6rem] font-semibold uppercase tracking-[0.3em] sm:w-auto`}
              >
                Book a Painter Decorator
              </a>
            </div>
            <div className="flex flex-col gap-1 text-center sm:text-left sm:flex-[0.35]">
              <a
                href={`tel:${PHONE_NUMBER_LINK}`}
                className="inline-flex w-full items-center justify-center rounded-full border border-black/10 bg-white px-6 py-2.5 text-black shadow-[0_12px_30px_-24px_rgba(0,0,0,0.25)] transition duration-200 hover:-translate-y-0.5 sm:w-48 sm:self-center"
              >
                Call now
              </a>
            </div>
          </div>
          <div className="mt-[30px] flex justify-center">
            <div className="flex w-full max-w-xl items-center gap-3 text-[0.58rem] font-semibold uppercase tracking-[0.35em] text-black/40">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
              Why homeowners trust us
              <span className="h-px flex-1 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
            </div>
          </div>
          <div className="mt-[40px] grid gap-3 text-black sm:mt-[40px] sm:grid-cols-3">
            {trustBadges.map((badge) => (
              <div
                key={badge.title}
                className="flex flex-col gap-1 rounded-lg border border-black/30 bg-black/85 p-3 text-left text-white shadow-[0_25px_65px_-35px_rgba(0,0,0,0.65)] backdrop-blur-sm"
              >
                <div>
                  <p className="text-xs font-semibold leading-tight text-white">{badge.title}</p>
                  <p className="mt-0.5 text-[0.5rem] text-white/70">{badge.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
        <FadeIn className="relative order-first lg:order-none">
          <div className="relative space-y-4 pb-12 lg:pb-16 lg:ml-auto lg:w-[620px]">
            <figure className="relative h-56 overflow-hidden rounded-[1rem] bg-slate-900 text-slate-900 shadow-[0_40px_90px_-40px_rgba(15,23,42,0.9)] sm:h-64 lg:mr-[24px] lg:h-[40vh]">
              <Image src={heroImage} alt="Prime Coat London project detail" fill className="object-cover" sizes="(max-width: 1600px) 100vw, 1600px" />
              <div className="absolute inset-0 rounded-[1rem] bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            </figure>
          </div>
        </FadeIn>
      </div>
      <FadeIn>
        <div className="pointer-events-auto absolute bottom-[70px] right-[200px] w-full max-w-[414px] rounded-[0.9rem] border border-white/15 bg-black/55 p-5 text-white shadow-[0_25px_65px_-35px_rgba(0,0,0,0.65)] backdrop-blur-lg">
          <div className="space-y-1.5">
            <p className="text-[0.5rem] font-semibold uppercase tracking-[0.35em] text-[#1BD741]/90">WhatsApp intake</p>
            <p className="text-[0.7rem] leading-snug text-white/85">Drop your number and we&apos;ll reply next steps in minutes.</p>
          </div>
          <WhatsAppForm
            heading=""
            description=""
            buttonLabel="Send"
            className="mt-3"
            buttonClassName="inline-flex w-full items-center justify-center rounded-full bg-[#1BD741] px-3 py-1.5 text-[0.55rem] font-semibold uppercase tracking-[0.25em] text-slate-900 shadow-[0_15px_35px_-18px_rgba(27,215,65,0.65)] transition hover:-translate-y-0.5 hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BD741]/40 disabled:opacity-70"
            compact
            appearance="dark"
            source="hero"
            idPrefix="hero-whatsapp"
          />
        </div>
      </FadeIn>
    </section>
  );
}
