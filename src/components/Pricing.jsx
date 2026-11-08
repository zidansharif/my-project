import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';

export default function Pricing({ onOpenDemo, isDark }) {
  const [isAnnual, setIsAnnual] = useState(true);

  const tiers = [
    {
      name: 'Starter',
      badge: 'For Early Teams',
      priceMonthly: 29,
      priceAnnual: 23,
      description: 'Essential automated workflows and sync tools for growing startups and agile teams.',
      features: [
        'Up to 15 active automated workflows',
        '25,000 tasks executed per month',
        'Standard integrations (Slack, Stripe, CRM)',
        '3 team member seats',
        '15-minute sync intervals',
        'Community & email support',
      ],
      popular: false,
      cta: 'Start Free Trial',
    },
    {
      name: 'Growth & Scale',
      badge: 'Most Popular',
      priceMonthly: 79,
      priceAnnual: 63,
      description: 'Advanced autonomous agent swarms, predictive analytics, and instant real-time webhooks.',
      features: [
        'Unlimited automated workflows',
        '250,000 tasks executed per month',
        'All 250+ standard & premium connectors',
        '15 team member seats included',
        'Instant sub-second real-time webhooks',
        'AI anomaly detection & auto-reconciliation',
        'Priority 24/7 technical support & SLA',
      ],
      popular: true,
      cta: 'Start Free 14-Day Trial',
    },
    {
      name: 'Enterprise Grid',
      badge: 'Custom Governance',
      priceMonthly: 199,
      priceAnnual: 159,
      description: 'Dedicated cloud/on-prem orchestration, tailored LLM agents, and custom SLA agreements.',
      features: [
        'Unlimited high-throughput tasks',
        'Dedicated isolated private cluster',
        'Custom SSO (SAML, Okta, Azure AD)',
        'Unlimited team seats & role-based RBAC',
        'SOC2 Type II, HIPAA & GDPR compliance',
        'Dedicated solutions architect & Slack channel',
        '99.999% uptime guarantee agreement',
      ],
      popular: false,
      cta: 'Contact Enterprise Sales',
    },
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-400 bg-brand-500/10 px-3.5 py-1.5 rounded-full border border-brand-500/20">
            Transparent Pricing
          </span>
          <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight mt-4 mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Simple plans for companies of all sizes
          </h2>
          <p className={`text-base sm:text-lg mb-8 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            No hidden setup fees. Upgrade, downgrade, or cancel whenever your team needs to.
          </p>

          {/* Billing Interval Switcher */}
          <div className="inline-flex items-center p-1.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                !isAnnual
                  ? 'bg-brand-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                isAnnual
                  ? 'bg-brand-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Annual Billing</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold border border-emerald-500/30">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier) => {
            const price = isAnnual ? tier.priceAnnual : tier.priceMonthly;
            return (
              <div
                key={tier.name}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  tier.popular
                    ? 'border-2 border-brand-500 bg-slate-900/90 shadow-2xl shadow-brand-500/20 lg:-translate-y-2'
                    : isDark
                      ? 'border border-slate-800 bg-slate-950/60'
                      : 'border border-slate-200 bg-white shadow-lg'
                }`}
              >
                {/* Popular Highlight Badge */}
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1 rounded-full bg-gradient-to-r from-brand-600 to-cyan-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg">
                    <Sparkles className="w-3.5 h-3.5" />
                    {tier.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{tier.name}</h3>
                      <p className="text-xs text-slate-400 mt-1">{tier.description}</p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="my-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl text-slate-400 font-medium">$</span>
                      <span className={`text-5xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {price}
                      </span>
                      <span className="text-sm text-slate-400 font-medium">/ month</span>
                    </div>
                    <span className="text-xs text-slate-400 block mt-1">
                      {isAnnual ? 'Billed annually ($' + price * 12 + '/yr)' : 'Billed on a monthly basis'}
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 pt-6 border-t border-slate-800/80 mb-8">
                    <span className={`text-xs font-bold uppercase tracking-wider block mb-3 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      What's included:
                    </span>
                    {tier.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs">
                        <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mt-0.5 shrink-0">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className={isDark ? 'text-slate-300' : 'text-slate-600'}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <button
                  onClick={onOpenDemo}
                  className={`w-full py-3.5 px-4 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-brand-600 to-indigo-600 text-white shadow-lg shadow-brand-500/30 hover:brightness-110 active:scale-98'
                      : isDark
                        ? 'border border-slate-700 text-slate-200 hover:bg-slate-800'
                        : 'border border-slate-300 text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  {tier.cta}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
