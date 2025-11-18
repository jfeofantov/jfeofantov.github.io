import Image from 'next/image';
import Link from 'next/link';
import FadeIn from '../../components/FadeIn';

const story = [
  'Prime Coat London began as a father-and-son duo restoring stucco townhouses in Belgravia. Word spread because we treated every space like a gallery, masking every hinge and leaving homes spotless.',
  'Today we manage multiple specialist crews, but the promise remains identical: respectful people, precise surface prep, and a project plan that fits around your routine rather than disrupting it.',
  'Designers and property managers trust us because we communicate constantly—daily WhatsApp photos, shared snag lists, and transparent pricing that covers every coat, scaffold, and primer.'
];

const values = [
  {
    title: 'Craftsmanship first',
    description: 'Our decorators average 12+ years experience and train quarterly on heritage-approved techniques.'
  },
  {
    title: 'Transparent to the penny',
    description: 'Every proposal breaks down labour, scaffold, primers, and finishes so you always know what you are paying for.'
  },
  {
    title: 'Site etiquette',
    description: 'We protect floors, filter air, and keep WhatsApp photo logs so you can sign off from work or holiday.'
  }
];

const crewHighlights = [
  { label: 'Decorators on roster', value: '14' },
  { label: 'Combined years of experience', value: '150+' },
  { label: 'Average response time', value: '15 min' }
];

const team = [
  {
    name: 'Eugene Feofanov',
    role: 'Co-Founder & Operations Lead',
    bio: 'Schedules crews, oversees site protection plans, and keeps you updated daily.',
    photo: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Viktor Feofanov',
    role: 'Master Decorator',
    bio: 'Specialises in Venetian plaster, bespoke finishes, and heritage detail repairs.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Lucy Hart',
    role: 'Client Experience Manager',
    bio: 'Organises consultations, shares progress photos, and coordinates designer handovers.',
    photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80'
  }
];

export const metadata = {
  title: 'About Prime Coat London | Our Story & Craft',
  description: 'Meet the Prime Coat London team—heritage-trained decorators serving homeowners, designers, and property managers across the capital.'
};

export default function AboutPage() {
  return (
    <main className="section-padding space-y-16 bg-gradient-to-b from-white via-slate-50 to-white">
      <section className="mx-auto max-w-5xl text-center">
        <FadeIn className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">About Prime Coat London</p>
          <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl">London decorators obsessed with calm, tidy projects.</h1>
        </FadeIn>
        <div className="mt-8 grid gap-6 text-left sm:grid-cols-3">
          {story.map((paragraph, index) => (
            <FadeIn key={paragraph} delay={index * 80} className="rounded-2xl border border-slate-100 bg-white/90 p-4 text-sm text-slate-600 shadow-[0_15px_45px_-35px_rgba(15,23,42,0.8)]">
              {paragraph}
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.4fr_1fr]">
        <FadeIn className="rounded-[2rem] border border-white/80 bg-white/90 p-8 shadow-[0_35px_95px_-60px_rgba(15,23,42,0.9)]">
          <h2 className="text-2xl font-semibold text-slate-900">Where craft meets process</h2>
          <p className="mt-3 text-sm text-slate-600">
            You will meet your site lead before a brush ever lifts. They bring samples, talk protection, and design a project plan that respects your schedule. During works you get daily progress photos and snag updates.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {crewHighlights.map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-100 bg-slate-50/60 px-4 py-3 text-center">
                <p className="text-2xl font-semibold text-slate-900">{item.value}</p>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 space-y-4">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl border border-slate-100 bg-white/80 px-4 py-3 text-left">
                <p className="text-sm font-semibold text-slate-900">{value.title}</p>
                <p className="text-sm text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn className="space-y-5 rounded-[2rem] border border-slate-100 bg-slate-900/90 p-8 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">Our roots</p>
          <h2 className="text-2xl font-semibold">Family-built, design-led</h2>
          <p className="text-sm text-white/80">
            Eugene and Viktor, our founders, built earlier careers in luxury retail fit-outs. They brought that same attention to detail to residential refurbishments—masking every hinge, cataloging every touch-up, and never leaving residue behind.
          </p>
          <div className="rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white/80">
            <p className="font-semibold text-white">What clients notice:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>We label every room with the finish schedule.</li>
              <li>Equipment is packed away each night so you can live around us.</li>
              <li>We photograph every stage for your records or designers.</li>
            </ul>
          </div>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-white/40 px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-white/10"
          >
            Back to home
          </Link>
        </FadeIn>
      </section>

      <section className="mx-auto max-w-6xl space-y-6">
        <FadeIn className="space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Meet the team</p>
          <h2 className="text-3xl font-semibold text-slate-900">Hands-on leadership you can text anytime</h2>
          <p className="text-base text-slate-600">
            Every crew is led by a seasoned decorator and supported by coordinators who keep communication flowing.
          </p>
        </FadeIn>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <FadeIn key={member.name} delay={index * 80} className="flex flex-col rounded-[1.75rem] border border-white/70 bg-white/95 p-5 text-center shadow-[0_30px_70px_-55px_rgba(15,23,42,0.9)]">
              <div className="mx-auto h-32 w-32 overflow-hidden rounded-full border border-slate-100">
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="mt-4 text-lg font-semibold text-slate-900">{member.name}</p>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">{member.role}</p>
              <p className="mt-3 text-sm text-slate-600">{member.bio}</p>
            </FadeIn>
          ))}
        </div>
      </section>
    </main>
  );
}
