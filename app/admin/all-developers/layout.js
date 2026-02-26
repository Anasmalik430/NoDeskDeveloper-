"use client";

import { createContext, useState, useContext, useEffect } from "react";
import { API_BASE } from "@/lib/api";
import { Users, UserPlus } from "lucide-react";

const DeveloperContext = createContext();

export const useDeveloperModal = () => useContext(DeveloperContext);

export default function DevelopersLayout({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [developersCount, setDevelopersCount] = useState(0);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const res = await fetch(`${API_BASE}/developers`);
        const result = await res.json();
        if (result.success) {
          setDevelopersCount(result.data.length);
        }
      } catch (error) {
        console.error("Error fetching developers count:", error);
      }
    };
    fetchCount();
  }, []);

  return (
    <DeveloperContext.Provider value={{ isModalOpen, setIsModalOpen }}>
      <div className="min-h-screen bg-black text-white p-4 md:p-8 lg:p-12 pb-0">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <h1 className="text-3xl pb-3 md:text-5xl font-black bg-linear-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent tracking-tighter">
                Talent Network
              </h1>
              
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <div className="px-4 py-2.5 bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-2xl flex items-center gap-3 shadow-2xl">
                <div className="p-1.5 bg-blue-500/10 rounded-lg shrink-0">
                  <Users className="w-4 h-4 text-blue-400" />
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] uppercase tracking-widest text-gray-500 font-bold">Community</p>
                  <p className="text-lg font-black text-white leading-none">
                    {developersCount} <span className="text-[10px] font-medium text-gray-400 ml-1 italic">devs</span>
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="group cursor-pointer flex items-center justify-center gap-3 px-5 py-3.5 bg-linear-to-r from-blue-500 to-indigo-500 text-white font-black rounded-2xl shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <div className="p-1 bg-white/20 rounded-lg group-hover:rotate-12 transition-transform duration-500 shrink-0">
                  <UserPlus className="w-4 h-4" />
                </div>
                <span className="uppercase tracking-wider text-xs">Onboard Talent</span>
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
    </DeveloperContext.Provider>
  );
}