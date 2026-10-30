"use client";

import React, { useState } from "react";
import { ArrowRightLeft, Check, ShieldCheck, DollarSign, ArrowRight } from "lucide-react";
import Link from "next/link";

export function TransferCalculator() {
  const [domainCount, setDomainCount] = useState<number>(12);
  const legacyPricePerDomain = 24.99 + 11.99; // Renewal + privacy add-on
  const pilotPricePerDomain = 10.99; // Flat with free privacy
  const annualSavings = Math.round((legacyPricePerDomain - pilotPricePerDomain) * domainCount);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-navy-900 to-blue-950 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        <div className="lg:col-span-7 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-mono">
            <ArrowRightLeft className="w-3.5 h-3.5" />
            <span>Zero-Downtime Migration Concierge</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Tired of hidden renewal hikes? Transfer to DomainPilot.
          </h3>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Most legacy registrars bait you with a $2.99 first year, then hit you with $26+ renewals and $15 privacy upsells. At DomainPilot, you pay at-cost ICANN wholesale pricing, forever.
          </p>

          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Free WHOIS privacy on every TLD</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Zero downtime DNS propagation</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Automated EPP Auth Code transfer</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Free 1-year registration extension added</span>
            </div>
          </div>
        </div>

        {/* Interactive Savings Calculator */}
        <div className="lg:col-span-5 bg-slate-800/80 backdrop-blur-md rounded-2xl p-6 border border-slate-700/80 text-left">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
            Transfer Savings Estimator
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-center text-sm font-medium mb-1.5">
              <span className="text-slate-300">Domains to transfer:</span>
              <span className="text-blue-400 font-mono font-bold text-base">{domainCount} domains</span>
            </div>
            <input
              type="range"
              min="1"
              max="100"
              value={domainCount}
              onChange={(e) => setDomainCount(Number(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
          </div>

          <div className="bg-slate-900/90 rounded-xl p-4 border border-slate-700 space-y-2 mb-5">
            <div className="flex justify-between text-xs text-slate-400">
              <span>Typical Legacy Cost:</span>
              <span className="line-through text-rose-400 font-mono">
                ${Math.round(legacyPricePerDomain * domainCount)}/yr
              </span>
            </div>
            <div className="flex justify-between text-xs text-slate-400">
              <span>DomainPilot Flat Cost:</span>
              <span className="text-emerald-400 font-mono">
                ${Math.round(pilotPricePerDomain * domainCount)}/yr
              </span>
            </div>
            <div className="pt-2 border-t border-slate-800 flex justify-between items-baseline">
              <span className="text-sm font-semibold text-white">Your Annual Savings:</span>
              <span className="text-2xl font-bold font-mono text-emerald-400">
                ${annualSavings}
              </span>
            </div>
          </div>

          <Link
            href="/pricing"
            className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30"
          >
            <span>Start Bulk Transfer</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
