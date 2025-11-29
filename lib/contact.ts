export const PHONE_NUMBER_LINK = '+447955406974';
export const PHONE_NUMBER_DISPLAY = '07955 406974';

export const WHATSAPP_NUMBER_LINK = '+447700123456';
export const WHATSAPP_NUMBER_DISPLAY = '+44 7700 123456';
export const WHATSAPP_HOURS = '8am-8pm, 7 days';

const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER_LINK.replace('+', '')}`;
const DEFAULT_WHATSAPP_MESSAGE = "Hi Prime Coat London, I'd like a painting quote for my property in London.";

export const buildWhatsAppLink = (message: string = DEFAULT_WHATSAPP_MESSAGE) =>
  `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
