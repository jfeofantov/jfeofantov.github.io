import type { Metadata } from 'next';
import { Hero1 } from '../components/ui/hero-1';
import OfferStack from '../components/OfferStack';
import ServiceHighlights from '../components/ServiceHighlights';
import Portfolio from '../components/Portfolio';
import LocalSEO from '../components/LocalSEO';
import Reviews from '../components/Reviews';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';
import StickyWhatsAppCTA from '../components/StickyWhatsAppCTA';
import StructuredData from '../components/StructuredData';
import NavBar from '../components/NavBar';
import NeedPainterCTA from '../components/NeedPainterCTA';
import TrustBadges from '../components/TrustBadges';
import BoroughShowcase from '../components/BoroughShowcase';

export const metadata: Metadata = {
  title: 'Painters & Decorators London | Prime Coat London',
  description:
    'Book vetted London painters and decorators near you for same-week surveys, dust-free prep, and daily WhatsApp updates. Prime Coat London covers Central & Greater London with fixed quotes and clean handovers.',
  keywords: [
    'painters london',
    'painters near me',
    'decorators london',
    'london painting company',
    'interior painters london',
    'exterior painters london',
    'prime coat london'
  ],
  openGraph: {
    title: 'Painters & Decorators London | Prime Coat London',
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
    title: 'Painters & Decorators London | Prime Coat London',
    description: 'Same-week surveys, dust-free prep, and WhatsApp-updated decorating teams across London.',
    images: ['https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80']
  }
};

export default function HomePage() {
  return (
    <main>
      <NavBar />
      <Hero1 />
      <TrustBadges />
      <NeedPainterCTA />
      <ServiceHighlights />
      <OfferStack />
      <LocalSEO />
      <BoroughShowcase />
      <Portfolio />
      <Reviews />
      <FinalCTA />
      <Footer />
      <StickyWhatsAppCTA />
      <StructuredData />
    </main>
  );
}
