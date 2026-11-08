import React from 'react';
import { Shield, Cpu, Cloud, Globe2, Layers, Compass } from 'lucide-react';

export default function LogoCloud({ isDark }) {
  const brands = [
    { name: 'ApexData', icon: Cpu },
    { name: 'CloudScale', icon: Cloud },
    { name: 'GlobalPulse', icon: Globe2 },
    { name: 'OmniLayer', icon: Layers },
    { name: 'SecureCore', icon: Shield },
    { name: 'HorizonVenture', icon: Compass },
  ];

  return (
    <section className={`py-12 border-y transition-colors ${
      isDark ? 'border-slate-800/80 bg-slate-950/40' : 'border-slate-200 bg-slate-50/60'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-400 mb-8">
          Trusted by over 4,500+ forward-thinking engineering and growth teams
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center opacity-70 hover:opacity-100 transition-opacity">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className={`flex items-center gap-2 group cursor-pointer transition-transform duration-200 hover:scale-105 ${
                isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <brand.icon className="w-5 h-5 text-brand-400 group-hover:text-brand-300 transition-colors" />
              <span className="text-sm font-bold tracking-tight font-mono">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
