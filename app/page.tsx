import type { Metadata } from 'next';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import Services from '../components/Services';
import BeforeAfter from '../components/BeforeAfter';
import Reviews from '../components/Reviews';
import Areas from '../components/Areas';
import FinalCTA from '../components/FinalCTA';

export const metadata: Metadata = {
  title: 'Prime Coat London | Painting & Decorating Specialists',
  description:
    'Prime Coat London delivers premium painting, decorating, and plaster restoration across Greater London with honest pricing and meticulous quality.',
  openGraph: {
    title: 'Prime Coat London | Painting & Decorating Specialists',
    description:
      'Prime Coat London delivers premium painting, decorating, and plaster restoration across Greater London with honest pricing and meticulous quality.',
    url: 'https://primecoatlondon.com/',
    siteName: 'Prime Coat London',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Prime Coat London work in progress'
      }
    ]
  },
  alternates: {
    canonical: 'https://primecoatlondon.com/'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prime Coat London | Painting & Decorating Specialists',
    description:
      'Prime Coat London delivers premium painting, decorating, and plaster restoration across Greater London with honest pricing and meticulous quality.',
    images: ['https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80']
  }
};

export default function HomePage() {
  return (
    <main className="pt-28">
      <Hero />
      <WhyChooseUs />
      <Services />
      <BeforeAfter />
      <Reviews />
      <Areas />
      <FinalCTA />
    </main>
  );
}
