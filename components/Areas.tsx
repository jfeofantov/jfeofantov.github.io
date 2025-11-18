import FadeIn from './FadeIn';

const clusters = [
  {
    title: 'Central West',
    areas: ['Chelsea', 'Kensington', 'Notting Hill', 'Mayfair']
  },
  {
    title: 'Central East',
    areas: ['Shoreditch', 'Islington', 'Canary Wharf', 'Greenwich']
  },
  {
    title: 'South & North',
    areas: ['Clapham', 'Richmond', 'Marylebone', 'Hampstead']
  }
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
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {clusters.map((cluster, index) => (
            <FadeIn key={cluster.title} delay={index * 80}>
              <article className="rounded-[1.75rem] border border-white/80 bg-white/95 p-6 text-left shadow-[0_35px_100px_-70px_rgba(15,23,42,0.8)]">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">{cluster.title}</p>
                <ul className="mt-4 space-y-3 text-sm text-slate-700">
                  {cluster.areas.map((area) => (
                    <li key={area} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-900" aria-hidden />
                      <span className="font-semibold">{area}</span>
                    </li>
                  ))}
                </ul>
              </article>
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
