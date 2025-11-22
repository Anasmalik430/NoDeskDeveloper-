import { Sparkles } from "lucide-react";
import React from "react";

const Button = ({btnTitle}) => {
  return (
    <>
      <button className="w-full relative overflow-hidden bg-linear-to-r from-blue-600 via-sky-600 to-teal-600 text-white font-bold py-4 rounded-2xl shadow-2xl shadow-sky-600/60 hover:shadow-sky-500/90 transition-all duration-400 hover:scale-105 active:scale-95 group/btn cursor-pointer">
        <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
        <span className="relative flex items-center justify-center gap-3">
          <Sparkles className="size-5 group-hover:animate-pulse" />
          {btnTitle}
        </span>
      </button>
    </>
  );
};

export default Button;
