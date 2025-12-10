'use client';

import { useState } from 'react';
import FadeIn from './FadeIn';
import { WHATSAPP_HOURS, WHATSAPP_NUMBER_DISPLAY, buildWhatsAppLink } from '../lib/contact';

const CONTACT_WEBHOOK_URL = process.env.NEXT_PUBLIC_CONTACT_WEBHOOK_URL ?? 'https://eugenefeo.app.n8n.cloud/webhook-test/contact';
const contactWhatsAppLink = buildWhatsAppLink("Hi Prime Coat London, I'm sharing photos for a quick painting quote.");

export default function FinalCTA() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [timeline, setTimeline] = useState('');
  const [postcode, setPostcode] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFeedback(null);

    if (!name.trim() || !email.trim()) {
      setStatus('error');
      setFeedback('Please share your name and an email or phone number so we can reach you.');
      return;
    }

    const payload = {
      name: name.trim(),
      contact: email.trim(),
      propertyType: propertyType.trim(),
      timeline: timeline.trim(),
      postcode: postcode.trim(),
      message: message.trim(),
      source: 'contact-section'
    };

    try {
      setStatus('sending');
      const res = await fetch(CONTACT_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const text = (await res.text().catch(() => '')).trim();
        throw new Error(`Webhook error: ${res.status} ${res.statusText}${text ? ` ${text}` : ''}`);
      }

      setStatus('success');
      setFeedback('Thank you — we will call or email you back within one business day.');
      setName('');
      setEmail('');
      setPropertyType('');
      setTimeline('');
      setPostcode('');
      setMessage('');
    } catch (error: unknown) {
      const messageText = error instanceof Error ? error.message : 'Something went wrong. Please try again.';
      setStatus('error');
      setFeedback(messageText);
    }
  };

  return (
    <section id="contact" className="section-padding bg-slate-50">
      <div className="hover-lift mx-auto grid max-w-5xl gap-10 rounded-[1.75rem] border border-slate-200 bg-white px-6 py-10 shadow-lg lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <FadeIn className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Ready to brief us?</p>
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Share the essentials. We call back today.</h2>
          <p className="text-base text-slate-600">Name, contact, postcode, and a quick note are enough to size a survey and lock dates.</p>
          <div className="space-y-2 rounded-[1.5rem] border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-600">
            <p className="font-semibold text-slate-900">Fastest route: WhatsApp</p>
            <p>Tap below to drop photos or a voice note. We reply in minutes with next steps.</p>
            <a
              href={contactWhatsAppLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              💬 Chat on WhatsApp now
            </a>
            <p className="text-xs text-slate-500">Replies within {WHATSAPP_HOURS} — add us manually at {WHATSAPP_NUMBER_DISPLAY}.</p>
          </div>
        </FadeIn>
        <FadeIn>
          <form
            onSubmit={handleSubmit}
            className="rounded-[1.75rem] border border-slate-100 bg-white/95 p-6 shadow-[0_35px_95px_-70px_rgba(15,23,42,0.35)]"
            noValidate
          >
            <div className="flex flex-col gap-2 text-slate-900">
              <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-base text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                placeholder="Your name"
                required
              />
            </div>
            <div className="mt-4 flex flex-col gap-2 text-slate-900">
              <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
                Email or phone
              </label>
              <input
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-base text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                placeholder="hello@primecoatlondon.co.uk"
                required
              />
            </div>
            <div className="mt-4 grid gap-4 text-slate-900 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="propertyType" className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
                  Property type
                </label>
                <select
                  id="propertyType"
                  name="propertyType"
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-base text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="">Select</option>
                  <option>Apartment / flat</option>
                  <option>House / townhouse</option>
                  <option>Commercial space</option>
                  <option>Exterior only</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="timeline" className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
                  Ideal start
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-base text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="">Select</option>
                  <option>ASAP (this week)</option>
                  <option>1-2 weeks</option>
                  <option>This month</option>
                  <option>Flexible / planning</option>
                </select>
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-2 text-slate-900">
              <label htmlFor="postcode" className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
                Postcode
              </label>
              <input
                id="postcode"
                name="postcode"
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-base text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                placeholder="SW1, W8, E14..."
              />
            </div>
            <div className="mt-4 flex flex-col gap-2 text-slate-900">
              <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
                Project notes (the more detail, the faster the quote)
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-base text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                placeholder="Room counts, finishes, timing, budget..."
                rows={5}
              />
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending…' : 'Get my free estimate'}
            </button>
            <p className={`mt-3 text-center text-sm ${status === 'success' ? 'text-emerald-600' : 'text-rose-500'}`} aria-live="polite">
              {feedback}
            </p>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
