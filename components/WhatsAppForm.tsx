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
  animatedBorder?: boolean;
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
  headingClassName = 'text-xs font-semibold uppercase tracking-[0.35em] text-slate-800',
  description = 'Leave your number and our project manager will call or message you back the same day.',
  descriptionClassName = 'mt-2 text-base text-slate-600',
  buttonLabel = 'Start conversation',
  buttonClassName = 'inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold tracking-[0.2em] text-white shadow-lg shadow-slate-900/15 transition hover:translate-y-[-1px] hover:brightness-95 focus:outline-none',
  source = 'hero',
  compact = false,
  appearance = 'light',
  idPrefix = 'whatsapp',
  minimal = false,
  animatedBorder = false
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
    <div className={`${animatedBorder ? 'border-animated' : ''} ${className}`}>
      <div className={animatedBorder ? 'border-animated-inner' : ''}>
        {heading ? <p className={headingClassName}>{heading}</p> : null}
        {description ? <p className={descriptionClassName}>{description}</p> : null}
        <form
          onSubmit={handleWhatsAppSubmit}
          className={`mt-2 space-y-2 ${appearance === 'dark' ? 'text-white' : 'text-slate-700'}`}
          noValidate
        >
          <div
            className={`flex flex-col gap-1.5 ${
              minimal
                ? compact
                  ? 'text-[0.65rem]'
                  : 'text-sm'
                : 'rounded-[0.9rem] border transition-all focus-within:border-slate-500 focus-within:shadow-[0_12px_32px_-24px_rgba(15,23,42,0.7)]'
            } ${
              minimal
                ? 'bg-transparent text-white'
                : appearance === 'dark'
                  ? 'border-white/15 bg-white/5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]'
                  : 'border-slate-200 bg-white text-slate-700 shadow-[0_20px_45px_-35px_rgba(15,23,42,0.45)]'
            } ${compact ? (minimal ? '' : 'px-2 py-2 text-[0.7rem]') : minimal ? '' : 'px-4 py-4 text-base'}`}
          >
            <div className="grid grid-cols-1 items-stretch gap-2 sm:grid-cols-[4.5rem_minmax(0,1.2fr)_12rem] sm:gap-1.5 min-w-0">
              <label htmlFor={`${idPrefix}-country`} className="sr-only">
                Country
              </label>
              <div className={`relative flex items-center h-11 ${compact ? 'text-[0.55rem]' : 'text-[0.7rem]'}`}>
                <select
                  id={`${idPrefix}-country`}
                  value={countryCode}
                  onChange={(event) => setCountryCode(event.target.value as CountryDialCode['code'])}
                  className={`w-full appearance-none font-semibold text-left transition focus-visible:outline-none ${
                    minimal
                      ? 'rounded-full bg-white/15 text-white focus-visible:ring-0'
                      : `rounded-xl border focus-visible:ring-2 focus-visible:ring-white/50 ${
                          appearance === 'dark' ? 'border-white/25 bg-white/10 text-white' : 'border-slate-200 bg-slate-50 text-slate-700'
                        }`
                  } ${compact ? 'px-2 py-1.5 pr-3 text-[0.55rem]' : 'px-2.5 py-1.5 pr-4 text-[0.8rem]'} h-full`}
                >
                  {options.map((option) => (
                    <option key={option.code} value={option.code}>
                      {option.code} (+{option.dialCode})
                    </option>
                  ))}
                </select>
              </div>
              <div
                className={`flex w-full sm:max-w-full items-center transition-all ${
                  minimal ? 'rounded-full bg-white/15 text-white focus-within:ring-2 focus-within:ring-slate-300' : 'rounded-xl border'
                } ${
                  minimal
                    ? ''
                    : appearance === 'dark'
                      ? 'border-white/20 bg-white/10 text-white focus-within:border-slate-200 focus-within:shadow-[0_8px_35px_-25px_rgba(100,116,139,0.6)]'
                      : 'border-slate-100 bg-white text-slate-700 focus-within:border-slate-500 focus-within:shadow-[0_12px_35px_-25px_rgba(100,116,139,0.4)]'
                } ${compact ? 'px-2 py-1.5 text-[0.7rem]' : 'px-3 py-1.5 text-sm'}`}
              >
                <input
                  id={inputId}
                  name={inputId}
                  type="tel"
                  value={whatsapp}
                  onChange={(event) => setWhatsapp(event.target.value)}
                  placeholder="WhatsApp number"
                  style={{ fontSize: '16px' }}
                  className={`flex-1 bg-transparent focus:outline-none ${appearance === 'dark' ? 'placeholder-white/50 text-white' : 'placeholder-slate-400 text-slate-700'} ${
                    compact ? 'text-[0.75rem]' : 'text-base'
                  }`}
                  aria-label="WhatsApp number"
                  aria-describedby={feedback ? feedbackId : undefined}
                  aria-invalid={isError || undefined}
                  autoComplete="tel-national"
                  inputMode="tel"
                  pattern="[0-9]*"
                  maxLength={20}
                  onInput={(event) => {
                    const target = event.currentTarget
                    const digitsOnly = target.value.replace(/\D/g, '')
                    if (digitsOnly !== target.value) {
                      target.value = digitsOnly
                    }
                    setWhatsapp(digitsOnly)
                  }}
                  onPaste={(event) => {
                    const pasted = event.clipboardData.getData('text')
                    if (!/^\d*$/.test(pasted)) {
                      event.preventDefault()
                    }
                  }}
                  onKeyDown={(event) => {
                    const allowedKeys = ['Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight', 'Home', 'End']
                    if (/^[0-9]$/.test(event.key) || allowedKeys.includes(event.key)) {
                      return
                    }
                    event.preventDefault()
                  }}
                />
              </div>
              <button
                type="submit"
                className={`${buttonClassName} w-full sm:self-stretch h-full px-7 py-2.5 text-sm`}
                disabled={isSending}
              >
                {isSending ? 'Sending…' : buttonLabel}
              </button>
            </div>
            <div className={`flex flex-wrap items-center gap-2 text-[0.58rem] ${appearance === 'dark' ? 'text-white/75' : 'text-slate-600'} ${minimal ? 'px-1.5 py-1' : ''}`}>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(event) => setConsent(event.target.checked)}
                  className="h-3.5 w-3.5 rounded border-slate-300 text-slate-900 focus:ring-slate-500/30"
                  aria-required
                />
                <span className="flex-1">I agree with</span>
              </label>
              <a href="/terms" target="_blank" rel="noreferrer" className="underline">
                Terms and conditions
              </a>
            </div>
          </div>
          <div id={feedbackId} role="status" aria-live="polite" className="min-h-[1.25rem] text-center text-[0.65rem]">
            {feedback ? <p className={feedbackClass}>{feedback}</p> : null}
          </div>
        </form>
      </div>
    </div>
  );
}
