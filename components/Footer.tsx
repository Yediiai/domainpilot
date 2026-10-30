import React from "react";
import Link from "next/link";
import { Globe, Shield, Terminal, Zap, CheckCircle2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <Globe className="w-4 h-4" />
              </div>
              <span className="font-bold text-lg tracking-tight text-white">
                Domain<span className="text-blue-400">Pilot</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Developer-first domain registrar, Anycast DNS network, and edge infrastructure platform. No renewal markup traps, zero hidden fees, and automated privacy forever.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono text-emerald-400 font-medium">
                All 24 Edge Points of Presence Operational (100% Uptime)
              </span>
            </div>
            <div className="pt-2 text-xs text-slate-500">
              ICANN Accredited Registrar #39281 • SOC2 Type II Certified
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4 font-mono">
              Domains
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/pricing" className="hover:text-white transition">
                  Search & Availability
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition">
                  TLD Pricing Directory
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition">
                  Domain Transfer Concierge
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition">
                  Bulk Registration Tool
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition">
                  WHOIS Privacy Protection
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4 font-mono">
              Infrastructure
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/features" className="hover:text-white transition">
                  Global Anycast DNS
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-white transition">
                  Free Automated SSL
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-white transition">
                  Domain & URL Forwarding
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-white transition">
                  DNSSEC with 1-Click
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-white transition">
                  DDoS Edge Mitigation
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 3 */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4 font-mono">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Our Mission
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  Security & Compliance
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  Contact Technical Support
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  API & Developer Docs
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  NOC Status Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} DomainPilot Inc. All rights reserved. Built for developers and infrastructure teams.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer transition">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition">Terms of Service</span>
            <span className="hover:text-white cursor-pointer transition">Registrant Rights</span>
            <span className="hover:text-white cursor-pointer transition">DNS SLA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
