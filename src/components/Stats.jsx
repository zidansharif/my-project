import React from 'react';
import { TrendingUp, ShieldCheck, Zap, Users2 } from 'lucide-react';

export default function Stats({ isDark }) {
  const stats = [
    {
      label: 'Median Workflow Acceleration',
      value: '10x',
      desc: 'Speed improvement compared to manual processes',
      icon: Zap,
    },
    {
      label: 'Enterprise Infrastructure SLA',
      value: '99.99%',
      desc: 'High availability with real-time distributed redundancy',
      icon: ShieldCheck,
    },
    {
      label: 'Client Revenue Generated',
      value: '$420M+',
      desc: 'Direct pipeline & cost savings unlocked for users',
      icon: TrendingUp,
    },
    {
      label: 'Global Enterprise Customers',
      value: '4,500+',
      desc: 'Active deployments across 68 countries worldwide',
      icon: Users2,
    },
  ];

  return (
    <section id="stats" className={`py-20 border-y transition-colors ${
      isDark ? 'border-slate-800 bg-slate-900/30' : 'border-slate-200 bg-slate-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border transition-all duration-300 hover:border-brand-500/50 hover:shadow-lg ${
                isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-white border-slate-200'
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center mb-4">
                <stat.icon className="w-5 h-5" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-brand-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <h3 className={`text-sm font-bold mb-1.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>{stat.label}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
