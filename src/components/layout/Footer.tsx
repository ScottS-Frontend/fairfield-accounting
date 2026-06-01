import React from 'react';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaFacebook } from 'react-icons/fa';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <h3 className={styles.footerLogo}>Fairfield Accounting</h3>
            <p className={styles.footerTagline}>
              Trusted financial partners for businesses and individuals since 2004.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
            </div>
          </div>

          <div className={styles.footerLinks}>
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/team">Our Team</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/portal">Client Portal</Link></li>
            </ul>
          </div>

          <div className={styles.footerServices}>
            <h4>Services</h4>
            <ul>
              <li><Link href="/services">Tax Preparation</Link></li>
              <li><Link href="/services">Bookkeeping</Link></li>
              <li><Link href="/services">Business Advisory</Link></li>
              <li><Link href="/services">Audit & Assurance</Link></li>
              <li><Link href="/services">Virtual CFO</Link></li>
            </ul>
          </div>

          <div className={styles.footerContact}>
            <h4>Contact Us</h4>
            <ul>
              <li>
                <FaPhone />
                <span>(707) 555-0142</span>
              </li>
              <li>
                <FaEnvelope />
                <span>info@fairfieldaccounting.com</span>
              </li>
              <li>
                <FaMapMarkerAlt />
                <span>450 Main Street, Fairfield, CA 94533</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} Fairfield Accounting Services. All rights reserved.</p>
          <div className={styles.footerLegal}>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}