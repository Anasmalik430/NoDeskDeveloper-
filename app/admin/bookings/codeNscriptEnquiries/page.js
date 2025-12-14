"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Loader2, ArrowRight, Calendar, Package } from "lucide-react";
import { API_BASE } from "@/lib/api";

export default function AdminCodeNscriptEnquiryPage() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const res = await fetch(`${API_BASE}/code-n-script-enquiries`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setEnquiries(data.data || []);
      } catch (err) {
        alert("Error loading enquiries");
      } finally {
        setLoading(false);
      }
    };
    fetchEnquiries();
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <Loader2 className="w-12 h-12 text-red-500 animate-spin" />
      </div>
    );

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto p-6 lg:p-10">

        {enquiries.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
              <Package className="w-8 h-8 text-red-500" />
            </div>
            <p className="text-white/60 text-lg">No enquiries found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {enquiries.map((enq) => (
              <div
                key={enq._id}
                className="group relative bg-linear-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl overflow-hidden hover:border-red-500/50 transition-all duration-300"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-linear-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative p-6 space-y-5">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-white truncate mb-1">
                        {enq.name || "Untitled Script"}
                      </h3>
                      <p className="text-sm text-gray-500 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(enq.createdAt || Date.now()).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </p>
                    </div>
                    <span
                      className={`shrink-0 px-3 py-1 rounded-full text-xs font-medium ${
                        enq.status === "Pending"
                          ? "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
                          : enq.status === "Scheduled"
                          ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                          : enq.status === "Completed"
                          ? "bg-green-500/10 text-green-400 border border-green-500/20"
                          : "bg-red-500/10 text-red-400 border border-red-500/20"
                      }`}
                    >
                      {enq.status}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-linear-to-r from-transparent via-zinc-700 to-transparent" />

                  {/* Info Grid */}
                  <div className="space-y-3">
                    {/* Pricing */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Base Price</span>
                      <div className="text-right">
                        <p className="text-white font-semibold">₹{enq.basePrice}</p>
                      </div>
                    </div>

                    {/* Languages */}
                    {enq.codeLanguages && enq.codeLanguages.length > 0 && (
                      <div className="flex items-start justify-between gap-3">
                        <span className="text-sm text-gray-400">Languages</span>
                        <div className="flex flex-wrap gap-1.5 justify-end max-w-[60%]">
                          {enq.codeLanguages.slice(0, 3).map((lang, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-0.5 bg-zinc-800 text-xs text-gray-300 rounded border border-zinc-700"
                            >
                              {lang}
                            </span>
                          ))}
                          {enq.codeLanguages.length > 3 && (
                            <span className="px-2 py-0.5 bg-zinc-800 text-xs text-gray-400 rounded border border-zinc-700">
                              +{enq.codeLanguages.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Installation Type */}
                    {enq.installationType && enq.installationType.length > 0 && (
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">Installation</span>
                        <span className="text-sm text-gray-300">{enq.installationType.join(", ")}</span>
                      </div>
                    )}

                    {/* Attachments */}
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Attachments</span>
                      <div className="flex items-center gap-3 text-gray-300">
                        {enq.images && enq.images.length > 0 && (
                          <span>{enq.images.length} image{enq.images.length > 1 ? "s" : ""}</span>
                        )}
                        {enq.codeLink && <span>Source link</span>}
                        {(!enq.images || enq.images.length === 0) && !enq.codeLink && (
                          <span className="text-gray-500">None</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button onClick={() => router.push(`/admin/bookings/codeNscriptEnquiries/${enq._id}`)}
                    className="w-full mt-4 py-3 px-4 bg-linear-to-l from-red-600 to-pink-600 hover:from-red-500 hover:to-red-600 rounded-xl font-medium text-white shadow-lg shadow-red-500/20 transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-red-500/40 active:scale-[0.98]"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}