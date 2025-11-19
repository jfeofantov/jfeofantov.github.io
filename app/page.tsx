import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Hero from '../components/Hero';
import NeedPainter from '../components/NeedPainter';
import WhyChooseUs from '../components/WhyChooseUs';
import Services from '../components/Services';
import MaterialBadges from '../components/MaterialBadges';
import Areas from '../components/Areas';
import Footer from '../components/Footer';

const FAQsSection = dynamic(() => import('../components/FAQs'), {
  ssr: false,
  loading: () => (
    <section className="section-padding text-center text-slate-400" aria-live="polite">
      Loading FAQs…
    </section>
  )
});

const PortfolioSection = dynamic(() => import('../components/Portfolio'), {
  ssr: false,
  loading: () => (
    <section className="section-padding text-center text-slate-400" aria-live="polite">
      Loading portfolio…
    </section>
  )
});

const ReviewsSection = dynamic(() => import('../components/Reviews'), {
  ssr: false,
  loading: () => (
    <section className="section-padding text-center text-slate-400" aria-live="polite">
      Loading testimonials…
    </section>
  )
});

const FinalCTASection = dynamic(() => import('../components/FinalCTA'), {
  ssr: false,
  loading: () => (
    <section className="section-padding text-center text-slate-400" aria-live="polite">
      Loading contact form…
    </section>
  )
});

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
      <NeedPainter />
      <WhyChooseUs />
      <Services />
      <MaterialBadges />
      <FAQsSection />
      <PortfolioSection />
      <ReviewsSection />
      <Areas />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
