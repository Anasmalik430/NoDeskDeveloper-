"use client";
import { motion } from "framer-motion";
import {
  Zap,
  Shield,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Lock,
  Code2,
  Globe,
  Star,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AboutUsPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: {
      "@type": "Organization",
      name: "NoDeskDeveloper",
      description:
        "Premium technology partner specializing in high-end development, verified talent hiring, and professional software solutions.",
    },
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
        {/* Balanced Hero (SEO H1) */}
        <section className="relative pt-24 pb-16 px-6 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[100px]" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-2xl mb-8"
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 font-bold text-[10px] md:text-xs tracking-widest uppercase">
                India's Premium Tech Platform
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight"
            >
              <span className="bg-linear-to-b from-white to-gray-400 bg-clip-text text-transparent">
                Accelerating the
              </span>
              <br />
              <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent italic">
                Digital Economy.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-sm md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium"
            >
              NoDeskDeveloper is a complete technology ecosystem designed for
              high-growth businesses. We specialize in delivering top-tier
              digital products, hand-picked engineering talent, and strategic
              technical consulting.
            </motion.p>
          </div>
        </section>

        {/* Platform Mastery Section (SEO H2) */}
        <section className="py-20 px-6 relative bg-white/[0.01]">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
              <motion.div
                {...fadeInUp}
                className="space-y-6 order-2 lg:order-1"
              >
                <div className="space-y-2">
                  <h2 className="text-blue-400 font-black tracking-widest uppercase text-[10px] md:text-xs">
                    Engineered for Success
                  </h2>
                  <h3 className="text-3xl md:text-5xl font-black text-white leading-tight">
                    Our Digital{" "}
                    <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      Mastery
                    </span>
                  </h3>
                </div>

                <p className="text-sm md:text-lg text-gray-400 leading-relaxed font-medium">
                  At NoDeskDeveloper, we transform complex business challenges
                  into seamless digital experiences. Whether it's building
                  high-performance **Web Platforms**, robust **Mobile
                  Applications**, or intuitive **UI/UX Designs**, our approach
                  is rooted in technical precision and strategic consulting.
                </p>

                <ul className="grid grid-cols-3 gap-x-4 gap-y-3 text-left">
                  {[
                    "Web Solutions",
                    "Mobile Apps",
                    "UI/UX Design",
                    "Tech Consulting",
                    "Scalable Auth",
                    "Cloud Modern",
                  ].map((service, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-gray-300 text-[12px] sm:text-xs md:text-base whitespace-nowrap"
                    >
                      <div className="size-1 bg-blue-500 rounded-full shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                {...fadeInUp}
                className="relative group/mastery order-1 lg:order-2"
              >
                <div className="absolute -inset-2 bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl opacity-10 blur-xl group-hover/mastery:opacity-20 transition-all" />
                <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-square md:aspect-video lg:aspect-square flex items-center justify-center bg-gray-950/50 shadow-xl max-w-md mx-auto">
                  <div className="p-8">
                    <Code2 className="w-16 h-16 text-blue-500 mx-auto mb-4 animate-pulse" />
                    <h3 className="text-2xl font-black text-white mb-2 tracking-tight">
                      Technical Purity
                    </h3>
                    <p className="text-gray-400 italic text-sm md:text-base">
                      "Reliable solutions, zero friction."
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Expertise (SEO H2) */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto text-center mb-16 space-y-2">
            <motion.h2
              {...fadeInUp}
              className="text-3xl md:text-5xl font-black text-white"
            >
              Why Businesses Choose Us
            </motion.h2>
            <motion.div
              {...fadeInUp}
              className="w-16 h-1 bg-blue-600 mx-auto rounded-full"
            />
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mx-auto max-w-7xl"
          >
            {[
              {
                title: "Elite Engineering",
                desc: "Our platform provides access to developers in the top 1%, vetted for deep expertise in modern tech stacks.",
                icon: Star,
              },
              {
                title: "Asset Security",
                desc: "We prioritize your intellectual property. Our platform uses military-grade encryption and NDA-protected flows.",
                icon: Shield,
              },
              {
                title: "Agile Speed",
                desc: "Go from concept to launch within days. Our ready-made engines accelerate time-to-market significantly.",
                icon: Zap,
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="p-8 rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all group/edge"
              >
                <div className="size-12 rounded-xl bg-blue-600/10 flex items-center justify-center mb-6 border border-blue-500/20 group-hover/edge:bg-blue-600 transition-colors">
                  <item.icon className="w-5 h-5 text-blue-500 group-hover/edge:text-white" />
                </div>
                <h3 className="text-xl font-black text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Commitment Section (SEO H2) */}
        <section className="py-20 px-6 bg-blue-600/5">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <motion.div {...fadeInUp} className="space-y-4">
              <Lock className="w-12 h-12 text-blue-400 mx-auto" />
              <h2 className="text-3xl md:text-5xl font-black text-white">
                Platform Commitment
              </h2>
            </motion.div>

            <motion.div
              {...fadeInUp}
              className="grid md:grid-cols-2 gap-8 text-left bg-black p-6 md:p-10 rounded-[32px] border border-white/5 backdrop-blur-3xl shadow-2xl"
            >
              <div className="space-y-4">
                <h3 className="flex items-center gap-2 text-lg font-black text-white">
                  <Shield className="w-5 h-5 text-blue-500" /> Intellectual
                  Property
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed font-medium">
                  All products and source codes delivered via NoDeskDeveloper
                  are protected under global IP laws. Client ownership and
                  confidentiality are our highest legal priorities.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="flex items-center gap-2 text-lg font-black text-white">
                  <Lock className="w-5 h-5 text-blue-500" /> Data Privacy
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed font-medium">
                  We adhere strictly to international data protection protocols
                  (GDPR/APPI compliance), ensuring that your business
                  information remains secure and confidential.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA (SEO H2) */}
        <section className="py-24 px-6 text-center">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto space-y-10">
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
              Ready to Upgrade <br />
              <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent italic">
                Your Tech Stack?
              </span>
            </h2>

            <div className="flex flex-row justify-center items-center gap-3 md:gap-4">
              <Link
                href="/developers"
                className="group relative flex-1 sm:flex-none px-4 sm:px-10 py-4 sm:py-5 bg-blue-600 text-white font-black text-xs sm:text-lg rounded-xl hover:scale-105 active:scale-95 transition-all shadow-xl text-center whitespace-nowrap"
              >
                Start Hiring Now
              </Link>
              <Link
                href="/book-services"
                className="flex-1 sm:flex-none px-4 sm:px-10 py-4 sm:py-5 border border-white/20 text-white font-black text-xs sm:text-lg rounded-xl hover:bg-white/5 transition-all outline-hidden text-center whitespace-nowrap"
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
}
