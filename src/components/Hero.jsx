import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Play, 
  CheckCircle2, 
  TrendingUp, 
  Zap, 
  ShieldCheck, 
  Users, 
  BarChart3, 
  Layers,
  ChevronRight
} from 'lucide-react';

export default function Hero({ onOpenDemo, isDark }) {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background radial glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] md:w-[900px] md:h-[600px] bg-gradient-to-tr from-brand-600/25 via-purple-600/20 to-cyan-400/20 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-[90px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 pointer-events-none -z-10 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '36px 36px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Release Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-xs sm:text-sm font-medium mb-8 backdrop-blur-md shadow-inner hover:bg-brand-500/15 transition-all cursor-pointer">
            <span className="flex h-2 w-2 rounded-full bg-brand-400 animate-pulse" />
            <span className="font-semibold text-brand-400">NextGen 2.4</span>
            <span className="text-slate-400">•</span>
            <span>Autonomous Enterprise Workflows are here</span>
            <ChevronRight className="w-3.5 h-3.5 text-brand-400" />
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
            Scale your business with{' '}
            <span className="bg-gradient-to-r from-brand-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
              Autonomous Intelligence
            </span>
          </h1>

          {/* Subheading */}
          <p className={`text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Nexus automates manual business workflows, surfaces predictive revenue insights, and synchronizes your entire tech stack in real-time.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="#pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-brand-600 via-indigo-600 to-cyan-600 shadow-xl shadow-brand-500/25 hover:shadow-brand-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Start Free 14-Day Trial
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenDemo}
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-semibold border backdrop-blur-md transition-all ${
                isDark
                  ? 'border-slate-800 bg-slate-900/60 text-slate-200 hover:bg-slate-800/80 hover:border-slate-700'
                  : 'border-slate-300 bg-white/80 text-slate-800 hover:bg-slate-100 hover:border-slate-400'
              }`}
            >
              <div className="w-6 h-6 rounded-full bg-brand-500/20 text-brand-400 flex items-center justify-center">
                <Play className="w-3 h-3 fill-current ml-0.5" />
              </div>
              Watch Live Demo
            </button>
          </div>

          {/* Trust Guarantees */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-400 mb-16">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              No credit card required
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              5-minute automated setup
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              SOC2 Type II & GDPR Certified
            </span>
          </div>
        </div>

        {/* Hero Interactive App Mockup Preview */}
        <div className="relative max-w-5xl mx-auto">
          {/* Glow backdrop behind preview */}
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 via-purple-600 to-cyan-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-100 transition duration-1000 -z-10" />

          {/* Window Container */}
          <div className={`rounded-2xl border overflow-hidden shadow-2xl ${
            isDark 
              ? 'bg-slate-900/90 border-slate-800/90 shadow-brand-950/50' 
              : 'bg-white border-slate-200 shadow-slate-300/40'
          }`}>
            
            {/* Window titlebar */}
            <div className={`px-4 py-3 border-b flex items-center justify-between ${
              isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-xs text-slate-400 ml-2 font-mono hidden sm:inline">nexus.app/dashboard/analytics</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-medium border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live Sync Active
                </span>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-4 sm:p-6 lg:p-8 space-y-6">
              
              {/* Stat Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                
                <div className={`p-4 rounded-xl border ${isDark ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span>Monthly Recurring Revenue</span>
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>$148,290</span>
                    <span className="text-xs font-semibold text-emerald-400">+28.4%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-brand-500 to-cyan-400 h-full w-[78%] rounded-full" />
                  </div>
                </div>

                <div className={`p-4 rounded-xl border ${isDark ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span>Autonomous Tasks Executed</span>
                    <Zap className="w-4 h-4 text-brand-400" />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>94,180</span>
                    <span className="text-xs font-semibold text-brand-400">99.98% SLA</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-400 h-full w-[94%] rounded-full" />
                  </div>
                </div>

                <div className={`p-4 rounded-xl border ${isDark ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span>Active Team Members</span>
                    <Users className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>1,280</span>
                    <span className="text-xs font-semibold text-cyan-400">42 teams</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-cyan-500 to-emerald-400 h-full w-[65%] rounded-full" />
                  </div>
                </div>

              </div>

              {/* Chart & Live Activity Feed Split */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                
                {/* SVG Visual Chart */}
                <div className={`lg:col-span-2 p-5 rounded-xl border flex flex-col justify-between ${
                  isDark ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Revenue Acceleration Trend</h4>
                      <p className="text-xs text-slate-400">Autonomous optimization vs baseline</p>
                    </div>
                    <div className="flex gap-1.5 text-xs">
                      <button className="px-2.5 py-1 rounded bg-brand-600/20 text-brand-300 font-medium">Monthly</button>
                      <button className="px-2.5 py-1 rounded text-slate-400 hover:text-slate-200">Quarterly</button>
                    </div>
                  </div>

                  {/* SVG Chart Graphic */}
                  <div className="h-44 w-full relative pt-2">
                    <svg viewBox="0 0 500 160" className="w-full h-full overflow-visible">
                      <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.35" />
                          <stop offset="100%" stopColor="#6366f1" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      {/* Grid Lines */}
                      <line x1="0" y1="30" x2="500" y2="30" stroke="#334155" strokeWidth="0.5" strokeDasharray="3 3" />
                      <line x1="0" y1="75" x2="500" y2="75" stroke="#334155" strokeWidth="0.5" strokeDasharray="3 3" />
                      <line x1="0" y1="120" x2="500" y2="120" stroke="#334155" strokeWidth="0.5" strokeDasharray="3 3" />

                      {/* Area Fill */}
                      <path
                        d="M0,130 Q80,120 140,85 T280,60 T400,28 L500,10 L500,150 L0,150 Z"
                        fill="url(#chartGradient)"
                      />
                      {/* Trend Curve */}
                      <path
                        d="M0,130 Q80,120 140,85 T280,60 T400,28 L500,10"
                        fill="none"
                        stroke="#6366f1"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />
                      {/* Indicator points */}
                      <circle cx="280" cy="60" r="5" fill="#6366f1" stroke="#ffffff" strokeWidth="2" />
                      <circle cx="400" cy="28" r="5" fill="#06b6d4" stroke="#ffffff" strokeWidth="2" />
                      <circle cx="500" cy="10" r="6" fill="#10b981" stroke="#ffffff" strokeWidth="2" />
                    </svg>
                  </div>
                </div>

                {/* Real-time Activity Feed */}
                <div className={`p-5 rounded-xl border flex flex-col justify-between ${
                  isDark ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-semibold uppercase tracking-wider ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      Live Workflow Feed
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  </div>

                  <div className="space-y-3">
                    {[
                      { title: 'Pipeline trigger', desc: 'Sync CRM leads to PostgreSQL', time: 'Just now', icon: Zap, color: 'text-amber-400' },
                      { title: 'AI Dispatch', desc: 'Personalized email to 82 prospects', time: '1m ago', icon: Sparkles, color: 'text-brand-400' },
                      { title: 'Revenue Event', desc: 'Stripe subscription $499 ARR', time: '4m ago', icon: TrendingUp, color: 'text-emerald-400' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-800/40 transition-colors">
                        <div className={`p-2 rounded-md bg-slate-800/80 ${item.color} mt-0.5`}>
                          <item.icon className="w-3.5 h-3.5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className={`text-xs font-semibold truncate ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.title}</p>
                          <p className="text-[11px] text-slate-400 truncate">{item.desc}</p>
                        </div>
                        <span className="text-[10px] text-slate-500 whitespace-nowrap">{item.time}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-slate-800/60 text-center">
                    <span className="text-xs text-brand-400 font-medium hover:underline cursor-pointer">
                      View all 34 active tasks &rarr;
                    </span>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* Floating Pill Badges */}
          <div className="hidden md:flex absolute -top-5 -left-6 items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-700 shadow-xl backdrop-blur-md animate-float">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-semibold text-slate-200">+48% Conversion Velocity</span>
          </div>

          <div className="hidden md:flex absolute -bottom-5 -right-6 items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-brand-500/50 shadow-xl backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-brand-400" />
            <span className="text-xs font-semibold text-slate-200">Autonomous Multi-Agent Grid</span>
          </div>

        </div>

      </div>
    </section>
  );
}
