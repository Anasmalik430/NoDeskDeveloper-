import Image from "next/image";
import Link from "next/link";
import { Boxes, ExternalLink, Globe, Smartphone, Monitor, ChevronRight } from "lucide-react";

export default function SoftwareCard({ software }) {
  const totalCost = software.totalCost || software.price;

  return (
    <div className="group relative bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:border-emerald-500/40 hover:shadow-[0_0_50px_rgba(16,185,129,0.15)] flex flex-col">
      {/* Decorative Gradient Background */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-40 h-40 bg-emerald-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      {/* Screenshot Section */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={software.screenshots[0] || "/placeholder.jpg"}
          alt={software.name}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

        {/* Floating Badges */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
          <span className="px-3 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 text-white text-[10px] font-black uppercase tracking-widest rounded-xl shadow-2xl">
            {software.category}
          </span>

          <div className="flex gap-1.5">
            {software.platforms.includes("Web") && (
              <div className="p-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 shadow-2xl">
                <Globe className="w-3.5 h-3.5 text-white/80" />
              </div>
            )}
            {software.platforms.includes("Android") && (
              <div className="p-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 shadow-2xl">
                <Smartphone className="w-3.5 h-3.5 text-white/80" />
              </div>
            )}
            {software.platforms.includes("Desktop") && (
              <div className="p-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 shadow-2xl">
                <Monitor className="w-3.5 h-3.5 text-white/80" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-7 space-y-6 flex-1 flex flex-col">
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-emerald-400 transition-colors line-clamp-1">
            {software.name}
          </h3>

          <div
            className="text-gray-400 text-sm leading-relaxed line-clamp-2 font-medium"
            dangerouslySetInnerHTML={{ __html: software.description || "" }}
          />

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {software.tech.slice(0, 3).map((t, i) => (
              <span
                key={i}
                className="text-[10px] text-gray-400 font-mono bg-white/5 px-2 py-0.5 rounded-md border border-white/[0.05]"
              >
                {t.trim()}
              </span>
            ))}
            {software.tech.length > 3 && (
              <span className="text-[10px] text-emerald-400/80 font-mono bg-emerald-500/5 px-2 py-0.5 rounded-md border border-emerald-500/10">
                +{software.tech.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Footer Section */}
        <div className="pt-6 border-t border-white/[0.05] mt-auto flex items-center justify-between">
          <div className="space-y-0.5">
            <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold leading-none">Price Starting</p>
            <div className="flex items-center gap-1.5 text-2xl font-black text-white">
              <span className="text-emerald-400">₹</span>
              <span>{Number(software.price).toLocaleString()}</span>
            </div>
          </div>

          <Link
            href={`/admin/softwares/${software._id}`}
            className="group/btn flex items-center justify-center p-4 bg-white/5 hover:bg-emerald-500/20 rounded-2xl border border-white/10 hover:border-emerald-500/40 transition-all active:scale-95 shadow-xl"
          >
            <ChevronRight className="w-6 h-6 text-gray-400 group-hover/btn:text-emerald-400 transition-transform group-hover/btn:translate-x-0.5" />
          </Link>
        </div>

        <Link
          href={`/admin/softwares/${software._id}`}
          className="w-full py-4 px-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-all text-center mt-2 group-hover:border-emerald-500/20"
        >
          Manage Software
        </Link>
      </div>
    </div>
  );
}