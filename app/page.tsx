import type { Metadata } from 'next';
import { Hero1 } from '../components/ui/hero-1';
import OfferStack from '../components/OfferStack';
import ServiceHighlights from '../components/ServiceHighlights';
import Reviews from '../components/Reviews';
import FAQs from '../components/FAQs';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';
import StickyWhatsAppCTA from '../components/StickyWhatsAppCTA';
import StructuredData from '../components/StructuredData';

export const metadata: Metadata = {
  title: 'Prime Coat London | Zero-Stress Painting & Decorating Funnel',
  description:
    'Book a meticulous London painting & decorating crew with same-week surveys, dust-free prep, and daily WhatsApp updates. Prime Coat London turns enquiries into protected, camera-ready spaces.',
  openGraph: {
    title: 'Prime Coat London | Zero-Stress Painting & Decorating Funnel',
    description:
      'Same-week surveys, fixed quotes, and fully insured painting crews covering Greater London.',
    url: 'https://primecoatlondon.co.uk/',
    siteName: 'Prime Coat London',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Prime Coat London painting and decorating team'
      }
    ]
  },
  alternates: {
    canonical: 'https://primecoatlondon.co.uk/'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prime Coat London | Zero-Stress Painting & Decorating Funnel',
    description: 'Same-week surveys, dust-free prep, and WhatsApp-updated decorating teams across London.',
    images: ['https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80']
  }
};

export default function HomePage() {
  return (
    <main>
      <Hero1 />
      <OfferStack />
      <ServiceHighlights />
      <Reviews />
      <FAQs />
      <FinalCTA />
      <Footer />
      <StickyWhatsAppCTA />
      <StructuredData />
    </main>
  );
}
