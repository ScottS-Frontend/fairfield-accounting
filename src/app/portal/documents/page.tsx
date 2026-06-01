'use client';

import React from 'react';
import { FaFilePdf, FaFileExcel, FaFileWord, FaDownload, FaEye, FaClock } from 'react-icons/fa';
import styles from './documents.module.scss';

const documents = [
  {
    id: 'DOC-001',
    name: 'Q1 2026 Financial Statements',
    type: 'pdf',
    size: '2.4 MB',
    date: 'April 15, 2026',
    category: 'Financial Reports',
  },
  {
    id: 'DOC-002',
    name: 'Tax Return 2025 - Business',
    type: 'pdf',
    size: '4.1 MB',
    date: 'March 10, 2026',
    category: 'Tax Documents',
  },
  {
    id: 'DOC-003',
    name: 'Payroll Summary Q1 2026',
    type: 'excel',
    size: '1.8 MB',
    date: 'April 5, 2026',
    category: 'Payroll',
  },
  {
    id: 'DOC-004',
    name: 'Audit Report 2025',
    type: 'pdf',
    size: '6.2 MB',
    date: 'February 28, 2026',
    category: 'Audit',
  },
  {
    id: 'DOC-005',
    name: 'Business Advisory Notes - March',
    type: 'word',
    size: '856 KB',
    date: 'March 22, 2026',
    category: 'Advisory',
  },
  {
    id: 'DOC-006',
    name: 'Entity Formation Documents',
    type: 'pdf',
    size: '3.5 MB',
    date: 'January 15, 2026',
    category: 'Legal',
  },
];

const getFileIcon = (type: string) => {
  switch (type) {
    case 'pdf':
      return <FaFilePdf className={styles.pdfIcon} />;
    case 'excel':
      return <FaFileExcel className={styles.excelIcon} />;
    case 'word':
      return <FaFileWord className={styles.wordIcon} />;
    default:
      return <FaFilePdf />;
  }
};

export default function DocumentsPage() {
  return (
    <div className={styles.documents}>
      <header className={styles.pageHeader}>
        <h1>Documents</h1>
        <p>Access and download your important financial documents.</p>
      </header>

      <div className={styles.documentsGrid}>
        {documents.map((doc) => (
          <div key={doc.id} className={styles.documentCard}>
            <div className={styles.fileIcon}>
              {getFileIcon(doc.type)}
            </div>
            
            <div className={styles.docInfo}>
              <span className={styles.docCategory}>{doc.category}</span>
              <h3>{doc.name}</h3>
              <div className={styles.docMeta}>
                <span>{doc.type.toUpperCase()}</span>
                <span>{doc.size}</span>
                <span className={styles.date}>
                  <FaClock /> {doc.date}
                </span>
              </div>
            </div>

            <div className={styles.docActions}>
              <button className={styles.actionBtn} title="View">
                <FaEye />
              </button>
              <button className={styles.actionBtn} title="Download">
                <FaDownload />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}