'use client';

import React, { useState } from 'react';
import { FaFileInvoiceDollar, FaCheckCircle, FaClock, FaExclamationCircle, FaCreditCard, FaPaypal } from 'react-icons/fa';
import styles from './billing.module.scss';

const invoices = [
  {
    id: 'INV-2026-004',
    description: 'Business Advisory - May 2026',
    amount: 2500.00,
    status: 'Paid',
    date: 'May 15, 2026',
    dueDate: 'May 30, 2026',
    paidDate: 'May 20, 2026',
    method: 'Credit Card',
  },
  {
    id: 'INV-2026-003',
    description: 'Tax Preparation - Q2 2026',
    amount: 1800.00,
    status: 'Paid',
    date: 'April 10, 2026',
    dueDate: 'April 25, 2026',
    paidDate: 'April 18, 2026',
    method: 'Bank Transfer',
  },
  {
    id: 'INV-2026-002',
    description: 'Monthly Bookkeeping - April 2026',
    amount: 950.00,
    status: 'Unpaid',
    date: 'April 1, 2026',
    dueDate: 'April 15, 2026',
    paidDate: null,
    method: null,
  },
  {
    id: 'INV-2026-001',
    description: 'CFO Advisory - Q1 2026',
    amount: 4500.00,
    status: 'Paid',
    date: 'January 15, 2026',
    dueDate: 'January 30, 2026',
    paidDate: 'January 22, 2026',
    method: 'Credit Card',
  },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'Paid':
      return <FaCheckCircle />;
    case 'Unpaid':
      return <FaClock />;
    case 'Overdue':
      return <FaExclamationCircle />;
    default:
      return <FaClock />;
  }
};

const getStatusClass = (status: string) => {
  switch (status) {
    case 'Paid':
      return styles.statusPaid;
    case 'Unpaid':
      return styles.statusUnpaid;
    case 'Overdue':
      return styles.statusOverdue;
    default:
      return '';
  }
};

export default function BillingPage() {
  const [selectedInvoice, setSelectedInvoice] = useState<string | null>(null);

  const totalPaid = invoices.filter(i => i.status === 'Paid').reduce((sum, i) => sum + i.amount, 0);
  const totalUnpaid = invoices.filter(i => i.status === 'Unpaid').reduce((sum, i) => sum + i.amount, 0);

  const handlePayInvoice = (invoiceId: string) => {
    alert(`This is a demo. In production, this would redirect to Stripe Checkout for invoice ${invoiceId}`);
  };

  return (
    <div className={styles.billing}>
      <header className={styles.pageHeader}>
        <h1>Billing</h1>
        <p>View invoices, track payments, and manage your account balance.</p>
      </header>

      {/* Summary Cards */}
      <div className={styles.summaryGrid}>
        <div className={styles.summaryCard}>
          <span className={styles.summaryLabel}>Total Paid (YTD)</span>
          <span className={styles.summaryValue}>${totalPaid.toLocaleString()}</span>
        </div>
        <div className={`${styles.summaryCard} ${styles.unpaid}`}>
          <span className={styles.summaryLabel}>Outstanding Balance</span>
          <span className={styles.summaryValue}>${totalUnpaid.toLocaleString()}</span>
        </div>
        <div className={styles.summaryCard}>
          <span className={styles.summaryLabel}>Next Invoice Due</span>
          <span className={styles.summaryValue}>June 1, 2026</span>
        </div>
      </div>

      {/* Invoices List */}
      <div className={styles.invoicesSection}>
        <h2>Recent Invoices</h2>
        <div className={styles.invoicesList}>
          {invoices.map((invoice) => (
            <div key={invoice.id} className={styles.invoiceCard}>
              <div className={styles.invoiceHeader}>
                <div className={styles.invoiceInfo}>
                  <span className={styles.invoiceId}>{invoice.id}</span>
                  <h3>{invoice.description}</h3>
                </div>
                <div className={`${styles.statusBadge} ${getStatusClass(invoice.status)}`}>
                  {getStatusIcon(invoice.status)}
                  <span>{invoice.status}</span>
                </div>
              </div>

              <div className={styles.invoiceDetails}>
                <div className={styles.detailItem}>
                  <span>Amount</span>
                  <strong>${invoice.amount.toLocaleString()}</strong>
                </div>
                <div className={styles.detailItem}>
                  <span>Invoice Date</span>
                  <strong>{invoice.date}</strong>
                </div>
                <div className={styles.detailItem}>
                  <span>Due Date</span>
                  <strong>{invoice.dueDate}</strong>
                </div>
                {invoice.paidDate && (
                  <div className={styles.detailItem}>
                    <span>Paid Date</span>
                    <strong>{invoice.paidDate}</strong>
                  </div>
                )}
                {invoice.method && (
                  <div className={styles.detailItem}>
                    <span>Payment Method</span>
                    <strong>{invoice.method}</strong>
                  </div>
                )}
              </div>

              {invoice.status === 'Unpaid' && (
                <div className={styles.paymentActions}>
                  <button 
                    className={styles.payBtn}
                    onClick={() => handlePayInvoice(invoice.id)}
                  >
                    <FaCreditCard /> Pay with Card
                  </button>
                  <button 
                    className={styles.payBtnPaypal}
                    onClick={() => handlePayInvoice(invoice.id)}
                  >
                    <FaPaypal /> Pay with PayPal
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}