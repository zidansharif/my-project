# Nexus — Modern SaaS & Business Landing Page

A high-converting, responsive landing page built with **React 19**, **Vite**, **Tailwind CSS**, and **Lucide Icons**.

---

## 🚀 Features

- **Header / Navigation**: Sticky responsive glassmorphic navbar with smooth scroll links, dark/light mode toggle, and mobile menu.
- **Hero Section**:
  - High-impact headline with gradient typography.
  - Release pill badge with subtle pulse animations.
  - Primary and secondary CTAs ("Start Free Trial", "Watch Live Demo").
  - Trust indicators (No credit card required, SOC2 certified, 5-min setup).
  - **Live Hero Dashboard Mockup**: Metric cards ($148K MRR, +28.4% growth), animated SVG revenue chart, and live real-time task activity stream.
- **Social Proof / Logo Cloud**: Grid of trusted tech enterprise brands.
- **Feature Showcase**: Filterable grid (AI Automation, Real-time Analytics, Enterprise Security) with custom gradient icons and hover effects.
- **Interactive Sandbox Demo**: Live pipeline simulator allowing users to test automated workflows in real-time.
- **Impact Stats**: Key business acceleration metrics and SLA guarantees.
- **Customer Testimonials**: Verified client reviews with star ratings and company roles.
- **Pricing Section**: Monthly vs. Annual toggle (with 20% discount badge), tier comparison (Starter, Growth [Popular], Enterprise), and full feature checklists.
- **FAQ Accordion**: Expandable Q&A covering onboarding, tech stack integration, and enterprise compliance.
- **Lead Capture & CTA**: Email capture form with instant success validation and reassurance badges.
- **Contact / Demo Modal**: Interactive "Schedule a Product Demo" modal.
- **Dark & Light Mode**: Seamless theme switching with persistent CSS classes.

---

## 🛠️ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 3. Production Build
```bash
npm run build
```
The optimized static build is emitted to the `dist/` directory.

### 4. Preview Build
```bash
npm run preview
```

---

## 🎨 How to Customize

- **Business Name & Copy**:
  - Update company name in [`src/components/Navbar.jsx`](file:///home/runner/work/my-project/my-project/src/components/Navbar.jsx) and [`src/components/Footer.jsx`](file:///home/runner/work/my-project/my-project/src/components/Footer.jsx).
  - Edit headlines and value propositions in [`src/components/Hero.jsx`](file:///home/runner/work/my-project/my-project/src/components/Hero.jsx).
- **Features & Offerings**:
  - Customize feature cards and categories in [`src/components/Features.jsx`](file:///home/runner/work/my-project/my-project/src/components/Features.jsx).
- **Pricing & Plans**:
  - Adjust tiers, pricing, and features in [`src/components/Pricing.jsx`](file:///home/runner/work/my-project/my-project/src/components/Pricing.jsx).
- **Brand Colors & Theme**:
  - Customize the `brand` palette and animations in [`tailwind.config.js`](file:///home/runner/work/my-project/my-project/tailwind.config.js).
