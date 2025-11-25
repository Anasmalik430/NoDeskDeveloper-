"use client";
import { useState } from "react";
import {
  FileText,
  Calendar,
  DollarSign,
  Layers,
  AlertTriangle,
  Pencil,
  BarChart3,
  FileCheck,
  Phone,
  ArrowRight,
  ClipboardList,
} from "lucide-react";
import EstimateModal from "@/components/Modals/EstimateModal";

export default function ProjectEstimations() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const deliverables = [
    { icon: Calendar, label: "Timeline" },
    { icon: DollarSign, label: "Cost" },
    { icon: Layers, label: "Scope" },
    { icon: AlertTriangle, label: "Risks" },
  ];

  const process = [
    { icon: FileText, label: "Brief" },
    { icon: BarChart3, label: "Audit" },
    { icon: FileCheck, label: "Estimate" },
    { icon: Phone, label: "Call" },
  ];

  const bottomTabs = [
    { icon: Pencil, label: "Complexity" },
    { icon: ClipboardList, label: "Breakdown" },
    { icon: AlertTriangle, label: "Assumptions" },
  ];

  return (
    <>
      <div className="min-h-screen bg-linear-to-b from-black via-gray-950 to-black py-12 px-4 lg:px-8 relative overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.2s" }} />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="bg-linear-to-b from-white/10 to-white/5 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-8 lg:p-12 shadow-2xl">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-10">
              <div className="flex items-center gap-4">
                <ClipboardList className="w-9 h-9 text-blue-400" strokeWidth={2.5} />
                <h1 className="text-3xl lg:text-4xl font-black bg-linear-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
                  Project Estimations
                </h1>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="group relative px-8 py-4 bg-linear-to-r from-blue-600 via-sky-500 to-teal-600 rounded-2xl font-bold text-white overflow-hidden shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
              >
                <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative flex items-center gap-2">
                  Get Estimate
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>

            {/* Deliverables */}
            <div className="grid lg:grid-cols-2 gap-8 mb-10">
              <div className="bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-linear-to-r from-blue-500 via-sky-500 to-teal-500 rounded-lg">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Deliverables</h3>
                </div>
                <div className="flex flex-wrap gap-4">
                  {deliverables.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="px-6 py-3 bg-white/10 rounded-full text-gray-300 flex items-center gap-2 border border-blue-500/20">
                        <Icon className="w-5 h-5 text-blue-400" />
                        {item.label}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Process */}
              <div className="bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-linear-to-r from-teal-500 via-sky-500 to-blue-500 rounded-lg">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Process</h3>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {process.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="p-4 bg-white/10 rounded-xl text-center border border-blue-500/20">
                        <Icon className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                        <p className="text-sm text-gray-300">{item.label}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Bottom Tabs */}
            <div className="flex flex-wrap gap-4 justify-center">
              {bottomTabs.map((item, i) => {
                const Icon = item.icon;
                return (
                  <button
                    key={i}
                    className="px-6 py-3 bg-linear-to-r from-blue-700/50 to-sky-700/50 backdrop-blur-sm border border-blue-500/30 rounded-full text-white font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center gap-2"
                  >
                    <Icon className="w-5 h-5 text-blue-300" />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && <EstimateModal onClose={() => setIsModalOpen(false)} />}
      </div>
    </>
  );
}