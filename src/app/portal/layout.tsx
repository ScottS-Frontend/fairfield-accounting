'use client';

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  FaTachometerAlt, 
  FaProjectDiagram, 
  FaFileAlt, 
  FaEnvelope, 
  FaChartBar, 
  FaCreditCard, 
  FaCog, 
  FaSignOutAlt,
  FaBars,
  FaTimes,
  FaArrowLeft
} from 'react-icons/fa';
import styles from './layout.module.scss';

const sidebarLinks = [
  { href: '/portal/dashboard', label: 'Overview', icon: <FaTachometerAlt /> },
  { href: '/portal/projects', label: 'Projects', icon: <FaProjectDiagram /> },
  { href: '/portal/documents', label: 'Documents', icon: <FaFileAlt /> },
  { href: '/portal/messages', label: 'Messages', icon: <FaEnvelope /> },
  { href: '/portal/reports', label: 'Reports', icon: <FaChartBar /> },
  { href: '/portal/billing', label: 'Billing', icon: <FaCreditCard /> },
  { href: '/portal/settings', label: 'Settings', icon: <FaCog /> },
];

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('portalUser');
      if (stored) {
        setUser(JSON.parse(stored));
      }
      setLoading(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('portalUser');
    router.push('/portal');
    router.refresh();
  };

  if (loading) {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Loading...</div>;
  }

  if (!user && pathname === '/portal') {
    return (
      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #1a365d 0%, #2c5282 100%)' }}>
        {children}
      </div>
    );
  }

  if (!user && pathname !== '/portal') {
    return null;
  }

  return (
    <div className={styles.portalLayout}>
      <button 
        className={styles.mobileToggle}
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      <aside className={`${styles.sidebar} ${sidebarOpen ? styles.open : ''}`}>
        {/* User Profile - Now at TOP */}
        <div className={styles.userProfile}>
          <img src={user?.image} alt={user?.name} />
          <div className={styles.userInfo}>
            <span className={styles.userName}>{user?.name}</span>
            <span className={styles.userCompany}>{user?.company}</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className={styles.sidebarNav}>
          {sidebarLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navItem} ${pathname === link.href ? styles.active : ''}`}
              onClick={() => setSidebarOpen(false)}
            >
              {link.icon}
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>

        {/* Footer Links */}
        <div className={styles.sidebarFooter}>
          <Link href="/" className={styles.backLink}>
            <FaArrowLeft />
            <span>Back to Main Site</span>
          </Link>
          <button onClick={handleLogout} className={styles.logoutBtn}>
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
}