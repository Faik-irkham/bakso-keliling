"use client";

import { motion, Variants } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100 },
    },
  };

  const headlineWords = ["Bakso", "Kang", "Asep"];

  return (
    <section
      className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden"
      style={{
        backgroundImage: "url('/bakso-hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <motion.div
        className="relative z-10 px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="inline-flex items-center gap-2 bg-green-500/80 backdrop-blur-sm text-white font-semibold px-4 py-2 rounded-full mb-6 border border-green-400"
          variants={itemVariants}
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
          </span>
          Buka Sekarang
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-lg"
          variants={containerVariants}
        >
          {headlineWords.map((word, index) => (
            <motion.span
              key={index}
              className="inline-block mr-3"
              variants={itemVariants}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="mt-4 max-w-xl mx-auto text-lg md:text-xl drop-shadow-md"
          variants={itemVariants}
        >
          Kenikmatan bakso sapi asli paling dicari di{" "}
          <span className="font-semibold text-orange-300">Cilacap</span>. Resep
          legendaris, rasa surgawi.
        </motion.p>

        <motion.div variants={itemVariants}>
          <motion.a
            href="#menu"
            className="mt-8 inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-full shadow-lg transition-all duration-300 hover:bg-orange-600 hover:shadow-orange-500/40 hover:shadow-2xl hover:scale-105"
            whileTap={{ scale: 0.95 }}
          >
            Lihat Menu & Harga
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#tentang"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white"
        initial={{ y: 0, opacity: 0.7 }}
        animate={{ y: [0, 10, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Scroll ke bawah"
      >
        <ArrowDown className="w-8 h-8" />
      </motion.a>
    </section>
  );
}
