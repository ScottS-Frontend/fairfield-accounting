'use client';

import React from 'react';
import { FaFilePdf, FaDownload, FaCalendarAlt, FaChartBar, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import styles from './reports.module.scss';

const reports = [
  {
    id: 'RPT-2026-004',
    name: 'Monthly Financial Report - April 2026',
    type: 'pdf',
    date: 'May 5, 2026',
    period: 'April 2026',
    category: 'Financial',
    size: '3.2 MB',
    metrics: {
      revenue: { value: '$42,500', change: '+12%', up: true },
      expenses: { value: '$28,300', change: '-5%', up: false },
      profit: { value: '$14,200', change: '+18%', up: true },
    },
  },
  {
    id: 'RPT-2026-003',
    name: 'Quarterly Tax Summary - Q1 2026',
    type: 'pdf',
    date: 'April 15, 2026',
    period: 'Q1 2026',
    category: 'Tax',
    size: '2.8 MB',
    metrics: {
      revenue: { value: '$125,000', change: '+8%', up: true },
      expenses: { value: '$82,500', change: '+3%', up: false },
      profit: { value: '$42,500', change: '+15%', up: true },
    },
  },
  {
    id: 'RPT-2026-002',
    name: 'Cash Flow Analysis - March 2026',
    type: 'pdf',
    date: 'April 2, 2026',
    period: 'March 2026',
    category: 'Analysis',
    size: '1.9 MB',
    metrics: {
      revenue: { value: '$38,200', change: '-2%', up: false },
      expenses: { value: '$26,100', change: '-8%', up: true },
      profit: { value: '$12,100', change: '+5%', up: true },
    },
  },
  {
    id: 'RPT-2026-001',
    name: 'Annual Performance Review 2025',
    type: 'pdf',
    date: 'January 20, 2026',
    period: 'FY 2025',
    category: 'Annual',
    size: '5.4 MB',
    metrics: {
      revenue: { value: '$485,000', change: '+22%', up: true },
      expenses: { value: '$312,000', change: '+15%', up: false },
      profit: { value: '$173,000', change: '+35%', up: true },
    },
  },
];

export default function ReportsPage() {
  return (
    <div className={styles.reports}>
      <header className={styles.pageHeader}>
        <h1>Reports</h1>
        <p>View and download your financial reports and analyses.</p>
      </header>

      <div className={styles.reportsList}>
        {reports.map((report) => (
          <div key={report.id} className={styles.reportCard}>
            <div className={styles.reportHeader}>
              <div className={styles.reportIcon}>
                <FaFilePdf />
              </div>
              <div className={styles.reportInfo}>
                <span className={styles.reportCategory}>{report.category}</span>
                <h3>{report.name}</h3>
                <div className={styles.reportMeta}>
                  <span><FaCalendarAlt /> {report.period}</span>
                  <span>{report.type.toUpperCase()}</span>
                  <span>{report.size}</span>
                </div>
              </div>
              <button className={styles.downloadBtn} title="Download Report">
                <FaDownload />
              </button>
            </div>

            <div className={styles.metricsGrid}>
              <div className={styles.metric}>
                <span className={styles.metricLabel}>Revenue</span>
                <span className={styles.metricValue}>{report.metrics.revenue.value}</span>
                <span className={`${styles.metricChange} ${report.metrics.revenue.up ? styles.up : styles.down}`}>
                  {report.metrics.revenue.up ? <FaArrowUp /> : <FaArrowDown />}
                  {report.metrics.revenue.change}
                </span>
              </div>
              <div className={styles.metric}>
                <span className={styles.metricLabel}>Expenses</span>
                <span className={styles.metricValue}>{report.metrics.expenses.value}</span>
                <span className={`${styles.metricChange} ${report.metrics.expenses.up ? styles.up : styles.down}`}>
                  {report.metrics.expenses.up ? <FaArrowUp /> : <FaArrowDown />}
                  {report.metrics.expenses.change}
                </span>
              </div>
              <div className={styles.metric}>
                <span className={styles.metricLabel}>Net Profit</span>
                <span className={styles.metricValue}>{report.metrics.profit.value}</span>
                <span className={`${styles.metricChange} ${report.metrics.profit.up ? styles.up : styles.down}`}>
                  {report.metrics.profit.up ? <FaArrowUp /> : <FaArrowDown />}
                  {report.metrics.profit.change}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}