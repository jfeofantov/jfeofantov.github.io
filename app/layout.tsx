import type { Metadata } from 'next';
import { Playfair_Display, Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans'
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif'
});

export const metadata: Metadata = {
  title: 'Prime Coat London',
  description: 'Prime Coat London delivers meticulous painting and decorating services across Greater London.',
  metadataBase: new URL('https://primecoatlondon.co.uk')
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${playfair.variable}`}>{children}</body>
    </html>
  );
}
