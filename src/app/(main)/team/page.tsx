import React from "react";
import Link from "next/link";
import {
  FaCalculator,
  FaBook,
  FaChartLine,
  FaBuilding,
  FaClipboardCheck,
  FaUserTie,
} from "react-icons/fa";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";
import styles from "./team.module.scss";

const services = [
  {
    icon: <FaCalculator />,
    title: "Tax Preparation & Planning",
    description:
      "Comprehensive individual and business tax preparation with strategic year-round planning to minimize liability and maximize returns.",
    features: [
      "Individual & Business Returns",
      "Tax Strategy Consulting",
      "IRS Representation",
      "Estimated Tax Planning",
    ],
  },
  {
    icon: <FaBook />,
    title: "Bookkeeping & Payroll",
    description:
      "Accurate, timely bookkeeping and full-service payroll management so you can focus on running your business.",
    features: [
      "Monthly Bookkeeping",
      "Payroll Processing",
      "Bank Reconciliation",
      "Financial Statements",
    ],
  },
  {
    icon: <FaChartLine />,
    title: "Business Advisory",
    description:
      "Strategic guidance to help your business grow, improve profitability, and navigate complex financial decisions.",
    features: [
      "Growth Strategy",
      "Cash Flow Analysis",
      "Profitability Review",
      "Financial Forecasting",
    ],
  },
  {
    icon: <FaBuilding />,
    title: "Entity Formation",
    description:
      "Expert guidance on choosing and forming the right business structure for liability protection and tax efficiency.",
    features: [
      "LLC Formation",
      "S-Corp Election",
      "Partnership Setup",
      "Compliance Filing",
    ],
  },
  {
    icon: <FaClipboardCheck />,
    title: "Audit & Assurance",
    description:
      "Independent audit and review services that provide credibility and confidence to stakeholders and regulators.",
    features: [
      "Financial Audits",
      "Review Engagements",
      "Internal Controls",
      "Compliance Audits",
    ],
  },
  {
    icon: <FaUserTie />,
    title: "Virtual CFO Services",
    description:
      "Executive-level financial leadership for growing businesses without the cost of a full-time CFO.",
    features: [
      "KPI Dashboards",
      "Budget Management",
      "Investor Reporting",
      "Board Presentations",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className={styles.services}>
      <section className={styles.hero}>
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive accounting solutions tailored to your needs</p>
        </div>
      </section>

      <section className={`${styles.servicesGrid} section-padding`}>
        <div className="container">
          <StaggerContainer className={styles.grid} staggerDelay={0.1}>
            {services.map((service, index) => (
              <StaggerItem key={index}>
                <div className={styles.serviceCard}>
                  <div className={styles.iconWrapper}>{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className={styles.featureList}>
                    {service.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Not sure which service you need?</h2>
            <p>
              Schedule a free consultation and we'll help you determine the best
              approach for your situation.
            </p>
            <Link href="/booking" className="btn-primary">
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
