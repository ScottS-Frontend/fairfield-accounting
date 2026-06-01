import React from 'react';
import styles from './about.module.scss';

export default function AboutPage() {
  return (
    <div className={styles.about}>
      <section className={styles.hero}>
        <div className="container">
          <h1>About Fairfield Accounting</h1>
          <p>Two decades of trusted financial partnership</p>
        </div>
      </section>

      <section className={`${styles.story} section-padding`}>
        <div className="container">
          <div className={styles.storyGrid}>
            <div className={styles.storyContent}>
              <h2>Our Story</h2>
              <p>
                Founded in 2004 by Robert Stewart, Fairfield Accounting Services began 
                with a simple mission: provide businesses and individuals with the clarity 
                and confidence they need to make smart financial decisions.
              </p>
              <p>
                What started as a small tax practice in downtown Fairfield has grown into 
                a full-service accounting firm serving clients across Northern California 
                and beyond. Today, our team of certified professionals combines deep 
                expertise with modern technology to deliver exceptional results.
              </p>
              <p>
                We believe accounting isn't just about numbers — it's about people. Every 
                client relationship is built on trust, transparency, and a genuine 
                commitment to your success.
              </p>
            </div>
            <div className={styles.storyStats}>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>20+</span>
                <span className={styles.statLabel}>Years in Business</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>500+</span>
                <span className={styles.statLabel}>Clients Served</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>4</span>
                <span className={styles.statLabel}>Expert Partners</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>CPA-Led Team</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.values} section-padding`}>
        <div className="container">
          <div className="text-center">
            <h2 className={styles.sectionTitle}>Our Core Values</h2>
          </div>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <h3>Integrity First</h3>
              <p>We operate with unwavering honesty and ethical standards in every client interaction.</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Client Success</h3>
              <p>Your financial goals are our priority. We measure our success by your growth.</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Continuous Innovation</h3>
              <p>We embrace modern tools and strategies to deliver efficient, accurate results.</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Community Focus</h3>
              <p>We're proud to support local businesses and give back to the Fairfield community.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}