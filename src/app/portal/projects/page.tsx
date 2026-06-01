'use client';

import React from 'react';
import { FaClock, FaCheckCircle, FaSpinner, FaCalendarAlt, FaFileAlt } from 'react-icons/fa';
import styles from './projects.module.scss';

const projects = [
  {
    id: 'P-2026-001',
    name: 'Q2 Tax Filing 2026',
    status: 'In Progress',
    dueDate: 'June 15, 2026',
    description: 'Preparation and filing of quarterly business tax returns for Q2 2026.',
    progress: 65,
    documents: 12,
    lastUpdate: 'May 28, 2026',
  },
  {
    id: 'P-2026-002',
    name: 'Annual Financial Audit',
    status: 'Pending',
    dueDate: 'July 31, 2026',
    description: 'Comprehensive annual audit and review of financial statements.',
    progress: 20,
    documents: 8,
    lastUpdate: 'May 25, 2026',
  },
  {
    id: 'P-2026-003',
    name: 'Payroll System Setup',
    status: 'Completed',
    dueDate: 'May 15, 2026',
    description: 'Implementation of new payroll processing system for 25 employees.',
    progress: 100,
    documents: 5,
    lastUpdate: 'May 15, 2026',
  },
  {
    id: 'P-2026-004',
    name: 'CFO Advisory - Q3 Planning',
    status: 'In Progress',
    dueDate: 'August 30, 2026',
    description: 'Strategic financial planning and KPI dashboard setup for Q3.',
    progress: 40,
    documents: 3,
    lastUpdate: 'May 20, 2026',
  },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'Completed':
      return <FaCheckCircle className={styles.completedIcon} />;
    case 'In Progress':
      return <FaSpinner className={styles.progressIcon} />;
    case 'Pending':
      return <FaClock className={styles.pendingIcon} />;
    default:
      return <FaClock />;
  }
};

const getStatusClass = (status: string) => {
  switch (status) {
    case 'Completed':
      return styles.statusCompleted;
    case 'In Progress':
      return styles.statusInProgress;
    case 'Pending':
      return styles.statusPending;
    default:
      return '';
  }
};

export default function ProjectsPage() {
  return (
    <div className={styles.projects}>
      <header className={styles.pageHeader}>
        <h1>Projects</h1>
        <p>Track the status of your ongoing and completed projects.</p>
      </header>

      <div className={styles.projectsList}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <div className={styles.projectHeader}>
              <div className={styles.projectInfo}>
                <span className={styles.projectId}>{project.id}</span>
                <h3>{project.name}</h3>
              </div>
              <div className={`${styles.statusBadge} ${getStatusClass(project.status)}`}>
                {getStatusIcon(project.status)}
                <span>{project.status}</span>
              </div>
            </div>

            <p className={styles.description}>{project.description}</p>

            <div className={styles.progressBar}>
              <div 
                className={styles.progressFill} 
                style={{ width: `${project.progress}%` }}
              />
            </div>

            <div className={styles.projectMeta}>
              <div className={styles.metaItem}>
                <FaCalendarAlt />
                <span>Due: {project.dueDate}</span>
              </div>
              <div className={styles.metaItem}>
                <FaFileAlt />
                <span>{project.documents} Documents</span>
              </div>
              <div className={styles.metaItem}>
                <FaClock />
                <span>Updated: {project.lastUpdate}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}