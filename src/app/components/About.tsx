"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="tentang"
      className="relative bg-white py-20 md:py-32 overflow-x-hidden"
    >
      <div className="absolute top-0 right-0 h-full w-full md:w-2/3 lg:w-1/2 z-0">
        <Image
          src="/bakso-bg.png"
          alt="Latar belakang mangkuk bakso"
          fill
          priority
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-white/50 via-white/60 to-white"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            className="flex justify-center md:justify-start"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ type: "spring", stiffness: 80, delay: 0.1 }}
          >
            <Image
              src="/kang-asep.png"
              alt="Penjual Bakso Kang Asep"
              width={450}
              height={450}
              className="rounded-2xl shadow-2xl w-full max-w-md h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ type: "spring", stiffness: 80, delay: 0.2 }}
          >
            <div className=" p-8 md:p-10 rounded-2xl shadow-2xl border-2 border-white">
              <div className="w-16 h-1 bg-orange-500 mb-4 rounded-full"></div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
                Cerita di Balik Gerobak
              </h2>
              <p className="mt-5 text-lg text-black leading-relaxed">
                Berawal dari resep warisan keluarga, Bakso Kang Asep lahir dari
                kecintaan untuk menyajikan cita rasa otentik. Setiap mangkuk
                adalah janji kualitas, diracik dari daging sapi pilihan dan
                bumbu segar. Kami berkeliling setiap hari untuk membawa
                kehangatan semangkuk bakso langsung ke hadapan Anda.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
