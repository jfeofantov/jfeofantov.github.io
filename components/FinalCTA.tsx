'use client';

import { useState } from 'react';
import FadeIn from './FadeIn';

export default function FinalCTA() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="final-cta" className="section-padding bg-slate-900 text-white">
      <FadeIn className="mx-auto max-w-4xl text-center space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/60">Let’s Talk</p>
        <h2 className="text-balance text-3xl font-semibold sm:text-4xl">Ready to Transform Your Home?</h2>
        <p className="text-balance text-base text-white/80">
          Share your project photos, schedule a same-week walk-through, or ring us for immediate assistance.
        </p>
      </FadeIn>
      <FadeIn className="mx-auto mt-8 w-full max-w-2xl rounded-[1.75rem] border border-white/20 bg-white/5 p-6 shadow-[0_25px_90px_-60px_rgba(15,23,42,0.9)]">
        <form onSubmit={handleSubmit} className="grid gap-4 text-left text-sm text-slate-900">
          <div className="flex flex-col gap-2 text-white">
            <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
              Name
            </label>
            <input
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-2xl border border-white/40 bg-white/10 px-4 py-2 text-base text-white placeholder-white/50 outline-none focus:border-white"
              placeholder="Your name"
              required
            />
          </div>
          <div className="flex flex-col gap-2 text-white">
            <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
              Email or Phone
            </label>
            <input
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-2xl border border-white/40 bg-white/10 px-4 py-2 text-base text-white placeholder-white/50 outline-none focus:border-white"
              placeholder="hello@domain.com"
              required
            />
          </div>
          <div className="flex flex-col gap-2 text-white">
            <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
              Project Notes
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="rounded-2xl border border-white/40 bg-white/10 px-4 py-2 text-base text-white placeholder-white/50 outline-none focus:border-white"
              placeholder="2 rooms, Farrow & Ball, lime plaster repairs..."
              rows={3}
            />
          </div>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            Request Callback
          </button>
          {submitted && <p className="text-center text-sm text-white/80">Thanks! We’ll respond within one business day.</p>}
        </form>
      </FadeIn>
    </section>
  );
}
