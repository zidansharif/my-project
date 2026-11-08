import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoCloud from './components/LogoCloud';
import Features from './components/Features';
import InteractiveDemo from './components/InteractiveDemo';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Navigation */}
      <Navbar
        onOpenDemo={() => setIsDemoModalOpen(true)}
        isDark={isDark}
        toggleTheme={toggleTheme}
      />

      <main id="main-content">
        {/* Hero Section */}
        <Hero
          onOpenDemo={() => setIsDemoModalOpen(true)}
          isDark={isDark}
        />

        {/* Brand / Logo Bar */}
        <LogoCloud isDark={isDark} />

        {/* Feature Highlights Grid */}
        <Features isDark={isDark} />

        {/* Interactive Live Demo Console */}
        <InteractiveDemo isDark={isDark} />

        {/* Statistics & Impact Metrics */}
        <Stats isDark={isDark} />

        {/* Customer Testimonials & Reviews */}
        <Testimonials isDark={isDark} />

        {/* Pricing Tiers */}
        <Pricing
          onOpenDemo={() => setIsDemoModalOpen(true)}
          isDark={isDark}
        />

        {/* Frequently Asked Questions */}
        <FAQ isDark={isDark} />

        {/* Call to Action Banner */}
        <CTA isDark={isDark} />
      </main>

      {/* Footer */}
      <Footer isDark={isDark} />

      {/* Interactive Contact / Book Demo Modal */}
      <ContactModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        isDark={isDark}
      />
    </div>
  );
}
