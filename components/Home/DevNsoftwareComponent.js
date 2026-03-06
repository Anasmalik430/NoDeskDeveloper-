"use client";
import {
  ArrowRight,
  Utensils,
  GraduationCap,
  Building2,
  HeartPulse,
  Layout,
  PlaneTakeoff,
} from "lucide-react";
import Link from "next/link";
import useINRConverter from "@/utils/currencyConverter";

const categoryIcons = {
  Food: Utensils,
  Education: GraduationCap,
  "Real Estate": Building2,
  Healthcare: HeartPulse,
  Travel: PlaneTakeoff,
};

const developers = [
  {
    name: "Anas Malik",
    experience: 2,
    skills: ["Next.js", "React"],
    hourlyRate: 800,
  },
  {
    name: "Abhinav",
    experience: 1,
    skills: ["React", "Express"],
    hourlyRate: 1000,
  },
  {
    name: "Jefrin Akter Jui",
    experience: 2,
    skills: ["React", "Next.js"],
    hourlyRate: 1300,
  },
  {
    name: "Abhishek",
    experience: 1,
    skills: ["React", "Express"],
    hourlyRate: 1000,
  },
];

const softwareProducts = [
  {
    _id: "s1",
    name: "Food Delivery App",
    category: "Food",
    tech: ["Flutter"],
    price: 45000,
    color: "from-orange-500 to-red-500",
  },
  {
    _id: "s2",
    name: "School Management",
    category: "Education",
    tech: ["Laravel"],
    price: 65000,
    color: "from-blue-500 to-cyan-500",
  },
  {
    _id: "s3",
    name: "Real Estate CRM",
    category: "Real Estate",
    tech: ["React"],
    price: 55000,
    color: "from-purple-500 to-pink-500",
  },
  {
    _id: "s4",
    name: "Clinic Management",
    category: "Healthcare",
    tech: ["Next.js"],
    price: 38000,
    color: "from-teal-500 to-emerald-500",
  },
];

export default function DevelopersSoftwareSection() {
  const { convertINR, loading: currencyLoading } = useINRConverter();

  return (
    <div className=" bg-linear-to-b from-black via-gray-950 to-black py-20 px-5 lg:px-8">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="relative max-w-[1400px] mx-auto  grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Top Developers Section */}
        <div className="relative group">
          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-linear-to-r from-blue-500 to-cyan-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500" />

          {/* Card */}
          <div className="relative bg-linear-to-b from-white/5 to-white/2 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-8 pb-13">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-black text-white">
                Top Developers
              </h2>
              <Link
                href="/developers"
                className="group/link flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold transition-colors"
              >
                View all
                <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Developer Cards Grid */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {developers.slice(0, 4).map((profile, idx) => (
                <div
                  key={idx}
                  className="group/card cursor-pointer space-y-2 md:space-y-4 relative bg-white/2 hover:bg-white/5 border border-white/10 hover:border-blue-500/30 rounded-xl md:rounded-2xl p-3 md:p-5 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="flex justify-between items-start gap-1">
                    <h3 className="text-white font-bold text-sm md:text-lg truncate">
                      {profile.name}
                    </h3>
                    <span className="shrink-0 text-[8px] md:text-[10px] font-semibold text-blue-400 bg-blue-900/50 flex justify-center items-center h-fit px-1.5 md:px-2 py-0.5 md:py-1 rounded-full">
                      {profile.experience}y+
                    </span>
                  </div>
                  <div className="flex justify-between items-end gap-1">
                    {/* Skills */}
                    <span className="space-x-1 mt-1 flex-wrap flex-3 hidden sm:flex">
                      {profile.skills.slice(0, 1).map((skill) => (
                        <span
                          key={skill}
                          className="text-gray-300 gap-1 text-[8px] bg-slate-700/50 px-1.5 py-0.5 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </span>
                    <span className="sm:hidden text-[8px] text-gray-500 truncate max-w-[50px]">
                      {profile.skills[0]}
                    </span>

                    {/* Rate */}
                    <p className="text-sm md:text-lg font-black bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      {currencyLoading ? "..." : convertINR(profile.hourlyRate)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ready-Made Software Section */}
        <div className="relative group">
          {/* Glow Effect */}
          <div className="absolute  -inset-1 bg-linear-to-r from-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500" />

          {/* Card */}
          <div className="relative bg-linear-to-b from-white/5 to-white/2 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-8 pb-0">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <h2 className="hidden md:block text-3xl font-black text-white">
                Ready-Made Software
              </h2>
              <h2 className="md:hidden text-2xl font-black text-white">
                Top Softwares
              </h2>
              <Link
                href="/softwares-readymade"
                className="group/link flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold transition-colors"
              >
                Browse all
                <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Software Cards Grid */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6">
              {softwareProducts.map((software, idx) => {
                const Icon =
                  (software.category && categoryIcons[software.category]) ||
                  Layout;
                return (
                  <div
                    key={software._id || idx}
                    className="group/card relative cursor-pointer bg-white/2 hover:bg-white/5 border border-white/10 hover:border-purple-500/30 rounded-xl md:rounded-2xl p-3 md:p-5 transition-all duration-300 hover:scale-[1.02]"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-2 md:mb-3">
                      <div className="flex items-center gap-2 md:gap-3 flex-1 min-w-0">
                        <div
                          className={`p-1.5 md:p-2.5 bg-linear-to-br ${software.color || "from-purple-600 to-pink-500"} rounded-lg md:rounded-xl shrink-0`}
                        >
                          <Icon
                            className="w-4 h-4 md:w-5 md:h-5 text-white"
                            strokeWidth={2.5}
                          />
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-white font-bold text-xs md:text-base mb-0.5 truncate">
                            {software.name}
                          </h3>
                          <p className="text-gray-400 text-[8px] md:text-xs truncate">
                            {Array.isArray(software.tech)
                              ? software.tech.slice(0, 1).join(" + ")
                              : software.tech || "Custom Stack"}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Price */}
                    <p className="text-sm md:text-lg font-black bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
                      {currencyLoading ? "..." : convertINR(software.price)}
                    </p>

                    {/* Actions */}
                    {/* <div className="flex items-center gap-4">
                      <Link
                        href="/softwares-readymade"
                        className="text-gray-400 hover:text-gray-300 font-medium text-sm transition-colors"
                      >
                        Request Demo
                      </Link>
                      <span className="text-gray-600">•</span>
                      <Link
                        href="/softwares-readymade"
                        className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 font-semibold text-sm transition-colors"
                      >
                        Buy Now
                        <ArrowRight className="w-4 h-4 group-hover/card:translate-x-1 transition-transform" />
                      </Link>
                    </div> */}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
