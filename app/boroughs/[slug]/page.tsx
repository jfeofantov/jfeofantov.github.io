import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, MessageCircle } from 'lucide-react';
import { boroughPages, getBoroughBySlug } from '../../../lib/boroughs';
import { buildWhatsAppLink, PHONE_NUMBER_DISPLAY, PHONE_NUMBER_LINK } from '../../../lib/contact';

type RouteParams = {
  slug: string;
};

type Props = {
  params: Promise<RouteParams>;
};

export async function generateStaticParams() {
  return boroughPages.map((borough) => ({ slug: borough.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const borough = getBoroughBySlug(slug);
  if (!borough) {
    return {
      title: 'Prime Coat London',
      description: 'Bespoke painting and decorating across London.'
    };
  }

  return {
    title: `${borough.name} Painters & Decorators | Prime Coat London`,
    description: borough.headline,
    alternates: {
      canonical: `/boroughs/${borough.slug}`
    }
  };
}

export default async function BoroughPage({ params }: Props) {
  const { slug } = await params;
  const borough = getBoroughBySlug(slug);

  if (!borough) {
    notFound();
  }

  const whatsappLink = buildWhatsAppLink(`Hi Prime Coat London, can we schedule a survey in ${borough.name}?`);

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-16 sm:px-6 lg:px-0">
      <div className="mx-auto flex max-w-4xl flex-col gap-8 rounded-[2rem] border border-slate-200 bg-white px-6 py-8 shadow-sm">
        <div className="flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-slate-900">
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back to homepage
          </Link>
          <span className="rounded-full bg-slate-100 px-4 py-1 text-[0.7rem] uppercase tracking-[0.3em] text-slate-500">
            {borough.stat.label}: {borough.stat.value}
          </span>
        </div>
        <header className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">{borough.serviceFocus}</p>
          <h1 className="text-3xl font-semibold text-slate-900 sm:text-[3.25rem]">{borough.name} painting & decorating</h1>
          <p className="text-lg text-slate-600">{borough.headline}</p>
          <p className="text-base text-slate-600">{borough.intro}</p>
        </header>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-3 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Highlights</p>
            <ul className="space-y-3 text-sm text-slate-700">
              {borough.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4 rounded-[1.5rem] border border-slate-200 bg-white p-5 text-slate-900">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Concierge deliverables</p>
            <ul className="space-y-3 text-sm text-slate-600">
              {borough.services.map((service) => (
                <li key={service} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-[0.65rem] font-semibold text-blue-600">✓</span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
            <blockquote className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
              “{borough.quote.text}”
              <span className="mt-2 block text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">{borough.quote.author}</span>
            </blockquote>
          </div>
        </div>
        <div className="space-y-3 rounded-[1.5rem] border border-slate-200 bg-slate-900 p-5 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">Start here</p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-4 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white transition hover:bg-blue-700"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            WhatsApp survey
          </a>
          <a
            href="/#contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 px-4 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white"
          >
            <ArrowUpRight className="h-4 w-4" aria-hidden />
            Book via form
          </a>
          <a href={`tel:${PHONE_NUMBER_LINK}`} className="block text-center text-sm text-white/80">
            Or call {PHONE_NUMBER_DISPLAY}
          </a>
        </div>
        <p className="text-sm text-slate-500">
          Looking for more examples? WhatsApp us and we&apos;ll send recent {borough.name} before/after galleries within minutes.
        </p>
      </div>
    </main>
  );
}
