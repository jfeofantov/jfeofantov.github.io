'use client';

import { FormEvent, useState } from 'react';

type WhatsAppFormProps = {
  className?: string;
  heading?: string;
  headingClassName?: string;
  description?: string;
  descriptionClassName?: string;
  buttonLabel?: string;
  buttonClassName?: string;
  source?: string;
  idPrefix?: string;
};

const WEBHOOK_URL = process.env.NEXT_PUBLIC_WHATSAPP_WEBHOOK_URL ?? 'https://eugenefeo.app.n8n.cloud/webhook-test/message';
const MIN_DIGITS = 8;

const normalizePhoneNumber = (value: string) => {
  const digits = (value || '').replace(/\D/g, '');
  if (!digits) return '';

  if (digits.startsWith('0')) {
    return `44${digits.slice(1)}`;
  }

  if (/^7\d{9}$/.test(digits)) {
    return `44${digits}`;
  }

  return digits;
};

export default function WhatsAppForm({
  className = '',
  heading = 'Prefer WhatsApp?',
  headingClassName = 'text-xs font-semibold uppercase tracking-[0.35em] text-[#c96527]',
  description = 'Leave your number and our project manager will call or message you back the same day.',
  descriptionClassName = 'mt-2 text-base text-slate-600',
  buttonLabel = 'Start conversation',
  buttonClassName = 'inline-flex w-full items-center justify-center rounded-full bg-[#c96527] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-[#c96527]/30 transition hover:translate-y-[-1px] hover:brightness-95 focus:outline-none',
  source = 'hero',
  idPrefix = 'whatsapp'
}: WhatsAppFormProps) {
  const [whatsapp, setWhatsapp] = useState('');
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'error' | 'success'>('idle');
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleWhatsAppSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === 'sending') return;

    setFeedback(null);

    const digits = normalizePhoneNumber(whatsapp);

    if (!digits) {
      setStatus('error');
      setFeedback('Please enter your WhatsApp number.');
      return;
    }
    if (!consent) {
      setStatus('error');
      setFeedback('Please accept the terms and conditions to proceed.');
      return;
    }
    if (digits.length < MIN_DIGITS) {
      setStatus('error');
      setFeedback('Please enter a valid phone number including country code.');
      return;
    }

    const payload = {
      phone: digits,
      consent: true,
      source,
      message: 'Hi Prime Coat London, I need a painting quote.'
    };

    try {
      setStatus('sending');
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const text = await res.text().catch(() => '');
        setStatus('error');
        setFeedback(`Webhook error: ${res.status} ${res.statusText} ${text}`.trim());
        return;
      }

      const data = await res.json().catch(() => null);
      const messageFromWebhook = data && typeof data.message === 'string' ? data.message : null;
      const successMessage = messageFromWebhook || 'Thank you — we will contact you shortly.';

      setStatus('success');
      setFeedback(successMessage);
      setWhatsapp('');
      setConsent(false);
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'failed to send';
      setStatus('error');
      setFeedback(`Network error: ${message}`);
    }
  };

  const inputId = `${idPrefix}-input`;
  const feedbackId = `${idPrefix}-feedback`;
  const isSending = status === 'sending';
  const isError = status === 'error';
  const feedbackClass =
    status === 'success'
      ? 'text-center text-sm text-emerald-600'
      : 'text-center text-sm text-rose-600';

  return (
    <div className={className}>
      {heading ? <p className={headingClassName}>{heading}</p> : null}
      {description ? <p className={descriptionClassName}>{description}</p> : null}
      <form onSubmit={handleWhatsAppSubmit} className="mt-4 space-y-3" noValidate>
        <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-base shadow-inner">
          <span className="flex items-center gap-2 px-1 text-base" aria-hidden>
            🇬🇧 <span className="font-medium">+44</span>
          </span>
          <input
            id={inputId}
            name={inputId}
            type="tel"
            value={whatsapp}
            onChange={(event) => setWhatsapp(event.target.value)}
            placeholder="7700 123456"
            className="flex-1 bg-transparent text-base placeholder-slate-400 focus:outline-none"
            aria-label="WhatsApp number"
            aria-describedby={feedback ? feedbackId : undefined}
            aria-invalid={isError || undefined}
            autoComplete="tel-national"
            inputMode="tel"
          />
        </div>
        <button type="submit" className={buttonClassName} disabled={isSending}>
          {isSending ? 'Sending…' : buttonLabel}
        </button>
        <label className="flex items-center justify-center gap-2 text-[11px] text-slate-600">
          <input
            type="checkbox"
            checked={consent}
            onChange={(event) => setConsent(event.target.checked)}
            className="h-4 w-4 rounded border-slate-300 text-[#c96527] focus:ring-[#c96527]/30"
            aria-required
          />
          <span>
            I agree to be contacted —{' '}
            <a href="/terms" target="_blank" rel="noreferrer" className="underline">
              Terms
            </a>
          </span>
        </label>
        <div id={feedbackId} role="status" aria-live="polite" className="min-h-[1.25rem]">
          {feedback ? <p className={feedbackClass}>{feedback}</p> : null}
        </div>
      </form>
    </div>
  );
}
