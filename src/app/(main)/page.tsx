import React from 'react';
import Link from 'next/link';
import AnimatedSection from '@/components/animations/AnimatedSection';
import StaggerContainer from '@/components/animations/StaggerContainer';
import StaggerItem from '@/components/animations/StaggerItem';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
            <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <AnimatedSection className={styles.heroContent} delay={0.2}>
              <h1 className={styles.heroTitle}>
                Trusted Accounting &<br />
                <span className={styles.goldAccent}>Financial Advisory</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Fairfield Accounting Services delivers expert tax preparation, bookkeeping, 
                and strategic business advisory for individuals and growing companies.
              </p>
              <div className={styles.heroButtons}>
                <Link href="/services" className="btn-primary">Our Services</Link>
                <Link href="/booking" className={styles.btnLight}>Book a Consultation</Link>
              </div>
            </AnimatedSection>
            <AnimatedSection className={styles.heroImage} delay={0.4} direction="right">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=500&fit=crop" 
                alt="Modern office desk with laptop"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`${styles.features} section-padding`}>
        <div className="container">
          <AnimatedSection className="text-center" delay={0.1}>
            <h2 className={styles.sectionTitle}>Why Choose Fairfield Accounting?</h2>
            <p className={styles.sectionSubtitle}>
              Two decades of expertise helping clients navigate complex financial landscapes.
            </p>
          </AnimatedSection>
          
          <StaggerContainer className={styles.featureGrid} staggerDelay={0.15}>
            <StaggerItem>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>20+</div>
                <h3>Years of Experience</h3>
                <p>Trusted by businesses and individuals since 2004 with proven results.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>500+</div>
                <h3>Clients Served</h3>
                <p>From startups to established enterprises, we scale with your needs.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>99%</div>
                <h3>Client Satisfaction</h3>
                <p>Dedicated to accuracy, transparency, and long-term partnerships.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>24/7</div>
                <h3>Portal Access</h3>
                <p>Secure client portal for documents, billing, and real-time updates.</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className="container">
          <AnimatedSection className={styles.ctaContent} delay={0.2}>
            <h2>Ready to Take Control of Your Finances?</h2>
            <p>Schedule a free consultation and discover how we can help you grow.</p>
            <Link href="/booking" className="btn-primary">Book Your Free Consultation</Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}