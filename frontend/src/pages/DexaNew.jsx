import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import { ScrollReveal } from "../components/shared/ScrollReveal";
import { dexaProblems, dexaWhatIs, dexaWhatIsNot, dexaThinkingChain, dexaOperatingStages, dexaPillarPanels, dexaChannels, dexaInterfaceTypes, dexaIntelligenceLayers, dexaAgentGroups, governanceCards, approvalQueues, dexaFullScenarios, dexaArchitectureLayers, dexaDeploymentModels, dexaUseCases, dexaOutcomes } from "../data/dexa-page";

function Hero() {
  return (
    <section data-testid="dexa-hero" className="relative bg-[#11111F] pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-[#0048FF]/[0.06] blur-[160px]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <ScrollReveal><p className="eyebrow mb-6">Intelligence Processing Engine</p><h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tighter leading-[1.05]">DEXA, The Intelligence Processing Engine Behind Mentor Global</h1></ScrollReveal>
            <ScrollReveal delay={0.15}><p className="mt-8 text-lg text-[#8A8A93] max-w-xl leading-relaxed">DEXA understands context, retrieves approved knowledge, applies rules, coordinates agents, triggers workflows, requests human approval, monitors execution, and turns healthcare, insurance, fintech, AI, and company operating infrastructure into intelligent systems.</p></ScrollReveal>
            <ScrollReveal delay={0.2}><p className="mt-4 text-sm text-white/50 max-w-xl italic">DEXA is not the chat window. DEXA is the intelligence layer behind the action.</p></ScrollReveal>
            <ScrollReveal delay={0.25}><p className="mt-3 text-sm text-[#8A8A93]/70 max-w-xl">Mentor Global builds infrastructure. Mentor Innovation builds the technology. DEXA makes the infrastructure intelligent.</p></ScrollReveal>
            <ScrollReveal delay={0.35}><div className="mt-10 flex flex-col sm:flex-row gap-4"><Link to="/contact" data-testid="dexa-hero-cta" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0048FF] text-white font-semibold hover:bg-[#0030CC] transition-colors">Explore DEXA <ArrowRight className="w-5 h-5" /></Link><a href="#dexa-video" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors">Watch DEXA in Action</a></div></ScrollReveal>
          </div>
          <ScrollReveal delay={0.2} direction="left">
            <div className="border border-white/10 p-5 bg-white/[0.02]">
              <div className="flex items-center gap-2 mb-4"><div className="w-2 h-2 bg-[#0048FF] animate-pulse" /><span className="text-xs font-bold text-[#0048FF]">DEXA Command Center</span><span className="text-[10px] text-[#8A8A93] ml-auto">Active</span></div>
              <div className="grid grid-cols-3 gap-1.5">
                {["Healthcare", "Insurance", "Fintech", "AI Infrastructure", "Company OS", "Knowledge Base", "Rules Engine", "Agent Orchestration", "Human Approval", "Audit Logs", "Monitoring", "API Actions"].map((n, i) => (
                  <div key={n} className={`p-2 border text-center ${i < 5 ? "border-[#0048FF]/20 bg-[#0048FF]/5" : "border-white/10 bg-white/[0.02]"}`}><p className="text-[8px] text-white/70 font-medium">{n}</p></div>
                ))}
              </div>
              <div className="mt-3 flex items-center gap-3 px-2 py-2 border border-white/10"><span className="text-[9px] text-[#8A8A93]">Agents: 8</span><span className="text-[9px] text-[#8A8A93]">Confidence: 94%</span><span className="text-[9px] text-[#0048FF] font-bold">Governed</span></div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function VideoSection() {
  return (
    <section data-testid="dexa-video" id="dexa-video" className="bg-[#11111F] py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <ScrollReveal><p className="eyebrow text-center mb-4">See DEXA in Motion</p></ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="relative">
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {["Context","Knowledge","Rules","Agents","Workflows","Approval","Monitoring","Audit"].map((l) => (<span key={l} className="text-[10px] px-3 py-1 border border-white/10 text-[#8A8A93]">{l}</span>))}
            </div>
            <div className="rounded-lg overflow-hidden border border-white/10 bg-black">
              <div className="aspect-video flex items-center justify-center bg-[#0a0a15] relative">
                <img src="https://customer-assets.emergentagent.com/job_mentor-ecosystem-2/artifacts/6djs8tnq_mentor%20club.png" alt="Mentor Club" className="h-20 md:h-28 object-contain opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-[10px] text-white/50">DEXA Intelligence Demo</span>
                  <span className="text-[10px] px-2 py-0.5 bg-[#0048FF]/20 border border-[#0048FF]/30 text-[#0048FF]">Video Coming Soon</span>
                </div>
              </div>
            </div>
            <p className="mt-6 text-sm text-[#8A8A93] text-center leading-relaxed max-w-2xl mx-auto">DEXA is not just a chat layer. It is the intelligence engine that understands context, connects systems, routes workflows, and guides action across Mentor Global infrastructure.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function WhatDexaIs() {
  return (
    <section data-testid="dexa-what-is" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal><p className="eyebrow mb-4">What DEXA Is</p><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight max-w-4xl">DEXA is the intelligence layer behind the action</h2></ScrollReveal>
        <ScrollReveal delay={0.1}><p className="mt-6 text-base text-[#666666] max-w-3xl leading-relaxed">DEXA receives information from people, portals, apps, documents, workflows, APIs, dashboards, and system events. It understands the meaning of that information, checks the user's role, retrieves approved knowledge, applies business rules, reasons over the context, and produces the next best action.</p></ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#11111F]/10">
          {dexaWhatIs.map((c, i) => (<ScrollReveal key={c.title} delay={i * 0.04}><div className="bg-white p-5 md:p-6 card-hover h-full"><span className="text-[#0048FF] text-xs font-bold">{String(i+1).padStart(2,"0")}</span><h3 className="text-sm font-bold text-[#11111F] mt-2 mb-2">{c.title}</h3><p className="text-[11px] text-[#666666] leading-relaxed">{c.desc}</p></div></ScrollReveal>))}
        </div>
      </div>
    </section>
  );
}

function WhatDexaIsNot() {
  return (
    <section data-testid="dexa-what-is-not" className="bg-[#11111F] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal><p className="eyebrow mb-4">What DEXA Is Not</p><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">DEXA is bigger than a chatbot</h2></ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/10">
          {dexaWhatIsNot.map((c, i) => (<ScrollReveal key={c.title} delay={i * 0.05}><div className="bg-[#11111F] p-6 card-hover-dark h-full"><h3 className="text-base font-bold text-white mb-2">{c.title}</h3><p className="text-xs text-[#8A8A93] leading-relaxed">{c.desc}</p></div></ScrollReveal>))}
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section data-testid="dexa-problems" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal><p className="eyebrow mb-4">The Problem</p><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight max-w-4xl">Infrastructure without intelligence still depends on humans to connect the dots</h2></ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[#11111F]/10">
          {dexaProblems.map((p, i) => (<ScrollReveal key={i} delay={i * 0.03}><div className="bg-white p-5 card-hover h-full"><span className="text-[#0048FF] text-xs font-bold">{String(i+1).padStart(2,"0")}</span><p className="mt-2 text-sm text-[#11111F] font-medium leading-relaxed">{p}</p></div></ScrollReveal>))}
        </div>
      </div>
    </section>
  );
}

function HowDexaThinks() {
  return (
    <section data-testid="dexa-thinking" className="bg-[#11111F] py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 blue-glow-subtle" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal><p className="eyebrow mb-4">Processing Chain</p><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">How DEXA turns a question into governed action</h2></ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="mt-12 flex flex-wrap items-center gap-1.5">{dexaThinkingChain.map((step, i) => (<span key={step} className="flex items-center gap-1.5"><span className="text-[10px] px-3 py-2 bg-white/5 border border-white/10 text-white font-medium">{step}</span>{i < dexaThinkingChain.length - 1 && <ChevronRight className="w-3 h-3 text-[#0048FF]" />}</span>))}</div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function OperatingModel() {
  return (
    <section data-testid="dexa-operating-model" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal><p className="eyebrow mb-4">Operating Model</p><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight">From information to action</h2></ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#11111F]/10">
          {dexaOperatingStages.map((s, i) => (<ScrollReveal key={s.stage} delay={i * 0.08}><div className="bg-white p-6 md:p-8 card-hover h-full"><span className="text-[#0048FF] text-2xl font-bold">{String(i+1).padStart(2,"0")}</span><h3 className="text-xl font-bold text-[#11111F] mt-3 mb-3">{s.stage}</h3><p className="text-sm text-[#666666] leading-relaxed">{s.desc}</p></div></ScrollReveal>))}
        </div>
      </div>
    </section>
  );
}

function DexaAcrossPillars() {
  return (
    <section data-testid="dexa-pillars" className="bg-[#11111F] py-24 md:py-32 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#0048FF]/[0.04] blur-[140px]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal><p className="eyebrow mb-4">Across Infrastructure</p><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-4xl">One intelligence engine across five infrastructure layers</h2></ScrollReveal>
        <div className="mt-16 space-y-6">
          {dexaPillarPanels.map((pillar, idx) => (<ScrollReveal key={pillar.name} delay={idx * 0.05}><div className="border border-white/10 p-6 md:p-8"><h3 className="text-lg font-bold text-white mb-4">{pillar.name}</h3><div className="grid grid-cols-1 md:grid-cols-2 gap-6"><div><div className="flex flex-wrap gap-1.5">{pillar.items.map((item) => (<span key={item} className="text-[10px] text-[#8A8A93] px-2.5 py-1 border border-white/10">{item}</span>))}</div></div><div className="border border-[#0048FF]/20 bg-[#0048FF]/5 p-4"><p className="text-[10px] text-[#0048FF] font-bold mb-1">Example</p><p className="text-xs text-white/70 italic mb-2">{pillar.example.question}</p><p className="text-[11px] text-[#8A8A93]">{pillar.example.context}</p></div></div></div></ScrollReveal>))}
        </div>
      </div>
    </section>
  );
}

function DexaChannelsSection() {
  return (
    <section data-testid="dexa-channels" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal><p className="eyebrow mb-4">Channels</p><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight">DEXA appears where users work</h2></ScrollReveal>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-[#11111F]/10">
          {dexaChannels.map((ch, i) => (<ScrollReveal key={ch} delay={i * 0.03}><div className="bg-white p-5 md:p-6 card-hover h-full text-center"><div className="w-8 h-8 border border-[#0048FF]/20 flex items-center justify-center mx-auto mb-3"><div className="w-2 h-2 bg-[#0048FF]" /></div><p className="text-sm text-[#11111F] font-medium">{ch}</p></div></ScrollReveal>))}
        </div>
        <ScrollReveal delay={0.2}><div className="mt-12"><p className="eyebrow mb-4">Interface Types</p><h3 className="text-2xl font-bold text-[#11111F] mb-6">DEXA is not only chat</h3><div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-[1px] bg-[#11111F]/10">{dexaInterfaceTypes.map((t) => (<div key={t} className="bg-white p-3 text-center"><p className="text-[10px] text-[#666666] font-medium">{t}</p></div>))}</div></div></ScrollReveal>
      </div>
    </section>
  );
}

function IntelligenceLayers() {
  return (
    <section data-testid="dexa-layers" className="bg-[#11111F] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal><p className="eyebrow mb-4">Intelligence Stack</p><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">The intelligence stack behind DEXA</h2></ScrollReveal>
        <div className="mt-16 border border-white/10">
          {dexaIntelligenceLayers.map((layer, idx) => (<ScrollReveal key={layer.name} delay={idx * 0.04}><div className={`grid grid-cols-1 md:grid-cols-12 ${idx > 0 ? "border-t border-white/10" : ""}`}><div className="md:col-span-4 p-5 border-b md:border-b-0 md:border-r border-white/10"><span className="text-[#0048FF] text-xs font-bold">L{idx+1}</span><p className="text-sm font-bold text-white mt-1">{layer.name}</p></div><div className="md:col-span-8 p-5"><p className="text-xs text-[#8A8A93] leading-relaxed">{layer.desc}</p></div></div></ScrollReveal>))}
        </div>
      </div>
    </section>
  );
}

function AgenticPods() {
  return (
    <section data-testid="dexa-agents" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal><p className="eyebrow mb-4">Agentic AI</p><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight">Specialist AI pods coordinated by DEXA</h2></ScrollReveal>
        <div className="mt-16 space-y-10">
          {dexaAgentGroups.map((group, gIdx) => (<ScrollReveal key={group.group} delay={gIdx * 0.06}><div><p className="text-xs uppercase tracking-[0.2em] font-bold text-[#0048FF] mb-4">{group.group}</p><div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[#11111F]/10">{group.agents.map((agent) => (<div key={agent.name} className="bg-white p-5 card-hover"><div className="w-8 h-8 border border-[#0048FF]/20 flex items-center justify-center mb-3"><div className="w-2 h-2 bg-[#0048FF]" /></div><h4 className="text-sm font-bold text-[#11111F] mb-2">{agent.name}</h4><p className="text-[11px] text-[#666666] leading-relaxed">{agent.desc}</p></div>))}</div></div></ScrollReveal>))}
        </div>
      </div>
    </section>
  );
}

function GovernanceSection() {
  return (
    <section data-testid="dexa-governance" className="bg-[#11111F] py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-[#0048FF]/[0.04] blur-[120px]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal><p className="eyebrow mb-4">Governance and Trust</p><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-4xl">DEXA acts only when knowledge, rules, permissions, and approvals allow it</h2></ScrollReveal>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-white/10">
          {governanceCards.map((cap, i) => (<ScrollReveal key={cap} delay={i * 0.02}><div className="bg-[#11111F] p-4 md:p-5 card-hover-dark"><p className="text-xs text-white/80 font-medium">{cap}</p></div></ScrollReveal>))}
        </div>
      </div>
    </section>
  );
}

function HumanApproval() {
  return (
    <section data-testid="dexa-approval" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal><p className="eyebrow mb-4">Human Control</p><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight">Human control where decisions matter</h2></ScrollReveal>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-[1px] bg-[#11111F]/10">
          {approvalQueues.map((q, i) => (<ScrollReveal key={q} delay={i * 0.02}><div className="bg-white p-4 card-hover h-full"><div className="flex items-center gap-1.5 mb-2"><div className="w-2 h-2 rounded-full bg-amber-400" /><span className="text-[9px] text-[#666666]">Pending</span></div><p className="text-[11px] text-[#11111F] font-medium">{q}</p></div></ScrollReveal>))}
        </div>
      </div>
    </section>
  );
}

function RealScenarios() {
  return (
    <section data-testid="dexa-scenarios" className="bg-[#11111F] py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 blue-glow-subtle" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal><p className="eyebrow mb-4">DEXA in Action</p><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">From confusion to governed next action</h2></ScrollReveal>
        <div className="mt-16 space-y-6">
          {dexaFullScenarios.map((s, idx) => (<ScrollReveal key={s.domain} delay={idx * 0.05}><div className="border border-white/10 p-5 md:p-7 bg-[#11111F]/80"><div className="flex items-center justify-between mb-4"><p className="text-xs font-bold text-[#0048FF]">{s.domain}</p><span className="text-[9px] px-2 py-0.5 border border-white/20 text-[#8A8A93]">{s.approval}</span></div><p className="text-[10px] text-[#8A8A93] mb-3">{s.checks}</p><div className="space-y-3"><div className="flex justify-end"><div className="max-w-lg p-3 bg-white/[0.03] border border-white/10"><p className="text-[10px] uppercase tracking-wider font-bold mb-1 text-[#0048FF]">{s.userRole}</p><p className="text-xs text-white/80">{s.question}</p></div></div><div className="flex justify-start"><div className="max-w-lg p-3 bg-white/[0.05] border border-[#0048FF]/20"><p className="text-[10px] uppercase tracking-wider font-bold mb-1 text-[#0048FF]">DEXA</p><p className="text-xs text-white/80 leading-relaxed">{s.answer}</p></div></div></div><div className="mt-3 flex flex-wrap gap-2">{s.actions.map((a) => (<span key={a} className="text-[10px] px-3 py-1.5 bg-[#0048FF]/10 border border-[#0048FF]/30 text-[#0048FF] font-medium">{a}</span>))}</div></div></ScrollReveal>))}
        </div>
      </div>
    </section>
  );
}

function Architecture() {
  return (
    <section data-testid="dexa-architecture" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal><p className="eyebrow mb-4">Architecture</p><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight max-w-4xl">Built as an intelligence processing engine, not a chat layer</h2></ScrollReveal>
        <div className="mt-16 border border-[#11111F]/10">
          {dexaArchitectureLayers.map((layer, idx) => (<ScrollReveal key={layer.name} delay={idx * 0.02}><div className={`grid grid-cols-1 md:grid-cols-12 ${idx > 0 ? "border-t border-[#11111F]/10" : ""}`}><div className="md:col-span-4 p-4 border-b md:border-b-0 md:border-r border-[#11111F]/10"><span className="text-[#0048FF] text-xs font-bold">L{idx+1}</span><p className="text-xs font-bold text-[#11111F] mt-0.5">{layer.name}</p></div><div className="md:col-span-8 p-4"><div className="flex flex-wrap gap-1">{layer.items.map((item) => (<span key={item} className="text-[10px] px-2 py-0.5 border border-[#11111F]/10 text-[#666666]">{item}</span>))}</div></div></div></ScrollReveal>))}
        </div>
      </div>
    </section>
  );
}

function UseCasesSection() {
  return (
    <section data-testid="dexa-use-cases" className="bg-[#11111F] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal><p className="eyebrow mb-4">Use Cases</p><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-4xl">DEXA use cases across Mentor Global infrastructure</h2></ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/10">
          {dexaUseCases.map((uc, i) => (<ScrollReveal key={uc.name} delay={i * 0.02}><div className="bg-[#11111F] p-4 card-hover-dark h-full"><h3 className="text-[11px] font-bold text-white mb-1.5">{uc.name}</h3><div className="space-y-0.5 text-[9px] text-[#8A8A93]"><p><span className="text-[#0048FF]">Who:</span> {uc.who}</p><p><span className="text-[#0048FF]">Action:</span> {uc.action}</p><p><span className="text-[#0048FF]">Approval:</span> {uc.approval}</p></div></div></ScrollReveal>))}
        </div>
      </div>
    </section>
  );
}

function OutcomesSection() {
  return (
    <section data-testid="dexa-outcomes" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal><p className="eyebrow mb-4">Outcomes</p><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight">What DEXA should deliver</h2></ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#11111F]/10">
          {dexaOutcomes.map((o, i) => (<ScrollReveal key={o} delay={i * 0.02}><div className="bg-white p-5 card-hover h-full"><div className="w-5 h-5 border border-[#0048FF]/30 flex items-center justify-center mb-2"><div className="w-1.5 h-1.5 bg-[#0048FF]" /></div><p className="text-sm text-[#11111F] font-medium">{o}</p></div></ScrollReveal>))}
        </div>
        <ScrollReveal delay={0.3}><p className="mt-8 text-xs text-[#666666]/60 max-w-3xl">Designed to improve guidance, support faster workflow routing, reduce repetitive coordination, strengthen governance, and support human controlled automation. These do not represent unsupported claims.</p></ScrollReveal>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section data-testid="dexa-final-cta" className="bg-[#11111F] py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#0048FF]/[0.05] blur-[140px]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 text-center">
        <ScrollReveal><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-3xl mx-auto">Turn infrastructure into intelligence</h2></ScrollReveal>
        <ScrollReveal delay={0.1}><p className="mt-6 text-base text-[#8A8A93] max-w-2xl mx-auto leading-relaxed">DEXA helps Mentor Global infrastructure understand context, retrieve approved knowledge, apply rules, coordinate agents, trigger workflows, monitor execution, and guide users toward governed next actions.</p></ScrollReveal>
        <ScrollReveal delay={0.2}><div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"><Link to="/contact" data-testid="dexa-final-build-cta" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0048FF] text-white font-semibold hover:bg-[#0030CC] transition-colors">Build With DEXA <ArrowRight className="w-5 h-5" /></Link><Link to="/contact" data-testid="dexa-final-talk-cta" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors">Talk to Mentor Global <ArrowRight className="w-5 h-5" /></Link></div></ScrollReveal>
      </div>
    </section>
  );
}

export default function DexaPage() {
  return (
    <main data-testid="dexa-page">
      <Hero />
      <VideoSection />
      <WhatDexaIs />
      <WhatDexaIsNot />
      <ProblemSection />
      <HowDexaThinks />
      <OperatingModel />
      <DexaAcrossPillars />
      <DexaChannelsSection />
      <IntelligenceLayers />
      <AgenticPods />
      <GovernanceSection />
      <HumanApproval />
      <RealScenarios />
      <Architecture />
      <UseCasesSection />
      <OutcomesSection />
      <FinalCTA />
    </main>
  );
}
