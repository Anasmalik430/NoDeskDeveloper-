"use client";

import Link from "next/link";
import {
  Shield,
  Lock,
  Eye,
  RefreshCw,
  FileText,
  Mail,
  ArrowRight,
} from "lucide-react";

export default function PrivacyPolicy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy - NoDeskDeveloper",
    description:
      "Information about how NoDeskDeveloper collects, uses, and protects user data.",
    publisher: {
      "@type": "Organization",
      name: "NoDeskDeveloper",
    },
  };

  const sections = [
    {
      title: "1. Information Collection",
      icon: Eye,
      content:
        "We collect information you provide directly to us when you create an account, post a project, or contact support. This includes your name, email address, phone number, and project specifications. We also automatically collect technical data such as IP addresses, browser types, and usage patterns via cookies to optimize your experience.",
    },
    {
      title: "2. How We Use Information",
      icon: RefreshCw,
      content:
        "The data we collect is used to: match you with vetted developers, facilitate secure milestone payments, improve our platform's technical performance, and maintain clear communication throughout the project lifecycle. We do not sell your personal data to third parties.",
    },
    {
      title: "3. Data Security & Escrow",
      icon: Lock,
      content:
        "Security is our highest priority. All data transmissions are encrypted using industry-standard SSL/TLS. Payment information is handled through secure escrow gateways (like PhonePe/Stripe) and never stored on our local servers. We conduct regular security audits to ensure your intellectual property remains protected.",
    },
    {
      title: "4. Information Sharing",
      icon: Shield,
      content:
        "Information is shared with developers only as necessary to fulfill project requirements. We may disclose information if required by law or to protect our rights. All partners and developers on our platform are bound by strict Non-Disclosure Agreements (NDAs).",
    },
    {
      title: "5. Your Legal Rights",
      icon: FileText,
      content:
        "Depending on your location, you may have rights under GDPR, CCPA, or local Indian IT laws. These include the right to access, correct, or delete your personal information. You can manage your communication preferences or request a data export by contacting our privacy team.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-black text-white selection:bg-blue-500/30 overflow-x-hidden">
        {/* Animated Background */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-teal-600/20 blur-[120px] rounded-full animate-pulse delay-700" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-12">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6 backdrop-blur-md">
              <Shield className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-blue-300 font-bold text-[10px] tracking-wider uppercase">
                Legal Center
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
              Privacy{" "}
              <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Commitment
              </span>
            </h1>
            <p className="text-sm md:text-base text-gray-400 max-w-xl mx-auto font-medium leading-relaxed">
              We believe in radical transparency. This policy outlines how we
              safeguard your data and intellectual property across the
              NoDeskDeveloper ecosystem.
            </p>
          </div>

          <div className="grid gap-4">
            {sections.map((section, index) => (
              <div
                key={index}
                className="group relative p-px rounded-2xl overflow-hidden transition-all duration-500"
              >
                <div className="absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-white/5 opacity-50" />
                <div className="relative bg-black/60 backdrop-blur-2xl p-6 md:p-8 rounded-[15px] border border-white/5">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="size-11 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-blue-600/10 transition-colors border border-white/10">
                      <section.icon className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                    </div>
                    <div>
                      <h2 className="text-lg md:text-xl font-bold mb-2 text-white group-hover:text-blue-200 transition-colors">
                        {section.title}
                      </h2>
                      <p className="text-gray-400 leading-relaxed text-sm md:text-base font-medium">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Support Container */}
          <div className="mt-16">
            <div className="relative p-8 md:p-12 rounded-[32px] overflow-hidden text-center border border-blue-500/20 bg-linear-to-b from-blue-600/5 to-transparent backdrop-blur-sm">
              <div className="size-14 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-blue-500/40">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl md:text-4xl font-black mb-4 text-white">
                Questions about Policy?
              </h3>
              <p className="text-base text-gray-400 mb-8 max-w-lg mx-auto font-medium">
                Our compliance team is ready to address any specific privacy
                concerns or data requests you may have.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="group px-8 py-4 bg-white text-black rounded-xl font-bold text-base flex items-center justify-center gap-2 hover:bg-blue-50 transition-all shadow-xl shadow-white/5"
                >
                  Contact Legal Team
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/quickLinks/docs"
                  className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold text-base hover:bg-white/10 transition-all"
                >
                  View Documentation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
