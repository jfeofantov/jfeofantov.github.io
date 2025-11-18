const badges = ['1 Year Guarantee*', 'Certified & Insured', 'Competitive Rates'];

type HeroBadgesProps = {
  embedded?: boolean;
  className?: string;
};

export default function HeroBadges({ embedded = false, className = '' }: HeroBadgesProps) {
  const badgeClasses = embedded
    ? 'inline-flex min-w-[100px] items-center justify-center rounded-full border border-white/30 bg-white/15 px-2 py-1 text-center text-[7px] font-light uppercase tracking-[0.15em] text-white drop-shadow-sm sm:min-w-[120px] sm:px-3 sm:text-[9px]'
    : 'inline-flex min-w-[110px] items-center justify-center rounded-full border border-[#c96527]/20 bg-white px-3 py-1.5 text-center text-[8px] font-light uppercase tracking-[0.2em] text-slate-700 shadow-[0_12px_35px_-28px_rgba(15,23,42,0.8)] sm:text-[11px]';

  const wrapClasses = embedded ? 'grid grid-cols-3 gap-1' : 'grid grid-cols-3 gap-2 px-4';

  const headingClasses = embedded
    ? 'text-center text-[7px] font-light uppercase tracking-[0.25em] text-white/80 mb-2 sm:text-[9px]'
    : 'text-center text-[8px] font-light uppercase tracking-[0.3em] text-[#c96527] mb-3 sm:text-[11px]';

  const dividerClasses = embedded
    ? 'mx-auto mb-2 mt-1 h-px w-1/2 bg-white/25'
    : 'mx-auto mb-3 mt-1 h-px w-1/2 bg-[#c96527]/20';

  const content = (
    <div className={className}>
      <p className={headingClasses}>Trusted by homeowners</p>
      <div className={dividerClasses} />
      <div className={wrapClasses}>
        {badges.map((badge) => (
          <span key={badge} className={badgeClasses}>
            {badge}
          </span>
        ))}
      </div>
    </div>
  );

  if (embedded) {
    return content;
  }

  return (
    <section className="bg-gradient-to-b from-white via-[#fff3ed] to-white py-6 sm:px-6">
      {content}
    </section>
  );
}
