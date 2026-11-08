import React, { useState } from 'react';
import { 
  Bot, 
  Workflow, 
  BarChart, 
  ShieldCheck, 
  Code2, 
  Zap, 
  Cpu, 
  Database,
  ArrowRight
} from 'lucide-react';

export default function Features({ isDark }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'automation', label: 'AI Automation' },
    { id: 'analytics', label: 'Real-Time Analytics' },
    { id: 'security', label: 'Enterprise Security' },
  ];

  const features = [
    {
      id: 1,
      category: 'automation',
      title: 'Autonomous Multi-Agent Swarms',
      description: 'Deploy self-healing AI agents that handle lead qualification, customer tickets, and financial reconciliation around the clock.',
      icon: Bot,
      accent: 'from-brand-500 to-indigo-500',
      tag: 'New in v2.4',
      metric: '94% reduction in manual effort',
    },
    {
      id: 2,
      category: 'automation',
      title: 'Visual Logic Workflow Canvas',
      description: 'Build complex, multi-step branch workflows visually with drag-and-drop connectors or generate them using plain natural language.',
      icon: Workflow,
      accent: 'from-purple-500 to-pink-500',
      tag: 'No-Code / Low-Code',
      metric: 'Over 250+ integrations ready',
    },
    {
      id: 3,
      category: 'analytics',
      title: 'Predictive Revenue Intelligence',
      description: 'Surface pipeline anomalies and churn risks before they happen with continuous machine learning trained on your business data.',
      icon: BarChart,
      accent: 'from-cyan-500 to-blue-500',
      tag: 'Real-time',
      metric: '3.4x faster pipeline visibility',
    },
    {
      id: 4,
      category: 'security',
      title: 'Zero-Knowledge Cryptographic Vault',
      description: 'End-to-end encrypted credentials, granular RBAC permissions, audit logs, and SOC2 Type II compliance baked in from day one.',
      icon: ShieldCheck,
      accent: 'from-emerald-500 to-teal-500',
      tag: 'Enterprise Ready',
      metric: '256-bit AES military-grade',
    },
    {
      id: 5,
      category: 'automation',
      title: 'Universal API & Webhook Fabric',
      description: 'Connect any internal database, CRM, ERP, or custom REST/GraphQL endpoint in seconds with auto-generated schema validation.',
      icon: Code2,
      accent: 'from-amber-500 to-orange-500',
      tag: 'Developer First',
      metric: '< 15ms median edge latency',
    },
    {
      id: 6,
      category: 'analytics',
      title: 'High-Throughput Event Streaming',
      description: 'Process tens of millions of events per second with distributed queues, automatic failover, and idempotent retries.',
      icon: Zap,
      accent: 'from-rose-500 to-red-500',
      tag: 'Infinitely Scalable',
      metric: '99.999% guaranteed delivery',
    },
  ];

  const filteredFeatures = selectedCategory === 'all'
    ? features
    : features.filter(f => f.category === selectedCategory);

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-400 bg-brand-500/10 px-3.5 py-1.5 rounded-full border border-brand-500/20">
            Unrivaled Power
          </span>
          <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight mt-4 mb-5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Engineered for velocity. Built to scale infinitely.
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Everything you need to orchestrate high-impact business workflows without maintenance headaches, fragile scripts, or bloated engineering overhead.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-brand-600 text-white shadow-md shadow-brand-500/25'
                    : isDark
                      ? 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800'
                      : 'bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFeatures.map((feature) => (
            <div
              key={feature.id}
              className={`group relative p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                isDark 
                  ? 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700 hover:shadow-brand-950/40' 
                  : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-slate-200/60'
              }`}
            >
              {/* Card top row */}
              <div className="flex items-center justify-between mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${feature.accent} p-0.5 shadow-md`}>
                  <div className={`w-full h-full rounded-[10px] flex items-center justify-center ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
                    <feature.icon className="w-6 h-6 text-slate-100 dark:text-white group-hover:scale-110 transition-transform duration-200" />
                  </div>
                </div>
                <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-800/60 text-brand-300 border border-slate-700/50">
                  {feature.tag}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className={`text-xl font-bold tracking-tight mb-3 group-hover:text-brand-400 transition-colors ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                {feature.title}
              </h3>
              <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {feature.description}
              </p>

              {/* Card bottom metric */}
              <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs">
                <span className="font-semibold text-emerald-400">{feature.metric}</span>
                <span className="text-slate-500 group-hover:text-brand-400 flex items-center gap-1 transition-colors">
                  Explore <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
