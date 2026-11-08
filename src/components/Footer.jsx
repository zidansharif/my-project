import React from 'react';
import { Sparkles, Github, Twitter, Linkedin, Disc as Discord, Heart, ArrowUp } from 'lucide-react';

export default function Footer({ isDark }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    Product: [
      { name: 'Autonomous Workflows', href: '#features' },
      { name: 'Interactive Demo', href: '#demo' },
      { name: 'Integrations Directory', href: '#features' },
      { name: 'Enterprise Cloud Grid', href: '#pricing' },
      { name: 'Changelog & Releases', href: '#' },
    ],
    Solutions: [
      { name: 'Revenue Operations', href: '#' },
      { name: 'Finance & Invoicing', href: '#' },
      { name: 'Customer Support AI', href: '#' },
      { name: 'Engineering Automations', href: '#' },
      { name: 'Security & Compliance', href: '#' },
    ],
    Resources: [
      { name: 'Documentation', href: '#' },
      { name: 'API Reference', href: '#' },
      { name: 'Community Discord', href: '#' },
      { name: 'System Status', href: '#' },
      { name: 'Webinars & Guides', href: '#' },
    ],
    Company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press & Media Kit', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
    ],
  };

  return (
    <footer className={`border-t transition-colors ${
      isDark ? 'border-slate-800 bg-slate-950 text-slate-400' : 'border-slate-200 bg-slate-50 text-slate-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-4 group inline-block">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-600 via-indigo-500 to-cyan-400 p-[1px] shadow-md shadow-brand-500/20">
                <div className="w-full h-full bg-slate-950 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-brand-400" />
                </div>
              </div>
              <span className={`text-xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Nexus<span className="text-brand-500">.</span>
              </span>
            </a>

            <p className="text-xs leading-relaxed max-w-sm mb-6 text-slate-400">
              The next-generation autonomous business workflow platform. Eliminate repetitive engineering, sync multi-cloud data streams, and accelerate company velocity.
            </p>

            {/* Live System Status Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>All Systems Operational (99.99%)</span>
            </div>
          </div>

          {/* Nav Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="col-span-1">
              <h4 className={`text-xs font-bold uppercase tracking-wider mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {category}
              </h4>
              <ul className="space-y-2.5 text-xs">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="hover:text-brand-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Nexus Intelligence, Inc. All rights reserved.</p>

          <div className="flex items-center gap-5">
            <a href="#" aria-label="Twitter" className="hover:text-brand-400 transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" aria-label="GitHub" className="hover:text-brand-400 transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-brand-400 transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 ml-4 text-slate-400 hover:text-white transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
