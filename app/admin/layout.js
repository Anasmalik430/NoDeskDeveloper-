"use client";
import { UnseenCountsProvider, useUnseenCounts } from "@/src/context/UnseenCountsContext";
import { LayoutDashboard, Users, Package, CalendarDays, LogOut, Computer, } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { API_BASE } from "@/lib/api";
import { showToast } from "nextjs-toast-notify";
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";

function AdminLayoutContent({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const { newCounts } = useUnseenCounts();
  const { user, loading, isAdmin, logout } = useAuth();

  // Calculate total new enquiries across all services
  const totalNewEnquiries = Object.values(newCounts).reduce((sum, count) => sum + count, 0,);

  useEffect(() => {
    if (!loading && (!user || user.role !== "admin")) {
      showToast.error("Access Denied: Admins Only", { position: "top-right" });
      router.push("/");
    }
  }, [user, loading, router]);

  const menuItems = [
    { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/all-developers", label: "All Developers", icon: Users },
    { href: "/admin/softwares", label: "Softwares", icon: Package },
    { href: "/admin/bookings", label: "Bookings", icon: CalendarDays, showBadge: true },
    { href: "/admin/codeNscripts", label: "Code & Scripts", icon: Computer },
  ];

  const handleLogout = async () => {
    await logout();
    showToast.success("Logged Out Successfully");
  };

  if (loading) return <div className="min-h-screen bg-black" />;
  if (!user || user.role !== "admin") return null;

  return (
    <div className="min-h-screen bg-black text-white selection:bg-indigo-500/30">
      {/* Animated Background Layers */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] -left-[10%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] -right-[10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
      </div>

      <div className="relative flex min-h-screen z-10">
        {/* Desktop Sidebar */}
        <aside className="w-80 fixed inset-y-0 left-0 z-50 hidden lg:block p-6">
          <div className="h-full bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[2.5rem] flex flex-col shadow-2xl shadow-black/50 overflow-hidden">
            {/* Logo Section */}
            <div className="h-32 flex items-center justify-center relative group">
              <div className="absolute inset-0 bg-linear-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative flex flex-col items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-linear-to-tr from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20 ring-1 ring-white/20">
                    <LayoutDashboard className="w-6 h-6 text-white" />
                  </div>
                  <h1 className="text-2xl font-black bg-linear-to-r from-indigo-400 via-blue-400 to-sky-400 bg-clip-text text-transparent tracking-tighter">
                    Admin<span className="text-white/20 ml-1">Panel</span>
                  </h1>
                </div>
                <div className="mt-2 px-3 py-0.5 rounded-full bg-white/5 border border-white/10">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400/80">Management Suite</span>
                </div>
              </div>
            </div>

            {/* Navigation Section */}
            <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto scrollbar-hide">
              <div className="px-4 mb-4">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Main Menu</p>
              </div>

              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                const showNewBadge = item.showBadge && totalNewEnquiries > 0;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-500 group relative overflow-hidden ${isActive
                      ? "bg-white/5 border border-white/10 shadow-xl"
                      : "hover:bg-white/[0.03] border border-transparent hover:border-white/5"
                      }`}
                  >
                    {/* Active Indicator Glow */}
                    {isActive && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-linear-to-b from-indigo-400 to-blue-400 rounded-r-full shadow-[0_0_15px_rgba(129,140,248,0.8)]" />
                    )}

                    <div className={`p-2 rounded-xl transition-all duration-300 ${isActive ? "bg-indigo-500/20 text-indigo-400" : "bg-transparent text-gray-500 group-hover:text-white"
                      }`}>
                      <Icon className="w-5 h-5 flex-shrink-0" />
                    </div>

                    <span className={`font-bold tracking-tight transition-colors ${isActive ? "text-white text-base" : "text-gray-400 group-hover:text-white text-sm"
                      }`}>
                      {item.label}
                    </span>

                    {/* New Badge */}
                    {showNewBadge && (
                      <span className="ml-auto flex items-center justify-center min-w-[32px] h-5 text-[9px] font-black bg-red-500 text-white rounded-lg animate-pulse ring-2 ring-red-500/20">
                        {totalNewEnquiries > 9 ? "9+" : totalNewEnquiries}
                      </span>
                    )}

                    {/* Hover Glow Layer */}
                    <div className="absolute inset-0 bg-linear-to-r from-indigo-500/0 via-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  </Link>
                );
              })}
            </nav>

            {/* Logout Section */}
            <div className="p-4 border-t border-white/5">
              <button
                onClick={handleLogout}
                className="w-full group/logout cursor-pointer flex items-center gap-4 px-5 py-5 rounded-[2rem] bg-indigo-500/10 hover:bg-red-500/10 border border-indigo-500/20 hover:border-red-500/20 transition-all duration-500 relative overflow-hidden"
              >
                <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-400 group-hover/logout:bg-red-500/20 group-hover/logout:text-red-400 transition-all duration-300">
                  <LogOut className="w-5 h-5" />
                </div>
                <div className="flex flex-col items-start">
                  <span className="font-black text-xs uppercase tracking-widest text-white group-hover/logout:text-red-100 transition-colors">Sign Out</span>
                  <span className="text-[9px] text-indigo-400/60 group-hover/logout:text-red-400/60 font-medium italic">End active session</span>
                </div>
              </button>
            </div>
          </div>
        </aside>

        {/* Mobile Bottom Navigation */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 p-4 pb-6">
          <div className="bg-black/40 backdrop-blur-3xl border border-white/10 rounded-[2rem] flex items-center justify-around px-2 py-2 shadow-2xl shadow-black">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              const hasBadge = item.showBadge && totalNewEnquiries > 0;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex flex-col items-center justify-center gap-1.5 min-w-[64px] py-2.5 rounded-2xl transition-all duration-500 relative ${isActive ? "bg-white/10 ring-1 ring-white/10" : "text-gray-500 active:scale-95"
                    }`}
                >
                  <div className="relative">
                    <Icon className={`w-5 h-5 transition-all duration-300 ${isActive ? "text-indigo-400 scale-110" : "text-current"
                      }`} />
                    {hasBadge && (
                      <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-black animate-pulse" />
                    )}
                  </div>

                  <span className={`text-[9px] font-black uppercase tracking-tighter transition-colors ${isActive ? "text-white" : "text-current"
                    }`}>
                    {item.label.split(" ")[0]}
                  </span>

                  {isActive && (
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-indigo-400 rounded-full shadow-[0_0_10px_rgba(129,140,248,0.8)]" />
                  )}
                </Link>
              );
            })}

            <button
              onClick={handleLogout}
              className="flex flex-col items-center justify-center gap-1.5 min-w-[64px] py-2.5 text-gray-500 active:scale-95 transition-all"
            >
              <LogOut className="w-5 h-5" />
              <span className="text-[9px] font-black uppercase tracking-tighter">Exit</span>
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <main className="flex-1 lg:ml-80 min-h-screen relative z-10">
          <div className="h-full">{children}</div>
        </main>
      </div>
    </div>
  );
}

export default function AdminLayout({ children }) {
  return (
    <UnseenCountsProvider>
      <AdminLayoutContent>{children}</AdminLayoutContent>
    </UnseenCountsProvider>
  );
}
