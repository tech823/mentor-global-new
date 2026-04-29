import { Link } from "react-router-dom";
import { ArrowRight, Shield, Building2, Zap, Brain, Globe } from "lucide-react";
import { ScrollReveal } from "../components/shared/ScrollReveal";
import { solutionPillars } from "../data/content";

const pillarIcons = {
  "healthcare-infrastructure": Shield,
  "insurance-infrastructure": Building2,
  "fintech-infrastructure": Zap,
  "ai-infrastructure": Brain,
  "company-operating-infrastructure": Globe
};

export default function Solutions() {
  return (
    <main data-testid="solutions-page">
      {/* Hero */}
      <section className="bg-white pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal>
                <p className="eyebrow mb-4">Solutions</p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#11111F] tracking-tighter leading-[1.05]">
                  Infrastructure for Healthcare, Insurance, Fintech, AI, and Operating Systems
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p className="mt-8 text-lg text-[#666666] max-w-xl leading-relaxed">
                  Mentor Global helps organizations launch, automate, finance, insure, and operate digital ecosystems through modular, API first, multi tenant, white labelled infrastructure.
                </p>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.2} direction="left">
              <div className="overflow-hidden rounded-sm">
                <img
                  src="https://images.unsplash.com/photo-1649682892309-e10e0b7cd40b?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=700"
                  alt="Digital infrastructure"
                  className="w-full h-auto object-cover aspect-[4/3]"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Solution Cards */}
      <section className="bg-white pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="border border-[#11111F]/10">
            {solutionPillars.map((pillar, i) => {
              const Icon = pillarIcons[pillar.slug];
              return (
                <ScrollReveal key={pillar.slug} delay={i * 0.08}>
                  <div className={`${i > 0 ? "border-t border-[#11111F]/10" : ""}`}>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                      {/* Number + Icon */}
                      <div className="lg:col-span-1 p-6 lg:p-8 flex lg:flex-col items-center lg:items-start gap-4 lg:gap-4 border-b lg:border-b-0 lg:border-r border-[#11111F]/10">
                        <span className="text-xs font-bold text-[#0048FF]">0{i + 1}</span>
                        <Icon className="w-5 h-5 text-[#11111F]/40" strokeWidth={1.5} />
                      </div>

                      {/* Content */}
                      <div className="lg:col-span-7 p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-[#11111F]/10">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#11111F] tracking-tight mb-3">
                          {pillar.title}
                        </h2>
                        <p className="text-base text-[#666666] leading-relaxed mb-4">
                          {pillar.shortDesc}
                        </p>
                        <div className="mb-4">
                          <p className="text-xs uppercase tracking-[0.15em] font-bold text-[#11111F]/40 mb-2">Who it serves</p>
                          <div className="flex flex-wrap gap-2">
                            {pillar.whoServes.map((who) => (
                              <span key={who} className="text-xs px-3 py-1 border border-[#11111F]/10 text-[#666666]">
                                {who}
                              </span>
                            ))}
                          </div>
                        </div>
                        <p className="text-xs text-[#666666] leading-relaxed">
                          <span className="text-[#0048FF] font-semibold">DEXA: </span>{pillar.dexaRole}
                        </p>
                      </div>

                      {/* Modules + CTA */}
                      <div className="lg:col-span-4 p-6 lg:p-8 flex flex-col justify-between">
                        <div>
                          <p className="text-xs uppercase tracking-[0.15em] font-bold text-[#11111F]/40 mb-3">Key Modules</p>
                          <div className="flex flex-wrap gap-1.5 mb-6">
                            {(pillar.modules || []).slice(0, 6).map((mod) => (
                              <span key={mod} className="text-xs text-[#666666] after:content-[','] last:after:content-['']">
                                {mod}
                              </span>
                            ))}
                            {(pillar.modules || []).length > 6 && (
                              <span className="text-xs text-[#0048FF] font-medium">+{pillar.modules.length - 6} more</span>
                            )}
                          </div>
                        </div>
                        <Link
                          to={`/solutions/${pillar.slug}`}
                          data-testid={`solution-card-${pillar.slug}`}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-[#0048FF] hover:text-[#0030CC] transition-colors"
                        >
                          Explore {pillar.title} <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
