import FadeIn from './FadeIn';

export default function FinalCTA() {
  return (
    <section id="final-cta" className="section-padding bg-slate-900 text-white">
      <FadeIn className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/60">Let’s Talk</p>
        <h2 className="mt-4 text-balance text-3xl font-semibold sm:text-4xl">Ready to Transform Your Home?</h2>
        <p className="mt-3 text-balance text-base text-white/80">
          Share your project photos, schedule a same-week walk-through, or ring us for immediate assistance.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href="https://wa.me/447700123456?text=Hi%20Prime%20Coat%20London,%20let%E2%80%99s%20plan%20my%20project."
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
          <a
            href="tel:+442036950210"
            className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
          >
            Phone
          </a>
          <a
            href="mailto:hello@primecoatlondon.com?subject=Book%20a%20site%20visit"
            className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
          >
            Book Visit
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
