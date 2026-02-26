"use client";

import Link from "next/link";
import {
  Shield,
  Gavel,
  Zap,
  CheckCircle,
  Scale,
  Mail,
  ArrowRight,
  FileText,
} from "lucide-react";

export default function TermsOfService() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms of Service - NoDeskDeveloper",
    description:
      "Rules and guidelines for using the NoDeskDeveloper platform, including project milestones and IP rights.",
    publisher: {
      "@type": "Organization",
      name: "NoDeskDeveloper",
    },
  };

  const sections = [
    {
      title: "1. Service Commitment",
      icon: Zap,
      content:
        "By accessing NoDeskDeveloper, you enter into a partnership built on quality and speed. We commit to matching you with vetted talent and providing production-ready software. Your use of our platform signifies your agreement to these professional standards and operational guidelines.",
    },
    {
      title: "2. Milestone-Based Protection",
      icon: Shield,
      content:
        "Payments are structured into three clear stages: 30% on project initiation, 40% upon reaching significant progress (70-80% completion), and the final 30% on delivery. This ensures you only pay as we hit tangible technical benchmarks.",
    },
    {
      title: "3. Intellectual Property Rights",
      icon: Scale,
      content:
        "You retain full ownership. Upon final payment for any custom development project, all intellectual property rights, source code, and design assets are transferred strictly to the client. For ready-made software, we grant a lifetime, non-transferable license for your business use.",
    },
    {
      title: "4. Professional Arbitration",
      icon: Gavel,
      content:
        "Disputes are handled with technical depth. If a delivery does not meet agreed-upon requirements, our internal mediation team evaluates the code and project scope to provide a fair resolution. We aim for 100% project success through clear communication.",
    },
    {
      title: "5. Operational Guidelines",
      icon: CheckCircle,
      content:
        "To maintain our high service standards, users must not bypass our secure payment systems or contact developers for direct hiring outside the platform. We reserve the right to suspend access to ensure the integrity of our vetted developer ecosystem.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-black text-white selection:bg-blue-500/30 overflow-x-hidden">
        {/* Animated Background Elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20">
          <div className="absolute top-[-5%] right-[-5%] w-[45%] h-[45%] bg-blue-600/15 blur-[100px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-5%] left-[-5%] w-[45%] h-[45%] bg-teal-600/15 blur-[100px] rounded-full animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-12">
          {/* Hero Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6 backdrop-blur-md">
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-blue-300 font-bold text-[10px] tracking-wider uppercase">
                Platform Terms
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
              Fair & Transparent{" "}
              <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Agreements
              </span>
            </h1>
            <p className="text-sm md:text-base text-gray-400 max-w-xl mx-auto font-medium leading-relaxed">
              Designed to protect both clients and creators. Our terms ensure
              that every project at NoDeskDeveloper is backed by security,
              ownership, and quality.
            </p>
          </div>

          {/* Terms Grid */}
          <div className="grid gap-4">
            {sections.map((section, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-0.5 bg-linear-to-br from-blue-500/10 to-teal-500/10 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000" />
                <div className="relative bg-black/40 backdrop-blur-3xl p-6 md:p-10 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="size-12 rounded-xl bg-linear-to-br from-blue-600/20 to-teal-600/20 flex items-center justify-center shrink-0 border border-white/10 shadow-inner group-hover:scale-105 transition-transform duration-500">
                      <section.icon className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h2 className="text-lg md:text-xl font-bold mb-3 text-white">
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

          {/* Trust CTA Section */}
          <div className="mt-20">
            <div className="relative p-0.5 rounded-[32px] bg-linear-to-r from-blue-500/20 via-teal-500/20 to-blue-500/20 overflow-hidden">
              <div className="relative bg-black/90 backdrop-blur-2xl px-6 py-12 md:py-16 rounded-[30px] text-center">
                <div className="size-14 bg-linear-to-br from-blue-600 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-8 rotate-3 shadow-[0_0_40px_-10px_rgba(37,99,235,0.4)]">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl md:text-5xl font-black mb-4 text-white leading-tight">
                  Ready for Secure <br className="hidden md:block" />{" "}
                  Development?
                </h3>
                <p className="text-base text-gray-400 mb-10 max-w-xl mx-auto font-medium">
                  Join hundreds of startups and enterprises that trust our
                  milestone-based hiring model for their mission-critical
                  projects.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="group px-8 py-4 bg-white text-black rounded-xl font-bold text-base flex items-center justify-center gap-2 hover:bg-blue-50 transition-all hover:scale-105 shadow-2xl shadow-white/5"
                  >
                    Start Your Project
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="https://wa.me/919690170502"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-green-600/10 border border-green-500/20 text-green-400 rounded-xl font-bold text-base hover:bg-green-600 hover:text-white transition-all flex items-center justify-center gap-2"
                  >
                    WhatsApp Consult
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
