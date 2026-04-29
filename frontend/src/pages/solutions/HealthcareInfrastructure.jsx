import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, ChevronRight } from "lucide-react";
import { ScrollReveal } from "../../components/shared/ScrollReveal";
import {
  healthcareProblems, rails, stakeholders, journeys, modules,
  dexaCapabilities, dexaScenarios, architectureLayers,
  deploymentModels, useCases, outcomes
} from "../../data/healthcare";

function Hero() {
  return (
    <section data-testid="hc-hero" className="relative bg-[#11111F] pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-[#0048FF]/[0.05] blur-[140px]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <Link to="/solutions" className="inline-flex items-center gap-2 text-sm text-[#8A8A93] hover:text-[#0048FF] transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> All Solutions
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <ScrollReveal>
              <p className="eyebrow mb-6">Healthcare Infrastructure</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tighter leading-[1.05]">
                Healthcare Infrastructure for Access, Claims, Benefits, Provider Networks, and Health Financing
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="mt-8 text-lg text-[#8A8A93] max-w-xl leading-relaxed">
                Deploy connected healthcare rails for employers, employees, providers, TPAs, insurers, wallets, claims, reimbursements, and care navigation through one intelligent infrastructure layer.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <p className="mt-4 text-sm text-[#8A8A93]/70 max-w-xl">
                Mentor Global does not build isolated healthcare tools. It builds the infrastructure that connects care access, benefit administration, provider networks, claims, wallets, financing, and intelligence into one operating environment.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.35}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link to="/contact" data-testid="hc-hero-cta" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0048FF] text-white font-semibold hover:bg-[#0030CC] transition-colors">
                  Build Healthcare Infrastructure <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/dexa" data-testid="hc-hero-dexa-cta" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors">
                  Explore DEXA Intelligence
                </Link>
              </div>
            </ScrollReveal>
          </div>
          {/* Right: Product visual cards */}
          <ScrollReveal delay={0.2} direction="left">
            <div className="grid grid-cols-2 gap-3">
              {["Employee App", "Corporate Portal", "Claims Workflow", "Provider Network", "DEXA Intelligence", "Wallet & Pools"].map((item, i) => (
                <div key={item} className={`border border-white/10 p-4 md:p-5 ${i === 4 ? "bg-[#0048FF]/10 border-[#0048FF]/30" : "bg-white/[0.03]"}`}>
                  <div className="w-8 h-8 border border-white/20 flex items-center justify-center mb-3">
                    <div className={`w-2 h-2 ${i === 4 ? "bg-[#0048FF]" : "bg-white/40"}`} />
                  </div>
                  <p className="text-xs font-medium text-white/80">{item}</p>
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
    <section data-testid="hc-problem" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">The Problem</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight max-w-4xl">
            Healthcare is not broken because people do not care. It is broken because the rails do not connect.
          </h2>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#11111F]/10">
          {healthcareProblems.map((p, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="bg-white p-6 md:p-8 card-hover h-full">
                <span className="text-[#0048FF] text-xs font-bold">0{i + 1}</span>
                <p className="mt-3 text-sm text-[#11111F] font-medium leading-relaxed">{p}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function InfrastructureStack() {
  return (
    <section data-testid="hc-stack" className="bg-[#11111F] py-24 md:py-32 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#0048FF]/[0.04] blur-[120px]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Infrastructure Stack</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-4xl">
            One Healthcare Infrastructure Stack. Multiple Connected Rails.
          </h2>
        </ScrollReveal>
        <div className="mt-16 space-y-[1px]">
          {rails.map((rail, idx) => (
            <ScrollReveal key={rail.name} delay={idx * 0.05}>
              <div className="bg-[#11111F] border border-white/10 p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                  <div className="md:w-48 shrink-0">
                    <span className="text-[#0048FF] text-xs font-bold">0{idx + 1}</span>
                    <h3 className="text-lg font-bold text-white mt-1">{rail.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {rail.items.map((item) => (
                      <span key={item} className="text-xs text-[#8A8A93] px-3 py-1.5 border border-white/10 hover:border-[#0048FF]/30 transition-colors">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConnectedRailsVisual() {
  return (
    <section data-testid="hc-rails-visual" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <ScrollReveal>
          <p className="eyebrow mb-4">Connected Rails</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#11111F] tracking-tight mb-16">
            Six Connected Rails. One Infrastructure.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="relative">
            {/* Central hub */}
            <div className="mx-auto w-64 md:w-80 py-6 bg-[#11111F] text-white text-center mb-8">
              <p className="text-sm font-bold">Mentor Healthcare Infrastructure</p>
            </div>
            {/* Rails grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border border-[#11111F]/10">
              {rails.map((rail, i) => (
                <div key={rail.name} className={`p-5 md:p-6 text-center ${i < 5 ? "border-r border-[#11111F]/10" : ""} card-hover`}>
                  <div className="w-2 h-2 bg-[#0048FF] mx-auto mb-3" />
                  <p className="text-xs font-bold text-[#11111F]">{rail.name}</p>
                </div>
              ))}
            </div>
            {/* Powered by */}
            <div className="mt-6 flex items-center justify-center gap-4">
              <span className="text-xs text-[#666666]">Powered by</span>
              <span className="text-xs font-bold text-[#0048FF]">Mentor Innovation</span>
              <span className="text-xs text-[#666666]">and</span>
              <span className="text-xs font-bold text-[#0048FF]">DEXA</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function WhoItServes() {
  return (
    <section data-testid="hc-stakeholders" className="bg-[#11111F] py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#0048FF]/[0.03] blur-[120px]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Stakeholders</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-4xl">
            Built for every stakeholder in the healthcare value chain
          </h2>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/10">
          {stakeholders.map((s, i) => (
            <ScrollReveal key={s.name} delay={i * 0.05}>
              <div className="bg-[#11111F] p-6 md:p-8 card-hover-dark h-full">
                <h3 className="text-base font-bold text-white mb-3">{s.name}</h3>
                <p className="text-xs text-[#8A8A93] mb-3"><span className="text-[#0048FF] font-bold">Pain:</span> {s.pain}</p>
                <p className="text-xs text-[#8A8A93] mb-3"><span className="text-[#0048FF] font-bold">Infrastructure:</span> {s.infra}</p>
                <p className="text-xs text-[#8A8A93]"><span className="text-[#0048FF] font-bold">Outcome:</span> {s.outcome}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function UserJourneys() {
  return (
    <section data-testid="hc-journeys" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">User Journeys</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight max-w-4xl">
            Healthcare infrastructure becomes real when every user has a clear journey
          </h2>
        </ScrollReveal>
        <div className="mt-16 space-y-6">
          {journeys.map((j, idx) => (
            <ScrollReveal key={j.role} delay={idx * 0.05}>
              <div className="border border-[#11111F]/10 p-6 md:p-8 card-hover">
                <h3 className="text-lg font-bold text-[#11111F] mb-4">{j.role}</h3>
                <div className="flex flex-wrap items-center gap-2">
                  {j.steps.map((step, i) => (
                    <span key={step} className="flex items-center gap-2">
                      <span className="text-xs px-3 py-1.5 bg-[#11111F]/[0.03] border border-[#11111F]/10 text-[#11111F] font-medium">{step}</span>
                      {i < j.steps.length - 1 && <ChevronRight className="w-3 h-3 text-[#0048FF]" />}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CoreModules() {
  return (
    <section data-testid="hc-modules" className="bg-[#11111F] py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-[#0048FF]/[0.03] blur-[120px]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Core Modules</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Modular infrastructure for healthcare operations
          </h2>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/10">
          {modules.map((m, i) => (
            <ScrollReveal key={m.name} delay={i * 0.04}>
              <div className="bg-[#11111F] p-6 md:p-8 card-hover-dark h-full">
                <span className="text-[#0048FF] text-xs font-bold">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-base font-bold text-white mt-2 mb-3">{m.name}</h3>
                <p className="text-xs text-[#8A8A93] leading-relaxed">{m.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function DexaIntelligence() {
  return (
    <section data-testid="hc-dexa" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">DEXA Intelligence</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight max-w-4xl">
            DEXA is the intelligence layer inside healthcare infrastructure
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="mt-6 text-base text-[#666666] leading-relaxed max-w-3xl">
            DEXA turns healthcare infrastructure from a workflow system into a guided operating layer. DEXA does not replace HR. DEXA does not replace claims officers. DEXA does not diagnose. DEXA does not answer from memory. DEXA operates inside approved rules, user permissions, benefit logic, claims logic, provider data, wallet data, health credit rules, escalation workflows, and audit boundaries.
          </p>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[1px] bg-[#11111F]/10">
          {dexaCapabilities.map((cap, i) => (
            <ScrollReveal key={cap.role} delay={i * 0.05}>
              <div className="bg-white p-6 card-hover h-full">
                <p className="text-sm font-bold text-[#0048FF] mb-4">{cap.role}</p>
                <div className="space-y-2">
                  {cap.items.map((item) => (
                    <p key={item} className="text-xs text-[#666666]">{item}</p>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function DexaScenarios() {
  return (
    <section data-testid="hc-dexa-scenarios" className="bg-[#11111F] py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 blue-glow-subtle" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">DEXA in Action</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            From confusion to governed next action
          </h2>
        </ScrollReveal>
        <div className="mt-16 space-y-8">
          {dexaScenarios.map((scenario, idx) => (
            <ScrollReveal key={scenario.title} delay={idx * 0.1}>
              <div className="border border-white/10 p-6 md:p-8 bg-[#11111F]/80">
                <p className="text-sm font-bold text-[#0048FF] mb-6">{scenario.title}</p>
                <div className="space-y-4">
                  {scenario.messages.map((msg, i) => (
                    <div key={i} className={`flex ${msg.from === "dexa" ? "justify-start" : "justify-end"}`}>
                      <div className={`max-w-lg p-4 ${msg.from === "dexa" ? "bg-white/[0.05] border border-[#0048FF]/20" : "bg-white/[0.03] border border-white/10"}`}>
                        <p className="text-[10px] uppercase tracking-wider font-bold mb-2 text-[#0048FF]">{msg.from === "dexa" ? "DEXA" : msg.from === "hr" ? "HR" : "Employee"}</p>
                        <p className="text-sm text-white/80 leading-relaxed">{msg.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {scenario.actions && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {scenario.actions.map((action) => (
                      <span key={action} className="text-xs px-4 py-2 bg-[#0048FF]/10 border border-[#0048FF]/30 text-[#0048FF] font-medium">
                        {action}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Architecture() {
  return (
    <section data-testid="hc-architecture" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Architecture</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight max-w-4xl">
            Built as healthcare infrastructure, not a collection of screens
          </h2>
        </ScrollReveal>
        <div className="mt-16 border border-[#11111F]/10">
          {architectureLayers.map((layer, idx) => (
            <ScrollReveal key={layer.name} delay={idx * 0.04}>
              <div className={`grid grid-cols-1 md:grid-cols-12 ${idx > 0 ? "border-t border-[#11111F]/10" : ""}`}>
                <div className="md:col-span-3 p-5 md:p-6 border-b md:border-b-0 md:border-r border-[#11111F]/10 flex items-center">
                  <div>
                    <span className="text-[#0048FF] text-xs font-bold">L{idx + 1}</span>
                    <p className="text-sm font-bold text-[#11111F] mt-1">{layer.name}</p>
                  </div>
                </div>
                <div className="md:col-span-9 p-5 md:p-6">
                  <div className="flex flex-wrap gap-2">
                    {layer.items.map((item) => (
                      <span key={item} className="text-xs px-3 py-1 border border-[#11111F]/10 text-[#666666]">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function DeploymentModels() {
  return (
    <section data-testid="hc-deployment" className="bg-[#11111F] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Deployment</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Deploy it as infrastructure, not as a one size fits all product
          </h2>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/10">
          {deploymentModels.map((d, i) => (
            <ScrollReveal key={d.name} delay={i * 0.05}>
              <div className="bg-[#11111F] p-6 md:p-8 card-hover-dark h-full">
                <h3 className="text-base font-bold text-white mb-3">{d.name}</h3>
                <p className="text-xs text-[#8A8A93] leading-relaxed">{d.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCasesSection() {
  return (
    <section data-testid="hc-use-cases" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Use Cases</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight max-w-4xl">
            Healthcare infrastructure that can power multiple business models
          </h2>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[#11111F]/10">
          {useCases.map((uc, i) => (
            <ScrollReveal key={uc.name} delay={i * 0.04}>
              <div className="bg-white p-6 md:p-8 card-hover h-full">
                <h3 className="text-base font-bold text-[#11111F] mb-3">{uc.name}</h3>
                <div className="space-y-1.5 text-xs text-[#666666]">
                  <p><span className="text-[#0048FF] font-bold">Who:</span> {uc.who}</p>
                  <p><span className="text-[#0048FF] font-bold">Pain:</span> {uc.pain}</p>
                  <p><span className="text-[#0048FF] font-bold">Rail:</span> {uc.rail}</p>
                  <p><span className="text-[#0048FF] font-bold">DEXA:</span> {uc.dexa}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function OutcomesSection() {
  return (
    <section data-testid="hc-outcomes" className="bg-[#11111F] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Outcomes</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            What healthcare infrastructure should deliver
          </h2>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/10">
          {outcomes.map((o, i) => (
            <ScrollReveal key={o} delay={i * 0.04}>
              <div className="bg-[#11111F] p-6 card-hover-dark h-full">
                <div className="w-6 h-6 border border-[#0048FF]/30 flex items-center justify-center mb-3">
                  <div className="w-1.5 h-1.5 bg-[#0048FF]" />
                </div>
                <p className="text-sm text-white font-medium">{o}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={0.3}>
          <p className="mt-8 text-xs text-[#8A8A93]/50 max-w-3xl">
            Outcomes are designed to reduce manual workload, improve visibility, and support cost governance. These do not represent unsupported guarantees.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section data-testid="hc-final-cta" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight max-w-4xl mx-auto">
            Build healthcare infrastructure that connects care, claims, benefits, finance, and intelligence
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="mt-6 text-base text-[#666666] max-w-2xl mx-auto leading-relaxed">
            Mentor Global helps organizations move from fragmented healthcare administration to connected infrastructure powered by portals, apps, APIs, workflows, wallets, provider networks, claims engines, and DEXA intelligence.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" data-testid="hc-final-build-cta" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0048FF] text-white font-semibold hover:bg-[#0030CC] transition-colors">
              Build Healthcare Infrastructure <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contact" data-testid="hc-final-talk-cta" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#11111F]/20 text-[#11111F] font-semibold hover:bg-[#11111F]/5 transition-colors">
              Talk to Mentor Global <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default function HealthcareInfrastructure() {
  return (
    <main data-testid="healthcare-infrastructure-page">
      <Hero />
      <ProblemSection />
      <InfrastructureStack />
      <ConnectedRailsVisual />
      <WhoItServes />
      <UserJourneys />
      <CoreModules />
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
