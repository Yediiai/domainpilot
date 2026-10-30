"use client";

import React, { useState } from "react";
import { 
  Server, Shield, Lock, Terminal, Cpu, Zap, Globe, ArrowRight,
  Code2, RefreshCw, Key, FileCheck, CheckCircle2, Copy, Check
} from "lucide-react";
import Link from "next/link";

export default function FeaturesPage() {
  const [activeTab, setActiveTab] = useState<"terraform" | "curl" | "typescript">("terraform");
  const [copied, setCopied] = useState(false);

  const codeSnippets = {
    terraform: `terraform {
  required_providers {
    domainpilot = {
      source  = "domainpilot/domainpilot"
      version = "~> 2.4.0"
    }
  }
}

provider "domainpilot" {
  api_token = var.domainpilot_api_token
}

resource "domainpilot_record" "api" {
  domain  = "acme-cloud.io"
  name    = "api"
  type    = "A"
  value   = "198.51.100.42"
  ttl     = 300
  proxied = true
}`,
    curl: `curl -X POST "https://api.domainpilot.com/v1/zones/acme-cloud.io/records" \\
  -H "Authorization: Bearer dp_live_98371928471" \\
  -H "Content-Type: application/json" \\
  -d '{
    "type": "CNAME",
    "name": "docs",
    "content": "custom.gitbook.io",
    "ttl": 300,
    "dnssec": true
  }'`,
    typescript: `import { DomainPilotClient } from "@domainpilot/sdk";

const client = new DomainPilotClient({
  apiKey: process.env.DOMAINPILOT_API_KEY!,
});

// Create Anycast DNS record with sub-second propagation
const record = await client.records.create({
  domain: "acme-cloud.io",
  type: "A",
  name: "staging",
  value: "198.51.100.88",
  ttl: 120,
});

console.log("DNS Record active:", record.id);`,
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="py-12 sm:py-16 lg:py-20 space-y-20">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-mono font-medium mb-4">
          <Cpu className="w-3.5 h-3.5" />
          <span>Distributed Anycast Mesh Architecture</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          Engineered for Infrastructure Engineers
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          High-performance global Anycast DNS, automated certificate issuance, 1-click DNSSEC, and declarative Terraform tooling built for zero-downtime reliability.
        </p>
      </div>

      {/* Feature Deep Dive 1: Anycast DNS & Edge Network */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-mono">
              <Zap className="w-6 h-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              24-PoP Global Anycast DNS with Sub-10ms Routing
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              When a visitor resolves your domain, BGP Anycast automatically directs their query to the physically closest edge data center. If an entire regional facility undergoes maintenance, traffic dynamically shifts to the next nearest point of presence in milliseconds.
            </p>
            <div className="space-y-3 text-sm text-slate-700">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>100% DNS uptime SLA backed by automated BGP rerouting</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Under 15 seconds global TTL propagation for zone changes</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Volumetric DDoS absorption up to 12.5 Tbps</span>
              </div>
            </div>
          </div>

          {/* Technical Terminal Graphic */}
          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 shadow-2xl text-slate-300 font-mono text-xs">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-[11px] ml-2 text-slate-400">dig acme-cloud.io @1.1.1.1</span>
              </div>
              <span className="text-emerald-400 font-semibold">24 PoPs Online</span>
            </div>
            <div className="mt-4 space-y-1.5 text-slate-300 leading-relaxed overflow-x-auto">
              <p className="text-slate-500">; &lt;&lt;&gt;&gt; DiG 9.10.6 &lt;&lt;&gt;&gt; acme-cloud.io +nsid</p>
              <p className="text-blue-400">;; QUESTION SECTION:</p>
              <p>;acme-cloud.io.			IN	A</p>
              <p className="text-emerald-400">;; ANSWER SECTION:</p>
              <p>acme-cloud.io.		300	IN	A	172.67.142.91</p>
              <p>acme-cloud.io.		300	IN	A	104.21.34.120</p>
              <p className="text-purple-400">;; OPTION NSID: "dp-edge-iad-04.domainpilot.net" (Virginia PoP)</p>
              <p className="text-slate-400 mt-2">;; Query time: 7 msec</p>
              <p className="text-slate-400">;; SERVER: 172.24.0.1#53(172.24.0.1)</p>
              <p className="text-slate-400">;; WHEN: Sat Oct 31 00:22:14 UTC 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Deep Dive 2: Developer APIs & IaC */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
              Infrastructure as Code First
            </span>
            <h2 className="mt-2 text-3xl font-bold">
              Automate Zones, Records, and Certs with Code
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Never click around in outdated control panels again. Manage all your DNS records declaratively using our verified Terraform provider or modern SDKs.
            </p>
          </div>

          {/* Interactive Code Switcher */}
          <div className="rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-3 bg-slate-900 border-b border-slate-800">
              <div className="flex items-center gap-2">
                {[
                  { id: "terraform", label: "Terraform HCL" },
                  { id: "curl", label: "REST cURL" },
                  { id: "typescript", label: "TypeScript SDK" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition ${
                      activeTab === tab.id
                        ? "bg-blue-600 text-white"
                        : "text-slate-400 hover:text-white hover:bg-slate-800"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white font-mono px-2 py-1 rounded bg-slate-800 transition"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied" : "Copy Code"}</span>
              </button>
            </div>

            <pre className="p-6 text-xs sm:text-sm font-mono text-blue-100 overflow-x-auto leading-relaxed">
              <code>{codeSnippets[activeTab]}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Grid of 6 Core Infrastructure Modules */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Comprehensive Infrastructure Tooling
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Every capability needed to securely run production SaaS domains at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <Lock className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="font-bold text-slate-900 text-lg mb-2">WHOIS Privacy & Proxy</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Automatic contact redaction shields your email, phone, and home address. Built-in anonymized email forwarder filters spam before reaching your inbox.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <Shield className="w-8 h-8 text-emerald-600 mb-4" />
            <h3 className="font-bold text-slate-900 text-lg mb-2">Automated SSL & Wildcards</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Integrated Let&apos;s Encrypt and DigiCert issuance with zero configuration. ACME DNS-01 verification handles wildcard renewal without server intervention.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <RefreshCw className="w-8 h-8 text-violet-600 mb-4" />
            <h3 className="font-bold text-slate-900 text-lg mb-2">URL & Apex Forwarding</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Edge-level HTTP 301/302 redirects with automatic SSL termination. Supports root domain to subfolder routing, path preservation, and query strings.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <Key className="w-8 h-8 text-amber-600 mb-4" />
            <h3 className="font-bold text-slate-900 text-lg mb-2">Hardware 2FA & Registry Lock</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Protect your highest-value domains against account takeover with FIDO2 / WebAuthn YubiKeys and out-of-band telephone authorization locks.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <FileCheck className="w-8 h-8 text-cyan-600 mb-4" />
            <h3 className="font-bold text-slate-900 text-lg mb-2">DNSSEC Cryptographic Signing</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Prevent man-in-the-middle DNS cache poisoning attacks. Automated DS record provisioning establishes an unbroken chain of trust with root servers.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <Terminal className="w-8 h-8 text-indigo-600 mb-4" />
            <h3 className="font-bold text-slate-900 text-lg mb-2">Audit Log Streaming</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Stream zone configuration changes, record modifications, and user sign-in events directly to Datadog, AWS CloudWatch, or custom Webhook endpoints.
            </p>
          </div>
        </div>
      </section>

      {/* Infrastructure CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-blue-600 text-white shadow-xl shadow-blue-500/20">
          <h3 className="text-2xl sm:text-3xl font-bold">
            Ready to upgrade your web infrastructure?
          </h3>
          <p className="mt-2 text-sm sm:text-base text-blue-100 max-w-xl mx-auto">
            Get started in 60 seconds with our automated domain search or import your entire zone file via API.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/pricing"
              className="px-6 py-3 rounded-xl bg-white text-blue-600 font-bold text-sm hover:bg-blue-50 transition shadow-md"
            >
              Search & Register Domains
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm transition"
            >
              Contact Infrastructure Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
