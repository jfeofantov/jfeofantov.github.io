import Image from 'next/image';
import { ShieldCheck, Ruler, Clock3, Sparkles, Users, Leaf } from 'lucide-react';
import FadeIn from './FadeIn';

const reasons = [
  {
    title: 'Meticulous prep & protection',
    description: 'Floors, furniture, and artwork wrapped in hospital-grade sheeting before a single brush is lifted.',
    tag: 'Preparation',
    icon: ShieldCheck
  },
  {
    title: 'Fixed quotes only',
    description: 'Transparent proposals detail every primer, coat, and contingency so you never see surprise extras.',
    tag: 'Pricing',
    icon: Ruler
  },
  {
    title: 'Respect for your time',
    description: 'We mobilise quickly, work cleanly, and hand over on the promised day—no weekend overruns.',
    tag: 'Scheduling',
    icon: Clock3
  },
  {
    title: 'Interior air care',
    description: 'Low-odour, low-VOC systems keep homes fresh so you can move back in the same day.',
    tag: 'Health',
    icon: Leaf
  },
  /*{
    title: 'Dedicated site lead',
    description: 'One point of contact shares daily progress photos, snags, and sign-off updates.',
    tag: 'Communication',
    icon: Users
  },
  {
    title: 'Signature finishes',
    description: 'Hand-finished edges, glass-smooth plaster, and refined colour layering set us apart.',
    tag: 'Detail',
    icon: Sparkles
  }*/
];

const stats = [
  { label: 'Projects delivered', value: '320+' },
  { label: 'Snag items per job', value: '< 2' },
  { label: 'Average response', value: '15 min' }
];

const workflow = [
  {
    title: 'Site survey & scope',
    detail: 'We measure, moisture-test, and capture reference photos to design the right coatings strategy.'
  },
  {
    title: 'Protection & preparation',
    detail: 'Masking, dust-free sanding, and plaster repairs set the stage for a flawless finish.'
  },
  {
    title: 'Finish & walkthrough',
    detail: 'Two-coat systems, detailing, and a joint snag list ensure handover feels effortless.'
  }
];

const inspirationImages = [
  'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1505692794400-0296f8e87cc0?auto=format&fit=crop&w=900&q=80'
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-padding relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#C0583A]/10 via-transparent to-transparent" aria-hidden />
      <div className="pointer-events-none absolute inset-y-0 right-[-15%] hidden w-[45%] rounded-full bg-[radial-gradient(circle_at_center,_rgba(192,88,58,0.18),_transparent_55%)] blur-3xl lg:block" aria-hidden />
      <div className="pointer-events-none absolute -left-10 top-24 h-28 w-28 rounded-full border border-dashed border-slate-200/70" aria-hidden />
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-white/40 bg-white/80 px-6 py-10 shadow-[0_45px_120px_-65px_rgba(15,23,42,0.8)] backdrop-blur-lg sm:px-10">
        <div className="pointer-events-none absolute inset-x-16 top-0 h-1 rounded-full bg-gradient-to-r from-[#0B2545] via-[#C0583A] to-[#f97316]" aria-hidden />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(248,250,252,0.8),_transparent_55%)]" aria-hidden />
        <div className="relative">
        <FadeIn className="space-y-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">Why Choose Us</p>
          <h2 className="text-balance text-3xl font-semibold text-slate-900 sm:text-4xl">
            Quality Work. Honest Pricing. Zero Stress.
          </h2>
          <p className="mx-auto max-w-3xl text-base text-slate-600">
            Every project is managed like a boutique refurbishment—detailed protection, refined surfaces, and respectful crews focused on your routine.
          </p>
        </FadeIn>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {stats.map((stat) => (
            <FadeIn
              key={stat.label}
              className="flex min-w-[150px] flex-col items-center rounded-2xl border border-slate-100 bg-white/80 px-5 py-3 text-center"
            >
              <span className="text-2xl font-semibold text-slate-900">{stat.value}</span>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">{stat.label}</span>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="mt-8 grid gap-4 sm:grid-cols-3" delay={50}>
          {inspirationImages.map((src, index) => (
            <div
              key={src}
              className={`relative h-44 overflow-hidden rounded-[1.5rem] border border-white/60 shadow-[0_25px_80px_-55px_rgba(15,23,42,0.85)] ${
                index === 1 ? 'sm:translate-y-4' : ''
              }`}
            >
              <Image src={src} alt="Prime Coat interior inspiration" fill className="object-cover" sizes="(max-width: 768px) 90vw, 280px" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" aria-hidden />
            </div>
          ))}
        </FadeIn>
        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_0.85fr]">
          <div className="grid gap-6 sm:grid-cols-2">
            {reasons.map(({ title, description, icon: Icon, tag }, index) => (
              <FadeIn key={title} delay={index * 60} className="h-full">
                <article className="group flex h-full flex-col gap-4 rounded-2xl border border-slate-100 bg-white/95 px-5 py-6 shadow-[0_25px_65px_-45px_rgba(15,23,42,0.75)] transition duration-300 hover:-translate-y-1 hover:border-slate-200 hover:bg-gradient-to-br hover:from-white hover:to-[#f8fafc]">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900/5 text-slate-900 transition duration-300 group-hover:bg-[#0B2545]/10 group-hover:text-[#0B2545]">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="rounded-full border border-slate-200 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-500 transition duration-300 group-hover:border-[#C0583A]/40 group-hover:text-[#C0583A]">
                      {tag}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-slate-900 transition duration-300 group-hover:text-[#0B2545]">{title}</h3>
                    <p className="text-sm text-slate-600 transition duration-300 group-hover:text-slate-700">{description}</p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
          <FadeIn className="flex flex-col gap-4 rounded-[1.75rem] border border-slate-100 bg-slate-900/90 p-6 text-white lg:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">How we work</p>
            <h3 className="text-2xl font-semibold">A clear, guided process</h3>
            <p className="text-sm text-white/80">
              From the first video call to handover, your site lead keeps you updated with photos, timelines, and tidy workstations.
            </p>
            <div className="mt-2 space-y-5">
              {workflow.map((step, index) => (
                <div key={step.title} className="flex gap-4">
                  <span className="mt-2 inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-white/40 text-sm font-semibold">
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-base font-semibold">{step.title}</p>
                    <p className="text-sm text-white/70">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-white/30 bg-white/5 px-5 py-4 text-sm text-white/80">
              <p className="font-semibold text-white">Weekly photo updates</p>
              <p>Your WhatsApp thread receives daily snapshots so you can sign-off remotely if preferred.</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  </section>
  );
}
