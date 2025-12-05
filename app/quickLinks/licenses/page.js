"use client";

import Link from "next/link";
import { FileText, Check, Shield, Globe } from "lucide-react";

export default function Licenses() {
  const licenses = [
    {
      name: "Lucide Icons",
      license: "ISC License",
      author: "Lucide Contributors",
      year: "2023–2025",
      link: "https://lucide.dev/license",
      description: "Beautiful & consistent icons used throughout the site"
    },
    {
      name: "Tailwind CSS",
      license: "MIT License",
      author: "Tailwind Labs",
      year: "2019–2025",
      link: "https://tailwindcss.com",
      description: "Utility-first CSS framework powering our design system"
    },
    {
      name: "Next.js",
      license: "MIT License",
      author: "Vercel Inc.",
      year: "2016–2025",
      link: "https://nextjs.org",
      description: "React framework for production-grade applications"
    },
    {
      name: "Vercel Analytics",
      license: "Proprietary (Privacy-First)",
      author: "Vercel Inc.",
      year: "2023–2025",
      link: "https://vercel.com/analytics",
      description: "Lightweight, privacy-respecting website analytics"
    },
    {
      name: "Umami Analytics (Self-hosted)",
      license: "MIT License",
      author: "Umami Community",
      year: "2020–2025",
      link: "https://umami.is",
      description: "Open-source, privacy-focused alternative to Google Analytics"
    },
    {
      name: "Cloudinary",
      license: "Commercial + Free Tier",
      author: "Cloudinary Ltd.",
      year: "2012–2025",
      link: "https://cloudinary.com",
      description: "Image & video management and delivery platform"
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-black text-white flex flex-col">
       
        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 flex-1">
          {/* Hero */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-5 py-2.5 mb-8">
              <FileText className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">Open Source & Licenses</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
              We Build on <span className="bg-linear-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Great Tools</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              NoDeskDeveloper is proudly built using modern, trusted, and open-source technologies.
            </p>
          </div>

          {/* Licenses Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {licenses.map((item, index) => (
              <div
                key={index}
                className="group bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl hover:bg-white/8 hover:border-blue-500/30 transition-all duration-400"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-linear-to-br from-blue-600 to-teal-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {index % 2 === 0 ? (
                      <Shield className="w-6 h-6 text-white" />
                    ) : (
                      <Globe className="w-6 h-6 text-white" />
                    )}
                  </div>
                  <span className="text-xs font-medium text-green-400 bg-green-400/10 px-3 py-1 rounded-full">
                    {item.license}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                <p className="text-sm text-gray-400 mb-3">
                  by {item.author} • {item.year}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                >
                  View License
                  <Check className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          {/* Final Note */}
          <div className="mt-16 text-center">
            <p className="text-gray-400 text-sm sm:text-lg max-w-3xl mx-auto">
              We believe in transparency, open-source values, and giving credit where it’s due.
              <br />
              Thank you to all the amazing creators and communities that make this possible.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}