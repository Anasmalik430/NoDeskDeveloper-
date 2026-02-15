"use client";

import Link from "next/link";
import { FileCheck2, Shield, Clock, Check } from "lucide-react";

export default function TermsOfService() {
  const sections = [
    {
      title: "Acceptance of Terms",
      items: [
        "By using NoDeskDeveloper.com, you agree to these Terms of Service",
        "We may update these terms at any time — continued use means acceptance",
        "You must be 18+ years old to use our platform",
      ],
    },
    {
      title: "Services Provided",
      items: [
        "We connect clients with vetted freelance developers",
        "We offer ready-made software products with lifetime updates on select plans",
        "All payments are held in escrow until milestone approval",
        "Delivery timelines are estimates — not guaranteed unless explicitly agreed",
      ],
    },
    {
      title: "Payment & Refunds",
      items: [
        "Clients release payment only when satisfied with delivered work",
        "50% advance required to start any custom project",
        "Ready-made software: no refunds after download/access is granted",
        "Disputes resolved fairly via our internal resolution team",
      ],
    },
    {
      title: "Intellectual Property",
      items: [
        "Client owns full rights to work upon final payment",
        "Ready-made software is sold under a non-exclusive license",
        "You may not resell or redistribute our ready-made products",
        "We retain the right to showcase completed projects in our portfolio",
      ],
    },
    {
      title: "Prohibited Activities",
      items: [
        "No harassment, spam, or fraudulent projects",
        "No reverse engineering of ready-made software",
        "No attempts to bypass escrow or direct payment outside platform",
        "Violation may result in account suspension without refund",
      ],
    },
    {
      title: "Limitation of Liability",
      items: [
        "We are a marketplace — not an employer of developers",
        "Maximum liability limited to the project value",
        "No guarantee of results, uptime, or profitability",
        "We are not responsible for developer-client disputes beyond escrow",
      ],
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-black text-white flex flex-col">
        {/* Main Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 lg:py-32 flex-1">
          {/* Hero */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-5 py-2.5 mb-8">
              <FileCheck2 className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">
                Terms of Service
              </span>
            </div>
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-4">
              Clear. Fair.{" "}
              <span className="bg-linear-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Transparent
              </span>
            </h1>
            {/* <p className="text-gray-400 text-lg">
              Last updated: January 05, 2026
            </p> */}
          </div>

          {/* Sections */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div
                key={index}
                className="group bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl hover:bg-white/8 transition-all duration-400"
              >
                <div className="flex items-start gap-5">
                  <div className="p-3 hidden md:block bg-linear-to-br from-blue-600 to-teal-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {index === 0 && <Shield className="w-6 h-6 text-white" />}
                    {index === 1 && <Clock className="w-6 h-6 text-white" />}
                    {index > 1 && <Check className="w-6 h-6 text-white" />}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-6 text-white">
                      {section.title}
                    </h2>
                    <ul className="space-y-4">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                          <span className="text-gray-300 leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Closing */}
          <div className="mt-16 text-center">
            <p className="text-gray-400 text-lg mb-8">
              We built this platform to make hiring developers simple, fast, and
              trustworthy.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-blue-600 to-teal-600 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/30"
            >
              Have a Question?
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
