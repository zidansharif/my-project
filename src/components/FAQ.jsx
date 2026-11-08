import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ({ isDark }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'How quickly can our team integrate Nexus into our existing tech stack?',
      a: 'Most teams launch their first autonomous pipeline in under 15 minutes. We offer pre-built turnkey connectors for over 250+ popular platforms including Salesforce, HubSpot, Stripe, PostgreSQL, Snowflake, GitHub, and Slack, plus universal webhook & REST API support.',
    },
    {
      q: 'Do we need software engineers to write custom scripts?',
      a: 'Not at all. Nexus features both an intuitive visual drag-and-drop workflow canvas and an AI Prompt Builder that generates production-ready execution flows from plain English instructions. Developers can also jump into our custom code sandbox if they want custom TypeScript/Python execution blocks.',
    },
    {
      q: 'How do you safeguard company and customer data?',
      a: 'We adhere to bank-grade enterprise compliance standards. Nexus is SOC2 Type II, ISO 27001, and GDPR compliant. All data in transit and at rest is encrypted with AES-256 and TLS 1.3. We offer zero-retention data residency controls so your private business records are never used to train global AI models.',
    },
    {
      q: 'What happens if a third-party API goes down or rate limits us?',
      a: 'Nexus includes automated exponential backoff retries, intelligent circuit breakers, and dead-letter queue isolation. If an external service experiences an outage, Nexus holds and self-heals the pipeline, replaying events automatically when the service recovers.',
    },
    {
      q: 'Can I change plans or cancel at any time?',
      a: 'Yes. You can upgrade, downgrade, or cancel your subscription at any time directly from the billing dashboard. If you cancel, your access continues through the end of your billing cycle with zero penalties or termination fees.',
    },
  ];

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-400 bg-brand-500/10 px-3.5 py-1.5 rounded-full border border-brand-500/20">
            Got Questions?
          </span>
          <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight mt-4 mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Frequently Asked Questions
          </h2>
          <p className={`text-base sm:text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Everything you need to know about the platform, onboarding, security, and billing.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? isDark ? 'bg-slate-900/80 border-slate-700' : 'bg-slate-50 border-slate-300'
                    : isDark ? 'bg-slate-950/40 border-slate-800/80' : 'bg-white border-slate-200'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
                  aria-expanded={isOpen}
                >
                  <span className={`text-base font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {faq.q}
                  </span>
                  <div className={`p-1.5 rounded-full transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-brand-500/20 text-brand-400' : 'text-slate-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm leading-relaxed text-slate-400 border-t border-slate-800/40">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
