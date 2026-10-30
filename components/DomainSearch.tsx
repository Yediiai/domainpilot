"use client";

import React, { useState } from "react";
import { Search, CheckCircle2, XCircle, ArrowRight, Sparkles, Loader2, ShieldCheck, Zap } from "lucide-react";

interface SearchResult {
  domain: string;
  tld: string;
  status: "available" | "taken" | "premium";
  price: string;
  renewalPrice: string;
  badge?: string;
}

const POPULAR_EXTENSIONS = [
  { tld: ".com", price: "$10.99", note: "Standard" },
  { tld: ".io", price: "$34.99", note: "Tech favorite" },
  { tld: ".dev", price: "$12.99", note: "HTTPS enforced" },
  { tld: ".ai", price: "$69.99", note: "High demand" },
  { tld: ".tech", price: "$4.99", note: "Promo: 75% off" },
];

export function DomainSearch() {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsSearching(true);
    setHasSearched(false);

    // Sanitize query
    const cleaned = query
      .toLowerCase()
      .replace(/https?:\/\//i, "")
      .replace(/^www\./i, "")
      .split("/")[0]
      .trim();

    const baseName = cleaned.includes(".") ? cleaned.split(".")[0] : cleaned;

    setTimeout(() => {
      // Deterministic simulation based on query length/characters
      const isComTaken = baseName.length <= 6 || baseName.includes("google") || baseName.includes("test");

      const generatedResults: SearchResult[] = [
        {
          domain: `${baseName}.com`,
          tld: ".com",
          status: isComTaken ? "taken" : "available",
          price: "$10.99",
          renewalPrice: "$10.99/yr",
          badge: isComTaken ? undefined : "Recommended",
        },
        {
          domain: `${baseName}.io`,
          tld: ".io",
          status: "available",
          price: "$34.99",
          renewalPrice: "$34.99/yr",
          badge: "Popular with Devs",
        },
        {
          domain: `${baseName}.dev`,
          tld: ".dev",
          status: "available",
          price: "$12.99",
          renewalPrice: "$12.99/yr",
          badge: "SSL Included",
        },
        {
          domain: `${baseName}.ai`,
          tld: ".ai",
          status: "available",
          price: "$69.99",
          renewalPrice: "$69.99/yr",
        },
        {
          domain: `get${baseName}.com`,
          tld: ".com",
          status: "available",
          price: "$10.99",
          renewalPrice: "$10.99/yr",
          badge: "Alternative Suggestion",
        },
        {
          domain: `${baseName}hq.com`,
          tld: ".com",
          status: "available",
          price: "$10.99",
          renewalPrice: "$10.99/yr",
          badge: "Alternative Suggestion",
        },
      ];

      setResults(generatedResults);
      setIsSearching(false);
      setHasSearched(true);
    }, 450);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Search Input Box */}
      <form onSubmit={handleSearch} className="relative shadow-2xl shadow-blue-500/10 rounded-2xl bg-white border border-slate-200 p-2 sm:p-3">
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <div className="flex items-center gap-3 w-full px-3 py-2 text-slate-400">
            <Search className="w-5 h-5 text-blue-600 shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type your ideal domain name (e.g. cloudflux, myapp.dev)..."
              className="w-full text-base sm:text-lg font-medium text-slate-900 placeholder-slate-400 focus:outline-none"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="text-xs text-slate-400 hover:text-slate-600 font-mono px-1.5 py-0.5 rounded bg-slate-100"
              >
                Clear
              </button>
            )}
          </div>
          <button
            type="submit"
            disabled={isSearching || !query.trim()}
            className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-semibold rounded-xl transition flex items-center justify-center gap-2 shrink-0 shadow-md shadow-blue-600/30"
          >
            {isSearching ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Checking...</span>
              </>
            ) : (
              <>
                <span>Search</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </form>

      {/* Quick TLD Pills */}
      {!hasSearched && (
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs">
          <span className="text-slate-400 font-medium mr-1">Trending TLDs:</span>
          {POPULAR_EXTENSIONS.map((item) => (
            <button
              key={item.tld}
              onClick={() => {
                setQuery(`myidea${item.tld}`);
              }}
              className="px-3 py-1.5 rounded-full bg-slate-100/90 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 border border-slate-200/80 text-slate-700 font-medium transition flex items-center gap-1.5"
            >
              <span className="font-mono font-semibold">{item.tld}</span>
              <span className="text-slate-500 font-normal">{item.price}</span>
            </button>
          ))}
        </div>
      )}

      {/* Results View */}
      {hasSearched && (
        <div className="mt-6 bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="bg-slate-50 px-6 py-3.5 border-b border-slate-200 flex flex-wrap items-center justify-between text-xs text-slate-500 font-mono">
            <span>Query verified across 24 Anycast edge zones</span>
            <span className="text-emerald-600 font-semibold flex items-center gap-1">
              <Zap className="w-3.5 h-3.5" /> Simulated Live ICANN Registry Check: 28ms
            </span>
          </div>

          <div className="divide-y divide-slate-100">
            {results.map((res) => {
              const isSelected = selectedDomain === res.domain;
              return (
                <div
                  key={res.domain}
                  className="px-6 py-4.5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/70 transition"
                >
                  <div className="flex items-center gap-3.5">
                    {res.status === "available" ? (
                      <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                    ) : (
                      <div className="w-9 h-9 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center shrink-0 border border-rose-200">
                        <XCircle className="w-5 h-5" />
                      </div>
                    )}
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-slate-900 text-lg">
                          {res.domain}
                        </span>
                        {res.badge && (
                          <span className="text-[11px] font-sans font-medium px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                            {res.badge}
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-slate-500 flex items-center gap-3 mt-0.5">
                        <span className={res.status === "available" ? "text-emerald-600 font-semibold" : "text-rose-500 font-semibold"}>
                          {res.status === "available" ? "Available Now" : "Taken by another owner"}
                        </span>
                        {res.status === "available" && (
                          <>
                            <span>•</span>
                            <span>Renews at {res.renewalPrice} (No markup)</span>
                            <span>•</span>
                            <span className="text-blue-600 font-medium">Free Privacy & SSL Included</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 sm:self-center">
                    {res.status === "available" ? (
                      <>
                        <div className="text-right">
                          <span className="font-bold text-lg text-slate-900">{res.price}</span>
                          <span className="text-xs text-slate-400 block font-sans">/ 1st year</span>
                        </div>
                        <button
                          onClick={() => setSelectedDomain(isSelected ? null : res.domain)}
                          className={`px-4 py-2 text-sm font-semibold rounded-lg transition ${
                            isSelected
                              ? "bg-emerald-600 text-white hover:bg-emerald-700"
                              : "bg-blue-600 text-white hover:bg-blue-700"
                          }`}
                        >
                          {isSelected ? "Selected ✓" : "Register"}
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => alert(`Broker inquiry sent for ${res.domain}`)}
                        className="px-3.5 py-2 text-xs font-semibold rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 transition"
                      >
                        Make Backorder Offer
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {selectedDomain && (
            <div className="p-4 bg-emerald-50 border-t border-emerald-200 flex items-center justify-between text-sm">
              <span className="text-emerald-800 font-medium">
                Ready to configure <strong>{selectedDomain}</strong> with 1-click Anycast DNS.
              </span>
              <a
                href="/pricing"
                className="px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition"
              >
                Proceed to Checkout →
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
