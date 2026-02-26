"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";
import Link from "next/link";
import { faqs } from "@/lib/faqData";

export default function FAQComponent() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/5 border border-blue-500/20 rounded-full px-4 py-2 mb-6 backdrop-blur-md">
            <HelpCircle className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 font-bold text-xs tracking-wider uppercase">
              Support Center
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            Answers for Your{" "}
            <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Tech Queries
            </span>
          </h1>
          <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
            Clear, transparent information about our development process, hiring
            models, and service standards.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="grid gap-3 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`group border transition-all duration-500 rounded-2xl overflow-hidden backdrop-blur-xl ${
                openIndex === index
                  ? "bg-white/10 border-blue-500/30"
                  : "bg-white/5 border-white/10 hover:border-white/20"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 cursor-pointer text-left flex items-center justify-between gap-4 outline-none"
              >
                <span
                  className={`text-base md:text-lg font-bold transition-all duration-300 ${
                    openIndex === index
                      ? "text-blue-300"
                      : "text-white/90 group-hover:text-white"
                  }`}
                >
                  {faq.q}
                </span>
                <div
                  className={`flex-shrink-0 size-8 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 ${
                    openIndex === index
                      ? "bg-blue-600 rotate-180 border-transparent shadow-lg shadow-blue-500/40"
                      : "bg-white/5"
                  }`}
                >
                  <ChevronDown
                    className={`w-4 h-4 transition-colors ${openIndex === index ? "text-white" : "text-blue-400"}`}
                  />
                </div>
              </button>

              <div
                className={`transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                  openIndex === index
                    ? "max-h-[300px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 pt-0 border-t border-white/5">
                  <p className="text-gray-400 leading-relaxed text-sm md:text-base font-medium pt-4">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support Container */}
        <div className="mt-24">
          <div className="relative p-8 md:p-16 rounded-[40px] overflow-hidden text-center border border-blue-500/20 bg-linear-to-b from-blue-600/5 to-transparent backdrop-blur-sm">
            <div className="size-16 bg-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-blue-500/40">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl md:text-5xl font-black mb-6 text-white">
              Still Curious?
            </h3>
            <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto font-medium">
              Our strategic consultants are standing by to guide you through
              complex technical requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group px-10 py-5 bg-white text-black rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-blue-50 transition-all shadow-xl shadow-white/5"
              >
                Contact Experts
              </Link>
              <a
                href="https://wa.me/919690170502"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-10 py-5 bg-green-600/10 border border-green-500/20 text-green-400 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-green-600 hover:text-white transition-all shadow-xl shadow-green-500/10"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                WhatsApp Consult
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
