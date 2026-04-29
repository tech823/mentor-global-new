import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, ChevronRight } from "lucide-react";
import { ScrollReveal } from "../../components/shared/ScrollReveal";
import {
  fintechProblems, fintechRails, fintechStakeholders, fintechJourneys, fintechModules,
  walletCapabilities, cardCapabilities, healthcareUseCases, insuranceUseCases,
  dexaFinanceCapabilities, dexaFinanceScenarios, fintechArchitectureLayers,
  fintechDeploymentModels, fintechUseCases, fintechOutcomes
} from "../../data/fintech";

function Hero() {
  return (
    <section data-testid="fin-hero" className="relative bg-[#11111F] pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-[#0048FF]/[0.05] blur-[140px]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <Link to="/solutions" className="inline-flex items-center gap-2 text-sm text-[#8A8A93] hover:text-[#0048FF] transition-colors mb-8"><ArrowLeft className="w-4 h-4" /> All Solutions</Link>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <ScrollReveal>
              <p className="eyebrow mb-6">Fintech Infrastructure</p>
              <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] font-bold text-white tracking-tighter leading-[1.05]">
                Fintech Infrastructure for Wallets, Cards, Payments, Credit, Payroll, Expense Management, Settlement, and Embedded Finance
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="mt-8 text-lg text-[#8A8A93] max-w-xl leading-relaxed">
                Deploy financial rails that connect wallets, Mentor Cards, QR payments, ledgers, payroll, corporate expenses, health credit, provider receivables, insurance collections, claim disbursements, settlement, reconciliation, and embedded finance through one intelligent infrastructure layer.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <p className="mt-4 text-sm text-[#8A8A93]/70 max-w-xl">
                Mentor Global does not build isolated payment screens. It builds financial infrastructure that connects money movement with healthcare, insurance, employers, providers, employees, claims, benefits, payroll, expenses, credit, and settlement.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.35}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link to="/contact" data-testid="fin-hero-cta" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0048FF] text-white font-semibold hover:bg-[#0030CC] transition-colors">Build Fintech Infrastructure <ArrowRight className="w-5 h-5" /></Link>
                <Link to="/dexa" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors">Explore DEXA Financial Intelligence</Link>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.2} direction="left">
            <div className="grid grid-cols-3 gap-2">
              {["Mentor Wallet", "Mentor Card", "QR Payment", "Payroll", "Expenses", "Ledger", "Settlement", "Reconciliation", "Credit", "Insurance Payment", "Provider Receivable", "DEXA Finance"].map((item, i) => (
                <div key={item} className={`border border-white/10 p-3 ${i === 11 ? "bg-[#0048FF]/10 border-[#0048FF]/30" : "bg-white/[0.03]"}`}>
                  <div className="w-5 h-5 border border-white/20 flex items-center justify-center mb-2"><div className={`w-1.5 h-1.5 ${i === 11 ? "bg-[#0048FF]" : "bg-white/40"}`} /></div>
                  <p className="text-[9px] font-medium text-white/80">{item}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section data-testid="fin-problem" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal><p className="eyebrow mb-4">The Problem</p><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight max-w-4xl">Financial systems fail when money moves faster than the infrastructure behind it.</h2></ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#11111F]/10">
          {fintechProblems.map((p, i) => (<ScrollReveal key={i} delay={i * 0.03}><div className="bg-white p-5 md:p-6 card-hover h-full"><span className="text-[#0048FF] text-xs font-bold">{String(i + 1).padStart(2, "0")}</span><p className="mt-2 text-sm text-[#11111F] font-medium leading-relaxed">{p}</p></div></ScrollReveal>))}
        </div>
      </div>
    </section>
  );
}

function InfrastructureStack() {
  return (
    <section data-testid="fin-stack" className="bg-[#11111F] py-24 md:py-32 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#0048FF]/[0.04] blur-[120px]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal><p className="eyebrow mb-4">Infrastructure Stack</p><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-4xl">One fintech infrastructure stack. Multiple connected money rails.</h2></ScrollReveal>
        <div className="mt-16 space-y-[1px]">
          {fintechRails.map((rail, idx) => (<ScrollReveal key={rail.name} delay={idx * 0.03}><div className="bg-[#11111F] border border-white/10 p-4 md:p-6"><div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-6"><div className="md:w-52 shrink-0"><span className="text-[#0048FF] text-xs font-bold">{String(idx + 1).padStart(2, "0")}</span><h3 className="text-sm font-bold text-white mt-1">{rail.name}</h3></div><div className="flex flex-wrap gap-1.5">{rail.items.map((item) => (<span key={item} className="text-[10px] text-[#8A8A93] px-2 py-1 border border-white/10 hover:border-[#0048FF]/30 transition-colors">{item}</span>))}</div></div></div></ScrollReveal>))}
        </div>
      </div>
    </section>
  );
}

function ConnectedRailsVisual() {
  return (
    <section data-testid="fin-rails-visual" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <ScrollReveal><p className="eyebrow mb-4">Connected Money Rails</p><h2 className="text-3xl sm:text-4xl font-bold text-[#11111F] tracking-tight mb-16">From disconnected money movement to one financial operating layer</h2></ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="mx-auto w-72 md:w-96 py-5 bg-[#11111F] text-white text-center mb-6"><p className="text-sm font-bold">Mentor Fintech Infrastructure</p></div>
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 border border-[#11111F]/10">
            {fintechRails.map((rail, i) => (<div key={rail.name} className="p-3 md:p-4 text-center card-hover border-r border-b border-[#11111F]/10"><div className="w-2 h-2 bg-[#0048FF] mx-auto mb-2" /><p className="text-[9px] md:text-[10px] font-bold text-[#11111F]">{rail.name.replace(" Rail", "")}</p></div>))}
          </div>
          <div className="mt-5 flex items-center justify-center gap-4"><span className="text-xs text-[#666666]">Powered by</span><span className="text-xs font-bold text-[#0048FF]">Mentor Innovation</span><span className="text-xs text-[#666666]">and</span><span className="text-xs font-bold text-[#0048FF]">DEXA</span></div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function WhoItServes() {
  return (
    <section data-testid="fin-stakeholders" className="bg-[#11111F] py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#0048FF]/[0.03] blur-[120px]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal><p className="eyebrow mb-4">Stakeholders</p><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-4xl">Built for organizations managing complex money flows</h2></ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[1px] bg-white/10">
          {fintechStakeholders.map((s, i) => (<ScrollReveal key={s.name} delay={i * 0.03}><div className="bg-[#11111F] p-5 card-hover-dark h-full"><h3 className="text-xs font-bold text-white mb-2">{s.name}</h3><p className="text-[10px] text-[#8A8A93] mb-1.5"><span className="text-[#0048FF] font-bold">Pain:</span> {s.pain}</p><p className="text-[10px] text-[#8A8A93]"><span className="text-[#0048FF] font-bold">Outcome:</span> {s.outcome}</p></div></ScrollReveal>))}
        </div>
      </div>
    </section>
  );
}

function MoneyJourneys() {
  return (
    <section data-testid="fin-journeys" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal><p className="eyebrow mb-4">Money Journeys</p><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight max-w-4xl">Financial infrastructure becomes real when every money journey is visible</h2></ScrollReveal>
        <div className="mt-16 space-y-4">
          {fintechJourneys.map((j, idx) => (<ScrollReveal key={j.role} delay={idx * 0.04}><div className="border border-[#11111F]/10 p-5 md:p-6 card-hover"><h3 className="text-sm font-bold text-[#11111F] mb-3">{j.role}</h3><div className="flex flex-wrap items-center gap-1.5">{j.steps.map((step, i) => (<span key={step} className="flex items-center gap-1"><span className="text-[11px] px-2 py-1 bg-[#11111F]/[0.03] border border-[#11111F]/10 text-[#11111F] font-medium">{step}</span>{i < j.steps.length - 1 && <ChevronRight className="w-3 h-3 text-[#0048FF]" />}</span>))}</div></div></ScrollReveal>))}
        </div>
      </div>
    </section>
  );
}

function CoreModules() {
  return (
    <section data-testid="fin-modules" className="bg-[#11111F] py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-[#0048FF]/[0.03] blur-[120px]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal><p className="eyebrow mb-4">Core Modules</p><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">Modular infrastructure for financial operations</h2></ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/10">
          {fintechModules.map((m, i) => (<ScrollReveal key={m.name} delay={i * 0.02}><div className="bg-[#11111F] p-5 md:p-6 card-hover-dark h-full"><span className="text-[#0048FF] text-xs font-bold">{String(i + 1).padStart(2, "0")}</span><h3 className="text-sm font-bold text-white mt-1.5 mb-2">{m.name}</h3><p className="text-[11px] text-[#8A8A93] leading-relaxed">{m.desc}</p></div></ScrollReveal>))}
        </div>
      </div>
    </section>
  );
}

function WalletSection() {
  return (
    <section data-testid="fin-wallet" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal><p className="eyebrow mb-4">Mentor Wallet</p><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight max-w-4xl">Mentor Wallet, a financial access layer for health fintech ecosystems</h2></ScrollReveal>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-[1px] bg-[#11111F]/10">
              {walletCapabilities.map((cap) => (<div key={cap} className="bg-white p-4 card-hover"><p className="text-xs text-[#11111F] font-medium">{cap}</p></div>))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="border border-[#11111F]/10 p-6 bg-[#11111F]/[0.02]">
              <div className="flex items-center justify-between mb-6"><span className="text-sm font-bold text-[#11111F]">Mentor Wallet</span><span className="text-[10px] px-2 py-0.5 bg-[#0048FF]/10 text-[#0048FF] font-bold">Active</span></div>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between"><span className="text-xs text-[#666666]">Available Balance</span><span className="text-lg font-bold text-[#11111F]">PKR 45,000</span></div>
                <div className="flex justify-between"><span className="text-xs text-[#666666]">Health Benefit</span><span className="text-sm font-bold text-[#0048FF]">PKR 32,000</span></div>
                <div className="flex justify-between"><span className="text-xs text-[#666666]">Expense Wallet</span><span className="text-sm font-bold text-[#11111F]">PKR 8,000</span></div>
                <div className="flex justify-between"><span className="text-xs text-[#666666]">Payroll Wallet</span><span className="text-sm font-bold text-[#11111F]">PKR 5,000</span></div>
              </div>
              <div className="grid grid-cols-2 gap-2"><button className="text-xs py-2 bg-[#0048FF] text-white font-medium">QR Pay</button><button className="text-xs py-2 border border-[#11111F]/20 text-[#11111F] font-medium">Mentor Card</button></div>
              <div className="mt-4 p-3 border border-[#0048FF]/20 bg-[#0048FF]/5"><p className="text-[10px] text-[#0048FF] font-bold mb-1">DEXA</p><p className="text-[10px] text-[#666666]">Your OPD benefit has PKR 12,000 remaining this month.</p></div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function CardSection() {
  return (
    <section data-testid="fin-card" className="bg-[#11111F] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal><p className="eyebrow mb-4">Mentor Card</p><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-4xl">Mentor Card, controlled spending for benefits, expenses, and payments</h2></ScrollReveal>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-[1px] bg-white/10">
              {cardCapabilities.map((cap) => (<div key={cap} className="bg-[#11111F] p-4 card-hover-dark"><p className="text-xs text-white/80 font-medium">{cap}</p></div>))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="bg-gradient-to-br from-[#11111F] to-[#0048FF]/20 border border-[#0048FF]/30 p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4 text-[10px] font-bold text-[#0048FF]">MENTOR</div>
              <div className="mb-12"><div className="w-10 h-7 border border-white/30 rounded-sm" /></div>
              <p className="text-white/60 text-xs tracking-[0.3em] mb-1">**** **** **** 4291</p>
              <p className="text-white text-sm font-bold">Health Benefit Card</p>
              <div className="mt-6 flex justify-between items-end">
                <div><p className="text-[10px] text-white/40">Balance</p><p className="text-white font-bold">PKR 32,000</p></div>
                <div><p className="text-[10px] text-white/40">Limit</p><p className="text-white/80 text-sm">PKR 50,000</p></div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function HealthcareUseCasesSection() {
  return (
    <section data-testid="fin-healthcare-use-cases" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal><p className="eyebrow mb-4">Healthcare Fintech</p><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight max-w-4xl">Financial infrastructure for healthcare access and administration</h2></ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#11111F]/10">
          {healthcareUseCases.map((uc, i) => (<ScrollReveal key={uc.name} delay={i * 0.03}><div className="bg-white p-5 card-hover h-full"><h3 className="text-sm font-bold text-[#11111F] mb-2">{uc.name}</h3><div className="space-y-1 text-[11px] text-[#666666]"><p><span className="text-[#0048FF] font-bold">Who:</span> {uc.who}</p><p><span className="text-[#0048FF] font-bold">Rail:</span> {uc.rail}</p><p><span className="text-[#0048FF] font-bold">DEXA:</span> {uc.dexa}</p></div></div></ScrollReveal>))}
        </div>
      </div>
    </section>
  );
}

function InsuranceUseCasesSection() {
  return (
    <section data-testid="fin-insurance-use-cases" className="bg-[#11111F] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal><p className="eyebrow mb-4">Insurance Fintech</p><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-4xl">Financial infrastructure for insurance collections, payouts, and commissions</h2></ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/10">
          {insuranceUseCases.map((uc, i) => (<ScrollReveal key={uc.name} delay={i * 0.03}><div className="bg-[#11111F] p-5 card-hover-dark h-full"><h3 className="text-xs font-bold text-white mb-2">{uc.name}</h3><div className="space-y-1 text-[10px] text-[#8A8A93]"><p><span className="text-[#0048FF] font-bold">Who:</span> {uc.who}</p><p><span className="text-[#0048FF] font-bold">Rail:</span> {uc.rail}</p></div></div></ScrollReveal>))}
        </div>
      </div>
    </section>
  );
}

function DexaIntelligence() {
  return (
    <section data-testid="fin-dexa" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal><p className="eyebrow mb-4">DEXA Intelligence</p><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight max-w-4xl">DEXA is the intelligence layer inside financial infrastructure</h2></ScrollReveal>
        <ScrollReveal delay={0.1}><p className="mt-6 text-base text-[#666666] leading-relaxed max-w-3xl">DEXA turns financial infrastructure from a transaction system into a guided operating layer. DEXA does not approve payments independently. DEXA does not bypass finance controls. DEXA does not replace finance teams. DEXA does not make unsupported lending decisions. DEXA operates inside approved rules, limits, workflows, permissions, finance logic, credit rules, payroll rules, expense rules, settlement rules, and escalation boundaries.</p></ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[1px] bg-[#11111F]/10">
          {dexaFinanceCapabilities.map((cap, i) => (<ScrollReveal key={cap.role} delay={i * 0.05}><div className="bg-white p-5 card-hover h-full"><p className="text-sm font-bold text-[#0048FF] mb-3">{cap.role}</p><div className="space-y-1.5">{cap.items.map((item) => (<p key={item} className="text-[11px] text-[#666666]">{item}</p>))}</div></div></ScrollReveal>))}
        </div>
      </div>
    </section>
  );
}

function DexaScenarios() {
  return (
    <section data-testid="fin-dexa-scenarios" className="bg-[#11111F] py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 blue-glow-subtle" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal><p className="eyebrow mb-4">DEXA in Action</p><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">From financial confusion to governed next action</h2></ScrollReveal>
        <div className="mt-16 space-y-6">
          {dexaFinanceScenarios.map((scenario, idx) => (<ScrollReveal key={scenario.title} delay={idx * 0.05}><div className="border border-white/10 p-5 md:p-7 bg-[#11111F]/80"><p className="text-sm font-bold text-[#0048FF] mb-4">{scenario.title}</p><div className="space-y-3">{scenario.messages.map((msg, i) => (<div key={i} className={`flex ${msg.from === "dexa" ? "justify-start" : "justify-end"}`}><div className={`max-w-lg p-3 ${msg.from === "dexa" ? "bg-white/[0.05] border border-[#0048FF]/20" : "bg-white/[0.03] border border-white/10"}`}><p className="text-[10px] uppercase tracking-wider font-bold mb-1 text-[#0048FF]">{msg.from === "dexa" ? "DEXA" : msg.from.charAt(0).toUpperCase() + msg.from.slice(1)}</p><p className="text-xs text-white/80 leading-relaxed">{msg.text}</p></div></div>))}</div>{scenario.actions && (<div className="mt-3 flex flex-wrap gap-2">{scenario.actions.map((a) => (<span key={a} className="text-[11px] px-3 py-1.5 bg-[#0048FF]/10 border border-[#0048FF]/30 text-[#0048FF] font-medium">{a}</span>))}</div>)}</div></ScrollReveal>))}
        </div>
      </div>
    </section>
  );
}

function Architecture() {
  return (
    <section data-testid="fin-architecture" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal><p className="eyebrow mb-4">Architecture</p><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight max-w-4xl">Built as financial infrastructure, not payment screens</h2></ScrollReveal>
        <div className="mt-16 border border-[#11111F]/10">
          {fintechArchitectureLayers.map((layer, idx) => (<ScrollReveal key={layer.name} delay={idx * 0.03}><div className={`grid grid-cols-1 md:grid-cols-12 ${idx > 0 ? "border-t border-[#11111F]/10" : ""}`}><div className="md:col-span-3 p-4 md:p-5 border-b md:border-b-0 md:border-r border-[#11111F]/10 flex items-center"><div><span className="text-[#0048FF] text-xs font-bold">L{idx + 1}</span><p className="text-xs font-bold text-[#11111F] mt-0.5">{layer.name}</p></div></div><div className="md:col-span-9 p-4 md:p-5"><div className="flex flex-wrap gap-1.5">{layer.items.map((item) => (<span key={item} className="text-[11px] px-2 py-0.5 border border-[#11111F]/10 text-[#666666]">{item}</span>))}</div></div></div></ScrollReveal>))}
        </div>
      </div>
    </section>
  );
}

function DeploymentModels() {
  return (
    <section data-testid="fin-deployment" className="bg-[#11111F] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal><p className="eyebrow mb-4">Deployment</p><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">Deploy fintech infrastructure according to your operating model</h2></ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[1px] bg-white/10">
          {fintechDeploymentModels.map((d, i) => (<ScrollReveal key={d.name} delay={i * 0.03}><div className="bg-[#11111F] p-5 card-hover-dark h-full"><h3 className="text-xs font-bold text-white mb-2">{d.name}</h3><p className="text-[10px] text-[#8A8A93] leading-relaxed">{d.desc}</p></div></ScrollReveal>))}
        </div>
      </div>
    </section>
  );
}

function UseCasesSection() {
  return (
    <section data-testid="fin-use-cases" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal><p className="eyebrow mb-4">Use Cases</p><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight max-w-4xl">Fintech infrastructure that can power multiple business models</h2></ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#11111F]/10">
          {fintechUseCases.map((uc, i) => (<ScrollReveal key={uc.name} delay={i * 0.02}><div className="bg-white p-5 card-hover h-full"><h3 className="text-sm font-bold text-[#11111F] mb-2">{uc.name}</h3><div className="space-y-1 text-[11px] text-[#666666]"><p><span className="text-[#0048FF] font-bold">Who:</span> {uc.who}</p><p><span className="text-[#0048FF] font-bold">Rail:</span> {uc.rail}</p><p><span className="text-[#0048FF] font-bold">DEXA:</span> {uc.dexa}</p></div></div></ScrollReveal>))}
        </div>
      </div>
    </section>
  );
}

function OutcomesSection() {
  return (
    <section data-testid="fin-outcomes" className="bg-[#11111F] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal><p className="eyebrow mb-4">Outcomes</p><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">What fintech infrastructure should deliver</h2></ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/10">
          {fintechOutcomes.map((o, i) => (<ScrollReveal key={o} delay={i * 0.03}><div className="bg-[#11111F] p-5 card-hover-dark h-full"><div className="w-5 h-5 border border-[#0048FF]/30 flex items-center justify-center mb-2"><div className="w-1.5 h-1.5 bg-[#0048FF]" /></div><p className="text-sm text-white font-medium">{o}</p></div></ScrollReveal>))}
        </div>
        <ScrollReveal delay={0.3}><p className="mt-8 text-xs text-[#8A8A93]/50 max-w-3xl">Designed to improve visibility, support faster reconciliation, reduce manual finance coordination, strengthen governance, and support embedded finance deployment. These do not represent unsupported guarantees.</p></ScrollReveal>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section data-testid="fin-final-cta" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <ScrollReveal><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight max-w-4xl mx-auto">Build fintech infrastructure that connects wallets, cards, payroll, expenses, payments, credit, settlement, and intelligence</h2></ScrollReveal>
        <ScrollReveal delay={0.1}><p className="mt-6 text-base text-[#666666] max-w-2xl mx-auto leading-relaxed">Mentor Global helps organizations move from disconnected financial workflows to connected fintech infrastructure powered by Mentor Wallet, Mentor Card, QR payments, payroll rails, expense controls, ledgers, settlements, reconciliation, credit workflows, embedded APIs, and DEXA financial intelligence.</p></ScrollReveal>
        <ScrollReveal delay={0.2}><div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"><Link to="/contact" data-testid="fin-final-build-cta" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0048FF] text-white font-semibold hover:bg-[#0030CC] transition-colors">Build Fintech Infrastructure <ArrowRight className="w-5 h-5" /></Link><Link to="/contact" data-testid="fin-final-talk-cta" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#11111F]/20 text-[#11111F] font-semibold hover:bg-[#11111F]/5 transition-colors">Talk to Mentor Global <ArrowRight className="w-5 h-5" /></Link></div></ScrollReveal>
      </div>
    </section>
  );
}

export default function FintechInfrastructure() {
  return (
    <main data-testid="fintech-infrastructure-page">
      <Hero />
      <ProblemSection />
      <InfrastructureStack />
      <ConnectedRailsVisual />
      <WhoItServes />
      <MoneyJourneys />
      <CoreModules />
      <WalletSection />
      <CardSection />
      <HealthcareUseCasesSection />
      <InsuranceUseCasesSection />
      <DexaIntelligence />
      <DexaScenarios />
      <Architecture />
      <DeploymentModels />
      <UseCasesSection />
      <OutcomesSection />
      <FinalCTA />
    </main>
  );
}
