import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, ChevronRight } from "lucide-react";
import { ScrollReveal } from "../components/shared/ScrollReveal";
import { subsidiaryCompanies, holdingLayerItems, infrastructureLayerItems, subsidiaryLayerItems, sharedBackboneComponents, scalingFlow, partnerPathways, governanceComponents, globalClientRegions } from "../data/subsidiaries-page";

function Hero() {
  return (
    <section data-testid="sub-hero" className="relative bg-[#11111F] pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-[#0048FF]/[0.05] blur-[140px]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <ScrollReveal><p className="eyebrow mb-6">Global Portfolio</p><h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tighter leading-[1.05]">A Global Portfolio of Health Fintech Infrastructure Companies</h1></ScrollReveal>
            <ScrollReveal delay={0.15}><p className="mt-8 text-lg text-[#8A8A93] max-w-xl leading-relaxed">Mentor Global operates a structured group of specialized companies across markets. Each company executes independently. All are connected through one shared infrastructure backbone.</p></ScrollReveal>
            <ScrollReveal delay={0.2}><p className="mt-4 text-sm text-[#8A8A93] max-w-xl">Mentor Global is the holding layer. Subsidiaries execute across regions and verticals. Mentor Innovation builds the technology. DEXA powers intelligence across healthcare, insurance, fintech, AI, and company operating infrastructure.</p></ScrollReveal>
            <ScrollReveal delay={0.3}><div className="mt-10 flex flex-col sm:flex-row gap-4"><a href="#portfolio" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0048FF] text-white font-semibold hover:bg-[#0030CC] transition-colors">Explore Portfolio <ArrowRight className="w-5 h-5" /></a><Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors">Partner With Us</Link></div></ScrollReveal>
          </div>
          <ScrollReveal delay={0.2} direction="left">
            <div className="border border-white/10 p-5 bg-white/[0.02]">
              <p className="text-xs font-bold text-[#0048FF] mb-4">Global Presence</p>
              <div className="space-y-2">
                {[{code:"SG",name:"Singapore",role:"Holding Company"},{code:"PK",name:"Pakistan",role:"Core Operating Market"},{code:"AE",name:"UAE",role:"Regional Expansion"},{code:"US",name:"United States",role:"Enterprise Scale"}].map((r) => (
                  <div key={r.code} className="flex items-center gap-3 p-2.5 border border-white/10"><span className="text-[#0048FF] text-xs font-bold w-6">{r.code}</span><div><p className="text-xs text-white font-medium">{r.name}</p><p className="text-[10px] text-[#8A8A93]">{r.role}</p></div></div>
                ))}
                <div className="flex items-center gap-3 p-2.5 border border-[#0048FF]/20 bg-[#0048FF]/5"><span className="text-[#0048FF] text-xs font-bold w-6">GL</span><div><p className="text-xs text-white font-medium">Global Technology Clients</p><p className="text-[10px] text-[#8A8A93]">Asia, Middle East, Africa, US</p></div></div>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 grid grid-cols-3 gap-2 text-center">
                <div><p className="text-[9px] text-[#8A8A93]">Mentor Global</p><p className="text-[9px] text-white/60">Strategy + Capital</p></div>
                <div><p className="text-[9px] text-[#8A8A93]">Innovation + DEXA</p><p className="text-[9px] text-white/60">Technology + AI</p></div>
                <div><p className="text-[9px] text-[#8A8A93]">Subsidiaries</p><p className="text-[9px] text-white/60">Market Execution</p></div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function GroupArchitecture() {
  return (
    <section data-testid="sub-architecture" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal><p className="eyebrow mb-4">Group Architecture</p><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight">One Group. Multiple Engines of Execution.</h2></ScrollReveal>
        <div className="mt-16 space-y-[1px]">
          {[{name:"Holding Layer",items:holdingLayerItems},{name:"Infrastructure Layer",items:infrastructureLayerItems},{name:"Subsidiary Layer",items:subsidiaryLayerItems}].map((layer,idx) => (
            <ScrollReveal key={layer.name} delay={idx * 0.08}><div className="border border-[#11111F]/10 p-6 md:p-8"><div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8"><div className="md:w-48 shrink-0"><span className="text-[#0048FF] text-xs font-bold">0{idx+1}</span><h3 className="text-lg font-bold text-[#11111F] mt-1">{layer.name}</h3></div><div className="flex flex-wrap gap-2">{layer.items.map((item) => (<span key={item} className="text-xs text-[#666666] px-3 py-1.5 border border-[#11111F]/10">{item}</span>))}</div></div></div></ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioAtGlance() {
  const statusColors = { "Strategic HQ": "bg-[#0048FF]/10 text-[#0048FF]", "Operating": "bg-emerald-500/10 text-emerald-600", "Platform": "bg-purple-500/10 text-purple-600", "Expansion": "bg-amber-500/10 text-amber-600", "Enterprise Scale Market": "bg-[#0048FF]/10 text-[#0048FF]" };
  return (
    <section data-testid="sub-portfolio" id="portfolio" className="bg-[#11111F] py-24 md:py-32 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#0048FF]/[0.04] blur-[120px]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal><p className="eyebrow mb-4">Portfolio</p><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">The Mentor Global portfolio at a glance</h2></ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {subsidiaryCompanies.map((company, i) => (
            <ScrollReveal key={company.companyName} delay={i * 0.04}>
              <div className="border border-white/10 p-6 card-hover-dark h-full flex flex-col">
                <div className="flex items-start justify-between mb-3"><h3 className="text-base font-bold text-white">{company.companyName}</h3><span className={`text-[9px] px-2 py-0.5 font-bold ${statusColors[company.status] || "bg-white/10 text-[#8A8A93]"}`}>{company.status}</span></div>
                <p className="text-[10px] text-[#0048FF] font-bold mb-2">{company.region}</p>
                <p className="text-xs text-[#8A8A93] mb-3 flex-1">{company.role}</p>
                <div className="flex flex-wrap gap-1 mb-4">{company.infrastructure.slice(0,3).map((inf) => (<span key={inf} className="text-[9px] px-2 py-0.5 border border-white/10 text-[#8A8A93]">{inf}</span>))}</div>
                <div className="flex gap-2 mt-auto">
                  <span className="text-[10px] px-3 py-1.5 border border-white/20 text-white/60 cursor-default">{company.websiteStatus === "coming_soon" ? "Website Coming Soon" : "Visit Website"}</span>
                  <Link to="/contact" className="text-[10px] px-3 py-1.5 bg-[#0048FF]/10 border border-[#0048FF]/30 text-[#0048FF] font-medium">Request Introduction</Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function RegionSection({ eyebrow, headline, body, companies }) {
  return (
    <div className="mb-0">
      <ScrollReveal><p className="eyebrow mb-3">{eyebrow}</p><h3 className="text-2xl md:text-3xl font-bold text-[#11111F] mb-2">{headline}</h3>{body && <p className="text-sm text-[#666666] max-w-2xl mb-8">{body}</p>}</ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {companies.map((company, i) => (
          <ScrollReveal key={company.companyName} delay={i * 0.05}>
            <div className="border border-[#11111F]/10 p-6 card-hover h-full flex flex-col">
              <h4 className="text-lg font-bold text-[#11111F] mb-1">{company.companyName}</h4>
              <p className="text-xs text-[#0048FF] font-bold mb-3">{company.role}</p>
              <div className="mb-4 flex-1">
                <p className="text-[10px] uppercase tracking-[0.15em] font-bold text-[#11111F]/40 mb-2">What it does</p>
                <div className="space-y-1">{company.capabilities.map((c) => (<p key={c} className="text-[11px] text-[#666666] flex items-start gap-2"><span className="text-[#0048FF] mt-0.5 text-[8px]">&#9632;</span>{c}</p>))}</div>
              </div>
              <div className="mb-4">
                <p className="text-[10px] uppercase tracking-[0.15em] font-bold text-[#11111F]/40 mb-2">Infrastructure</p>
                <div className="flex flex-wrap gap-1">{company.infrastructure.map((inf) => (<span key={inf} className="text-[9px] px-2 py-0.5 border border-[#11111F]/10 text-[#666666]">{inf}</span>))}</div>
              </div>
              <div className="mb-4">
                <p className="text-[10px] uppercase tracking-[0.15em] font-bold text-[#11111F]/40 mb-2">Serves</p>
                <div className="flex flex-wrap gap-1">{company.serves.map((s) => (<span key={s} className="text-[9px] text-[#666666]">{s}{company.serves.indexOf(s) < company.serves.length - 1 ? "," : ""}</span>))}</div>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-[#11111F]/10">
                <span className="text-[10px] px-3 py-1.5 border border-[#11111F]/15 text-[#11111F]/60 cursor-default">{company.websiteStatus === "coming_soon" ? "Website Coming Soon" : "Visit Website"}</span>
                <Link to="/contact" className="text-[10px] px-3 py-1.5 bg-[#0048FF] text-white font-medium">Request Introduction</Link>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}

function RegionSections() {
  const sg = subsidiaryCompanies.filter(c => c.region === "Singapore");
  const pk = subsidiaryCompanies.filter(c => c.region === "Pakistan");
  const ae = subsidiaryCompanies.filter(c => c.region === "United Arab Emirates");
  const us = subsidiaryCompanies.filter(c => c.region === "United States");
  return (
    <section data-testid="sub-regions" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24">
        <RegionSection eyebrow="SG, SINGAPORE" headline="Singapore, Global Holding and Strategic Headquarters" body="" companies={sg} />
        <RegionSection eyebrow="PK, PAKISTAN" headline="Pakistan, Core Ecosystem and Validation Market" body="Pakistan is the core execution and validation market where Mentor Global's healthcare, TPA, provider network, claims, benefits, fintech, and technology infrastructure has been tested against real market complexity." companies={pk} />
        <RegionSection eyebrow="AE, UNITED ARAB EMIRATES" headline="United Arab Emirates, Regional Expansion and Financial Infrastructure Hub" body="The UAE is the GCC expansion hub for health fintech infrastructure, financial partnerships, healthcare entrepreneurship, white labelled deployment, and regional enterprise opportunities." companies={ae} />
        <RegionSection eyebrow="US, UNITED STATES" headline="United States, Enterprise Scale Infrastructure Market" body="The United States is the enterprise scale market for health fintech infrastructure, employer health programs, insurance infrastructure, fintech integration, and regulated market readiness." companies={us} />
      </div>
    </section>
  );
}

function GlobalClients() {
  return (
    <section data-testid="sub-global-clients" className="bg-[#11111F] py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-[#0048FF]/[0.04] blur-[120px]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal><p className="eyebrow mb-4">Client Ecosystem</p><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">Global Technology Client Ecosystem</h2><p className="mt-4 text-base text-[#8A8A93] max-w-2xl">Beyond owned subsidiaries, Mentor Global's technology engine can power clients across Asia, the Middle East, Africa, and the United States.</p><p className="mt-3 text-xs text-[#8A8A93]/60">Global technology clients are not subsidiaries. They are clients, partners, and deployment markets served through Mentor Innovation, DEXA, white labelled platforms, APIs, and custom infrastructure builds.</p></ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/10">
          {globalClientRegions.map((r, i) => (<ScrollReveal key={r.region} delay={i * 0.05}><div className="bg-[#11111F] p-6 card-hover-dark h-full"><div className="w-3 h-3 bg-[#0048FF] mb-3" /><h3 className="text-base font-bold text-white mb-3">{r.region}</h3><div className="space-y-2 text-[11px] text-[#8A8A93]"><p><span className="text-[#0048FF] font-bold">Clients:</span> {r.clients}</p><p><span className="text-[#0048FF] font-bold">Solutions:</span> {r.solutions}</p><p><span className="text-[#0048FF] font-bold">Deployment:</span> {r.deployment}</p></div><Link to="/contact" className="mt-4 inline-block text-[10px] px-3 py-1.5 bg-[#0048FF]/10 border border-[#0048FF]/30 text-[#0048FF] font-medium">Request Introduction</Link></div></ScrollReveal>))}
        </div>
      </div>
    </section>
  );
}

function SharedBackbone() {
  return (
    <section data-testid="sub-backbone" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal><p className="eyebrow mb-4">Shared Infrastructure</p><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight">Different companies. One infrastructure backbone.</h2></ScrollReveal>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-[1px] bg-[#11111F]/10">
          {sharedBackboneComponents.map((c, i) => (<ScrollReveal key={c} delay={i * 0.02}><div className="bg-white p-4 card-hover h-full"><p className="text-[11px] text-[#11111F] font-medium">{c}</p></div></ScrollReveal>))}
        </div>
        <ScrollReveal delay={0.2}>
          <div className="mt-12 border border-[#11111F]/10 p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-[#11111F] text-white"><p className="text-xs font-bold">Mentor Global</p><p className="text-[10px] text-[#8A8A93] mt-1">Strategy + Governance</p></div>
              <div className="p-4 bg-[#0048FF]/10 border border-[#0048FF]/20"><p className="text-xs font-bold text-[#0048FF]">Mentor Innovation + DEXA</p><p className="text-[10px] text-[#666666] mt-1">Technology + Intelligence</p></div>
              <div className="p-4 bg-[#11111F]/[0.03] border border-[#11111F]/10"><p className="text-xs font-bold text-[#11111F]">Subsidiaries + Clients</p><p className="text-[10px] text-[#666666] mt-1">Market Execution</p></div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function HowPortfolioScales() {
  return (
    <section data-testid="sub-scaling" className="bg-[#11111F] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal><p className="eyebrow mb-4">Scaling Model</p><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">Local execution. Global consistency.</h2></ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="mt-12 flex flex-wrap items-center gap-1.5">{scalingFlow.map((step, i) => (<span key={step} className="flex items-center gap-1.5"><span className="text-[10px] px-3 py-2 bg-white/5 border border-white/10 text-white font-medium">{step}</span>{i < scalingFlow.length - 1 && <ChevronRight className="w-3 h-3 text-[#0048FF]" />}</span>))}</div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Partnerships() {
  return (
    <section data-testid="sub-partnerships" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal><p className="eyebrow mb-4">Partnership Pathways</p><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight">Partner with the right company inside the Mentor Global ecosystem</h2></ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[#11111F]/10">
          {partnerPathways.map((p, i) => (<ScrollReveal key={p.type} delay={i * 0.04}><div className="bg-white p-5 md:p-6 card-hover h-full"><p className="text-sm font-bold text-[#0048FF] mb-2">{p.type}</p><p className="text-xs text-[#666666]">{p.connect}</p></div></ScrollReveal>))}
        </div>
      </div>
    </section>
  );
}

function GovernanceSection() {
  return (
    <section data-testid="sub-governance" className="bg-[#11111F] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal><p className="eyebrow mb-4">Governance</p><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-4xl">Built for regulated markets and responsible scale</h2><p className="mt-4 text-sm text-[#8A8A93] max-w-2xl">Each subsidiary operates in its local market while following group level governance, brand architecture, technology standards, data controls, and compliance expectations.</p></ScrollReveal>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-[1px] bg-white/10">
          {governanceComponents.map((g, i) => (<ScrollReveal key={g} delay={i * 0.02}><div className="bg-[#11111F] p-4 card-hover-dark"><p className="text-[11px] text-white/80 font-medium">{g}</p></div></ScrollReveal>))}
        </div>
        <ScrollReveal delay={0.2}><p className="mt-8 text-xs text-[#8A8A93]/50 max-w-2xl">Designed for regulated market deployment. Built with local regulatory adaptation. Governed through group level oversight. Configurable for market specific requirements.</p></ScrollReveal>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section data-testid="sub-final-cta" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <ScrollReveal><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight max-w-4xl mx-auto">Build with the Mentor Global ecosystem</h2></ScrollReveal>
        <ScrollReveal delay={0.1}><p className="mt-6 text-base text-[#666666] max-w-2xl mx-auto leading-relaxed">Whether you are an investor, insurer, healthcare group, fintech, employer, broker, government program, or technology partner, Mentor Global provides a connected portfolio of companies built to deploy health fintech infrastructure across markets.</p></ScrollReveal>
        <ScrollReveal delay={0.2}><div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"><Link to="/contact" data-testid="sub-final-partner-cta" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0048FF] text-white font-semibold hover:bg-[#0030CC] transition-colors">Explore Partnership Opportunities <ArrowRight className="w-5 h-5" /></Link><Link to="/contact" data-testid="sub-final-contact-cta" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#11111F]/20 text-[#11111F] font-semibold hover:bg-[#11111F]/5 transition-colors">Contact Mentor Global <ArrowRight className="w-5 h-5" /></Link></div></ScrollReveal>
      </div>
    </section>
  );
}

export default function SubsidiariesPage() {
  return (
    <main data-testid="subsidiaries-page">
      <Hero />
      <GroupArchitecture />
      <PortfolioAtGlance />
      <RegionSections />
      <GlobalClients />
      <SharedBackbone />
      <HowPortfolioScales />
      <Partnerships />
      <GovernanceSection />
      <FinalCTA />
    </main>
  );
}
