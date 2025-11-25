import FadeIn from './FadeIn';
import WhatsAppForm from './WhatsAppForm';

const sellingPoints = ['Small jobs & large projects', 'Fixed price estimates available', 'Guarantee on workmanship', 'Fully insured & vetted painters', 'Eco-friendly paints & materials'];

export default function NeedPainter() {
  return (
    <section className="section-padding">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <FadeIn className="space-y-5 text-center sm:space-y-6 lg:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#c96527]">Need a painter next day?</p>
          <h2 className="text-xl font-semibold text-slate-900 sm:text-3xl">Professional painters ready to transform your property.</h2>
          <ul className="mt-4 space-y-3 px-4 text-left text-sm text-slate-700 sm:px-0">
            {sellingPoints.map((point) => (
              <li key={point} className="flex items-center gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#ffe7d4] text-sm font-semibold text-[#c96527]">✓</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div className="space-y-4">
            <a
              href="#final-cta"
              className="inline-flex w-full items-center justify-center rounded-full border border-black/60 bg-black/90 px-5 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-white shadow-lg shadow-black/20 transition hover:bg-black sm:w-auto"
            >
              Book a painter decorator
            </a>
          </div>
        </FadeIn>
        <FadeIn className="rounded-[2rem] border border-white/70 bg-white p-6 text-left shadow-[0_25px_90px_-60px_rgba(15,23,42,0.8)]">
          <WhatsAppForm
            source="need-painter"
            idPrefix="need-painter"
            heading="Prefer WhatsApp?"
            headingClassName="text-xs font-semibold uppercase tracking-[0.35em] text-[#c96527]"
            description="Leave your number and our project manager will call or message you back the same day."
            descriptionClassName="mt-2 text-base text-slate-600"
            buttonLabel="Start conversation"
          />
        </FadeIn>
      </div>
    </section>
  );
}
