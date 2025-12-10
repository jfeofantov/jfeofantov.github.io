'use client';

import { useEffect, useState } from 'react';
import { WHATSAPP_HOURS, buildWhatsAppLink } from '../lib/contact';
import WhatsAppForm from './WhatsAppForm';
import { MessageCircle, X } from 'lucide-react';

export default function StickyWhatsAppCTA() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappLink = buildWhatsAppLink('Hi Prime Coat London, can we chat on WhatsApp?');

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
      <div className="fixed inset-x-0 bottom-0 z-40 md:hidden">
        <div className="mx-auto max-w-6xl px-4 pb-4">
          <div className="pointer-events-auto rounded-3xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-[0_20px_40px_-25px_rgba(15,23,42,0.45)]">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-slate-500">WhatsApp priority</p>
                <p className="text-sm font-medium text-slate-900">Replies in {WHATSAPP_HOURS}</p>
              </div>
              <div className="flex gap-2">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-full bg-blue-600 px-3 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-blue-700"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden />
                  Chat
                </a>
                <button
                  type="button"
                  onClick={() => setIsOpen(true)}
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 px-3 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-slate-700"
                >
                  Share number
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 md:hidden">
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="relative z-10 mx-auto w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">WhatsApp quote</p>
                <p className="text-sm text-slate-500">Replies in {WHATSAPP_HOURS}</p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1 text-slate-400 transition hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/40"
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
                buttonClassName="inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-3 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
