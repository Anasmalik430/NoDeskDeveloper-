"use client";

import { createContext, useState, useContext, useEffect } from "react";
import { API_BASE } from "@/lib/api";
import { Boxes, Plus } from "lucide-react";

const SoftwareContext = createContext();

export const useSoftwareModal = () => useContext(SoftwareContext);

export default function SoftwaresLayout({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [softwaresCount, setSoftwaresCount] = useState(0);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const res = await fetch(`${API_BASE}/projects`);
        const result = await res.json();
        if (result.success) {
          setSoftwaresCount(result.data.length);
        }
      } catch (error) {
        console.error("Error fetching softwares count:", error);
      }
    };
    fetchCount();
  }, []);

  return (
    <SoftwareContext.Provider value={{ isModalOpen, setIsModalOpen }}>
      <div className="min-h-screen bg-black text-white p-4 md:p-8 lg:p-12 pb-0">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <h1 className="text-3xl md:text-5xl pb-4 font-black bg-linear-to-r from-emerald-400 via-teal-400 to-blue-400 bg-clip-text text-transparent tracking-tighter">
                Ready-made Softwares
              </h1>
              {/* <p className="text-gray-400 text-xs md:text-base max-w-md font-medium">
                Manage your high-quality pre-built software solutions and enterprise assets.
              </p> */}
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <div className="px-4 py-2.5 bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-2xl flex items-center gap-3 shadow-2xl">
                <div className="p-1.5 bg-emerald-500/10 rounded-lg shrink-0">
                  <Boxes className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] uppercase tracking-widest text-gray-500 font-bold">Catalogue</p>
                  <p className="text-lg font-black text-white leading-none">
                    {softwaresCount} <span className="text-[10px] font-medium text-gray-400 ml-1 italic">assets</span>
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="group cursor-pointer flex items-center justify-center gap-3 px-5 py-3.5 bg-linear-to-r from-emerald-500 to-teal-500 text-white font-black rounded-2xl shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <div className="p-1 bg-white/20 rounded-lg group-hover:rotate-90 transition-transform duration-500 shrink-0">
                  <Plus className="w-4 h-4" />
                </div>
                <span className="uppercase tracking-wider text-xs">Add Software</span>
              </button>
            </div>
          </div>

          {/* Separator */}
          <div className="h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <main className="mt-8 md:mt-12">
          {children}
        </main>
      </div>
    </SoftwareContext.Provider>
  );
}