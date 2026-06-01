'use client';

import React, { useEffect } from 'react';
import { FaVideo, FaPhone, FaBuilding } from 'react-icons/fa';
import AnimatedSection from '@/components/animations/AnimatedSection';
import styles from './booking.module.scss';

export default function BookingPage() {
  useEffect(() => {
    const existingScript = document.getElementById('calendly-script');
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'calendly-script';
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className={styles.booking}>
      <section className={styles.hero}>
        <div className="container">
          <h1>Book a Consultation</h1>
          <p>Schedule a free 30-minute consultation with our team</p>
        </div>
      </section>

      <section className={`${styles.bookingSection} section-padding`}>
        <div className="container">
          <div className={styles.bookingGrid}>
            <AnimatedSection className={styles.bookingInfo} delay={0.1}>
              <h2>What to Expect</h2>
              <p>
                During your free consultation, we'll discuss your financial situation, 
                answer your questions, and recommend the best services for your needs.
              </p>

              <div className={styles.meetingOptions}>
                <h3>Meeting Options</h3>
                <div className={styles.option}>
                  <FaVideo />
                  <div>
                    <span>Video Call</span>
                    <p>Meet via Zoom or Google Meet</p>
                  </div>
                </div>
                <div className={styles.option}>
                  <FaPhone />
                  <div>
                    <span>Phone Call</span>
                    <p>We'll call you at your preferred number</p>
                  </div>
                </div>
                <div className={styles.option}>
                  <FaBuilding />
                  <div>
                    <span>In-Person</span>
                    <p>Visit our Fairfield office</p>
                  </div>
                </div>
              </div>

              <div className={styles.prepList}>
                <h3>Come Prepared</h3>
                <ul>
                  <li>Recent tax returns (if applicable)</li>
                  <li>Business financial statements</li>
                  <li>List of questions or concerns</li>
                  <li>Any relevant deadlines</li>
                </ul>
              </div>
            </AnimatedSection>

            <div className={styles.calendlyWrapper}>
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/scottsfrontend/free-consultation"
                style={{ minWidth: '320px', height: '700px' }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}