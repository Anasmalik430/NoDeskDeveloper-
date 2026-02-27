"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight } from "lucide-react";
import Image from "next/image";
import { slides } from "./SlidesData";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function PremiumCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for right, -1 for left
  const router = useRouter();
  const SLIDE_DURATION = 6000;

  const goToNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const goToPrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Auto-play
  useEffect(() => {
    const interval = setInterval(goToNext, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, [goToNext]);

  const current = slides[currentIndex];

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 1.1,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.6 },
        scale: { duration: 0.8 },
      },
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? "50%" : "-50%",
      opacity: 0,
      scale: 0.9,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
      },
    }),
  };

  return (
    <div className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden bg-black group/carousel">
      {/* Background with Ken Burns Effect */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0"
          >
            <motion.div
              animate={{
                scale: [1, 1.15],
              }}
              transition={{
                duration: SLIDE_DURATION / 1000,
                ease: "linear",
              }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={current.image}
                alt={current.title}
                className="object-cover"
                fill
                priority
                unoptimized
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Premium Overlays */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-r from-blue-900/40 via-transparent to-purple-900/40 opacity-60" />
      </div>

      {/* Content Container */}
      <div className="relative h-full flex items-center justify-center px-4 md:px-6 z-10">
        <div className="max-w-5xl mx-auto text-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="space-y-6 md:space-y-8"
            >
              {/* Animated Title */}
              <h1 className="text-[36px] min-[400px]:text-[42px] sm:text-6xl md:text-8xl font-black text-white tracking-tight leading-[1.1] mb-4 drop-shadow-2xl">
                {current.title.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="inline-block mr-[0.2em]"
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>

              {/* Subtitle with Slide-up */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-sm sm:text-lg md:text-2xl font-medium text-white/90 max-w-3xl mx-auto leading-relaxed px-4"
              >
                {current.subtitle}
              </motion.p>

              {/* CTA Buttons Grid */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-4"
              >
                <Link
                  href="/developers"
                  className="group relative w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 bg-linear-to-r from-blue-600 to-cyan-500 rounded-2xl font-black text-white shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_50px_rgba(37,99,235,0.6)] transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center gap-3 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Hire Developers <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:animate-shimmer" />
                </Link>

                <Link
                  href="/softwares-readymade"
                  className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 bg-white/10 backdrop-blur-xl border-2 border-white/30 rounded-2xl font-bold text-white hover:bg-white/20 hover:border-white/60 transition-all duration-300 hover:scale-105 flex items-center justify-center"
                >
                  Explore Softwares
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Modern Navigation Controls */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-8 pointer-events-none z-20">
        <button
          onClick={goToPrev}
          className="p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 pointer-events-auto opacity-0 group-hover/carousel:opacity-100 hidden md:flex"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button
          onClick={goToNext}
          className="p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 pointer-events-auto opacity-0 group-hover/carousel:opacity-100 hidden md:flex"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>

      {/* Dynamic Progress Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="group relative h-1.5 cursor-pointer overflow-hidden rounded-full transition-all duration-500 bg-white/20"
            style={{ width: index === currentIndex ? "60px" : "16px" }}
          >
            {index === currentIndex && (
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                className="absolute inset-0 bg-white"
              />
            )}
            <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        ))}
      </div>

      <style jsx>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
      `}</style>
    </div>
  );
}
