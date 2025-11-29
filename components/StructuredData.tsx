import { faqs, reviews } from '../lib/content';
import { PHONE_NUMBER_DISPLAY } from '../lib/contact';

const siteUrl = 'https://primecoatlondon.co.uk';
const phone = PHONE_NUMBER_DISPLAY;

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Prime Coat London',
    image: 'https://primecoatlondon.co.uk/hero-mobile.jpg',
    url: siteUrl,
    telephone: phone,
    email: 'hello@primecoatlondon.co.uk',
    priceRange: '££',
    description: 'Boutique painting, decorating, and plaster restoration specialists covering Greater London.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '172 Buckingham Palace Road',
      addressLocality: 'London',
      postalCode: 'SW1W 9QQ',
      addressCountry: 'GB'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.4934,
      longitude: -0.1517
    },
    areaServed: ['Greater London', 'Belgravia', 'Chelsea', 'Mayfair', 'Marylebone'],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '20:00'
      }
    ],
    sameAs: ['https://www.instagram.com/primecoatlondon', 'https://www.facebook.com/primecoatlondon']
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Painting and Decorating',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Prime Coat London',
      url: siteUrl,
      telephone: phone
    },
    areaServed: {
      '@type': 'City',
      name: 'London'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Premium decorating services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Interior painting & decorating' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Plaster repair & skim coating' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cabinet refinishing & spraying' } }
      ]
    }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: reviews.map((review, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Review',
        name: review.title,
        reviewBody: review.text,
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5'
        },
        author: {
          '@type': 'Person',
          name: review.name
        },
        itemReviewed: {
          '@type': 'Service',
          name: 'Prime Coat London painting & decorating'
        }
      }
    }))
  }
];

export default function StructuredData() {
  return (
    <>
      {structuredData.map((schema, index) => (
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          key={index}
          type="application/ld+json"
          suppressHydrationWarning
        />
      ))}
    </>
  );
}
