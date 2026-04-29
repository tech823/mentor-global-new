import { useState } from "react";
import { ScrollReveal } from "../components/shared/ScrollReveal";
import { teamMembers } from "../data/content";
import { ChevronDown, ChevronUp } from "lucide-react";

function TeamCard({ member, index }) {
  const [expanded, setExpanded] = useState(false);
  const initials = member.name.split(" ").map(n => n[0]).join("").slice(0, 2);

  return (
    <div
      data-testid={`team-card-${index}`}
      className={`border border-[#11111F]/10 card-hover ${member.isFounder ? "lg:col-span-2" : ""}`}
    >
      <div className={`p-8 md:p-10 ${member.isFounder ? "grid grid-cols-1 md:grid-cols-2 gap-8" : ""}`}>
        {/* Avatar / visual */}
        <div>
          <div className={`${member.isFounder ? "w-24 h-24" : "w-16 h-16"} bg-[#11111F] flex items-center justify-center mb-6`}>
            <span className={`${member.isFounder ? "text-2xl" : "text-lg"} font-bold text-white`}>{initials}</span>
          </div>
          <h3 className={`${member.isFounder ? "text-2xl" : "text-xl"} font-bold text-[#11111F] mb-1`}>{member.name}</h3>
          <p className="text-sm font-semibold text-[#0048FF] mb-1">{member.role}</p>
          <p className="text-xs text-[#666666] uppercase tracking-wider">{member.domain}</p>
        </div>

        {/* Content */}
        <div className={member.isFounder ? "" : "mt-4"}>
          <p className="text-sm text-[#666666] leading-relaxed mb-4">{member.bio}</p>

          {expanded && (
            <div className="border-t border-[#11111F]/10 pt-4 mt-4">
              <p className="text-xs uppercase tracking-[0.15em] font-bold text-[#11111F]/40 mb-2">What they build</p>
              <p className="text-sm text-[#666666] leading-relaxed">{member.builds}</p>
            </div>
          )}

          <button
            data-testid={`team-expand-${index}`}
            onClick={() => setExpanded(!expanded)}
            className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#0048FF] hover:text-[#0030CC] transition-colors"
          >
            {expanded ? "Show Less" : "Read More"}
            {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <main data-testid="team-page">
      {/* Hero */}
      <section className="bg-white pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <ScrollReveal>
            <p className="eyebrow mb-4">Leadership</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#11111F] tracking-tighter leading-[1.05] max-w-5xl">
              Leadership Behind the Infrastructure
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="mt-8 text-lg text-[#666666] max-w-3xl leading-relaxed">
              A leadership team combining healthcare, technology, finance, AI, operations, product, and global execution expertise.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Team Grid */}
      <section className="bg-white pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {teamMembers.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.08}>
                <TeamCard member={member} index={i} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-[#11111F] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-snug mb-4">
                This is not only a leadership team.
              </p>
              <p className="text-2xl md:text-3xl font-bold text-[#0048FF] tracking-tight leading-snug">
                This is a system of operators building global health fintech infrastructure.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
