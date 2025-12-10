import Link from 'next/link';
import FadeIn from './FadeIn';
import { boroughPages } from '../lib/boroughs';
import { ArrowUpRight } from 'lucide-react';
import { buildWhatsAppLink } from '../lib/contact';

const boroughWhatsAppLink = buildWhatsAppLink('Hi Prime Coat London, can we talk about services in my borough?');

export default function BoroughShowcase() {
  return (
    <section id="boroughs" className="section-padding bg-slate-50">
      <div className="mx-auto max-w-6xl space-y-8">
        <FadeIn className="space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Borough pages</p>
          <h2 className="text-balance text-3xl font-semibold text-slate-900 sm:text-4xl">Hyper-local teams for every borough we serve.</h2>
          <p className="text-base text-slate-600">Explore city-specific programmes for homeowners, landlords, and property managers—from Chelsea townhouses to Canary Wharf rentals.</p>
        </FadeIn>
        <div className="grid gap-5 lg:grid-cols-2">
          {boroughPages.map((borough, index) => (
            <FadeIn key={borough.slug} delay={index * 40}>
              <article className="flex h-full flex-col rounded-[1.5rem] border border-slate-200 bg-white px-5 py-6 text-left shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">{borough.serviceFocus}</p>
                    <h3 className="text-2xl font-semibold text-slate-900">{borough.name}</h3>
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[0.65rem] uppercase tracking-[0.3em] text-slate-500">
                    {borough.stat.value}
                  </span>
                </div>
                <p className="mt-3 text-sm text-slate-600">{borough.headline}</p>
                <p className="mt-2 text-sm text-slate-600">{borough.intro}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {borough.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1 w-8 rounded-full bg-blue-200" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href={`/boroughs/${borough.slug}`}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-900 transition hover:border-slate-300"
                  >
                    View page
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                  <a
                    href={boroughWhatsAppLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white transition hover:bg-blue-700"
                  >
                    WhatsApp us
                  </a>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
