# Fairfield Accounting Services

A premium, multi-page sample website for a professional accounting firm, built as the top-tier offering for a web design business. This project demonstrates advanced frontend development skills including custom animations, client portal functionality, payment integration, and responsive design.

---

## Project Overview

**Client:** Fairfield Accounting Services  
**Industry:** Professional Accounting & Financial Advisory  
**Location:** Fairfield, CA  
**Tier:** Premium (Tier 3 — Most Expensive Package)

This sample site showcases a full-featured business website with:
- Multi-page public site (7 pages)
- Secure client portal with dashboard
- Online booking via Calendly
- E-commerce service packages with Stripe checkout
- Advanced animations and interactions
- Full mobile responsiveness

---

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | SCSS / CSS Modules |
| Animations | Framer Motion |
| Icons | React Icons |
| Booking | Calendly Embed |
| Payments | Stripe Checkout |
| Auth | LocalStorage (demo) |

---

## Features

### Public Site
- **Home** — Hero section with animated stats, feature cards, call-to-action
- **About** — Company story, statistics, core values
- **Services** — 6 service breakdowns with feature lists (Tax, Bookkeeping, Advisory, Entity Formation, Audit, Virtual CFO)
- **Team** — 4 team member profiles with Unsplash photos and social links
- **Contact** — Full contact form with validation, office info, hours
- **Booking** — Calendly-integrated appointment scheduling
- **Shop** — 3-tier service pricing with Stripe checkout integration

### Client Portal
- Secure login (demo authentication)
- **Dashboard** — Activity feed, quick stats, action buttons
- **Projects** — Project tracking with progress bars and status badges
- **Documents** — File browser with download/view actions (PDF, Excel, Word)
- **Messages** — Two-way messaging system with team members
- **Reports** — Financial reports with KPI metrics and trend indicators
- **Billing** — Invoice management with payment status and checkout
- **Settings** — Profile editor, notification toggles, password management

### Design & UX
- Professional navy & gold color palette
- Custom hover animations (shine effects, image zoom, card lifts)
- Scroll-triggered entrance animations (Framer Motion)
- Mobile-first responsive design (breakpoints: 640px, 768px, 1024px, 1280px)
- ADA accessibility compliance (skip links, ARIA labels, focus indicators, color contrast)
- SEO-optimized meta tags and Open Graph data

---

## Project Structure
fairfield-accounting/
├── src/
│   ├── app/
│   │   ├── (main)/              # Public site route group
│   │   │   ├── page.tsx         # Home
│   │   │   ├── about/
│   │   │   ├── services/
│   │   │   ├── team/
│   │   │   ├── contact/
│   │   │   ├── booking/
│   │   │   └── shop/
│   │   ├── portal/              # Client portal
│   │   │   ├── page.tsx         # Login
│   │   │   ├── layout.tsx       # Portal sidebar layout
│   │   │   ├── dashboard/
│   │   │   ├── projects/
│   │   │   ├── documents/
│   │   │   ├── messages/
│   │   │   ├── reports/
│   │   │   ├── billing/
│   │   │   └── settings/
│   │   ├── layout.tsx           # Root layout
│   │   └── globals.scss         # Global styles
│   ├── components/
│   │   ├── animations/          # Framer Motion components
│   │   └── layout/              # Navbar, Footer
│   ├── styles/
│   │   ├── _variables.scss      # Colors, spacing, breakpoints
│   │   └── globals.scss         # Utility classes
│   ├── hooks/                     # Custom React hooks
│   └── lib/                       # Utility functions
├── public/
│   └── images/
├── next.config.js
├── package.json
└── tsconfig.json
plain

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/fairfield-accounting.git

# Navigate to project
cd fairfield-accounting

# Install dependencies
npm install

# Start development server
npm run dev
Open http://localhost:3000 to view the site.
Environment Variables (Optional)
Create a .env.local file for production integrations:
env
# Stripe (for live payments)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...

# Calendly (your real booking URL)
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-username/event-type
Demo Credentials
The client portal uses demo authentication. Log in with any email and password to access the dashboard.
Sample login:
Email: demo@example.com
Password: any password works

Deployment
This project is configured for static export and can be deployed to any static hosting platform (Vercel, Netlify, GitHub Pages, etc.).
bash
# Build for production
npm run build

# Output will be in the `out/` directory
Design System
Colors
Table
Token	Hex	Usage
Primary Navy	#1a365d	Headers, backgrounds
Primary Blue	#2c5282	Gradients, accents
Gold	#c9a227	CTAs, highlights, icons
Off-White	#f7fafc	Section backgrounds
Charcoal	#2d3748	Body text
Typography
Primary: System font stack (Inter fallback)
Scale: 0.75rem to 3.5rem
Weights: 400, 500, 600, 700, 800
Breakpoints
Mobile: 640px
Tablet: 768px
Desktop: 1024px
Wide: 1280px
Accessibility (ADA Compliance)
Skip navigation link for keyboard users
ARIA labels on all interactive elements
Focus-visible indicators with gold outline
Color contrast ratios meeting WCAG AA standards
Semantic HTML structure
Form labels properly associated with inputs
Screen reader friendly icon buttons
Performance
Next.js static generation for fast page loads
Optimized images via Next.js Image component (ready to implement)
SCSS modules for scoped, efficient CSS
Minimal JavaScript bundle with code splitting
Framer Motion animations use GPU-accelerated transforms
License
This project is created as a portfolio sample for web design services. All images sourced from Unsplash under their license. Icons via React Icons (MIT).
Contact
For questions about this project or web design services:
Scott Slagle
Frontend Web Developer
Vacaville, CA
scottsfrontend@gmail.com


