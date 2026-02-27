"use client";
import { useEffect, useState } from "react";
import DevCard from "@/components/AdminPanel/DevCard";
import AddDeveloperModal from "@/components/Modals/AddDeveloperModal";
import { API_BASE } from "@/lib/api";
import { useDeveloperModal } from "./layout";
import { Users, UserPlus, Loader2, Sparkles } from "lucide-react";

export default function AllDevelopersPage() {
  const [developers, setDevelopers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isModalOpen, setIsModalOpen } = useDeveloperModal();

  useEffect(() => {
    const fetchDevelopers = async () => {
      try {
        const res = await fetch(`${API_BASE}/developers`, {
          cache: "no-store",
        });
        const result = await res.json();

        if (result.success) {
          setDevelopers(result.data);
        }
      } catch (error) {
        console.error("Error fetching developers:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDevelopers();
  }, []);

  const handleAddDeveloper = async (newDev) => {
    try {
      const res = await fetch(`${API_BASE}/add-developer`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newDev),
      });

      const result = await res.json();

      if (result.success) {
        setDevelopers((prev) => [result.data, ...prev]);
        setIsModalOpen(false);
        // console.log("Developer added successfully:", result.data);
      } else {
        console.error("Failed to add developer:", result.message);
      }
    } catch (error) {
      console.error("Error adding developer:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <Loader2 className="w-12 h-12 text-blue-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="pb-24 lg:pb-12">
      <div className="space-y-8 md:space-y-12">
        {/* Grid Section */}
        {developers.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 md:py-32 px-6 space-y-6 bg-white/[0.02] rounded-3xl border border-dashed border-white/10 backdrop-blur-xl">
            <div className="p-5 bg-blue-500/5 rounded-full ring-1 ring-blue-500/20">
              <Sparkles className="w-12 h-12 text-blue-500/40" />
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-xl md:text-2xl font-bold text-white">No talent onboarded</h3>
              <p className="text-gray-500 text-sm max-w-[240px] md:max-w-xs mx-auto">Build your elite network by onboarding the first developer to your portfolio.</p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-blue-400 font-bold hover:text-blue-300 transition-colors uppercase tracking-widest text-[10px] py-2.5 px-6 rounded-xl bg-blue-500/10 border border-blue-500/20"
            >
              + Start Onboarding
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {developers.map((dev) => (
              <DevCard key={dev._id} developer={dev} />
            ))}
          </div>
        )}
      </div>

      <AddDeveloperModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddDeveloper}
      />
    </div>
  );
}