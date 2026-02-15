"use client";

import Link from "next/link";
import { Cookie, Check, Shield, Settings } from "lucide-react";

export default function CookiePolicy() {
  const sections = [
    {
      title: "What Are Cookies?",
      items: [
        "Cookies are tiny text files stored on your device",
        "They help us remember your preferences and improve your experience",
        "We use both session cookies (temporary) and persistent cookies",
      ],
    },
    {
      title: "Types of Cookies We Use",
      items: [
        "Essential Cookies — Required for login, forms, and basic site functions",
        "Analytics Cookies — Help us understand how visitors use our site (fully anonymized)",
        "Performance Cookies — Measure page load speed and errors",
        "No advertising or tracking cookies — We don’t run ads or sell your data",
      ],
    },
    {
      title: "How We Use Cookies",
      items: [
        "Keep you logged in during your session",
        "Remember your preferences (e.g., dark mode)",
        "Analyze traffic anonymously via Vercel Analytics & Umami (privacy-first)",
        "Improve site speed and fix bugs faster",
      ],
    },
    {
      title: "Your Control Over Cookies",
      items: [
        "You can disable cookies anytime in your browser settings",
        "Most features will still work without non-essential cookies",
        "Clearing cookies will log you out and reset preferences",
        "We respect “Do Not Track” (DNT) signals",
      ],
    },
    {
      title: "Third-Party Cookies",
      items: [
        "We don’t allow Google Ads, Facebook Pixel, or any marketing trackers",
        "Only privacy-respecting analytics (no personal data shared)",
        "Payment partners may set secure cookies during checkout — handled under their policies",
      ],
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-black text-white flex flex-col">

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-16 flex-1">
          {/* Hero */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-5 py-2.5 mb-8">
              <Cookie className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">
                Cookie Policy
              </span>
            </div>
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-4">
              No Nonsense.{" "}
              <span className="bg-linear-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                No Tracking.
              </span>
            </h1>
            <p className="text-gray-400 text-lg">
              Last updated: January 05, 2026
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div
                key={index}
                className="group bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl hover:bg-white/8 transition-all duration-400"
              >
                <div className="flex items-start gap-5">
                  <div className="p-3 bg-linear-to-br hidden md:block from-blue-600 to-teal-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {index === 0 && <Cookie className="w-6 h-6 text-white" />}
                    {index === 1 && <Settings className="w-6 h-6 text-white" />}
                    {index >= 2 && <Shield className="w-6 h-6 text-white" />}
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
              We use the bare minimum — only what’s needed to make your
              experience fast and smooth.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-blue-600 to-teal-600 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/30"
            >
              Questions? Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
