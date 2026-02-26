"use client";

import { useEffect, useState } from "react";
import { Users, Boxes, TrendingUp, UserCog } from "lucide-react";
import { API_BASE } from "@/lib/api";

export default function Dashboard() {
  const [stats, setStats] = useState({
    developers: 0,
    projects: 0,
    users: 0,
  });
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [devRes, projRes, userRes, meRes] = await Promise.all([
          fetch(`${API_BASE}/developers`),
          fetch(`${API_BASE}/projects`),
          fetch(`${API_BASE}/users`, { credentials: "include" }),
          fetch(`${API_BASE}/me`, { credentials: "include" }),
        ]);

        const devData = await devRes.json();
        const projData = await projRes.json();
        const userData = await userRes.json();
        const meData = await meRes.json();

        setStats({
          developers: devData.success ? devData.data.length : 0,
          projects: projData.success ? projData.data.length : 0,
          users: userData.success ? userData.count : 0,
        });

        if (meData.success) {
          setCurrentUser(meData.user);
        }
      } catch (err) {
        console.error("Dashboard stats error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto space-y-8 md:space-y-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-5xl font-black tracking-tighter flex flex-wrap items-center gap-2 md:gap-4">
              <span className="text-gray-400">Welcome,</span>
              <span className="bg-linear-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent break-all">
                {currentUser?.email.split("@")[0]}
              </span>
              <span className="animate-bounce">😃</span>
            </h1>
            {/* <p className="text-gray-500 text-sm md:text-base font-medium max-w-lg">
              Here's a high-level overview of your platform performance and active community metrics.
            </p> */}
          </div>

          <div className="flex items-center gap-3 px-5 py-3 bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-2xl shadow-2xl">
            <div className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">System Live</span>
          </div>
        </div>

        {/* Separator */}
        <div className="h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Total Developers */}
          <div className="group relative bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-3xl p-8 transition-all duration-500 hover:border-blue-500/40 hover:shadow-[0_0_50px_rgba(59,130,246,0.15)] overflow-hidden">
            <div className="absolute -right-10 -bottom-10 h-40 w-40 bg-blue-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
              <div className="flex items-center justify-between">
                <div className="p-4 bg-blue-500/10 rounded-2xl border border-blue-500/20">
                  <Users className="w-8 h-8 text-blue-400" />
                </div>
                <TrendingUp className="w-5 h-5 text-gray-600" />
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold mb-1">Total Developers</p>
                {loading ? (
                  <div className="h-12 w-28 bg-white/5 rounded-xl animate-pulse" />
                ) : (
                  <div className="flex items-baseline gap-2">
                    <p className="text-5xl font-black text-white tracking-tighter leading-none">
                      {stats.developers}
                    </p>
                    <span className="text-blue-400 text-sm font-bold italic">Curated</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Total Softwares */}
          <div className="group relative bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-3xl p-8 transition-all duration-500 hover:border-emerald-500/40 hover:shadow-[0_0_50px_rgba(16,185,129,0.15)] overflow-hidden">
            <div className="absolute -right-10 -bottom-10 h-40 w-40 bg-emerald-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
              <div className="flex items-center justify-between">
                <div className="p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
                  <Boxes className="w-8 h-8 text-emerald-400" />
                </div>
                <TrendingUp className="w-5 h-5 text-gray-600" />
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold mb-1">Total Softwares</p>
                {loading ? (
                  <div className="h-12 w-28 bg-white/5 rounded-xl animate-pulse" />
                ) : (
                  <div className="flex items-baseline gap-2">
                    <p className="text-5xl font-black text-white tracking-tighter leading-none">
                      {stats.projects}
                    </p>
                    <span className="text-emerald-400 text-sm font-bold italic">Assets</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Admin Status / Total Users */}
          {currentUser?.role === "admin" && (
            <div className="group relative bg-linear-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-3xl border border-purple-500/20 rounded-3xl p-8 transition-all duration-500 hover:border-purple-500/40 hover:shadow-[0_0_50px_rgba(168,85,247,0.15)] overflow-hidden">
              <div className="absolute -right-10 -bottom-10 h-40 w-40 bg-purple-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
                <div className="flex items-center justify-between">
                  <div className="p-4 bg-purple-500/10 rounded-2xl border border-purple-500/20">
                    <UserCog className="w-8 h-8 text-purple-400" />
                  </div>
                  <div className="px-3 py-1 bg-purple-500/20 rounded-full border border-purple-500/40">
                    <span className="text-[10px] font-black uppercase text-purple-300">Admin Privileges</span>
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold mb-1">Total Users</p>
                  {loading ? (
                    <div className="h-12 w-28 bg-white/5 rounded-xl animate-pulse" />
                  ) : (
                    <div className="flex items-baseline gap-2">
                      <p className="text-5xl font-black text-white tracking-tighter leading-none">
                        {stats.users}
                      </p>
                      <span className="text-purple-400 text-sm font-bold italic">Registered</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Banner */}
        <div className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 group">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
              Platform Insights & Management
            </h2>
            <p className="text-gray-400 max-w-xl">
              Use the sidebar to manage specific areas like developers, softwares, and bookings. Your dashboard provides a real-time summary of the platform's state.
            </p>
          </div>
          <div className="relative h-24 w-24 flex items-center justify-center shrink-0">
            <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full animate-pulse" />
            <TrendingUp className="w-12 h-12 text-blue-400 relative z-10" />
          </div>
        </div>
      </div>
    </div>
  );
}
