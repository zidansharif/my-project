import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';

export default function Navbar({ onOpenDemo, isDark, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Interactive Demo', href: '#demo' },
    { name: 'Impact', href: '#stats' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20'
            : 'bg-white/80 backdrop-blur-md border-b border-slate-200/80 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 via-indigo-500 to-cyan-400 p-[1px] shadow-lg shadow-brand-500/25 group-hover:scale-105 transition-transform duration-200">
              <div className="w-full h-full bg-slate-950 rounded-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-brand-400" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Nexus<span className="text-brand-500">.</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-brand-400 -mt-1">
                AI Platform
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions & Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              className={`p-2 rounded-lg border transition-colors ${
                isDark
                  ? 'border-slate-800 text-slate-400 hover:text-yellow-400 hover:bg-slate-900'
                  : 'border-slate-200 text-slate-600 hover:text-brand-600 hover:bg-slate-100'
              }`}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={onOpenDemo}
              className={`text-sm font-medium px-4 py-2 rounded-lg border transition-all ${
                isDark
                  ? 'text-slate-200 border-slate-700/80 hover:bg-slate-800/80 hover:border-slate-600'
                  : 'text-slate-700 border-slate-300 hover:bg-slate-100 hover:border-slate-400'
              }`}
            >
              Book Demo
            </button>

            <a
              href="#pricing"
              className="inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-lg bg-gradient-to-r from-brand-600 to-indigo-600 text-white shadow-md shadow-brand-500/20 hover:shadow-brand-500/35 hover:brightness-110 active:scale-[0.98] transition-all"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg border transition-colors ${
                isDark ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-600'
              }`}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg ${
                isDark ? 'text-slate-300 hover:bg-slate-800' : 'text-slate-700 hover:bg-slate-100'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden px-4 pt-2 pb-6 border-b transition-all ${
            isDark ? 'bg-slate-950/95 border-slate-800' : 'bg-white/95 border-slate-200'
          }`}
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 px-3 rounded-md text-base font-medium ${
                  isDark
                    ? 'text-slate-300 hover:text-white hover:bg-slate-900'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemo();
                }}
                className={`w-full py-2.5 rounded-lg border font-medium text-center ${
                  isDark
                    ? 'border-slate-700 text-slate-200 hover:bg-slate-900'
                    : 'border-slate-300 text-slate-700 hover:bg-slate-100'
                }`}
              >
                Book Demo
              </button>
              <a
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 rounded-lg bg-brand-600 text-white font-medium text-center shadow hover:bg-brand-500"
              >
                Get Started Free
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
