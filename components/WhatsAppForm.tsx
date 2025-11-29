'use client';

import { FormEvent, useMemo, useState } from 'react';
import { countryDialCodes, type CountryDialCode } from '../lib/countryDialCodes';

type WhatsAppFormProps = {
  className?: string;
  heading?: string;
  headingClassName?: string;
  description?: string;
  descriptionClassName?: string;
  buttonLabel?: string;
  buttonClassName?: string;
  source?: string;
  compact?: boolean;
  appearance?: 'light' | 'dark';
  idPrefix?: string;
  minimal?: boolean;
};

const WEBHOOK_URL = process.env.NEXT_PUBLIC_WHATSAPP_WEBHOOK_URL ?? 'https://eugenefeo.app.n8n.cloud/webhook-test/message';
const MIN_DIGITS = 8;

const normalizePhoneNumber = (value: string, country: CountryDialCode) => {
  const digits = (value || '').replace(/\D/g, '');
  if (!digits) return '';

  if (country.code === 'GB') {
    if (digits.startsWith('0')) {
      return `44${digits.slice(1)}`;
    }
    if (digits.startsWith('44')) {
      return digits;
    }
    if (/^7\d{9}$/.test(digits)) {
      return `44${digits}`;
    }
  }

  if (digits.startsWith(country.dialCode)) {
    return digits;
  }

  return `${country.dialCode}${digits}`;
};

export default function WhatsAppForm({
  className = '',
  heading = 'Share your brief on WhatsApp',
  headingClassName = 'text-xs font-semibold uppercase tracking-[0.35em] text-[#c96527]',
  description = 'Leave your number and our project manager will call or message you back the same day.',
  descriptionClassName = 'mt-2 text-base text-slate-600',
  buttonLabel = 'Start conversation',
  buttonClassName = 'inline-flex w-full items-center justify-center rounded-full bg-[#c96527] px-4 py-3 text-sm font-semibold tracking-[0.2em] text-white shadow-lg shadow-[#c96527]/30 transition hover:translate-y-[-1px] hover:brightness-95 focus:outline-none',
  source = 'hero',
  compact = false,
  appearance = 'light',
  idPrefix = 'whatsapp',
  minimal = false
}: WhatsAppFormProps) {
  const [whatsapp, setWhatsapp] = useState('');
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'error' | 'success'>('idle');
  const [feedback, setFeedback] = useState<string | null>(null);
  const [countryCode, setCountryCode] = useState<CountryDialCode['code']>('GB');

  const options = useMemo(() => countryDialCodes.slice().sort((a, b) => a.label.localeCompare(b.label)), []);

  const selectedCountry = options.find((option) => option.code === countryCode) ?? options[0];

  const handleWhatsAppSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === 'sending') return;

    setFeedback(null);

    const digits = normalizePhoneNumber(whatsapp, selectedCountry);

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
      <form
        onSubmit={handleWhatsAppSubmit}
        className={`mt-3 space-y-3 ${appearance === 'dark' ? 'text-white' : 'text-slate-700'}`}
        noValidate
      >
        <div
          className={`grid grid-cols-1 gap-2 sm:grid-cols-[4.5rem_1fr_auto_auto] ${
            minimal
              ? compact
                ? 'text-[0.65rem]'
                : 'text-sm'
              : 'rounded-[1.5rem] border transition-all focus-within:border-[#1BD741]/60 focus-within:shadow-[0_18px_45px_-28px_rgba(27,215,65,0.85)]'
          } ${
            minimal
              ? 'bg-transparent text-white'
              : appearance === 'dark'
                ? 'border-white/15 bg-white/5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]'
                : 'border-slate-200 bg-white text-slate-700 shadow-[0_20px_45px_-35px_rgba(15,23,42,0.45)]'
          } ${compact ? (minimal ? '' : 'px-2.5 py-2 text-[0.7rem]') : minimal ? '' : 'px-4 py-4 text-base'}`}
        >
          <label htmlFor={`${idPrefix}-country`} className="sr-only">
            Country
          </label>
          <div className={`relative flex w-full items-center ${compact ? 'text-[0.6rem]' : 'text-xs'}`}>
            <select
              id={`${idPrefix}-country`}
              value={countryCode}
              onChange={(event) => setCountryCode(event.target.value as CountryDialCode['code'])}
              className={`w-full appearance-none font-semibold text-left transition focus-visible:outline-none ${
                minimal
                  ? 'rounded-full bg-white/15 text-white focus-visible:ring-0'
                  : `rounded-2xl border focus-visible:ring-2 focus-visible:ring-white/50 ${
                      appearance === 'dark' ? 'border-white/25 bg-white/10 text-white' : 'border-slate-200 bg-slate-50 text-slate-700'
                    }`
              } ${compact ? 'px-2 py-1 pr-4 text-[0.6rem]' : 'px-3 py-1.5 pr-6 text-[0.85rem]'}`}
            >
              {options.map((option) => (
                <option key={option.code} value={option.code}>
                  {option.code} (+{option.dialCode})
                </option>
              ))}
            </select>
          </div>
          <div
            className={`flex items-center transition-all ${
              minimal ? 'rounded-full bg-white/15 text-white focus-within:ring-2 focus-within:ring-[#1BD741]/50' : 'rounded-2xl border'
            } ${
              minimal
                ? ''
                : appearance === 'dark'
                  ? 'border-white/20 bg-white/10 text-white focus-within:border-[#1BD741]/50 focus-within:shadow-[0_8px_35px_-25px_rgba(27,215,65,0.8)]'
                  : 'border-slate-100 bg-white text-slate-700 focus-within:border-[#1BD741]/40 focus-within:shadow-[0_12px_35px_-25px_rgba(27,215,65,0.5)]'
            } ${compact ? 'px-2 py-1.5 text-[0.7rem]' : 'px-3 py-2 text-sm'}`}
          >
            <input
              id={inputId}
              name={inputId}
              type="tel"
              value={whatsapp}
              onChange={(event) => setWhatsapp(event.target.value)}
              placeholder="WhatsApp number"
              className={`flex-1 bg-transparent focus:outline-none ${appearance === 'dark' ? 'placeholder-white/50 text-white' : 'placeholder-slate-400 text-slate-700'} ${
                compact ? 'text-[0.75rem]' : 'text-base'
              }`}
              aria-label="WhatsApp number"
              aria-describedby={feedback ? feedbackId : undefined}
              aria-invalid={isError || undefined}
              autoComplete="tel-national"
              inputMode="tel"
              pattern="[0-9]*"
            />
          </div>
          <label
            className={`flex items-center justify-between gap-2 text-[0.58rem] ${
              appearance === 'dark' ? 'text-white/75' : 'text-slate-600'
            } ${minimal ? 'rounded-full border border-white/15 px-3 py-1.5' : ''}`}
          >
            <span className="inline-flex items-center gap-1">
              <input
                type="checkbox"
                checked={consent}
                onChange={(event) => setConsent(event.target.checked)}
                className="h-3.5 w-3.5 rounded border-slate-300 text-[#c96527] focus:ring-[#c96527]/30"
                aria-required
              />
              I agree to be contacted
            </span>
            <a href="/terms" target="_blank" rel="noreferrer" className="underline">
              Terms
            </a>
          </label>
          <button type="submit" className={`${buttonClassName} w-full sm:self-stretch`} disabled={isSending}>
            {isSending ? 'Sending…' : buttonLabel}
          </button>
        </div>
        <div id={feedbackId} role="status" aria-live="polite" className="min-h-[1.25rem] text-center text-[0.65rem]">
          {feedback ? <p className={feedbackClass}>{feedback}</p> : null}
        </div>
      </form>
    </div>
  );
}
