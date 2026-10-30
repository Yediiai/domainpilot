import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "DomainPilot — High-Speed Anycast Domains & Cloud Infrastructure",
  description:
    "Developer-focused domain registrar and edge infrastructure platform. Transparent wholesale pricing, sub-10ms global Anycast DNS, automated SSL, and free privacy forever.",
  keywords: ["domain registrar", "Anycast DNS", "developer API", "SSL certificates", "WHOIS privacy"],
  openGraph: {
    title: "DomainPilot — Developer-First Domain & Edge Infrastructure",
    description: "Fast, transparent domain registration and rock-solid Anycast DNS with zero renewal markups.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-slate-50/50 text-slate-900 antialiased font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
