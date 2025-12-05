"use client";

import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";

export default function Tutorials() {
  const tutorials = [
    {
      title: "How to Hire a Developer Under ₹1000/hr in 2025",
      desc: "Step-by-step guide to finding top talent without breaking the bank",
      time: "5 min read",
      tag: "Hiring"
    },
    {
      title: "Deploy Your Next.js App in Under 10 Minutes",
      desc: "The fastest way to go live with Vercel + custom domain + SSL",
      time: "4 min read",
      tag: "Deployment"
    },
    {
      title: "Build a Complete E-commerce Store with MERN in 2 Hours",
      desc: "Ready-made template + customization tips included",
      time: "8 min read",
      tag: "Full Stack"
    },
    {
      title: "Why Escrow Beats Direct Payment Every Time",
      desc: "Real client stories + how we saved ₹12L in disputes last year",
      time: "6 min read",
      tag: "Trust & Safety"
    },
    {
      title: "Turn Your Idea into MVP in Just 7 Days",
      desc: "Our exact process used by 200+ startups",
      time: "7 min read",
      tag: "Startup"
    },
    {
      title: "Best Tech Stack for Indian Startups in 2025",
      desc: "Next.js + Node + Firebase + Tailwind — the winning combo",
      time: "5 min read",
      tag: "Tech Stack"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 ">
        
        {/* Header */}
        <div className="mb-16 sm:mb-24">
          <div className="inline-block px-3 py-1 mb-6 text-xs font-medium text-blue-400 bg-blue-500/10 rounded-full border border-blue-500/20">
            Learn · Build · Grow
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-4">
            Tutorials
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl">
            Short, actionable guides to help you launch faster and hire smarter
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16 sm:mb-24">
          {tutorials.map((tut, index) => (
            <div
              key={index}
              className="group block p-6 h-fit cursor-pointer sm:p-8 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-zinc-700 transition-all duration-300"
            >
              <div className="inline-block px-3 py-1 mb-4 text-xs font-medium text-zinc-400 bg-zinc-800/50 rounded-full">
                {tut.tag}
              </div>

              <h3 className="text-xl sm:text-xl line-clamp-2 font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                {tut.title}
              </h3>

              <p className="text-sm sm:text-base text-gray-400 mb-6 leading-relaxed">
                {tut.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mb-16">
          <p className="text-gray-400 mb-6">
            New tutorials every week — never miss an update
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-medium transition-colors"
          >
            Request Support
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}