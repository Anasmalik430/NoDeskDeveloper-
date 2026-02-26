"use client";

import Link from "next/link";
import {
  Shield,
  Code2,
  Boxes,
  Palette,
  Mail,
  ArrowRight,
  Gavel,
} from "lucide-react";

export default function Licenses() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Licenses & Attributions - NoDeskDeveloper",
    description:
      "Technical attributions and legal licensing information for NoDeskDeveloper projects and platform.",
    publisher: {
      "@type": "Organization",
      name: "NoDeskDeveloper",
    },
  };

  const sections = [
    {
      title: "1. Commercial Project Licensing",
      icon: Gavel,
      content:
        "For all custom development (Freelance Projects), the Intellectual Property (IP) and full source code ownership are transferred to the client upon final milestone payment. We provide a 'Work-for-Hire' agreement as standard.",
    },
    {
      title: "2. Ready-Made Software",
      icon: Boxes,
      content:
        "Software products sold in our store (Scripts/Templates) are granted under a Single-Site Commercial License. You may modify the code for your use, but redistribution, reselling, or sub-licensing to third parties is strictly prohibited.",
    },
    {
      title: "3. Technical Infrastructure",
      icon: Code2,
      content:
        "Our platform is built using globally trusted open-source frameworks: Next.js (MIT), Tailwind CSS (MIT), and Lucide React (ISC). We comply with all upstream licenses and maintain attribution for core dependencies.",
    },
    {
      title: "4. Creative & UI Assets",
      icon: Palette,
      palette: true,
      content:
        "Visual components are designed with premium typography (Outfit/Inter - Google Fonts) and icons. High-fidelity images are either AI-generated (proprietary) or acquired via Unsplash/Pexels under their respective creative licenses.",
    },
    {
      title: "5. Third-Party Services",
      icon: Shield,
      content:
        "Integrations such as PhonePe, Cloudinary, and Vercel are operated under their standard commercial terms of service. NoDeskDeveloper does not claim ownership over these third-party intellectual properties.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-black text-white selection:bg-blue-500/30 overflow-x-hidden">
        {/* Subtle Background Glow */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-teal-600/10 blur-[120px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-12">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6 backdrop-blur-md">
              <Shield className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-blue-300 font-bold text-[10px] tracking-wider uppercase">
                Compliance & IP
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
              Honest <br className="md:hidden" />{" "}
              <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Ownership
              </span>
            </h1>
            <p className="text-sm md:text-base text-gray-400 max-w-xl mx-auto font-medium leading-relaxed">
              Clear definitions of how your code and projects are licensed. We
              maintain full transparency regarding our technical stack and your
              commercial rights.
            </p>
          </div>

          {/* Licenses Grid */}
          <div className="grid gap-4">
            {sections.map((section, index) => (
              <div
                key={index}
                className="group relative p-px rounded-2xl overflow-hidden transition-all duration-500"
              >
                <div className="absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-white/5 opacity-40" />
                <div className="relative bg-black/60 backdrop-blur-2xl p-6 md:p-8 rounded-[15px] border border-white/5">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="size-11 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-blue-600/10 transition-colors">
                      <section.icon className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                    </div>
                    <div>
                      <h2 className="text-lg md:text-xl font-bold mb-2 text-white">
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

          {/* Contact Section */}
          <div className="mt-16">
            <div className="relative p-8 md:p-12 rounded-[32px] overflow-hidden text-center border border-blue-500/20 bg-linear-to-b from-blue-600/5 to-transparent backdrop-blur-sm">
              <div className="size-14 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-blue-500/40">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black mb-4 text-white">
                Legal Query?
              </h3>
              <p className="text-base text-gray-400 mb-8 max-w-lg mx-auto font-medium">
                Need a specific license agreement or have questions about IP
                transfer for your custom project?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="group px-8 py-4 bg-white text-black rounded-xl font-bold text-base flex items-center justify-center gap-2 hover:bg-blue-50 transition-all shadow-xl shadow-white/5"
                >
                  Consult Legal
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
