'use client';

import { useState } from 'react';
import FadeIn from './FadeIn';
import { faqs } from '../lib/content';

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faqs" className="section-padding bg-white">
      <div className="mx-auto max-w-6xl space-y-10">
        <FadeIn className="text-center space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">FAQs</p>
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Objections answered upfront</h2>
          <p className="text-base text-slate-600">No guesswork—here&apos;s exactly how we handle the questions that usually stall a project.</p>
        </FadeIn>
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <FadeIn key={faq.question} delay={index * 60}>
                <div className="hover-lift rounded-[1.35rem] border border-slate-200 bg-white p-4 shadow-sm">
                  <button type="button" className="w-full text-left" onClick={() => setOpenIndex(isOpen ? null : index)} aria-expanded={isOpen}>
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.45em] text-amber-600">{faq.badge}</p>
                        <p className="mt-1 text-base font-semibold text-slate-900">{faq.question}</p>
                      </div>
                      <span
                        className={`flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-lg font-semibold text-slate-800 transition ${
                          isOpen ? 'rotate-45' : ''
                        }`}
                      >
                        +
                      </span>
                    </div>
                  </button>
                  {isOpen ? (
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
                  ) : (
                    <p className="mt-3 text-xs uppercase tracking-[0.3em] text-slate-500">Tap to expand</p>
                  )}
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
