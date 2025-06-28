"use client";

import { motion, Variants } from "framer-motion";
import { Flame } from "lucide-react";
import Image from "next/image";

const menuItems = [
  {
    name: "Bakso Urat Spesial",
    description:
      "Bakso urat jumbo dengan isian daging cincang, mie, bihun, dan sayuran.",
    price: "Rp 18.000",
    isBestSeller: true,
    imageSrc: "/menu-bakso-urat.png",
  },
  {
    name: "Bakso Telur Puyuh",
    description:
      "Bakso halus dengan isian telur puyuh, disajikan dengan kuah kaldu gurih.",
    price: "Rp 15.000",
    isBestSeller: false,
    imageSrc: "/menu-bakso-telur.png",
  },
  {
    name: "Bakso Polos",
    description:
      "Pilihan klasik bakso halus tanpa isian untuk penikmat rasa orisinal.",
    price: "Rp 12.000",
    isBestSeller: false,
    imageSrc: "/menu-bakso-polos.png",
  },
];

export default function Menu() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="menu" className="relative py-20 bg-slate-900 overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/subtle-pattern.svg')",
          backgroundRepeat: "repeat",
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl font-bold text-white"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Menu Andalan Kami
        </motion.h2>

        <motion.p
          className="mt-2 text-lg text-slate-300"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Harga pas, rasa memuaskan.
        </motion.p>
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {menuItems.map((item) => (
            <motion.div
              key={item.name}
              className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl shadow-lg overflow-hidden flex flex-col"
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div
                className="absolute inset-[-1px] z-20 rounded-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(to right, #f97316, #ea580c, #c2410c)",
                }}
              ></div>

              <div className="relative z-30 flex flex-col h-full">
                {/* Bagian Gambar */}
                <div className="relative w-full h-100">
                  <Image
                    src={item.imageSrc}
                    alt={`Gambar ${item.name}`}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {item.isBestSeller && (
                    <div className="absolute top-3 right-3 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                      <Flame className="w-3 h-3" />
                      PALING LARIS
                    </div>
                  )}
                </div>

                <div className="p-6 text-left flex-grow flex flex-col bg-slate-800/60">
                  <h3 className="text-2xl font-bold text-white">{item.name}</h3>
                  <p className="mt-2 text-slate-400 flex-grow">
                    {item.description}
                  </p>

                  <p className="mt-4 text-xl font-semibold text-orange-400">
                    {item.price}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
