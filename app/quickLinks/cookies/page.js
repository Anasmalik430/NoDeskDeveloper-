"use client";

import Link from "next/link";
import {
  Cookie,
  Shield,
  EyeOff,
  Settings,
  Info,
  Mail,
  ArrowRight,
} from "lucide-react";

export default function CookiePolicy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Cookie Policy - NoDeskDeveloper",
    description:
      "Information about how NoDeskDeveloper uses cookies to enhance user experience while respecting privacy.",
    publisher: {
      "@type": "Organization",
      name: "NoDeskDeveloper",
    },
  };

  const sections = [
    {
      title: "1. What are Cookies?",
      icon: Info,
      content:
        "Cookies are small data packets stored on your device that help us recognize you across sessions. They are essential for remembering your preferences and providing a seamless technical workflow during project management.",
    },
    {
      title: "2. Essential Cookies",
      icon: Settings,
      content:
        "These are non-negotiable for site functionality. They handle secure logins, form submissions, and maintain your session state. Without these, our platform cannot provide its core services to you.",
    },
    {
      title: "3. Privacy-First Analytics",
      icon: EyeOff,
      content:
        "We use anonymized analytics to measure site performance and page load speeds. Importantly, we do not use tracking pixels or intrusive marketing cookies. Your personal identity remains hidden from all analytical tools we employ.",
    },
    {
      title: "4. Third-Party Interactions",
      icon: Shield,
      content:
        "Our payment gateways (PhonePe/Stripe) may set secure cookies to manage transaction security. These are governed by their respective privacy policies. NoDeskDeveloper does not share your data with third-party advertisers.",
    },
    {
      title: "5. Managing Preferences",
      icon: Cookie,
      content:
        "You have full control. You can clear or disable cookies via your browser settings at any time. Note that disabling essential cookies may impact the performance of our escrow and project matching features.",
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
          <div className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] bg-blue-600/15 blur-[100px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-5%] right-[-5%] w-[40%] h-[40%] bg-teal-600/15 blur-[100px] rounded-full animate-pulse delay-700" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-12">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6 backdrop-blur-md">
              <Cookie className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-blue-300 font-bold text-[10px] tracking-wider uppercase">
                Efficiency Policy
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
              Cookie{" "}
              <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Transparency
              </span>
            </h1>
            <p className="text-sm md:text-base text-gray-400 max-w-xl mx-auto font-medium leading-relaxed">
              We use minimal cookies to ensure your experience on
              NoDeskDeveloper is fast, secure, and privacy-respecting. No
              trackers, no nonsense.
            </p>
          </div>

          {/* Sections Grid */}
          <div className="grid gap-4">
            {sections.map((section, index) => (
              <div
                key={index}
                className="group relative p-px rounded-2xl overflow-hidden transition-all duration-500"
              >
                <div className="absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-white/5 opacity-50" />
                <div className="relative bg-black/60 backdrop-blur-2xl p-6 md:p-8 rounded-[15px] border border-white/5">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="size-11 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-blue-600/10 transition-colors border border-white/10 text-blue-400">
                      <section.icon className="w-5 h-5 group-hover:text-blue-300 transition-colors" />
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
              <h3 className="text-2xl md:text-4xl font-black mb-4 text-white leading-tight">
                Privacy Concerns?
              </h3>
              <p className="text-base text-gray-400 mb-8 max-w-lg mx-auto font-medium">
                If you have questions about how we handle cookies or data
                tracking, our support team is available to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="group px-8 py-4 bg-white text-black rounded-xl font-bold text-base flex items-center justify-center gap-2 hover:bg-blue-50 transition-all shadow-xl shadow-white/5"
                >
                  Contact Support
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
    </>
  );
}
