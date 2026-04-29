import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Zap, Globe, Shield, Brain, Building2 } from "lucide-react";
import { ScrollReveal } from "../components/shared/ScrollReveal";
import { AnimatedCounter } from "../components/shared/AnimatedCounter";
import { solutionPillars, scaleMetrics, scaleDisclaimer, globalPresence, globalFootprint } from "../data/content";

const pillarIcons = {
  "healthcare-infrastructure": Shield,
  "insurance-infrastructure": Building2,
  "fintech-infrastructure": Zap,
  "ai-infrastructure": Brain,
  "company-operating-infrastructure": Globe
};

function Hero() {
  return (
    <section data-testid="home-hero" className="relative min-h-screen flex items-center bg-[#11111F] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1709809994088-a1f134fe3da9?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1920"
          alt=""
          className="w-full h-full object-cover opacity-[0.12]"
          loading="lazy"
        />
      </div>
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg" />
      {/* Blue glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#0048FF]/[0.06] blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-24 md:pt-40 md:pb-32">
        <ScrollReveal>
          <p className="eyebrow mb-6">Global Health Fintech Infrastructure</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-bold text-white tracking-tighter leading-[1.05] max-w-5xl">
            The Infrastructure Behind the Future of Health Fintech
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="mt-8 text-lg md:text-xl text-[#8A8A93] max-w-2xl leading-relaxed">
            Mentor Global builds the systems that power healthcare, insurance, fintech, AI, and company operating infrastructure across markets.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <p className="mt-4 text-sm text-[#8A8A93]/70 max-w-2xl">
            We do not build isolated products. We build the infrastructure that lets ecosystems launch, operate, automate, insure, finance, and scale.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.4}>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              to="/solutions"
              data-testid="hero-explore-solutions"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0048FF] text-white font-semibold hover:bg-[#0030CC] transition-colors"
            >
              Explore Solutions <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              data-testid="hero-partner-cta"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors"
            >
              Partner With Mentor Global <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Infrastructure rails visual */}
        <ScrollReveal delay={0.5}>
          <div className="mt-20 grid grid-cols-5 border border-white/10">
            {["Healthcare", "Insurance", "Fintech", "AI", "Mentor OS"].map((label, i) => (
              <div key={label} className={`p-4 md:p-6 text-center ${i < 4 ? "border-r border-white/10" : ""}`}>
                <div className="w-2 h-2 bg-[#0048FF] mx-auto mb-3" />
                <p className="text-xs md:text-sm font-medium text-white/60">{label}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-6 mt-4">
            <span className="text-xs text-[#8A8A93]">Powered by</span>
            <span className="text-xs font-semibold text-[#0048FF]">Mentor Innovation</span>
            <span className="text-xs text-[#8A8A93]">&</span>
            <span className="text-xs font-semibold text-[#0048FF]">DEXA</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Positioning() {
  const layers = [
    { label: "Holding Layer", desc: "Mentor Global provides strategy, capital, governance, and global coordination.", color: "text-white" },
    { label: "Technology Layer", desc: "Mentor Innovation builds customized software, API-first platforms, multi-tenant SaaS, and white-labelled solutions.", color: "text-[#0048FF]" },
    { label: "Intelligence Layer", desc: "DEXA powers intelligent operations across every platform with reasoning, coordination, and action.", color: "text-[#0048FF]" },
    { label: "Subsidiaries", desc: "Execute in markets across Singapore, Pakistan, UAE, and the United States.", color: "text-white" }
  ];

  return (
    <section data-testid="home-positioning" className="bg-white py-24 md:py-32 grid-bg-light">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Structure</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight max-w-3xl">
            A Global Holding Company for Health Fintech Infrastructure
          </h2>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-[#11111F]/10">
          {layers.map((layer, i) => (
            <ScrollReveal key={layer.label} delay={i * 0.1}>
              <div className={`p-8 md:p-10 ${i < 3 ? "border-b md:border-b-0 md:border-r border-[#11111F]/10" : ""} card-hover h-full`}>
                <p className="text-xs uppercase tracking-[0.2em] font-bold text-[#0048FF] mb-4">0{i + 1}</p>
                <h3 className="text-xl font-bold text-[#11111F] mb-3">{layer.label}</h3>
                <p className="text-sm text-[#666666] leading-relaxed">{layer.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Problem() {
  const problems = [
    { area: "Healthcare", issue: "Fragmented provider networks, manual claims, disconnected patient records, and siloed benefit systems." },
    { area: "Insurance", issue: "Legacy policy admin, manual underwriting, disconnected brokers, and slow claims processing." },
    { area: "Fintech", issue: "Fragmented payments, manual reconciliation, disconnected ledgers, and limited credit access." },
    { area: "Company Operations", issue: "Disconnected CRMs, spreadsheet-based tracking, manual HR, and siloed financial reporting." },
    { area: "AI", issue: "Chatbot-only solutions, no real intelligence processing, no governance, and no system-wide reasoning." }
  ];

  return (
    <section data-testid="home-problem" className="bg-[#11111F] py-24 md:py-32 grid-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">The Problem</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-3xl">
            Large industries are still running on broken systems
          </h2>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 border border-white/10">
          {problems.map((p, i) => (
            <ScrollReveal key={p.area} delay={i * 0.08}>
              <div className={`p-6 md:p-8 ${i < 4 ? "border-b lg:border-b-0 lg:border-r border-white/10" : ""} card-hover-dark h-full`}>
                <p className="text-[#0048FF] text-sm font-bold mb-3">{p.area}</p>
                <p className="text-sm text-[#8A8A93] leading-relaxed">{p.issue}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  return (
    <section data-testid="home-pillars" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Solutions</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight max-w-4xl">
            Five Infrastructure Pillars. One Global Architecture.
          </h2>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-[#11111F]/10">
          {solutionPillars.map((pillar, i) => {
            const Icon = pillarIcons[pillar.slug];
            return (
              <ScrollReveal key={pillar.slug} delay={i * 0.08}>
                <Link
                  to={`/solutions/${pillar.slug}`}
                  data-testid={`pillar-${pillar.slug}`}
                  className={`block p-8 md:p-10 card-hover h-full
                    ${i < solutionPillars.length - 1 ? "border-b lg:border-b border-[#11111F]/10" : ""}
                    ${(i % 3 !== 2) ? "lg:border-r border-[#11111F]/10" : ""}`}
                >
                  <Icon className="w-6 h-6 text-[#0048FF] mb-5" strokeWidth={1.5} />
                  <h3 className="text-xl font-bold text-[#11111F] mb-3">{pillar.title}</h3>
                  <p className="text-sm text-[#666666] leading-relaxed mb-6">{pillar.shortDesc}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#0048FF]">
                    Explore <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DexaSection() {
  return (
    <section data-testid="home-dexa" className="relative bg-[#11111F] py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 blue-glow" />
      <div className="absolute inset-0 grid-bg" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Intelligence Engine</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-4xl">
            DEXA Makes Infrastructure Think, Guide, and Act
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="mt-6 text-lg text-[#8A8A93] max-w-2xl leading-relaxed">
            DEXA is the intelligence processing engine across healthcare, insurance, fintech, HealthRails, Mentor OS, and white labelled platforms.
          </p>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-white/10">
          {[
            { label: "Healthcare", desc: "Claims routing, provider matching, benefit optimization" },
            { label: "Insurance", desc: "Quote intake, underwriting guidance, renewal prompts" },
            { label: "Fintech", desc: "Transaction monitoring, credit scoring, settlement optimization" },
            { label: "Mentor OS", desc: "Task prioritization, work intelligence, AI coaching" },
            { label: "HealthRails", desc: "Platform intelligence for white-labelled deployments" },
            { label: "Governance", desc: "Human approval gates, audit trails, confidence scoring" }
          ].map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 0.08}>
              <div className="bg-[#11111F] p-8 card-hover-dark h-full">
                <p className="text-[#0048FF] text-sm font-bold mb-2">{item.label}</p>
                <p className="text-sm text-[#8A8A93] leading-relaxed">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={0.3}>
          <div className="mt-10 text-center">
            <Link
              to="/dexa"
              data-testid="home-dexa-cta"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0048FF] hover:text-white transition-colors"
            >
              Explore DEXA <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function InnovationSection() {
  const capabilities = [
    "Customized software",
    "API first platforms",
    "Multi tenant SaaS",
    "White labelled solutions",
    "Full code enabled systems",
    "Portals and apps",
    "Dashboards",
    "Workflow engines"
  ];

  return (
    <section data-testid="home-innovation" className="bg-white py-24 md:py-32 grid-bg-light">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <ScrollReveal>
              <p className="eyebrow mb-4">Technology Engine</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight">
                Mentor Innovation Builds the Technology Backbone
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="mt-6 text-base text-[#666666] leading-relaxed">
                Mentor Innovation is the technology engine behind Mentor Global, building every platform, product, and system that powers the group and its white-labelled deployments.
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-2 border border-[#11111F]/10">
              {capabilities.map((cap, i) => (
                <div
                  key={cap}
                  className={`p-5 md:p-6 text-sm font-medium text-[#11111F] card-hover
                    ${i % 2 === 0 ? "border-r border-[#11111F]/10" : ""}
                    ${i < capabilities.length - 2 ? "border-b border-[#11111F]/10" : ""}`}
                >
                  <span className="text-[#0048FF] mr-2 text-xs font-bold">//</span>
                  {cap}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function ScaleSection() {
  return (
    <section data-testid="home-scale" className="relative bg-[#11111F] py-24 md:py-36 overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0048FF]/[0.04] blur-[150px] rounded-full" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Scale</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-3xl">
            Operating Infrastructure at Global Scale
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/10">
          {scaleMetrics.map((metric, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="bg-[#11111F] p-8 md:p-10 h-full">
                <p className="text-3xl md:text-4xl font-bold text-white counter-number">
                  <AnimatedCounter value={metric.value} prefix={metric.prefix} suffix={metric.suffix} />
                </p>
                <p className="mt-3 text-sm text-[#8A8A93] leading-relaxed">{metric.label}</p>
                {metric.sub && <p className="mt-1 text-xs text-[#8A8A93]/60">{metric.sub}</p>}
              </div>
            </ScrollReveal>
          ))}
          <ScrollReveal delay={0.6}>
            <div className="bg-[#11111F] p-8 md:p-10 flex items-center h-full">
              <p className="text-sm text-[#0048FF] font-semibold leading-relaxed">
                Asia, Middle East, Africa, and US Technology client footprint
              </p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.5}>
          <p className="mt-8 text-xs text-[#8A8A93]/50 max-w-3xl leading-relaxed">
            {scaleDisclaimer}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

function GlobalPresenceSection() {
  return (
    <section data-testid="home-global" className="relative bg-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Global Presence</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight">
            A Global Footprint
          </h2>
        </ScrollReveal>

        {/* Map visual */}
        <ScrollReveal delay={0.1}>
          <div className="mt-12 relative h-48 md:h-64 bg-[#11111F] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1733195296321-b99d129b09cd?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1400"
              alt="Global presence map"
              className="w-full h-full object-cover opacity-40"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex gap-12 md:gap-20">
                {["SG", "PK", "AE", "US"].map((code) => (
                  <div key={code} className="text-center">
                    <div className="w-3 h-3 bg-[#0048FF] mx-auto mb-2 animate-pulse" />
                    <span className="text-xs font-bold text-white">{code}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-[#11111F]/10">
          {globalPresence.map((g, i) => (
            <ScrollReveal key={g.location} delay={i * 0.1}>
              <div className={`p-8 md:p-10 ${i < 3 ? "border-b lg:border-b-0 lg:border-r border-[#11111F]/10" : ""} card-hover h-full`}>
                <p className="text-[#0048FF] text-2xl font-bold mb-2">{g.location}</p>
                <p className="text-sm text-[#666666] leading-relaxed">{g.role}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="mt-8 p-6 border border-[#11111F]/10 text-center">
            <p className="text-sm text-[#666666]">{globalFootprint}</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section data-testid="home-final-cta" className="bg-[#11111F] py-24 md:py-32 grid-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-3xl mx-auto">
            Build on infrastructure designed for global health fintech systems.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/solutions"
              data-testid="final-explore-solutions"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0048FF] text-white font-semibold hover:bg-[#0030CC] transition-colors"
            >
              Explore Solutions <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              data-testid="final-partner-cta"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors"
            >
              Partner With Us <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main data-testid="home-page">
      <Hero />
      <Positioning />
      <Problem />
      <Pillars />
      <DexaSection />
      <InnovationSection />
      <ScaleSection />
      <GlobalPresenceSection />
      <FinalCTA />
    </main>
  );
}
