import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "../components/shared/ScrollReveal";

const dexaDomains = [
  { name: "Healthcare Infrastructure", items: ["Claims routing and triage", "Provider matching and recommendations", "Benefit optimization", "Health pool analytics"] },
  { name: "Insurance Infrastructure", items: ["Quote intake and processing", "Broker guidance", "Underwriting summary", "Claims guidance", "Renewal prompts", "Coverage gap analysis"] },
  { name: "Fintech Infrastructure", items: ["Transaction monitoring", "Credit scoring", "Settlement optimization", "Financial risk analysis"] },
  { name: "HealthRails", items: ["Platform intelligence for white-labelled deployments", "Cross-tenant analytics", "Performance monitoring"] },
  { name: "Mentor OS", items: ["Task prioritization", "Work intelligence", "AI coaching", "Leadership insights", "Growth recommendations"] }
];

const whatDexaIsNot = [
  "DEXA is not a chatbot.",
  "DEXA is not only an AI assistant.",
  "DEXA is not limited to HealthRails.",
];

const whatDexaIs = [
  "DEXA is the intelligence processing engine that helps platforms understand, reason, coordinate, monitor, and act.",
  "DEXA powers intelligent operations across healthcare, insurance, fintech, HealthRails, Mentor OS, and white labelled client platforms.",
  "DEXA combines agentic AI pods, domain knowledge, rules engines, and human approval gates into one orchestrated system."
];

const agentPods = [
  { name: "Intro Agent", desc: "First-touch intelligence for user onboarding and context gathering." },
  { name: "Recommendation Model", desc: "AI-driven recommendations for products, providers, and plans." },
  { name: "Technical Discovery Agent", desc: "Deep technical analysis for platform integration and architecture." },
  { name: "Full Stack Development Agent", desc: "AI-assisted development, code generation, and platform building." },
  { name: "Tester Deployer Agent", desc: "Automated testing, quality assurance, and deployment intelligence." },
  { name: "KYC Lawyer Agent", desc: "Compliance verification, regulatory checks, and legal document processing." },
  { name: "Digital Marketer Agent", desc: "Marketing intelligence, campaign optimization, and growth analytics." },
  { name: "Design Engine AI", desc: "UI/UX intelligence, design system management, and visual optimization." }
];

const governance = [
  { title: "Human Approval Gates", desc: "Critical decisions require human review and approval before execution." },
  { title: "Audit Trails", desc: "Every action, recommendation, and decision is logged and traceable." },
  { title: "Confidence Scoring", desc: "Each output includes a confidence score for transparency and trust." },
  { title: "Domain Boundaries", desc: "DEXA operates within defined domain boundaries and escalates edge cases." }
];

export default function Dexa() {
  return (
    <main data-testid="dexa-page">
      {/* Hero */}
      <section className="relative bg-[#11111F] pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1680992046626-418f7e910589?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1920"
            alt=""
            className="w-full h-full object-cover opacity-[0.15]"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute inset-0 blue-glow" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          <ScrollReveal>
            <p className="eyebrow mb-6">Intelligence Engine</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-bold text-white tracking-tighter leading-[1.05] max-w-5xl">
              DEXA, The Intelligence Processing Engine Behind Mentor Global
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="mt-8 text-lg md:text-xl text-[#8A8A93] max-w-3xl leading-relaxed">
              DEXA powers intelligent operations across healthcare, insurance, fintech, HealthRails, Mentor OS, and white labelled client platforms.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* What DEXA Is / Is Not */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-[#11111F]/10">
            <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-[#11111F]/10">
              <ScrollReveal>
                <p className="eyebrow mb-6">What DEXA Is Not</p>
                <div className="space-y-4">
                  {whatDexaIsNot.map((item) => (
                    <p key={item} className="text-base md:text-lg font-semibold text-[#11111F]/60">{item}</p>
                  ))}
                </div>
              </ScrollReveal>
            </div>
            <div className="p-8 md:p-12">
              <ScrollReveal delay={0.1}>
                <p className="eyebrow mb-6">What DEXA Is</p>
                <div className="space-y-4">
                  {whatDexaIs.map((item) => (
                    <p key={item} className="text-sm text-[#666666] leading-relaxed">{item}</p>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* DEXA Across Domains */}
      <section className="bg-[#11111F] py-24 md:py-32 grid-bg relative overflow-hidden">
        <div className="absolute inset-0 blue-glow-subtle" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          <ScrollReveal>
            <p className="eyebrow mb-4">Across Platforms</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-3xl mb-16">
              DEXA Powers Every Layer of the Ecosystem
            </h2>
          </ScrollReveal>
          <div className="border border-white/10">
            {dexaDomains.map((domain, i) => (
              <ScrollReveal key={domain.name} delay={i * 0.08}>
                <div className={`grid grid-cols-1 md:grid-cols-12 ${i > 0 ? "border-t border-white/10" : ""}`}>
                  <div className="md:col-span-4 p-6 md:p-8 border-b md:border-b-0 md:border-r border-white/10">
                    <p className="text-base font-semibold text-white">{domain.name}</p>
                  </div>
                  <div className="md:col-span-8 p-6 md:p-8">
                    <div className="flex flex-wrap gap-3">
                      {domain.items.map((item) => (
                        <span key={item} className="text-sm text-[#8A8A93] px-3 py-1 border border-white/10">
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

      {/* Agent Pods */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <ScrollReveal>
            <p className="eyebrow mb-4">Agentic AI</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight mb-16">
              Agentic AI Pods
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#11111F]/10">
            {agentPods.map((pod, i) => (
              <ScrollReveal key={pod.name} delay={i * 0.05}>
                <div className="bg-white p-6 md:p-8 card-hover h-full">
                  <div className="w-10 h-10 border border-[#0048FF]/20 flex items-center justify-center mb-5">
                    <div className="w-3 h-3 bg-[#0048FF]" />
                  </div>
                  <h3 className="text-base font-bold text-[#11111F] mb-2">{pod.name}</h3>
                  <p className="text-sm text-[#666666] leading-relaxed">{pod.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="bg-[#11111F] py-24 md:py-32 grid-bg">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <ScrollReveal>
            <p className="eyebrow mb-4">Governance</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-16">
              Built With Governance and Trust
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/10">
            {governance.map((g, i) => (
              <ScrollReveal key={g.title} delay={i * 0.08}>
                <div className="bg-[#11111F] p-6 md:p-8 card-hover-dark h-full">
                  <h3 className="text-base font-bold text-white mb-3">{g.title}</h3>
                  <p className="text-sm text-[#8A8A93] leading-relaxed">{g.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight max-w-3xl mx-auto">
              Build Intelligent Platforms With DEXA
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                data-testid="dexa-partner-cta"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0048FF] text-white font-semibold hover:bg-[#0030CC] transition-colors"
              >
                Partner With Us <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/solutions/ai-infrastructure"
                data-testid="dexa-ai-solutions-cta"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#11111F]/20 text-[#11111F] font-semibold hover:bg-[#11111F]/5 transition-colors"
              >
                Explore AI Infrastructure <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
