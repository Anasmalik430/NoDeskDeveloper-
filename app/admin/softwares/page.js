"use client";
import { useEffect, useState } from "react";
import { API_BASE } from "@/lib/api";
import SoftwareCard from "@/components/AdminPanel/SoftwareCard";
import AddSoftwareModal from "@/components/Modals/AddSoftwareModal";
import { useSoftwareModal } from "./layout";
import { Boxes, Package, Plus, Loader2 } from "lucide-react";

export default function AllSoftwaresPage() {
  const [softwares, setSoftwares] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isModalOpen, setIsModalOpen } = useSoftwareModal();

  useEffect(() => {
    const fetchSoftwares = async () => {
      try {
        const res = await fetch(`${API_BASE}/projects`);
        const result = await res.json();
        if (result.success) {
          setSoftwares(result.data);
        }
      } catch (error) {
        console.error("Error fetching softwares:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSoftwares();
  }, []);

  const handleAddSoftware = async (newSoftware) => {
    try {
      const res = await fetch(`${API_BASE}/add-project`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newSoftware),
      });

      const result = await res.json();

      if (result.success) {
        setSoftwares((prev) => [result.data, ...prev]);
        setIsModalOpen(false);
      } else {
        alert("Failed: " + result.message);
      }
    } catch (error) {
      alert("Network error");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <Loader2 className="w-12 h-12 text-emerald-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="pb-24 lg:pb-12">
      <div className="space-y-8 md:space-y-12">
        {/* Grid Section */}
        {softwares.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 md:py-32 px-6 space-y-6 bg-white/[0.02] rounded-3xl border border-dashed border-white/10 backdrop-blur-xl">
            <div className="p-5 bg-emerald-500/5 rounded-full ring-1 ring-emerald-500/20">
              <Package className="w-12 h-12 text-emerald-500/40" />
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-xl md:text-2xl font-bold text-white">No software products yet</h3>
              <p className="text-gray-500 text-sm max-w-[240px] md:max-w-xs mx-auto">Start populate your software inventory by adding your first premium project.</p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-emerald-400 font-bold hover:text-emerald-300 transition-colors uppercase tracking-widest text-[10px] py-2.5 px-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20"
            >
              + Launch First Software
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {softwares.map((software) => (
              <SoftwareCard key={software._id} software={software} />
            ))}
          </div>
        )}
      </div>

      <AddSoftwareModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddSoftware}
      />
    </div>
  );
}