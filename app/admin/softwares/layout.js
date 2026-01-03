"use client";

import { createContext, useState, useContext } from "react";

const SoftwareContext = createContext();

export const useSoftwareModal = () => useContext(SoftwareContext);

export default function SoftwaresLayout({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <SoftwareContext.Provider value={{ isModalOpen, setIsModalOpen }}>
      <div className="min-h-screen bg-black">
        {/* Header */}
        <div className="border-b border-white/15 backdrop-blur-xl bg-white/2 flex justify-between items-start md:items-center *:py-[22px] *:px-6">
          <div className="md:px-8">
            <h1 className="text-2xl md:text-3xl font-black bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              All Softwares
            </h1>
            <p className="text-gray-400 mt-1 text-xs md:text-sm flex">
              Manage <span className="hidden md:block px-1">and showcase </span> all
              ready-made projects
            </p>
          </div>

          <button onClick={() => setIsModalOpen(true)} className="md:px-8">
            <span className="text-sm md:text-sm tracking-wider px-6 py-3 bg-linear-to-r from-green-600 to-blue-600 hover:from-green-500 hover:to-blue-500 rounded-xl font-bold text-white shadow-lg transition flex items-center">
              Add <span className="hidden md:block pl-1">Software</span>
            </span>
          </button>
        </div>

        {children}
      </div>
    </SoftwareContext.Provider>
  );
}