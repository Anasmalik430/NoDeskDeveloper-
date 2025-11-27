"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { slideVariants, testimonialsData } from "./Data";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function TestimonialsComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const pathname = usePathname();

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonialsData.length]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-black via-gray-950 to-black py-12 pb-4 px-5 lg:px-8 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3], }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", }} />
        <motion.div className="absolute bottom-20 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5], }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2, }} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div className="text-center mb-20" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} >
          {/* <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 backdrop-blur-xl mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-semibold text-blue-400">
              Client Success Stories
            </span>
          </motion.div> */}

          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            <span className="text-white">What Our </span>
            <span className="bg-linear-to-r from-blue-400 via-sky-400 to-teal-400 bg-clip-text text-transparent">Clients Say</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Don't just take our word for it. Hear from the businesses we've helped transform.
          </p>
        </motion.div>

        {/* Main Testimonial Card */}
        <div className="relative max-w-5xl mx-auto mb-12">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div key={currentIndex} custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.3 }, scale: { duration: 0.3 }, rotateY: { duration: 0.5 }, }} className="relative" style={{ perspective: "1000px" }} >
              {/* Glow Effect */}
              <motion.div className={`absolute -inset-4 bg-linear-to-r ${testimonialsData[currentIndex].gradient} rounded-[40px] opacity-30 blur-3xl`} animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.05, 1], }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", }} />

              {/* Card */}
              <div className="relative bg-linear-to-b from-white/10 to-white/5 backdrop-blur-xl border border-blue-500/30 rounded-[36px] p-8 md:p-12 overflow-hidden">
                {/* Quote Icon */}
                <motion.div
                  className={`absolute top-8 right-8 p-4 bg-linear-to-br ${testimonialsData[currentIndex].gradient} rounded-2xl opacity-20`}
                  animate={{ rotate: [0, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Quote className="w-12 h-12 text-white" strokeWidth={2} />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Stars */}
                  <motion.div className="flex gap-1 mb-6" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.5 }} >
                    {[...Array(testimonialsData[currentIndex].rating)].map(
                      (_, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.1 }} >
                          <Star className={`w-6 h-6 fill-yellow-400 text-yellow-400`} strokeWidth={2} />
                        </motion.div>
                      )
                    )}
                  </motion.div>

                  {/* Testimonial Text */}
                  <motion.p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }} >
                    "{testimonialsData[currentIndex].text}"
                  </motion.p>

                  {/* Author Info */}
                  <motion.div className="flex items-center gap-4" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6, duration: 0.6 }} >
                    <motion.div className={`relative p-1 bg-linear-to-br ${testimonialsData[currentIndex].gradient} rounded-2xl`} whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 400 }} >
                      <Image src={testimonialsData[currentIndex].image} alt={testimonialsData[currentIndex].name} className="w-16 h-16 rounded-xl object-cover" width={500} height={500} />
                    </motion.div>

                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">{testimonialsData[currentIndex].name}</h4>
                      <p className="text-gray-400 text-sm">{testimonialsData[currentIndex].role}</p>
                      <p className={`text-sm font-semibold bg-linear-to-r ${testimonialsData[currentIndex].gradient} bg-clip-text text-transparent`}>
                        {testimonialsData[currentIndex].company}
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Decorative Element */}
                <div className={`absolute bottom-0 right-0 w-64 h-64 bg-linear-to-tl ${testimonialsData[currentIndex].gradient} rounded-tl-full opacity-5 blur-2xl`}/>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className={`flex justify-center gap-4 mt-8 ${ pathname === "/" ? "hidden" : "" }`}>
            <motion.button
              onClick={handlePrev}
              className="p-4 bg-white/5 backdrop-blur-xl border border-blue-500/30 rounded-2xl hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-6 h-6 text-white" strokeWidth={2.5} />
            </motion.button>

            <motion.button
              onClick={handleNext}
              className="p-4 bg-white/5 backdrop-blur-xl border border-blue-500/30 rounded-2xl hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowRight className="w-6 h-6 text-white" strokeWidth={2.5} />
            </motion.button>
          </div>
        </div>

        {/* Indicators */}
        <motion.div className={`flex justify-center gap-2 ${ pathname === "/" ? "hidden" : "" }`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} >
          {testimonialsData.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? `w-12 bg-linear-to-r ${testimonialsData[currentIndex].gradient}`
                  : "w-2 bg-white/20"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
