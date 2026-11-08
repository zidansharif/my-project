import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Sparkles, Mail } from 'lucide-react';

export default function CTA({ isDark }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubmitted(true);
    setTimeout(() => {
      setEmail('');
    }, 3000);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl overflow-hidden border border-brand-500/30 bg-gradient-to-br from-brand-950 via-slate-900 to-slate-950 p-8 sm:p-14 lg:p-20 text-center shadow-2xl shadow-brand-950/50">
          
          {/* Radial ambient glow in CTA */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-500/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/20 text-brand-300 text-xs font-semibold mb-6 border border-brand-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              Start Automating Today
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
              Ready to accelerate your company's growth?
            </h2>

            <p className="text-base sm:text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join over 4,500+ technology leaders already orchestrating mission-critical workflows with Nexus. Get started in minutes.
            </p>

            {/* Email Capture Form */}
            {submitted ? (
              <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 animate-fade-in font-medium text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Success! Welcome aboard. Check your inbox to activate your workspace.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your work email..."
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all shadow-inner"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-500 to-indigo-600 text-white font-semibold text-sm hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-brand-500/30 flex items-center justify-center gap-2"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            {/* Reassurance points */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-400" />
                14-day unrestricted trial
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-400" />
                No credit card required
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-400" />
                Cancel anytime with 1-click
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
