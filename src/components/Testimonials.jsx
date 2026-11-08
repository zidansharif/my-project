import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials({ isDark }) {
  const testimonials = [
    {
      quote: "Nexus replaced 4 different legacy tools and shaved 20 hours off our weekly operational cadence. The autonomous error recovery alone has saved our engineering team countless on-call alerts.",
      name: "Marcus Vance",
      role: "VP of Engineering at CloudScale",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      company: "CloudScale",
      rating: 5,
    },
    {
      quote: "Our sales cycle shrank from 45 days down to 14 days within our first month of implementing Nexus. High-intent accounts are immediately routed, enriched, and booked without manual triage.",
      name: "Elena Rostova",
      role: "Head of Revenue Operations at FinFlow",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
      company: "FinFlow",
      rating: 5,
    },
    {
      quote: "The visual logic builder with built-in natural language prompts made it accessible for our ops and product teams without submitting JIRA tickets to our back-end engineers.",
      name: "David Chen",
      role: "Chief Operating Officer at Omnipulse",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      company: "Omnipulse",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-400 bg-brand-500/10 px-3.5 py-1.5 rounded-full border border-brand-500/20">
            Social Proof
          </span>
          <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight mt-4 mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Loved by fast-moving builders
          </h2>
          <p className={`text-base sm:text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            See why over 4,500+ technology companies rely on Nexus to drive mission-critical workflows.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-2xl border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                isDark 
                  ? 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:shadow-brand-950/40' 
                  : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-slate-200/50'
              }`}
            >
              <div>
                {/* Rating stars & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-brand-500/30" />
                </div>

                {/* Quote Text */}
                <p className={`text-sm leading-relaxed mb-6 italic ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-6 border-t border-slate-800/60">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-brand-500/30"
                />
                <div>
                  <h4 className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{t.name}</h4>
                  <p className="text-xs text-slate-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
