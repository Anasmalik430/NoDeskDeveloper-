"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Loader2, IndianRupee, Link2, Package, TrendingUp } from "lucide-react";
import { API_BASE } from "@/lib/api";
import AddcodeNscriptModal from "@/components/Modals/AddcodeNscriptModal";
import { useCodeModal } from "./layout";
import Image from "next/image";
import Link from "next/link";

export default function AdminCodeNscriptPage() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isModalOpen, setIsModalOpen } = useCodeModal();
  const router = useRouter();

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

  const handleAddSuccess = () => {
    fetchCards();
    setIsModalOpen(false);
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] bg-black">
        <Loader2 className="w-10 h-10 text-teal-500 animate-spin" />
        <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-4">Compiling assets...</p>
      </div>
    );
  }

  return (
    <div className="pb-24 lg:pb-12">
      <div className="space-y-8 md:space-y-12">
        {/* Content Section */}
        <div className="relative">
          {cards.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-32 space-y-6 bg-white/[0.02] rounded-3xl border border-dashed border-white/10 backdrop-blur-xl">
              <div className="p-6 bg-teal-500/5 rounded-full ring-1 ring-teal-500/20">
                <Package className="w-16 h-16 text-teal-500/40" />
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-white">No products found</h3>
                <p className="text-gray-500 max-w-xs mx-auto">Start building your digital catalog by adding your first script or software.</p>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="text-teal-400 font-bold hover:text-teal-300 transition-colors uppercase tracking-widest text-xs py-2 px-4 rounded-lg bg-teal-500/10 border border-teal-500/20"
              >
                + Create First Entry
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cards.map((card, index) => (
                <div
                  key={card._id}
                  className="group relative bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:border-teal-500/40 hover:shadow-[0_0_50px_rgba(20,184,166,0.15)] flex flex-col"
                >
                  {/* Decorative Gradient Background */}
                  <div className="absolute top-0 right-0 -mr-20 -mt-20 w-40 h-40 bg-teal-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Image Section */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={card.images[0] || "/productImage.webp"}
                      width={800}
                      height={600}
                      alt={card.name}
                      priority={index < 3}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Floating Badges */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                      <span className="px-3 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 text-white text-[10px] font-black uppercase tracking-widest rounded-xl shadow-2xl">
                        {card.productType}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(card?.codeLink, '_blank');
                        }}
                        className="p-2.5 bg-white/10 backdrop-blur-md hover:bg-teal-500 hover:text-white transition-all rounded-xl border border-white/20 shadow-2xl group/link"
                      >
                        <Link2 className="w-4 h-4 group-hover/link:rotate-45 transition-transform" />
                      </button>
                    </div>

                    <div className="absolute bottom-4 left-4 flex flex-wrap gap-1.5">
                      {card.installationType.map((type, i) => (
                        <span key={i} className="px-2 py-1 bg-teal-500/80 backdrop-blur-sm text-white text-[9px] font-bold rounded-lg uppercase tracking-tight">
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-7 space-y-6 flex-1 flex flex-col">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-teal-400 transition-colors line-clamp-1">
                        {card.name}
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {card.codeLanguages.slice(0, 4).map((lang, i) => (
                          <span key={i} className="text-[10px] text-gray-400 font-mono bg-white/5 px-2 py-0.5 rounded-md border border-white/[0.05]">
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/[0.05] mt-auto flex items-center justify-between">
                      <div className="space-y-0.5">
                        <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold leading-none">Investment Price</p>
                        <div className="flex items-center gap-1.5 text-2xl font-black text-white">
                          <IndianRupee className="w-4 h-4 text-teal-400" />
                          <span>{card.basePrice}</span>
                        </div>
                      </div>

                      <button
                        onClick={() => router.push(`/admin/codeNscripts/${card._id}`)}
                        className="group/btn flex items-center justify-center p-4 bg-white/5 hover:bg-teal-500/20 rounded-2xl border border-white/10 hover:border-teal-500/40 transition-all active:scale-95"
                        title="Update Product"
                      >
                        <TrendingUp className="w-5 h-5 text-gray-400 group-hover/btn:text-teal-400" />
                      </button>
                    </div>

                    <button
                      onClick={() => router.push(`/admin/codeNscripts/${card._id}`)}
                      className="w-full py-4 px-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-all mt-2"
                    >
                      Update Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <AddcodeNscriptModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={handleAddSuccess}
      />
    </div>
  );
}
