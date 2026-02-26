"use client";

import Link from "next/link";
import {
  ChevronRight,
  FileText,
  Code2,
  Zap,
  Shield,
  Globe,
} from "lucide-react";

export default function Documentation() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "NoDeskDeveloper Documentation",
    "description": "Comprehensive guide for clients and developers on project lifecycle and deployment.",
    "publisher": {
      "@type": "Organization",
      "name": "NoDeskDeveloper",
    },
  };

  const sections = [
    {
      title: "Onboarding & Hiring",
      icon: Zap,
      items: [
        {
          name: "Project Discovery",
          href: "#discovery",
          desc: "How we analyze your requirements and goals.",
        },
        {
          name: "Choosing the Right Stack",
          href: "#tech-stack",
          desc: "Next.js, Flutter, React Native, or Custom PHP.",
        },
        {
          name: "Hiring Models",
          href: "#hiring",
          desc: "Fixed cost vs Dedicated developer allocation.",
        },
        {
          name: "NDA & IP Protection",
          href: "#legal",
          desc: "Your code property and data stay with you.",
        },
      ],
    },
    {
      title: "Project Lifecycle",
      icon: Shield,
      items: [
        {
          name: "Figma & UI Review",
          href: "#design",
          desc: "Approval cycle for screens and design system.",
        },
        {
          name: "Agile Sprints",
          href: "#sprints",
          desc: "How we manage development in 2-week blocks.",
        },
        {
          name: "QA & Bug Tracking",
          href: "#qa",
          desc: "Testing on real devices and browser-stack.",
        },
        {
          name: "Beta Testing",
          href: "#beta",
          desc: "User acceptance testing (UAT) process.",
        },
      ],
    },
    {
      title: "Deployment Guide",
      icon: FileText,
      items: [
        {
          name: "Server Setup (VPS)",
          href: "#server",
          desc: "Configuring DigitalOcean, AWS, or Hostinger.",
        },
        {
          name: "SSL & Domain Mapping",
          href: "#ssl",
          desc: "Securing your site with HTTPS (Auto-renew).",
        },
        {
          name: "Database Migration",
          href: "#db",
          desc: "Moving from local to production safely.",
        },
        {
          name: "CI/CD Setup",
          href: "#cicd",
          desc: "Automatic updates via GitHub/Vercel.",
        },
      ],
    },
    {
      title: "Maintenance & SLAs",
      icon: Code2,
      items: [
        {
          name: "Post-Launch Support",
          href: "#support",
          desc: "30 days of free bug fixing after handover.",
        },
        {
          name: "Server Monitoring",
          href: "#monitoring",
          desc: "Uptime tracking and performance checks.",
        },
        {
          name: "Security Patches",
          href: "#security",
          desc: "Regular updates for frameworks and plugins.",
        },
        {
          name: "Backup Rotation",
          href: "#backup",
          desc: "Daily automated database and code backups.",
        },
      ],
    },
    {
      title: "Agency Workflow",
      icon: Globe,
      items: [
        {
          name: "Communication Tools",
          href: "#communication",
          desc: "Access to our Slack/WhatsApp channels.",
        },
        {
          name: "Client Dashboard",
          href: "#dashboard",
          desc: "Real-time task tracking and time logging.",
        },
        {
          name: "Milestone Payments",
          href: "#payments",
          desc: "Transparent invoicing via Stripe or Razorpay.",
        },
      ],
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-black text-white">
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
          {/* Clean Hero */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Documentation
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to succeed on NoDeskDeveloper — clear, simple,
              no fluff.
            </p>
          </div>

          {/* Minimal Grid Layout */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sections.map((section, idx) => (
              <div
                key={idx}
                className="group bg-white/3 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:bg-white/5 hover:border-blue-500/30 transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 hidden md:block bg-linear-to-br from-blue-600 to-teal-600 rounded-2xl shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <section.icon className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    {section.title}
                  </h2>
                </div>

                <ul className="space-y-5">
                  {section.items.map((item, i) => (
                    <li key={i}>
                      <Link
                        href={item.href}
                        className="group/item flex items-start gap-4 p-4 -m-4 rounded-2xl hover:bg-white/5 transition-all duration-300"
                      >
                        <ChevronRight className="w-5 h-5 text-blue-400 mt-0.5 group-hover/item:translate-x-2 transition-transform" />
                        <div>
                          <h3 className="font-semibold text-white group-hover/item:text-blue-300 transition-colors">
                            {item.name}
                          </h3>
                          <p className="text-sm text-gray-400 mt-1">
                            {item.desc}
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 text-center">
            <div className="inline-block bg-linear-to-r from-blue-600/10 to-teal-600/10 border border-blue-500/20 rounded-3xl p-10 backdrop-blur-xl">
              <h3 className="text-2xl font-bold mb-4">
                Can’t find what you’re looking for?
              </h3>
              <p className="text-gray-400 mb-8">
                Our team is here to help — 24/7 support via WhatsApp or email
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-linear-to-r from-blue-600 to-teal-600 rounded-xl font-bold hover:scale-105 transition-all shadow-xl"
                >
                  Open Support Ticket
                </Link>
                <a
                  href="https://wa.me/919690170502"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-green-600 rounded-xl font-bold hover:scale-105 transition-all flex items-center justify-center gap-3"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                  WhatsApp Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
