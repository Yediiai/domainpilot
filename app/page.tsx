import React from "react";
import Link from "next/link";
import { 
  Globe, Shield, Zap, Terminal, Server, ArrowRight, CheckCircle2, 
  Layers, Lock, HelpCircle, Code2, Cpu, Check
} from "lucide-react";
import { DomainSearch } from "@/components/DomainSearch";
import { TransferCalculator } from "@/components/TransferCalculator";

export default function HomePage() {
  const featuredExtensions = [
    { tld: ".com", price: "$10.99", renew: "$10.99", desc: "The gold standard for global businesses", popular: true },
    { tld: ".io", price: "$34.99", renew: "$34.99", desc: "Preferred by modern tech startups & apps", popular: true },
    { tld: ".dev", price: "$12.99", renew: "$12.99", desc: "Google-backed registry with mandatory HTTPS", popular: false },
    { tld: ".ai", price: "$69.99", renew: "$69.99", desc: "The definitive identity for artificial intelligence", popular: true },
    { tld: ".tech", price: "$4.99", renew: "$19.99", desc: "Ideal for open-source tools & developer platforms", popular: false },
    { tld: ".cloud", price: "$8.99", renew: "$16.99", desc: "Built for cloud architecture & SaaS services", popular: false },
  ];

  const platformBenefits = [
    {
      icon: <Zap className="w-6 h-6 text-blue-600" />,
      title: "Sub-10ms Global Anycast DNS",
      description: "24 redundant edge points of presence route DNS queries to the geographically closest server with 100% SLA uptime guarantee.",
    },
    {
      icon: <Lock className="w-6 h-6 text-emerald-600" />,
      title: "Free Privacy Forever",
      description: "We shield your personal contact details from spammers and WHOIS scrapers. No annual fee, no sneaky upsell traps.",
    },
    {
      icon: <Code2 className="w-6 h-6 text-violet-600" />,
      title: "Developer REST & GraphQL APIs",
      description: "Automate record updates, TXT challenge issuance, and zone files with our officially maintained Terraform and Pulumi providers.",
    },
    {
      icon: <Shield className="w-6 h-6 text-cyan-600" />,
      title: "1-Click DNSSEC & SSL",
      description: "Cryptographically sign your DNS zones to stop DNS spoofing and cache poisoning with automated Let's Encrypt certificates.",
    },
    {
      icon: <Server className="w-6 h-6 text-indigo-600" />,
      title: "Zero-Downtime Smart Forwarding",
      description: "Route root domains and subdomains with full SSL preservation, custom 301/302 redirects, and wildcard path mapping.",
    },
    {
      icon: <Cpu className="w-6 h-6 text-amber-600" />,
      title: "Enterprise Multi-User RBAC",
      description: "Delegate granular DNS access to devops engineers and contractor teams with SAML SSO and hardware WebAuthn 2FA.",
    },
  ];

  const testimonials = [
    {
      quote: "DomainPilot replaced our nightmare legacy registrar. We manage over 240 production domains via their Terraform provider, and our DNS propagation dropped from 2 hours to 8 seconds.",
      author: "Alex Rivera",
      role: "VP of Infrastructure at HyperScale Cloud",
      stats: "240+ domains managed",
    },
    {
      quote: "The zero markup renewals alone saved our startup over $4,200 this year. No sneaky checkout checkboxes, no privacy fees, just clean developer-first software.",
      author: "Elena Rostova",
      role: "CTO at Nexus Robotics",
      stats: "$4.2k annual savings",
    },
    {
      quote: "Anycast latency is unreal. Our European and Tokyo traffic resolve DNS queries in under 9ms. If you take web infrastructure seriously, this is the only registrar to use.",
      author: "Marcus Chen",
      role: "Staff Site Reliability Engineer",
      stats: "Sub-9ms worldwide",
    },
  ];

  const faqs = [
    {
      q: "How does DomainPilot differ from traditional registrars?",
      a: "Traditional registrars entice users with deeply discounted promotional rates, then hike renewal prices by 300% while charging extra for basic privacy. DomainPilot offers fixed, wholesale pricing, includes free WHOIS privacy forever, and provides a modern developer API.",
    },
    {
      q: "Does switching registrars cause downtime for my website or email?",
      a: "Not at all. With our migration concierge, you pre-configure your DNS zone records in DomainPilot before initiating the EPP transfer. Traffic continues resolving uninterrupted throughout the entire process.",
    },
    {
      q: "Is Anycast DNS included with every domain registration?",
      a: "Yes. Every registered or transferred domain receives full access to our global 24-PoP Anycast DNS network with zero queries limits or per-lookup surcharges.",
    },
    {
      q: "Can I manage DNS records using Infrastructure as Code (IaC)?",
      a: "Yes. DomainPilot features official Terraform, Pulumi, and GitHub Actions integrations, as well as a documented REST and GraphQL API with API key scoping.",
    },
  ];

  return (
    <div className="space-y-20 lg:space-y-28 pb-20">
      {/* Hero Section */}
      <section className="relative pt-12 sm:pt-20 lg:pt-28 pb-12 overflow-hidden tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-medium mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
            <span>Next-Gen Edge Domain Registrar & Anycast DNS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 max-w-4xl mx-auto leading-tight">
            Your Next Big Idea Starts With a <span className="text-blue-600">Domain</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Lightning-fast registration, enterprise Anycast DNS, free WHOIS privacy forever, and developer-first APIs with zero renewal markup traps.
          </p>

          {/* Interactive Domain Search Component */}
          <div className="mt-10">
            <DomainSearch />
          </div>

          {/* Value Badges */}
          <div className="mt-10 pt-6 border-t border-slate-200/80 max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-600">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600" /> Free WHOIS Privacy
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600" /> Sub-10ms DNS Propagation
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600" /> 1-Click DNSSEC & SSL
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600" /> Terraform & CLI Ready
            </span>
          </div>
        </div>
      </section>

      {/* Featured Extensions & Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-blue-600 font-semibold mb-2">
              Transparent Pricing
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Popular Domain Extensions
            </h2>
          </div>
          <Link
            href="/pricing"
            className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            <span>View All 400+ TLDs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredExtensions.map((item) => (
            <div
              key={item.tld}
              className={`p-6 rounded-2xl border transition-all duration-200 ${
                item.popular
                  ? "bg-white border-blue-200 shadow-lg shadow-blue-500/5 ring-1 ring-blue-500/10"
                  : "bg-white border-slate-200 shadow-sm hover:border-slate-300"
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="font-mono text-2xl font-bold text-slate-900">
                    {item.tld}
                  </span>
                  <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                </div>
                {item.popular && (
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 font-mono">
                    POPULAR
                  </span>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-baseline justify-between">
                <div>
                  <span className="text-2xl font-extrabold text-slate-900">{item.price}</span>
                  <span className="text-xs text-slate-500 ml-1">/ 1st yr</span>
                  <div className="text-[11px] text-slate-400 mt-0.5">Renews at {item.renew}/yr</div>
                </div>
                <Link
                  href="/pricing"
                  className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-slate-900 hover:bg-blue-600 text-white transition"
                >
                  Register
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Platform Infrastructure Highlights */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
              Engineered For Scale
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight">
              Enterprise DNS & Edge Infrastructure
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400">
              Every domain registered with DomainPilot runs on high-performance Anycast infrastructure designed for 99.999% reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformBenefits.map((b, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/80 hover:border-slate-600 transition"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center mb-4 border border-slate-700">
                  {b.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{b.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/features"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 font-semibold text-sm transition shadow-lg shadow-blue-600/30"
            >
              <span>Explore Full Infrastructure Architecture</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Domain Transfer CTA with Live Savings Calculator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TransferCalculator />
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-semibold">
            Validated by Engineers
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900">
            Trusted by 50,000+ Developers & Infra Teams
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between"
            >
              <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm text-slate-900">{t.author}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium">
                  {t.stats}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Everything you need to know about domain management and DNS infrastructure.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((f, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm"
            >
              <h3 className="font-semibold text-slate-900 text-base mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-600 shrink-0" />
                {f.q}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed pl-6">{f.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
