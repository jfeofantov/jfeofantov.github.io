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
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleWhatsAppSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (loading) return;

    setError(null);
    setSent(false);
    setSuccessMessage(null);

    const raw = whatsapp || '';
    let digits = raw.replace(/\D/g, '');

    if (digits.startsWith('0')) {
      digits = `44${digits.slice(1)}`;
    } else if (/^7\d{9}$/.test(digits)) {
      digits = `44${digits}`;
    }

    if (!digits) {
      setError('Please enter your WhatsApp number.');
      return;
    }
    if (!consent) {
      setError('Please accept the terms and conditions to proceed.');
      return;
    }
    if (digits.length < 8) {
      setError('Please enter a valid phone number including country code.');
      return;
    }

    const payload = {
      phone: digits,
      consent: true,
      source,
      message: 'Hi Prime Coat London, I need a painting quote.'
    };

    try {
      setLoading(true);
      const res = await fetch('https://eugenefeo.app.n8n.cloud/webhook-test/message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const text = await res.text().catch(() => '');
        setError(`Webhook error: ${res.status} ${res.statusText} ${text}`);
        return;
      }

      const data = await res.json().catch(() => null);
      const messageFromWebhook = data && typeof data.message === 'string' ? data.message : null;
      const message = messageFromWebhook || 'Thank you — we will contact you shortly.';
      setSuccessMessage(message);
      setSent(true);
      setWhatsapp('');
      setConsent(false);
    } catch (err: any) {
      setError(`Network error: ${err?.message || 'failed to send'}`);
    } finally {
      setLoading(false);
    }
  };

  const inputId = `${idPrefix}-input`;

  return (
    <div className={className}>
      {heading ? <p className={headingClassName}>{heading}</p> : null}
      {description ? <p className={descriptionClassName}>{description}</p> : null}
      <form onSubmit={handleWhatsAppSubmit} className="mt-4 space-y-3">
        <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm shadow-inner">
          <span className="flex items-center gap-2 px-1 text-base">🇬🇧 <span className="font-medium">+44</span></span>
          <input
            id={inputId}
            name={inputId}
            type="tel"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            placeholder="7700 123456"
            className="flex-1 bg-transparent text-sm placeholder-slate-400 focus:outline-none"
            aria-label="WhatsApp number"
          />
        </div>
        <button type="submit" className={buttonClassName} disabled={loading}>
          {loading ? 'Sending…' : buttonLabel}
        </button>
        <label className="flex items-center justify-center gap-2 text-[11px] text-slate-600">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
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
        {error && <p className="text-sm text-rose-600">{error}</p>}
        {sent && successMessage ? <p className="text-center text-sm text-emerald-600">{successMessage}</p> : null}
      </form>
    </div>
  );
}
