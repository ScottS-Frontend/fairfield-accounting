'use client';

import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { FaCheck, FaStar } from 'react-icons/fa';
import StaggerContainer from '@/components/animations/StaggerContainer';
import StaggerItem from '@/components/animations/StaggerItem';
import styles from './shop.module.scss';

const stripePromise = loadStripe('pk_test_your_publishable_key_here');

const packages = [
  {
    id: 'basic-tax',
    name: 'Basic Tax Prep',
    price: '$299',
    priceCents: 29900,
    description: 'Perfect for individuals with W-2 income and standard deductions.',
    features: [
      'Federal & State Returns',
      'Standard Deductions',
      'E-File Included',
      'Audit Support (1 year)',
    ],
    popular: false,
  },
  {
    id: 'business-pro',
    name: 'Business Pro',
    price: '$799',
    priceCents: 79900,
    description: 'Comprehensive package for small businesses and LLCs.',
    features: [
      'Business Tax Return',
      'Quarterly Estimates',
      'Bookkeeping Review',
      'Payroll Consultation',
      'Priority Support',
    ],
    popular: true,
  },
  {
    id: 'cfo-premium',
    name: 'CFO Premium',
    price: '$1,499',
    priceCents: 149900,
    description: 'Full-service financial management for growing companies.',
    features: [
      'Everything in Business Pro',
      'Monthly Financial Reports',
      'KPI Dashboard Setup',
      'Strategic Planning Sessions',
      'Dedicated Account Manager',
      'Unlimited Consultations',
    ],
    popular: false,
  },
];

export default function ShopPage() {
  const [loading, setLoading] = useState<string | null>(null);

  const handleCheckout = async (packageId: string, priceCents: number) => {
    setLoading(packageId);
    setTimeout(() => {
      alert(`This is a demo. In production, this would redirect to Stripe Checkout for $${(priceCents / 100).toFixed(2)}`);
      setLoading(null);
    }, 1000);
  };

  return (
    <div className={styles.shop}>
      <section className={styles.hero}>
        <div className="container">
          <h1>Service Packages</h1>
          <p>Transparent pricing for professional accounting services</p>
        </div>
      </section>

      <section className={`${styles.packages} section-padding`}>
        <div className="container">
          <StaggerContainer className={styles.packagesGrid} staggerDelay={0.15}>
            {packages.map((pkg) => (
              <StaggerItem key={pkg.id}>
                <div className={`${styles.packageCard} ${pkg.popular ? styles.popular : ''}`}>
                  {pkg.popular && (
                    <div className={styles.popularBadge}>
                      <FaStar /> Most Popular
                    </div>
                  )}
                  
                  <h2>{pkg.name}</h2>
                  <div className={styles.price}>
                    <span className={styles.amount}>{pkg.price}</span>
                    <span className={styles.period}>one-time</span>
                  </div>
                  <p className={styles.description}>{pkg.description}</p>
                  
                  <ul className={styles.features}>
                    {pkg.features.map((feature, i) => (
                      <li key={i}>
                        <FaCheck />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleCheckout(pkg.id, pkg.priceCents)}
                    className={styles.checkoutBtn}
                    disabled={loading === pkg.id}
                  >
                    {loading === pkg.id ? 'Processing...' : 'Get Started'}
                  </button>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className={styles.disclaimer}>
            <p>
              * Prices are estimates. Final pricing may vary based on complexity. 
              Contact us for a custom quote.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}