"use client";

import Link from "next/link";
import { Shield, Check, Mail } from "lucide-react";

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "Information We Collect",
      items: [
        "Name, email, and phone when you contact us or post a project",
        "Project details and communication history",
        "Payment information (processed securely via escrow)",
        "Anonymous usage data (IP, browser, device type)"
      ]
    },
    {
      title: "How We Use Your Data",
      items: [
        "To connect you with verified developers",
        "To facilitate secure payments and project delivery",
        "To improve our platform and services",
        "To send important updates (you can opt out anytime)"
      ]
    },
    {
      title: "Data Security",
      items: [
        "All connections are encrypted with HTTPS",
        "Payment data never touches our servers",
        "Regular security audits and monitoring",
        "We never sell or rent your personal information"
      ]
    },
    {
      title: "Your Rights",
      items: [
        "Access or delete your data at any time",
        "Opt out of marketing emails instantly",
        "Request a copy of your data",
        "Withdraw consent whenever you want"
      ]
    }
  ];

  return (
    <>
      {/* Full-screen minimal hero */}
      <div className="min-h-screen bg-black text-white flex flex-col">

        {/* Main Content */}
        <div className="relative z-10  max-w-7xl mx-auto px-6 py-16 flex-1">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-5 py-2.5 mb-8">
              <Shield className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">Privacy Policy</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
              Your Privacy, <span className="bg-linear-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Protected</span>
            </h1>
          </div>

          {/* Core Sections */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl hover:bg-white/8 transition-all duration-300"
              >
                <h2 className="text-2xl font-bold mb-6 text-white">{section.title}</h2>
                <ul className="space-y-4">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                      <span className="text-gray-300 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Final Note */}
          <div className="mt-16 text-center">
            <p className="text-gray-400 mb-8">
              We respect your privacy and work hard to earn your trust every day.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-blue-600 to-teal-600 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
            >
              <Mail className="w-5 h-5" />
              Contact Us for Privacy Concerns
            </Link>
          </div>

          
        </div>
      </div>
    </>
  );
}