"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Code2, Link, Image, DollarSign, Loader2 } from "lucide-react";
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

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-black"><Loader2 className="w-12 h-12 text-teal-500 animate-spin" /></div>;

  return (
    <div className="min-h-screen bg-black/95 p-6 lg:p-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-4xl font-bold bg-linear-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Code & Script Enquiries
          </h1>
          <div className="p-4 bg-linear-to-br from-teal-600/20 to-cyan-600/20 border border-teal-500/30 rounded-2xl backdrop-blur-xl">
            <Code2 className="w-8 h-8 text-teal-400" />
          </div>
        </div>

        {enquiries.length === 0 ? (
          <p className="text-center text-white/60 text-lg">No enquiries found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {enquiries.map((enq) => (
              <div
                key={enq._id}
                className="group relative bg-linear-to-br from-slate-900/90 to-slate-950/90 border border-teal-500/20 rounded-2xl p-6 shadow-2xl backdrop-blur-xl hover:border-teal-500/50 transition-all duration-500 hover:scale-[1.02]"
              >
                <div className="absolute inset-0 bg-linear-to-r from-teal-600/10 to-cyan-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-white">{enq.name || "Untitled Script"}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      enq.status === "Pending" ? "bg-yellow-500/20 text-yellow-300" :
                      enq.status === "Scheduled" ? "bg-blue-500/20 text-blue-300" :
                      enq.status === "Completed" ? "bg-green-500/20 text-green-300" :
                      "bg-red-500/20 text-red-300"
                    }`}>
                      {enq.status}
                    </span>
                  </div>

                  <div className="space-y-2 text-sm text-gray-300">
                    <p className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-teal-400" /> Base: ₹{enq.basePrice} | Total: ₹{enq.totalPrice || enq.basePrice}
                    </p>
                    {enq.codeLanguages.length > 0 && (
                      <p className="flex items-center gap-2">
                        <Code2 className="w-4 h-4 text-teal-400" /> {enq.codeLanguages.join(", ")}
                      </p>
                    )}
                    {enq.installationType.length > 0 && (
                      <p className="text-xs text-gray-400">Install: {enq.installationType.join(", ")}</p>
                    )}
                    {enq.images.length > 0 && (
                      <p className="flex items-center gap-2 text-xs text-gray-400">
                        <Image className="w-4 h-4" /> {enq.images.length} image{enq.images.length > 1 ? "s" : ""}
                      </p>
                    )}
                    {enq.codeLink && (
                      <p className="flex items-center gap-2 truncate text-xs text-gray-400">
                        <Link className="w-4 h-4" /> Source link provided
                      </p>
                    )}
                  </div>

                  <button
                    onClick={() => router.push(`/admin/bookings/codeNscriptEnquiries/${enq._id}`)}
                    className="w-full py-3 bg-linear-to-r from-teal-600 via-cyan-500 to-blue-600 rounded-xl font-bold text-white shadow-lg hover:shadow-teal-500/60 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
                  >
                    View Details
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