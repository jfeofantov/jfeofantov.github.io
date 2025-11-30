'use client';

import { useEffect, useState } from 'react';
import { WHATSAPP_HOURS } from '../lib/contact';
import WhatsAppForm from './WhatsAppForm';
import { MessageCircle, X } from 'lucide-react';

export default function StickyWhatsAppCTA() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen || typeof document === 'undefined') return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || typeof window === 'undefined') return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 md:hidden">
        <div className="mx-auto max-w-6xl px-4 pb-4">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="pointer-events-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#1BD741] shadow-lg shadow-[#1BD741]/40 transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-800"
              aria-label="Open WhatsApp quote form"
            >
              <span className="sr-only">Open WhatsApp quote</span>
              <MessageCircle className="h-6 w-6 text-slate-900" aria-hidden />
            </button>
          </div>
        </div>
      </div>

      {isOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 md:hidden">
          <div
            className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative z-10 mx-auto w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-600">WhatsApp quote</p>
                <p className="text-sm text-slate-500">Replies in {WHATSAPP_HOURS}</p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1 text-slate-500 transition hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
                aria-label="Close WhatsApp form"
              >
                <X className="h-4 w-4" aria-hidden />
              </button>
            </div>
            <div className="mt-4">
              <WhatsAppForm
                buttonLabel="Send"
                compact
                appearance="light"
                source="sticky-modal"
                className="mt-0"
                buttonClassName="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-3 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
