import FadeIn from './FadeIn';

const areas = [
  'Chelsea',
  'Kensington',
  'Notting Hill',
  'Mayfair',
  'Marylebone',
  'Shoreditch',
  'Clapham',
  'Islington',
  'Richmond',
  'Hampstead',
  'Greenwich',
  'Canary Wharf'
];

export default function Areas() {
  return (
    <section id="areas" className="section-padding bg-slate-50">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="flex flex-col gap-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">Coverage</p>
          <h2 className="text-balance text-3xl font-semibold text-slate-900 sm:text-4xl">Areas We Cover</h2>
          <p className="mx-auto max-w-3xl text-base text-slate-600">
            From heritage residences to new-build apartments, our mobile teams cover Central London and the surrounding boroughs.
          </p>
        </FadeIn>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area, index) => (
            <FadeIn key={area} delay={index * 50}>
              <div className="rounded-2xl border border-slate-100 bg-white px-6 py-4 text-center text-sm font-semibold text-slate-700">{area}</div>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="mt-10 flex justify-center">
          <a
            href="https://wa.me/447700123456?text=Can%20you%20service%20my%20area%3F"
            className="inline-flex items-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            target="_blank"
            rel="noreferrer"
          >
            Check your area
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
