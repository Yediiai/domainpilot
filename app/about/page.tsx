"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  ShieldCheck, Globe, Mail, Phone, MapPin, CheckCircle2, 
  MessageSquare, Terminal, HeartHandshake, AlertCircle, Send, Loader2
} from "lucide-react";

const contactSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid work email address"),
  domainOrAccountId: z.string().optional(),
  category: z.enum(["support", "transfer", "enterprise", "security"], {
    errorMap: () => ({ message: "Please select an inquiry category" }),
  }),
  urgency: z.enum(["normal", "urgent", "critical"]),
  message: z.string().min(10, "Message must provide at least 10 characters of detail"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function AboutPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<ContactFormData | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      category: "support",
      urgency: "normal",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate API request to NOC / Support ticketing system
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitting(false);
    setSubmittedData(data);
    reset();
  };

  return (
    <div className="py-12 sm:py-16 lg:py-20 space-y-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-mono font-medium mb-4">
          <Globe className="w-3.5 h-3.5" />
          <span>About DomainPilot & Technical Support</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          Built by Systems Engineers Tired of Registrars
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          We founded DomainPilot with a singular mission: replace shady renewal markups and 1990s control panels with enterprise Anycast infrastructure and transparent pricing.
        </p>
      </div>

      {/* Mission & Core Principles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Zero Markup Guarantee</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We never lure developers with cheap introductory teaser rates only to jack renewals up 400%. Our wholesale ICANN rates are open, fixed, and published.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Privacy As A Basic Right</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We believe your personal phone number, home address, and personal identity should never be monetized or published on public WHOIS directories.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-5">
              <Terminal className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Code-First Infrastructure</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Modern devops demands declarative automation. Every toggle on DomainPilot is powered by public REST APIs, GraphQL endpoints, and verified Terraform providers.
            </p>
          </div>
        </div>
      </section>

      {/* Trust & Accreditations Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
              Accredited & Regulated
            </div>
            <h4 className="text-xl font-bold text-white">
              Official ICANN Registrar #39281
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Audited annually under strict ICANN Registrar Accreditation Agreements (RAA) and certified for SOC2 Type II data security.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
            <span className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 border border-slate-700">
              SOC2 Type II
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 border border-slate-700">
              ISO/IEC 27001
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 border border-slate-700">
              GDPR Compliant
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 border border-slate-700">
              DNSSEC Signed
            </span>
          </div>
        </div>
      </section>

      {/* Contact & Support Section with React Hook Form + Zod */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-semibold">
                Direct Engineering Support
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900">
                Talk to Tier-3 NOC Engineers
              </h2>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                When you contact DomainPilot support, you don&apos;t get robotic canned scripts. You reach site reliability engineers with deep DNS, BGP, and TLS expertise.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-200">
                <Mail className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">NOC & Engineering Desk</h4>
                  <p className="text-xs text-slate-500 font-mono">noc@domainpilot.net</p>
                  <p className="text-xs text-slate-400 mt-0.5">Average response: &lt; 8 minutes</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-200">
                <MessageSquare className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Developer Discord</h4>
                  <p className="text-xs text-slate-500 font-mono">discord.gg/domainpilot</p>
                  <p className="text-xs text-slate-400 mt-0.5">2,800+ active cloud engineers</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-200">
                <MapPin className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Global Headquarters</h4>
                  <p className="text-xs text-slate-600">548 Market Street, Suite 89201</p>
                  <p className="text-xs text-slate-500">San Francisco, CA 94104</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Validated Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
            {submittedData ? (
              <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Support Ticket Dispatched!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <strong>{submittedData.fullName}</strong>. Your ticket for{" "}
                  <strong>{submittedData.category}</strong> (Priority:{" "}
                  <span className="uppercase font-mono text-blue-600 font-semibold">{submittedData.urgency}</span>) has been routed to our on-call SRE queue.
                </p>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-600 max-w-sm mx-auto text-left">
                  <div>Ticket ID: DP-#{Math.floor(100000 + Math.random() * 900000)}</div>
                  <div>Recipient: {submittedData.email}</div>
                  <div>Status: Queued for SRE triage</div>
                </div>
                <button
                  onClick={() => setSubmittedData(null)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs transition"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="border-b border-slate-100 pb-4 mb-2">
                  <h3 className="text-xl font-bold text-slate-900">Contact Support & Sales</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Complete the details below to open a ticket directly with our engineering desk.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("fullName")}
                      placeholder="Sarah Connor"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-slate-50/50 focus:bg-white focus:outline-none transition ${
                        errors.fullName ? "border-rose-300 focus:border-rose-500" : "border-slate-200 focus:border-blue-500"
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  {/* Work Email */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Work Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      {...register("email")}
                      placeholder="sarah@company.com"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-slate-50/50 focus:bg-white focus:outline-none transition ${
                        errors.email ? "border-rose-300 focus:border-rose-500" : "border-slate-200 focus:border-blue-500"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Domain or Account ID */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Domain or Account ID (Optional)
                    </label>
                    <input
                      type="text"
                      {...register("domainOrAccountId")}
                      placeholder="e.g. acme-cloud.io"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:border-blue-500 transition"
                    />
                  </div>

                  {/* Category */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Inquiry Category <span className="text-rose-500">*</span>
                    </label>
                    <select
                      {...register("category")}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:border-blue-500 transition"
                    >
                      <option value="support">DNS & Infrastructure Support</option>
                      <option value="transfer">Bulk Domain Transfer</option>
                      <option value="enterprise">Enterprise Contract / SLA</option>
                      <option value="security">Security / Bug Bounty Report</option>
                    </select>
                  </div>
                </div>

                {/* Urgency */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Urgency Level
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: "normal", label: "Normal (Standard)" },
                      { id: "urgent", label: "Urgent (Production Issue)" },
                      { id: "critical", label: "Critical (Outage)" },
                    ].map((item) => (
                      <label
                        key={item.id}
                        className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50"
                      >
                        <input
                          type="radio"
                          value={item.id}
                          {...register("urgency")}
                          className="accent-blue-600"
                        />
                        <span>{item.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Technical Details & Question <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    {...register("message")}
                    placeholder="Provide details about your query, nameservers, or transfer timeline..."
                    className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-slate-50/50 focus:bg-white focus:outline-none transition ${
                      errors.message ? "border-rose-300 focus:border-rose-500" : "border-slate-200 focus:border-blue-500"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-semibold text-sm transition flex items-center justify-center gap-2 shadow-md shadow-blue-600/30"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Ticket...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Ticket to NOC Desk</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
