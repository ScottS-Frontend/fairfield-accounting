'use client';

import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import styles from './contact.module.scss';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, you'd send this to your backend
  };

  return (
    <div className={styles.contact}>
      <section className={styles.hero}>
        <div className="container">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Reach out for a consultation or any questions.</p>
        </div>
      </section>

      <section className={`${styles.contactSection} section-padding`}>
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Contact Info */}
            <div className={styles.contactInfo}>
              <h2>Get in Touch</h2>
              <p>Our team is ready to assist you with your accounting needs.</p>
              
              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <FaPhone />
                  <div>
                    <span>Phone</span>
                    <p>(707) 555-0142</p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <FaEnvelope />
                  <div>
                    <span>Email</span>
                    <p>info@fairfieldaccounting.com</p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <FaMapMarkerAlt />
                  <div>
                    <span>Office</span>
                    <p>450 Main Street, Fairfield, CA 94533</p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <FaClock />
                  <div>
                    <span>Hours</span>
                    <p>Mon - Fri: 8:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={styles.formWrapper}>
              {submitted ? (
                <div className={styles.successMessage}>
                  <h3>Thank you!</h3>
                  <p>We've received your message and will get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <h3>Send us a Message</h3>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Smith"
                    />
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(707) 555-0142"
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="service">Service Interest</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="">Select a service...</option>
                      <option value="tax">Tax Preparation & Planning</option>
                      <option value="bookkeeping">Bookkeeping & Payroll</option>
                      <option value="advisory">Business Advisory</option>
                      <option value="entity">Entity Formation</option>
                      <option value="audit">Audit & Assurance</option>
                      <option value="cfo">Virtual CFO Services</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your needs..."
                    />
                  </div>

                  <button type="submit" className="btn-primary">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}