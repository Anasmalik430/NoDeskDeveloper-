"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Code2, Link, Image, Tag, Loader2, IndianRupee } from "lucide-react";
import { API_BASE } from "@/lib/api";
import AddcodeNscriptModal from "@/components/Modals/AddcodeNscriptModal";

export default function AdminCodeNscriptPage() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  // Fetch function alag se banao taaki modal use kar sake
  const fetchCards = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/code-n-script-cards`);
      const data = await res.json();
      setCards(data.data || []);
    } catch (err) {
      console.error("Error loading products", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  // Modal success ke baad refresh + close
  const handleAddSuccess = () => {
    fetchCards(); // ye ab defined hai
    setIsModalOpen(false); // extra safety
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <Loader2 className="w-12 h-12 text-teal-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black/95  ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-0 px-9 py-6">
          <div className="space-y-1.5">
            <h1 className="text-xl lg:text-3xl font-bold text-white tracking-tight">
              Code & Script Products
            </h1>
            <p className="text-slate-400 text-xs">
              Manage your digital products and scripts
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg backdrop-blur-sm">
              <p className="text-sm text-slate-400">
                Total Products:{" "}
                <span className="text-teal-400 font-semibold">
                  {cards.length}
                </span>
              </p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3 bg-linear-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 rounded-xl font-bold text-white shadow-lg transition hover:scale-105"
            >
              + Add New Product
            </button>
            <div className="p-3 bg-linear-to-br from-teal-500/10 to-cyan-500/10 border border-teal-500/20 rounded-xl">
              <Code2 className="w-6 h-6 text-teal-400" />
            </div>
          </div>
        </div>
        {/* ============================================================== */}
        {/*========================== Card Here ==========================*/}
        {/* ============================================================== */}
        <div className="p-8">
          {cards.length === 0 ? (
            <p className="text-center text-white/60 text-lg">
              No products added yet
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {cards.map((card) => (
                <div
                  key={card._id}
                  className="group relative bg-linear-to-br from-slate-900/90 to-slate-950/90 border border-teal-500/20 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl hover:border-teal-500/60 transition-all duration-500 hover:scale-[1.02]"
                >
                  <div className="absolute inset-0 bg-linear-to-r from-teal-600/10 to-cyan-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={card.images[0] || "/productImage.webp"}
                      width={1920}
                      height={1080}
                      alt={card.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
                  </div>

                  <div className="relative p-6 space-y-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {card.name}
                    </h3>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-teal-500/20 text-teal-300 text-xs rounded-full">
                        {card.productType}
                      </span>
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full flex items-center gap-1">
                        <IndianRupee className="w-3 h-3" /> {card.basePrice}
                      </span>
                    </div>

                    <div className="space-y-2 text-sm">
                      <p className="flex items-center gap-2 text-gray-300">
                        <Code2 className="w-4 h-4 text-teal-400" />
                        {card.codeLanguages.slice(0, 4).join(" • ")}
                      </p>
                      <p className="flex items-center gap-2 text-gray-300 truncate">
                        <Link className="w-4 h-4 text-teal-400" />
                        {card.codeLink}
                      </p>
                    </div>

                    <div className="flex gap-3 mt-6">
                      <button
                        onClick={() =>
                          router.push(`/admin/codeNscripts/${card.slug}`)
                        }
                        className="flex-1 py-3 cursor-pointer bg-linear-to-r from-teal-600 to-cyan-600 rounded-xl font-bold text-white shadow-lg hover:shadow-teal-500/60 transition-all duration-300 hover:scale-105"
                      >
                        Update Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* // Add this just before the last </div> or at the end of return */}
      {isModalOpen && (
        <AddcodeNscriptModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSuccess={handleAddSuccess} // ab ye sahi function pass ho raha hai
        />
      )}
    </div>
  );
}
