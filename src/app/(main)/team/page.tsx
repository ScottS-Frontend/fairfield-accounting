import React from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import StaggerContainer from '@/components/animations/StaggerContainer';
import StaggerItem from '@/components/animations/StaggerItem';
import styles from './team.module.scss';

const teamMembers = [
  {
    name: 'Robert Stewart',
    title: 'Founder & Managing Partner',
    bio: 'CPA with 20+ years of experience. Specializes in tax strategy and business advisory for mid-market companies.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Sarah Mitchell',
    title: 'Senior Tax Director',
    bio: 'Enrolled Agent and tax specialist. Expert in complex individual returns and small business taxation.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Jonathan Davis',
    title: 'Audit & Assurance Lead',
    bio: 'CPA with Big Four background. Leads our audit practice with precision and regulatory expertise.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Amanda Rodriguez',
    title: 'Virtual CFO',
    bio: 'MBA, CPA. Helps growing businesses scale with strategic financial planning and KPI-driven insights.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
  },
];

export default function TeamPage() {
  return (
    <div className={styles.team}>
      <section className={styles.hero}>
        <div className="container">
          <h1>Meet Our Team</h1>
          <p>Experienced professionals dedicated to your financial success</p>
        </div>
      </section>

      <section className={`${styles.teamGrid} section-padding`}>
        <div className="container">
          <StaggerContainer className={styles.grid} staggerDelay={0.15}>
            {teamMembers.map((member, index) => (
              <StaggerItem key={index}>
                <div className={styles.memberCard}>
                  <div className={styles.imageWrapper}>
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className={styles.memberInfo}>
                    <h3>{member.name}</h3>
                    <span className={styles.title}>{member.title}</span>
                    <p>{member.bio}</p>
                    <div className={styles.socialLinks}>
                      <a href="#" aria-label={`Email ${member.name}`}>
                        <FaEnvelope />
                      </a>
                      <a href="#" aria-label={`${member.name} LinkedIn`}>
                        <FaLinkedin />
                      </a>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}