'use client';

import React, { useState } from 'react';
import { FaUser, FaBuilding, FaEnvelope, FaPhone, FaLock, FaBell, FaSave } from 'react-icons/fa';
import styles from './settings.module.scss';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');

  const [profile, setProfile] = useState({
    name: 'John Anderson',
    company: 'Anderson Consulting LLC',
    email: 'john@andersonconsulting.com',
    phone: '(707) 555-0198',
    address: '123 Business Park Drive, Fairfield, CA 94533',
  });

  const [notifications, setNotifications] = useState({
    emailReports: true,
    emailInvoices: true,
    emailMessages: true,
    smsAlerts: false,
    marketingEmails: false,
  });

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleNotificationToggle = (key: string) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key as keyof typeof notifications] }));
  };

  const handleSave = () => {
    alert('Settings saved! (Demo only)');
  };

  return (
    <div className={styles.settings}>
      <header className={styles.pageHeader}>
        <h1>Settings</h1>
        <p>Manage your account preferences and notification settings.</p>
      </header>

      <div className={styles.settingsContainer}>
        {/* Tabs */}
        <div className={styles.tabs}>
          <button 
            className={`${styles.tab} ${activeTab === 'profile' ? styles.active : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            <FaUser /> Profile
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'notifications' ? styles.active : ''}`}
            onClick={() => setActiveTab('notifications')}
          >
            <FaBell /> Notifications
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'security' ? styles.active : ''}`}
            onClick={() => setActiveTab('security')}
          >
            <FaLock /> Security
          </button>
        </div>

        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <div className={styles.tabContent}>
            <h2>Profile Information</h2>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label><FaUser /> Full Name</label>
                <input type="text" name="name" value={profile.name} onChange={handleProfileChange} />
              </div>
              <div className={styles.formGroup}>
                <label><FaBuilding /> Company</label>
                <input type="text" name="company" value={profile.company} onChange={handleProfileChange} />
              </div>
              <div className={styles.formGroup}>
                <label><FaEnvelope /> Email</label>
                <input type="email" name="email" value={profile.email} onChange={handleProfileChange} />
              </div>
              <div className={styles.formGroup}>
                <label><FaPhone /> Phone</label>
                <input type="tel" name="phone" value={profile.phone} onChange={handleProfileChange} />
              </div>
              <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                <label>Address</label>
                <input type="text" name="address" value={profile.address} onChange={handleProfileChange} />
              </div>
            </div>
          </div>
        )}

        {/* Notifications Tab */}
        {activeTab === 'notifications' && (
          <div className={styles.tabContent}>
            <h2>Notification Preferences</h2>
            <div className={styles.toggleList}>
              {Object.entries(notifications).map(([key, value]) => (
                <div key={key} className={styles.toggleItem}>
                  <div className={styles.toggleInfo}>
                    <span className={styles.toggleLabel}>
                      {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </span>
                    <span className={styles.toggleDesc}>
                      {key === 'emailReports' && 'Receive monthly financial reports via email'}
                      {key === 'emailInvoices' && 'Get notified when new invoices are available'}
                      {key === 'emailMessages' && 'Email alerts for new portal messages'}
                      {key === 'smsAlerts' && 'Text notifications for urgent updates'}
                      {key === 'marketingEmails' && 'Occasional updates about our services'}
                    </span>
                  </div>
                  <button 
                    className={`${styles.toggleSwitch} ${value ? styles.on : ''}`}
                    onClick={() => handleNotificationToggle(key)}
                  >
                    <span className={styles.toggleKnob} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Security Tab */}
        {activeTab === 'security' && (
          <div className={styles.tabContent}>
            <h2>Security Settings</h2>
            <div className={styles.securitySection}>
              <div className={styles.formGroup}>
                <label>Current Password</label>
                <input type="password" placeholder="••••••••" />
              </div>
              <div className={styles.formGroup}>
                <label>New Password</label>
                <input type="password" placeholder="Enter new password" />
              </div>
              <div className={styles.formGroup}>
                <label>Confirm New Password</label>
                <input type="password" placeholder="Confirm new password" />
              </div>
              <div className={styles.securityInfo}>
                <p><strong>Password Requirements:</strong></p>
                <ul>
                  <li>At least 8 characters</li>
                  <li>One uppercase letter</li>
                  <li>One number</li>
                  <li>One special character</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        <button onClick={handleSave} className={styles.saveBtn}>
          <FaSave /> Save Changes
        </button>
      </div>
    </div>
  );
}