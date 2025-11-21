import React from "react";
import { Star, Clock, IndianRupee, Sparkles, BadgeCheck } from "lucide-react";
import Image from "next/image";
import Button from "../MiniComponents/Button";

const DevCard = ({ filteredDevelopers }) => {
  return (
    <>
      {/* Developers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredDevelopers.map((dev) => (
          <div
            key={dev.id}
            className="group relative bg-linear-to-br from-violet-900/30 via-fuchsia-900/20 to-pink-900/30 backdrop-blur-2xl border border-violet-500/40 rounded-3xl overflow-hidden shadow-2xl shadow-violet-900/60 hover:shadow-violet-600/80 hover:border-violet-400 transition-all duration-500 hover:scale-[1.02]"
          >
            <div className="absolute inset-0 bg-linear-to-br from-violet-600/20 via-fuchsia-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-700" />

            <div className="relative p-6">
              {/* Profile Photo n Name */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex gap-6">
                  <div className="relative">
                    <div className="size-40 rounded-3xl overflow-hidden ring-4 ring-violet-500/60 shadow-2xl shadow-violet-800/70">
                      <Image
                        src={dev.photo}
                        alt={dev.name}
                        width={96}
                        height={96}
                        unoptimized
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-linear-to-r from-violet-500 to-fuchsia-500 rounded-full p-2 shadow-lg">
                      <Sparkles className="size-5 text-white group-hover:animate-pulse" />
                    </div>
                  </div>
                  {/* info */}
                  <div className="">
                    <h3 className="text-2xl text-nowrap font-bold text-white">
                      {dev.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1.5 text-sm">
                      <Star className="size-5 text-yellow-400 -translate-y-0.5 fill-current" />
                      <span className="text-violet-200 font-semibold">
                        {dev.rating}
                      </span>
                      {/* Exp Level */}
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          dev.level.toLocaleString() === "Expert"
                            ? "text-violet-400 bg-violet-900/50"
                            : dev.level.toLocaleString() === "Beginner"
                            ? "text-green-400 bg-green-900/50"
                            : "text-yellow-400 bg-yellow-900/50"
                        }`}
                      >
                        {dev.level}
                      </span>
                    </div>
                    {/* Fees */}
                    <div className="flex items-center gap-1 mt-1.5">
                      <IndianRupee className="size-5 text-green-400" />
                      <span className="text-xl font-bold text-white">
                        {dev.hourlyRate.toLocaleString()}/hr
                      </span>
                    </div>
                    <div className="flex items-center mt-1.5 gap-2 text-violet-300">
                      <Clock className="size-5" />
                      <span>{dev.experience} years+</span>
                    </div>
                    <div className="text-fuchsia-300 font-medium mt-1.5 flex gap-1.5">
                      <BadgeCheck
                        className={`${
                          dev.availability.toLocaleString() === "Full-time"
                            ? "text-violet-400"
                            : dev.availability.toLocaleString() === "Part-time"
                            ? "text-yellow-400"
                            : "text-green-400"
                        }`}
                      />
                      <span className="text-white font-bold">
                        {dev.availability}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-6 ">
                {dev.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-linear-to-tl from-violet-600/40 to-fuchsia-600/40 backdrop-blur-md rounded-full text-xs font-medium text-white border border-violet-500/50 shadow-md">
                    {skill}
                  </span>
                ))}
              </div>

              {/* Book Button */}
              <Button btnTitle={"Book Developer Now"} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default DevCard;
