import type { Metadata } from 'next';
import '../globals.scss';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Fairfield Accounting Services',
  description: 'Professional accounting, tax preparation, bookkeeping, and business advisory services in Fairfield, CA.',
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}