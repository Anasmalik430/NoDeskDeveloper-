"use client";

import { useUnseenCounts } from "@/src/context/UnseenCountsContext";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

export default function BookingsLayout({ children }) {
    const { loading } = useUnseenCounts();

    return (
        <div className="min-h-screen bg-black text-white p-4 md:p-8 lg:p-12 pb-0">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="space-y-2">
                        <h1 className="text-3xl pb-2 md:text-5xl font-black bg-linear-to-r from-cyan-400 via-emerald-400 to-green-400 bg-clip-text text-transparent tracking-tighter">
                            All Inquiries
                        </h1>
                        {/* <p className="text-gray-400 text-xs md:text-base max-w-md font-medium">
                            Monitor and respond to developer interests, project estimations, and service requests across all channels.
                        </p> */}
                    </div>

                    <div className="flex items-center gap-3 px-5 py-3 bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-2xl shadow-2xl">
                        <div className={`h-2.5 w-2.5 rounded-full ${loading ? "bg-amber-500 animate-pulse" : "bg-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.5)]"}`} />
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                            {loading ? "Syncing..." : "Real-time Ready"}
                        </span>
                    </div>
                </div>

                {/* Separator */}
                <div className="h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />
            </div>

            <main className="mt-8 md:mt-12">
                {children}
            </main>
        </div>
    );
}
