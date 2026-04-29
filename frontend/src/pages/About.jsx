import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "../components/shared/ScrollReveal";
import { aboutContent } from "../data/content";

export default function About() {
  return (
    <main data-testid="about-page">
      {/* Hero */}
      <section className="bg-white pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <ScrollReveal>
            <p className="eyebrow mb-4">About</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#11111F] tracking-tighter leading-[1.05] max-w-4xl">
              Built for the Global Shift Toward Health Fintech Infrastructure
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Who We Are */}
      <section className="bg-white pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-[#11111F]/10">
            <ScrollReveal>
              <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-[#11111F]/10 h-full">
                <p className="eyebrow mb-6">Who We Are</p>
                <p className="text-base text-[#666666] leading-relaxed">
                  {aboutContent.whoWeAre}
                </p>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1">
              <ScrollReveal delay={0.1}>
                <div className="p-8 md:p-12 border-b border-[#11111F]/10">
                  <p className="eyebrow mb-4">Vision</p>
                  <p className="text-sm text-[#666666] leading-relaxed">{aboutContent.vision}</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="p-8 md:p-12">
                  <p className="eyebrow mb-4">Mission</p>
                  <p className="text-sm text-[#666666] leading-relaxed">{aboutContent.mission}</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#11111F] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <ScrollReveal>
            <p className="eyebrow mb-4">Values</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-16">
              What Drives Us
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/10">
            {aboutContent.values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.08}>
                <div className="bg-[#11111F] p-8 md:p-10 card-hover-dark h-full">
                  <span className="text-[#0048FF] text-xs font-bold">0{i + 1}</span>
                  <h3 className="text-lg font-bold text-white mt-3 mb-3">{v.title}</h3>
                  <p className="text-sm text-[#8A8A93] leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Infrastructure Matters */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <ScrollReveal>
            <p className="eyebrow mb-4">Why Infrastructure</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight max-w-3xl mb-8">
              Why Infrastructure Matters
            </h2>
            <p className="text-base text-[#666666] leading-relaxed max-w-2xl">
              Products come and go. Features are copied. But infrastructure endures. It is the foundation upon which ecosystems are built, scaled, and sustained. Mentor Global invests in building infrastructure because it creates lasting value across markets.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Built by Operators */}
      <section className="bg-[#11111F] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <ScrollReveal>
            <p className="eyebrow mb-4">Our Team</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-3xl mb-8">
              Built by Operators
            </h2>
            <p className="text-lg text-[#8A8A93] leading-relaxed max-w-2xl">
              Mentor Global is not built by consultants or theorists. It is built by operators who have spent decades in healthcare, insurance, technology, and finance. We know what it takes to build, deploy, and scale systems in regulated markets.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <Link
              to="/team"
              data-testid="about-team-cta"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#0048FF] hover:text-white transition-colors"
            >
              Meet the Leadership <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Beliefs */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <ScrollReveal>
            <p className="eyebrow mb-8">Our Belief</p>
          </ScrollReveal>
          <div className="max-w-3xl">
            {aboutContent.beliefs.map((belief, i) => (
              <ScrollReveal key={belief} delay={i * 0.1}>
                <p className={`text-2xl md:text-3xl font-bold tracking-tight leading-snug mb-4 ${
                  i === aboutContent.beliefs.length - 1 ? "text-[#0048FF]" : "text-[#11111F]"
                }`}>
                  {belief}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#11111F] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-3xl mx-auto">
              Build With Mentor Global
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/solutions"
                data-testid="about-explore-solutions"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0048FF] text-white font-semibold hover:bg-[#0030CC] transition-colors"
              >
                Explore Solutions <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                data-testid="about-contact-cta"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors"
              >
                Contact Us <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
