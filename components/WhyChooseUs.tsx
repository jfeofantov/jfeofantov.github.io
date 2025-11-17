import { ShieldCheck, Ruler, Clock3, Sparkles, Users } from 'lucide-react';
import FadeIn from './FadeIn';

const reasons = [
  {
    title: 'Quality Work. Honest Pricing. Zero Stress.',
    description: 'Certified decorators deliver premium finishes with zero mess left behind.',
    icon: ShieldCheck
  },
  {
    title: 'Fixed Quotes Only',
    description: 'Transparent proposals detail every coat, primer, and protection material before we start.',
    icon: Ruler
  },
  {
    title: 'Respect for Your Time',
    description: 'Fast Scheduling means we mobilise crews quickly and finish on the agreed timeline.',
    icon: Clock3
  },
  {
    title: 'Interior Air Care',
    description: 'Low-odour, low-VOC paints keep homes fresh so you can move back in the same day.',
    icon: Sparkles
  },
  {
    title: 'Dedicated Site Lead',
    description: 'One point of contact keeps you informed with daily progress photos and snag updates.',
    icon: Users
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-padding mx-auto max-w-6xl">
      <FadeIn className="space-y-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">Why Choose Us</p>
        <h2 className="text-balance text-3xl font-semibold text-slate-900 sm:text-4xl">
          Quality Work. Honest Pricing. Zero Stress.
        </h2>
        <p className="mx-auto max-w-3xl text-base text-slate-600">
          Every Prime Coat London project is managed like a high-end refurbishment—detailed protection, refined surfaces, and a friendly crew focused on your experience.
        </p>
      </FadeIn>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reasons.map(({ title, description, icon: Icon }, index) => (
          <FadeIn key={title} delay={index * 70}>
            <article className="flex h-full items-start gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900/5 text-slate-900">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                <p className="text-sm text-slate-600">{description}</p>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
