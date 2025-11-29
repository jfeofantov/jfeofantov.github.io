import { WHATSAPP_HOURS, buildWhatsAppLink } from '../lib/contact';

const stickyLink = buildWhatsAppLink("Hi Prime Coat London, I'm on your site and ready for a fast WhatsApp quote.");

export default function StickyWhatsAppCTA() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 md:hidden">
      <div className="mx-auto max-w-6xl px-4 pb-4">
        <a
          href={stickyLink}
          target="_blank"
          rel="noreferrer"
          className="pointer-events-auto inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1BD741] px-4 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-[#1BD741]/40 transition hover:brightness-95"
          aria-label="Chat on WhatsApp for a free painting quote"
        >
          💬 Get a same-day quote on WhatsApp — replies in {WHATSAPP_HOURS}
        </a>
      </div>
    </div>
  );
}
