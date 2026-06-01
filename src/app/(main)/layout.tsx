import type { Metadata } from 'next';
import '../globals.scss';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Fairfield Accounting Services | Tax, Bookkeeping & Advisory in Fairfield, CA',
    template: '%s | Fairfield Accounting Services',
  },
  description: 'Professional accounting, tax preparation, bookkeeping, and business advisory services in Fairfield, CA. Trusted CPA-led team serving Northern California since 2004.',
  keywords: ['accounting', 'tax preparation', 'bookkeeping', 'CPA', 'Fairfield CA', 'business advisory', 'payroll', 'audit', 'virtual CFO'],
  authors: [{ name: 'Fairfield Accounting Services' }],
  creator: 'Fairfield Accounting Services',
  publisher: 'Fairfield Accounting Services',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fairfieldaccounting.com',
    siteName: 'Fairfield Accounting Services',
    title: 'Fairfield Accounting Services | Tax, Bookkeeping & Advisory',
    description: 'Professional accounting services in Fairfield, CA. Tax preparation, bookkeeping, business advisory, and more.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fairfield Accounting Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fairfield Accounting Services',
    description: 'Professional accounting, tax preparation, and business advisory in Fairfield, CA.',
    images: ['/og-image.jpg'],
    creator: '@fairfieldaccounting',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://fairfieldaccounting.com',
  },
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>{children}</main>
      <Footer />
    </>
  );
}