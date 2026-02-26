"use client";
import { API_BASE } from "@/lib/api";
import { MousePointer2, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const services = [
  { id: 1, title: "Developers Enquiries", route: "/admin/bookings/dev-enquiries", endpoint: "/enquiries" },
  { id: 2, title: "Developers Bookings", route: "/admin/bookings/dev-bookings", endpoint: "/bookings" },
  { id: 3, title: "Product Demo Requests", route: "/admin/bookings/productsdemo-requests", endpoint: "/demo-requests" },
  { id: 4, title: "Product Buying Enquiries", route: "/admin/bookings/productsbuying-requests", endpoint: "/buy-enquiries" },
  { id: 5, title: "Install OwnCode Enquiries", route: "/admin/bookings/installcode-enquaries", endpoint: "/install-requests" },
  { id: 6, title: "Code Installation bookings", route: "/admin/bookings/CodeInstallBooking", endpoint: "/code-install-bookings" },
  { id: 7, title: "Tech Consult Enquiries", route: "/admin/bookings/techConsult", endpoint: "/tech-consults" },
  { id: 8, title: "Project Estimation's", route: "/admin/bookings/projectEstimations", endpoint: "/project-estimations" },
  { id: 9, title: "Error Fixing Enquiries", route: "/admin/bookings/errorFixing", endpoint: "/error-fixings" },
  { id: 10, title: "Tech Maintenance Enquiries", route: "/admin/bookings/tech-maintenance", endpoint: "/technical-maintenances" },
  { id: 11, title: "Contact Page Enquiries", route: "/admin/bookings/ContactPageEnqs", endpoint: "/contacts" },
  { id: 12, title: "Career Enquiries", route: "/admin/bookings/CareerPageEnquiries", endpoint: "/careers" },
  { id: 13, title: "CodeNscript Enquires", route: "/admin/bookings/codeNscriptEnquiries", endpoint: "/code-n-script-enquiries" },
];

const LAST_SEEN_KEY = "admin_last_seen_timestamps";

export default function ServicesGrid() {
  const router = useRouter();
  const [newCounts, setNewCounts] = useState({});     // Only new/unseen
  const [totalCounts, setTotalCounts] = useState({}); // Total items
  const [lastSeen, setLastSeen] = useState({});       // { id: timestamp }
  const [loading, setLoading] = useState(true);

  // Load last seen from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(LAST_SEEN_KEY);
      if (stored) setLastSeen(JSON.parse(stored));
    } catch (err) {
      console.error("Failed to load last seen", err);
    }
  }, []);

  const fetchCounts = async () => {
    setLoading(true);
    const newTotal = {};
    const newNew = {};

    try {
      const promises = services.map(async (service) => {
        try {
          const res = await fetch(`${API_BASE}${service.endpoint}`);
          if (!res.ok) throw new Error();
          const data = await res.json();

          if (data.success && Array.isArray(data.data)) {
            const items = data.data;
            const total = items.length;
            newTotal[service.id] = total;

            const lastSeenTime = lastSeen[service.id] ? new Date(lastSeen[service.id]).getTime() : 0;
            const unseen = items.filter(item => new Date(item.createdAt).getTime() > lastSeenTime).length;
            newNew[service.id] = unseen;
          } else {
            newTotal[service.id] = 0;
            newNew[service.id] = 0;
          }
        } catch (err) {
          newTotal[service.id] = 0;
          newNew[service.id] = 0;
        }
      });

      await Promise.all(promises);
      setTotalCounts(newTotal);
      setNewCounts(newNew);
    } catch (err) {
      console.error("Fetch error", err);
    } finally {
      setLoading(false);
    }
  };

  // Initial + polling
  useEffect(() => {
    fetchCounts();
    const interval = setInterval(fetchCounts, 30000); // Every 30s
    return () => clearInterval(interval);
  }, [lastSeen]);

  const handleCardClick = (service) => {
    const now = new Date().toISOString();
    const updated = { ...lastSeen, [service.id]: now };
    setLastSeen(updated);
    localStorage.setItem(LAST_SEEN_KEY, JSON.stringify(updated));

    // Immediately hide new badge for this card
    setNewCounts(prev => ({ ...prev, [service.id]: 0 }));

    router.push(service.route);
  };

  return (
    <div className="pb-24 lg:pb-12">
      <div className="space-y-8 md:space-y-12">
        {/* Categories Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => {
              const newCount = newCounts[service.id] ?? 0;
              const total = totalCounts[service.id] ?? 0;
              const hasNew = newCount > 0;

              return (
                <div
                  key={service.id}
                  onClick={() => handleCardClick(service)}
                  className="group relative bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-3xl p-6 transition-all duration-500 hover:border-cyan-500/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.1)] cursor-pointer overflow-hidden flex flex-col justify-between min-h-[160px]"
                >
                  <div className="absolute -right-6 -bottom-6 h-24 w-24 bg-cyan-500/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="relative z-10 space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-sm font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors leading-snug max-w-[80%]">
                        {service.title}
                      </h3>
                      <div className="p-2 bg-white/5 rounded-lg group-hover:bg-cyan-500/20 group-hover:rotate-45 transition-all">
                        <MousePointer2 className="w-4 h-4 text-gray-400 group-hover:text-cyan-400" />
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <div className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                        <span className="text-[9px] font-black uppercase tracking-wider text-gray-500">Total</span>
                        <span className="text-xs font-bold text-white leading-none">{total}</span>
                      </div>

                      {hasNew && (
                        <div className="flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full animate-pulse">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
                          </span>
                          <span className="text-[9px] font-black uppercase text-red-400">
                            {newCount} New
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="relative z-10 mt-auto pt-4 flex items-center justify-between text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 group-hover:text-gray-300 transition-colors">
                    <span>Explore List</span>
                    <div className="h-px flex-1 bg-white/5 mx-3" />
                  </div>
                </div>
              );
            })}
          </div>

          {loading && Object.keys(newCounts).length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 space-y-4">
              <Loader2 className="w-10 h-10 text-cyan-500 animate-spin" />
              <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Hydrating data streams...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}