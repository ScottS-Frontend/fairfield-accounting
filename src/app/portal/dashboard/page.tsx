'use client';

import React from 'react';
import { 
  FaFileInvoiceDollar, 
  FaProjectDiagram, 
  FaEnvelope, 
  FaChartLine,
  FaClock,
  FaCheckCircle,
  FaExclamationCircle
} from 'react-icons/fa';
import styles from './dashboard.module.scss';

const recentActivity = [
  { type: 'invoice', message: 'Invoice #1042 paid - $1,200.00', date: 'May 28, 2026', status: 'completed' },
  { type: 'project', message: 'Q2 Tax Filing - Documents received', date: 'May 27, 2026', status: 'completed' },
  { type: 'message', message: 'New message from Sarah Mitchell', date: 'May 26, 2026', status: 'new' },
  { type: 'report', message: 'Monthly Financial Report - April 2026', date: 'May 25, 2026', status: 'completed' },
];

const quickStats = [
  { label: 'Active Projects', value: '3', icon: <FaProjectDiagram />, color: 'blue' },
  { label: 'Open Invoices', value: '2', icon: <FaFileInvoiceDollar />, color: 'gold' },
  { label: 'Unread Messages', value: '1', icon: <FaEnvelope />, color: 'green' },
  { label: 'YTD Revenue', value: '$45.2K', icon: <FaChartLine />, color: 'navy' },
];

export default function DashboardPage() {
  return (
    <div className={styles.dashboard}>
      <header className={styles.pageHeader}>
        <h1>Dashboard Overview</h1>
        <p>Welcome back! Here's what's happening with your account.</p>
      </header>

      {/* Quick Stats */}
      <section className={styles.statsGrid}>
        {quickStats.map((stat, index) => (
          <div key={index} className={`${styles.statCard} ${styles[stat.color]}`}>
            <div className={styles.statIcon}>{stat.icon}</div>
            <div className={styles.statInfo}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          </div>
        ))}
      </section>

      {/* Recent Activity */}
      <section className={styles.activitySection}>
        <h2>Recent Activity</h2>
        <div className={styles.activityList}>
          {recentActivity.map((activity, index) => (
            <div key={index} className={styles.activityItem}>
              <div className={styles.activityIcon}>
                {activity.status === 'completed' ? <FaCheckCircle /> : <FaExclamationCircle />}
              </div>
              <div className={styles.activityContent}>
                <p>{activity.message}</p>
                <span className={styles.activityDate}>
                  <FaClock /> {activity.date}
                </span>
              </div>
              <span className={`${styles.statusBadge} ${styles[activity.status]}`}>
                {activity.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Actions */}
      <section className={styles.actionsSection}>
        <h2>Quick Actions</h2>
        <div className={styles.actionsGrid}>
          <button className={styles.actionBtn}>
            <FaFileInvoiceDollar />
            <span>Pay Invoice</span>
          </button>
          <button className={styles.actionBtn}>
            <FaProjectDiagram />
            <span>View Projects</span>
          </button>
          <button className={styles.actionBtn}>
            <FaEnvelope />
            <span>Send Message</span>
          </button>
          <button className={styles.actionBtn}>
            <FaChartLine />
            <span>View Reports</span>
          </button>
        </div>
      </section>
    </div>
  );
}