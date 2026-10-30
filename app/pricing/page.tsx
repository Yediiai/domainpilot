"use client";

import React, { useState } from "react";
import { Search, Check, Shield, Zap, ArrowRight, HelpCircle, CheckCircle2 } from "lucide-react";
import { DomainSearch } from "@/components/DomainSearch";

interface TldPricing {
  tld: string;
  category: "popular" | "tech" | "business" | "creative";
  register: string;
  renewal: string;
  transfer: string;
  whois: string;
  dnssec: boolean;
  highlight?: boolean;
}

const TLD_DATA: TldPricing[] = [
  { tld: ".com", category: "popular", register: "$10.99", renewal: "$10.99", transfer: "$10.99", whois: "Free Forever", dnssec: true, highlight: true },
  { tld: ".io", category: "tech", register: "$34.99", renewal: "$34.99", transfer: "$34.99", whois: "Free Forever", dnssec: true, highlight: true },
  { tld: ".dev", category: "tech", register: "$12.99", renewal: "$12.99", transfer: "$12.99", whois: "Free Forever", dnssec: true, highlight: true },
  { tld: ".ai", category: "tech", register: "$69.99", renewal: "$69.99", transfer: "$69.99", whois: "Free Forever", dnssec: true, highlight: true },
  { tld: ".org", category: "popular", register: "$11.99", renewal: "$11.99", transfer: "$11.99", whois: "Free Forever", dnssec: true },
  { tld: ".net", category: "popular", register: "$13.49", renewal: "$13.49", transfer: "$13.49", whois: "Free Forever", dnssec: true },
  { tld: ".tech", category: "tech", register: "$4.99", renewal: "$19.99", transfer: "$19.99", whois: "Free Forever", dnssec: true },
  { tld: ".app", category: "tech", register: "$14.99", renewal: "$14.99", transfer: "$14.99", whois: "Free Forever", dnssec: true },
  { tld: ".co", category: "business", register: "$23.99", renewal: "$23.99", transfer: "$23.99", whois: "Free Forever", dnssec: true },
  { tld: ".agency", category: "creative", register: "$18.99", renewal: "$18.99", transfer: "$18.99", whois: "Free Forever", dnssec: true },
  { tld: ".design", category: "creative", register: "$32.99", renewal: "$32.99", transfer: "$32.99", whois: "Free Forever", dnssec: true },
  { tld: ".cloud", category: "tech", register: "$8.99", renewal: "$16.99", transfer: "$16.99", whois: "Free Forever", dnssec: true },
  { tld: ".sh", category: "tech", register: "$29.99", renewal: "$29.99", transfer: "$29.99", whois: "Free Forever", dnssec: true },
  { tld: ".store", category: "business", register: "$3.99", renewal: "$24.99", transfer: "$24.99", whois: "Free Forever", dnssec: true },
];

export default function PricingPage() {
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [searchFilter, setSearchFilter] = useState<string>("");

  const filteredTlds = TLD_DATA.filter((item) => {
    const matchesCategory = filterCategory === "all" || item.category === filterCategory;
    const matchesSearch = item.tld.toLowerCase().includes(searchFilter.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12 sm:py-16 lg:py-20 space-y-16">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-mono font-medium mb-4">
          <span>ICANN Wholesale Pricing • Zero Hidden Markups</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          Domain Extension Directory & Transparent Rates
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          No renewal surprises. What you pay in year one is what you pay every year. Every domain comes bundled with free WHOIS privacy, Anycast DNS, and DNSSEC.
        </p>

        {/* Embedded Search Tool */}
        <div className="mt-8">
          <DomainSearch />
        </div>
      </div>

      {/* Pricing Table Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          {/* Table Controls */}
          <div className="p-6 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: "all", label: "All TLDs" },
                { id: "popular", label: "Most Popular" },
                { id: "tech", label: "Tech & Dev" },
                { id: "business", label: "Business & Commerce" },
                { id: "creative", label: "Design & Agency" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilterCategory(tab.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
                    filterCategory === tab.id
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Quick Filter Input */}
            <div className="relative sm:w-64">
              <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
              <input
                type="text"
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                placeholder="Filter TLD (e.g. .io)..."
                className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
          </div>

          {/* Table Content */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-xs font-mono uppercase tracking-wider text-slate-500">
                  <th className="py-3.5 px-6 font-semibold">TLD Extension</th>
                  <th className="py-3.5 px-6 font-semibold">Registration</th>
                  <th className="py-3.5 px-6 font-semibold">Renewal</th>
                  <th className="py-3.5 px-6 font-semibold">Transfer In</th>
                  <th className="py-3.5 px-6 font-semibold">WHOIS Privacy</th>
                  <th className="py-3.5 px-6 font-semibold">DNSSEC</th>
                  <th className="py-3.5 px-6 font-semibold text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {filteredTlds.map((row) => (
                  <tr key={row.tld} className="hover:bg-slate-50/80 transition">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-base text-slate-900">
                          {row.tld}
                        </span>
                        {row.highlight && (
                          <span className="text-[10px] font-sans px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 font-semibold">
                            Popular
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-6 font-mono font-bold text-slate-900">
                      {row.register}
                      <span className="text-xs font-sans text-slate-400 font-normal"> /yr</span>
                    </td>
                    <td className="py-4 px-6 font-mono text-slate-700">
                      {row.renewal}
                      <span className="text-xs font-sans text-slate-400 font-normal"> /yr</span>
                    </td>
                    <td className="py-4 px-6 font-mono text-slate-700">
                      {row.transfer}
                      <span className="text-xs font-sans text-slate-400 font-normal"> (+1 yr)</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center gap-1 text-xs text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded-full">
                        <Check className="w-3 h-3" /> Included Free
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center gap-1 text-xs text-blue-700 font-medium bg-blue-50 px-2 py-0.5 rounded-full">
                        <Check className="w-3 h-3" /> Supported
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <button
                        onClick={() => alert(`Registration initiated for ${row.tld}`)}
                        className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-slate-900 hover:bg-blue-600 text-white transition"
                      >
                        Search {row.tld}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Included Infrastructure Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
              Everything Included By Default
            </span>
            <h3 className="mt-2 text-2xl sm:text-3xl font-bold">
              What Comes With Every Domain You Register
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              Other registrars charge up to $40/year in add-ons for these essentials. DomainPilot provides them with every single domain.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "24-PoP Anycast DNS", desc: "Redundant edge DNS query routing with 100% SLA uptime." },
              { title: "Automated Let's Encrypt SSL", desc: "Automatic generation and 90-day renewal for all records." },
              { title: "Privacy Protection", desc: "Complete WHOIS masking with spam-free mail forwarding." },
              { title: "REST & GraphQL APIs", desc: "Automate DNS zones with Terraform and GitHub Actions." },
            ].map((f, i) => (
              <div key={i} className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 mb-2" />
                <h4 className="font-bold text-white text-sm">{f.title}</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing FAQs */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">
          Pricing & Transfer Questions
        </h3>
        <div className="space-y-4">
          <div className="p-5 rounded-xl bg-white border border-slate-200">
            <h4 className="font-semibold text-slate-900 text-sm mb-1">
              Do domain renewal prices ever change?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              We charge fixed at-cost wholesale registry fees plus an ultra-slim operational margin. If an upstream central registry (like Verisign for .com) adjusts its fee, we notify you 90 days in advance with complete price transparency.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-white border border-slate-200">
            <h4 className="font-semibold text-slate-900 text-sm mb-1">
              What is included in the domain transfer fee?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Per standard ICANN regulations, every domain transfer automatically extends your domain registration by an additional full year from its existing expiration date.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-white border border-slate-200">
            <h4 className="font-semibold text-slate-900 text-sm mb-1">
              Can I pay with credit card, PayPal, or enterprise invoicing?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Yes, we support all major credit cards, Apple Pay, Google Pay, and annual invoice billing for teams managing 50+ domains.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
