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
      opacity: 0,
      scale: 1.05,
      filter: "blur(10px)",
    }),
    center: {
      zIndex: 1,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        opacity: { duration: 1.2, ease: [0.4, 0, 0.2, 1] },
        scale: { duration: 1.5, ease: [0.4, 0, 0.2, 1] },
        filter: { duration: 1.0 },
      },
    },
    exit: (direction) => ({
      zIndex: 0,
      opacity: 0,
      scale: 1.1,
      filter: "blur(10px)",
      transition: {
        opacity: { duration: 0.8 },
        filter: { duration: 0.8 },
      },
    }),
  };

  return (
    <div className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden bg-black group/carousel">
      {/* Background with Cinematic Transition */}
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
                scale: [1, 1.08],
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

        {/* Premium Layered Overlays */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-transparent to-black/90" />
        <div className="absolute inset-0 bg-linear-to-r from-blue-900/30 via-transparent to-purple-900/30 opacity-70" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
      </div>

      {/* Content Container */}
      <div className="relative h-full flex items-center justify-center px-4 md:px-6 z-10">
        <div className="max-w-5xl mx-auto text-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="space-y-4 md:space-y-8"
            >
              {/* Premium Highlight Badge */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ 
                  delay: 0.1, 
                  duration: 0.8, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                onClick={() => router.push("/book-services")}
                className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-2.5 bg-white/5 backdrop-blur-3xl border border-white/20 rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-500 group/badge mb-4 md:mb-0 shadow-2xl"
              >
                <Sparkles className="w-4 h-4 text-yellow-500 group-hover/badge:rotate-12 group-hover/badge:scale-125 transition-transform duration-500" />
                <span className="text-[10px] md:text-sm font-bold text-white tracking-widest uppercase">
                  Our Services • Get a Quote
                </span>
                <Sparkles className="w-4 h-4 text-yellow-500 group-hover/badge:-rotate-12 group-hover/badge:scale-125 transition-transform duration-500" />
              </motion.button>

              {/* Animated Title with Mask Reveal */}
              <div className="overflow-hidden">
                <h1 className="text-[36px] min-[400px]:text-[42px] sm:text-6xl md:text-8xl font-black text-white tracking-tight leading-[1.1] mb-4 drop-shadow-2xl flex flex-wrap justify-center">
                  {current.title.split(" ").map((word, i) => (
                    <span key={i} className="overflow-hidden inline-block mr-[0.2em] relative">
                      <motion.span
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{ 
                          delay: i * 0.08, 
                          duration: 0.8, 
                          ease: [0.16, 1, 0.3, 1] 
                        }}
                        className="inline-block"
                      >
                        {word}
                      </motion.span>
                    </span>
                  ))}
                </h1>
              </div>

              {/* Subtitle with Slide-up */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ 
                  delay: 0.5, 
                  duration: 0.8, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className="text-sm sm:text-lg md:text-2xl font-medium text-white/90 max-w-3xl mx-auto leading-relaxed px-4"
              >
                {current.subtitle}
              </motion.p>

              {/* CTA Buttons Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ 
                  delay: 0.7, 
                  duration: 0.8, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className="flex flex-row gap-3 sm:gap-6 justify-center items-center pt-6 w-full max-w-2xl mx-auto px-2"
              >
                <Link
                  href="/developers"
                  className="group relative flex-1 sm:flex-none sm:min-w-[200px] px-3 py-4 md:px-10 md:py-5 bg-linear-to-r from-blue-600 to-cyan-500 rounded-xl md:rounded-2xl font-black text-white text-[12px] min-[400px]:text-sm md:text-lg shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-1.5 md:gap-3 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-1 md:gap-2 whitespace-nowrap">
                    Hire Developers <ArrowRight className="w-3 h-3 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:animate-shimmer" />
                </Link>

                <Link
                  href="/softwares-readymade"
                  className="flex-1 sm:flex-none sm:min-w-[200px] px-3 py-4 md:px-10 md:py-5 bg-white/5 backdrop-blur-xl border border-white/20 rounded-xl md:rounded-2xl font-bold text-white text-[12px] min-[400px]:text-sm md:text-lg hover:bg-white/15 hover:border-white/40 transition-all duration-300 hover:scale-105 flex items-center justify-center whitespace-nowrap"
                >
                  Explore Apps
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
