import React, { useState } from 'react';
import { Play, RotateCw, CheckCircle2, Clock, Sparkles, Database, Mail, ShieldAlert, Cpu } from 'lucide-react';

export default function InteractiveDemo({ isDark }) {
  const [selectedWorkflow, setSelectedWorkflow] = useState('leads');
  const [isRunning, setIsRunning] = useState(false);
  const [activeStep, setActiveStep] = useState(3); // Default done state

  const workflows = {
    leads: {
      name: 'Smart Lead Enrichment & Routing',
      desc: 'Enriches incoming inbound leads with firmographic data and assigns high-intent accounts to top AE calendar.',
      steps: [
        { title: 'Inbound Webhook Received', detail: 'Payload: alex@stripe-partner.io', icon: Mail },
        { title: 'Apollo & Clearbit Enrichment', detail: 'Fetched ARR $45M, 240 headcount, Series B', icon: Database },
        { title: 'AI Intent Scoring', detail: 'Calculated 98/100 purchase intent score', icon: Sparkles },
        { title: 'Slack & Salesforce Routed', detail: 'VIP AE booked automatically on Calendly', icon: CheckCircle2 },
      ],
      output: {
        status: 'SUCCESS',
        leadScore: '98 / 100 (Tier 1 Enterprise)',
        dealPotential: '$48,000 ARR',
        assignedTo: 'Sarah Jenkins (VP Enterprise Sales)',
        executionTime: '342ms',
      },
    },
    invoices: {
      name: 'Autonomous Accounts Payable Reconciliation',
      desc: 'Parses contractor invoices, cross-references purchase orders, and issues approved Stripe payouts.',
      steps: [
        { title: 'PDF Invoice Uploaded', detail: 'OCR parsed 12 line items from vendor', icon: Database },
        { title: 'PO Matching & Validation', detail: 'Matched PO-9821 in NetSuite ERP', icon: Cpu },
        { title: 'Tax & Compliance Audit', detail: 'W-9 verified, VAT ID validated', icon: ShieldAlert },
        { title: 'ACH Transfer Scheduled', detail: 'Batch scheduled for Friday cycle', icon: CheckCircle2 },
      ],
      output: {
        status: 'RECONCILED',
        vendor: 'Acme Cloud Infrastructure LLC',
        amount: '$14,850.00 USD',
        auditStatus: 'Clean (0 discrepancies)',
        executionTime: '512ms',
      },
    },
    sentiment: {
      name: 'Real-Time Customer Sentiment Triage',
      desc: 'Analyzes incoming tickets via GPT-4o, flags churn risks, and drafts empathetic responses.',
      steps: [
        { title: 'Zendesk Ticket Ingested', detail: 'Ticket #40291 from Enterprise tier account', icon: Mail },
        { title: 'LLM Sentiment & Urgency Analysis', detail: 'Detected high frustration + renewal risk', icon: Sparkles },
        { title: 'Engineering Escalation Created', detail: 'Priority P1 Linear issue auto-filed', icon: Cpu },
        { title: 'AI Draft Suggested to Support', detail: 'Context-aware empathy response prepared', icon: CheckCircle2 },
      ],
      output: {
        status: 'ESCALATED & RESOLVED',
        sentimentScore: '-0.74 (Frustrated -> Mitigated)',
        turnaroundTime: '< 45 seconds',
        priority: 'P1 Urgent Churn Risk',
        executionTime: '210ms',
      },
    },
  };

  const currentWf = workflows[selectedWorkflow];

  const handleRunSimulation = () => {
    setIsRunning(true);
    setActiveStep(0);

    const stepInterval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev < 3) {
          return prev + 1;
        } else {
          clearInterval(stepInterval);
          setIsRunning(false);
          return 3;
        }
      });
    }, 600);
  };

  return (
    <section id="demo" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/20">
            Interactive Sandbox
          </span>
          <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight mt-4 mb-5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Experience Autonomous Execution Live
          </h2>
          <p className={`text-base sm:text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Select a business workflow recipe below and test how Nexus eliminates manual bottlenecks in milliseconds.
          </p>

          {/* Workflow Picker Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            {Object.keys(workflows).map((key) => (
              <button
                key={key}
                onClick={() => {
                  setSelectedWorkflow(key);
                  setActiveStep(3);
                }}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedWorkflow === key
                    ? 'bg-gradient-to-r from-brand-600 to-cyan-600 text-white shadow-lg shadow-brand-500/20'
                    : isDark
                      ? 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {workflows[key].name}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Sandbox Console */}
        <div className={`max-w-4xl mx-auto rounded-2xl border shadow-2xl overflow-hidden ${
          isDark ? 'bg-slate-900/90 border-slate-800 shadow-brand-950/40' : 'bg-white border-slate-200 shadow-slate-200'
        }`}>
          {/* Top Bar */}
          <div className={`px-6 py-4 border-b flex flex-wrap items-center justify-between gap-4 ${
            isDark ? 'bg-slate-950/70 border-slate-800' : 'bg-slate-50 border-slate-200'
          }`}>
            <div>
              <h3 className={`text-base font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{currentWf.name}</h3>
              <p className="text-xs text-slate-400 mt-0.5">{currentWf.desc}</p>
            </div>
            
            <button
              onClick={handleRunSimulation}
              disabled={isRunning}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white transition-all ${
                isRunning
                  ? 'bg-brand-700 cursor-not-allowed opacity-80'
                  : 'bg-brand-600 hover:bg-brand-500 shadow-md shadow-brand-500/25 active:scale-95'
              }`}
            >
              {isRunning ? (
                <>
                  <RotateCw className="w-3.5 h-3.5 animate-spin" />
                  Executing Pipeline...
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  Run Workflow Simulation
                </>
              )}
            </button>
          </div>

          {/* Sandbox Body: Step-by-Step Execution + Live JSON Result */}
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-800">
            
            {/* Steps Visualizer */}
            <div className="p-6 space-y-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Execution Pipeline Stages
              </span>

              <div className="space-y-4">
                {currentWf.steps.map((step, idx) => {
                  const isDone = activeStep >= idx;
                  const isCurrent = activeStep === idx && isRunning;
                  return (
                    <div
                      key={idx}
                      className={`flex items-start gap-3 p-3 rounded-xl border transition-all ${
                        isCurrent
                          ? 'border-brand-500 bg-brand-500/10'
                          : isDone
                            ? isDark ? 'border-slate-800 bg-slate-950/40' : 'border-slate-200 bg-slate-50'
                            : 'border-transparent opacity-40'
                      }`}
                    >
                      <div className={`p-2 rounded-lg mt-0.5 ${
                        isDone 
                          ? 'bg-emerald-500/20 text-emerald-400' 
                          : 'bg-slate-800 text-slate-500'
                      }`}>
                        {isDone ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <step.icon className="w-4 h-4" />
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className={`text-xs font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{step.title}</p>
                          <span className="text-[10px] text-slate-400 font-mono">Stage 0{idx + 1}</span>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-0.5 truncate">{step.detail}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Live Output Inspector */}
            <div className={`p-6 flex flex-col justify-between ${isDark ? 'bg-slate-950/60' : 'bg-slate-50/70'}`}>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono">
                    Output Telemetry & Payload
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    STATUS: 200 OK
                  </span>
                </div>

                <div className={`p-4 rounded-xl font-mono text-xs overflow-x-auto border ${
                  isDark ? 'bg-slate-900 border-slate-800 text-cyan-300' : 'bg-white border-slate-200 text-slate-800'
                }`}>
                  <pre className="text-[11px] leading-relaxed">
{JSON.stringify(currentWf.output, null, 2)}
                  </pre>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-brand-400" />
                  Latency: <strong className="text-emerald-400">{currentWf.output.executionTime}</strong>
                </span>
                <span>Zero server maintenance required</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
