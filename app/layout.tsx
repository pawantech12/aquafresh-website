import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AquaFresh - Pure Refreshment Redefined',
  description: 'Experience the perfect blend of natural flavors and essential nutrients in every refreshing sip. Premium beverage crafted with the finest ingredients for your active lifestyle.',
  keywords: 'premium beverage, natural drinks, healthy hydration, organic, energy drinks, wellness',
  authors: [{ name: 'AquaFresh Team' }],
  openGraph: {
    title: 'AquaFresh - Pure Refreshment Redefined',
    description: 'Premium beverages crafted with the finest natural ingredients',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}