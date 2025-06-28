// "use client";

// import { motion } from "framer-motion";
// import { ArrowDown } from "lucide-react";

// import type { Variants } from "framer-motion";
// export default function Hero() {
//   const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants: Variants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { type: "spring" as const, stiffness: 100 },
//     },
//   };

//   return (
//     <section
//       className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
//       style={{ backgroundImage: "url('/bakso-hero.png')" }}
//     >
//       <div className="absolute inset-0 bg-black/60"></div>
//       <motion.div
//         className="relative z-10 px-4 text-white"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         <motion.h1
//           className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-lg"
//           variants={itemVariants}
//         >
//           Bakso Kang Asep
//         </motion.h1>
//         <motion.p
//           className="mt-4 max-w-xl mx-auto text-lg md:text-xl drop-shadow-md"
//           variants={itemVariants}
//         >
//           Kenikmatan bakso sapi asli dengan kuah kaldu rempah yang menggoyang
//           lidah. Resep legendaris, rasa surgawi.
//         </motion.p>
//         <motion.a
//           href="#menu"
//           className="mt-8 inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-full shadow-lg hover:bg-orange-600"
//           variants={itemVariants}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           Lihat Menu & Harga
//           <ArrowDown className="ml-2 h-5 w-5" />
//         </motion.a>
//       </motion.div>
//     </section>
//   );
// }

// "use client";

// import { motion, Variants } from "framer-motion";
// import { ArrowDown } from "lucide-react";

// export default function Hero() {
//   // Varian untuk animasi container utama
//   const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15, // Stagger lebih cepat untuk animasi per kata
//         delayChildren: 0.5,
//       },
//     },
//   };

//   // Varian untuk setiap elemen teks
//   const itemVariants: Variants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { type: "spring", stiffness: 100 },
//     },
//   };

//   const headlineWords = ["Bakso", "Kang", "Asep"];

//   return (
//     <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
//       {/* 1. Latar Belakang Video */}
//       <div className="absolute top-0 left-0 w-full h-full z-[-1]">
//         <video autoPlay loop muted playsInline poster="/bakso-hero.png">
//           <source src="/bakso-video.mp4" type="video/mp4" />
//           Browser Anda tidak mendukung tag video.
//         </video>
//         {/* Lapisan overlay gelap */}
//         <div className="absolute inset-0 bg-black/60"></div>
//       </div>

//       <motion.div
//         className="relative z-10 px-4"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         {/* 3. Badge Status Buka Sekarang */}
//         <motion.div
//           className="inline-flex items-center gap-2 bg-green-500/80 backdrop-blur-sm text-white font-semibold px-4 py-2 rounded-full mb-6 border border-green-400"
//           variants={itemVariants}
//         >
//           <span className="relative flex h-3 w-3">
//             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
//             <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
//           </span>
//           Buka Sekarang
//         </motion.div>

//         {/* 2. Animasi Teks per Kata */}
//         <motion.h1
//           className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-lg"
//           variants={containerVariants} // Menggunakan container variant untuk stagger
//         >
//           {headlineWords.map((word, index) => (
//             <motion.span
//               key={index}
//               className="inline-block mr-3" // Beri jarak antar kata
//               variants={itemVariants}
//             >
//               {word}
//             </motion.span>
//           ))}
//         </motion.h1>

//         {/* 4. Personalisasi Lokal */}
//         <motion.p
//           className="mt-4 max-w-xl mx-auto text-lg md:text-xl drop-shadow-md"
//           variants={itemVariants}
//         >
//           Kenikmatan bakso sapi asli paling dicari di{" "}
//           <span className="font-semibold text-orange-300">Cilacap</span>. Resep
//           legendaris, rasa surgawi.
//         </motion.p>

//         <motion.div variants={itemVariants}>
//           <motion.a
//             href="#menu"
//             className="mt-8 inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-full shadow-lg transition-all duration-300 hover:bg-orange-600 hover:shadow-orange-500/40 hover:shadow-2xl hover:scale-105"
//             whileTap={{ scale: 0.95 }}
//           >
//             Lihat Menu & Harga
//           </motion.a>
//         </motion.div>
//       </motion.div>

//       {/* 5. Indikator Scroll Animasi */}
//       <motion.a
//         href="#tentang"
//         className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white"
//         initial={{ y: 0, opacity: 0.7 }}
//         animate={{ y: [0, 10, 0], opacity: [0.7, 1, 0.7] }}
//         transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
//         aria-label="Scroll ke bawah"
//       >
//         <ArrowDown className="w-8 h-8" />
//       </motion.a>
//     </section>
//   );
// }

// "use client";

// import { motion, Variants } from "framer-motion";
// import { ArrowDown } from "lucide-react";

// export default function Hero() {
//   const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.5,
//       },
//     },
//   };

//   const itemVariants: Variants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       // Pastikan tipe didefinisikan dengan benar untuk TypeScript
//       transition: { type: "spring" as const, stiffness: 100 },
//     },
//   };

//   const headlineWords = ["Bakso", "Kang", "Asep"];

//   return (
//     <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
//       <div className="absolute top-0 left-0 w-full h-full z-[-1]">
//         {/* Pastikan file ini ada di folder /public */}
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           // Poster adalah gambar yang ditampilkan sebelum video dimuat.
//           // Pastikan file ini juga ada di folder /public.
//           poster="/bakso-hero.png"
//           className="w-full h-full object-cover"
//         >
//           {/* Pastikan file ini ada di folder /public */}
//           <source src="/bakso-video.mp4" type="video/mp4" />
//           Browser Anda tidak mendukung tag video.
//         </video>
//         <div className="absolute inset-0 bg-black/60"></div>
//       </div>

//       {/* Sisa kode Anda sudah benar */}
//       <motion.div
//         className="relative z-10 px-4"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         <motion.div
//           className="inline-flex items-center gap-2 bg-green-500/80 backdrop-blur-sm text-white font-semibold px-4 py-2 rounded-full mb-6 border border-green-400"
//           variants={itemVariants}
//         >
//           <span className="relative flex h-3 w-3">
//             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
//             <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
//           </span>
//           Buka Sekarang
//         </motion.div>

//         <motion.h1
//           className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-lg"
//           variants={containerVariants}
//         >
//           {headlineWords.map((word, index) => (
//             <motion.span
//               key={index}
//               className="inline-block mr-3"
//               variants={itemVariants}
//             >
//               {word}
//             </motion.span>
//           ))}
//         </motion.h1>

//         <motion.p
//           className="mt-4 max-w-xl mx-auto text-lg md:text-xl drop-shadow-md"
//           variants={itemVariants}
//         >
//           Kenikmatan bakso sapi asli paling dicari di{" "}
//           <span className="font-semibold text-orange-300">Cilacap</span>. Resep
//           legendaris, rasa surgawi.
//         </motion.p>

//         <motion.div variants={itemVariants}>
//           <motion.a
//             href="#menu"
//             className="mt-8 inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-full shadow-lg transition-all duration-300 hover:bg-orange-600 hover:shadow-orange-500/40 hover:shadow-2xl hover:scale-105"
//             whileTap={{ scale: 0.95 }}
//           >
//             Lihat Menu & Harga
//           </motion.a>
//         </motion.div>
//       </motion.div>

//       <motion.a
//         href="#tentang"
//         className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white"
//         initial={{ y: 0, opacity: 0.7 }}
//         animate={{ y: [0, 10, 0], opacity: [0.7, 1, 0.7] }}
//         transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
//         aria-label="Scroll ke bawah"
//       >
//         <ArrowDown className="w-8 h-8" />
//       </motion.a>
//     </section>
//   );
// }

// "use client";

// import { motion, Variants } from "framer-motion";
// import { ArrowDown } from "lucide-react";

// export default function Hero() {
//   const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.5,
//       },
//     },
//   };

//   const itemVariants: Variants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { type: "spring" as const, stiffness: 100 },
//     },
//   };

//   const headlineWords = ["Bakso", "Kang", "Asep"];

//   return (
//     <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
//       <div className="absolute top-0 left-0 w-full h-full z-[-1]">
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           poster="/bakso-hero.png"
//           // PASTIKAN BARIS INI ADA! Ini mengatur agar video mengisi seluruh layar.
//           className="w-full h-full object-cover"
//         >
//           <source src="/bakso-video.mp4" type="video/mp4" />
//           Browser Anda tidak mendukung tag video.
//         </video>
//         <div className="absolute inset-0 bg-black/60"></div>
//       </div>

//       <motion.div
//         className="relative z-10 px-4"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         {/* Badge Status Buka Sekarang */}
//         <motion.div
//           className="inline-flex items-center gap-2 bg-green-500/80 backdrop-blur-sm text-white font-semibold px-4 py-2 rounded-full mb-6 border border-green-400"
//           variants={itemVariants}
//         >
//           <span className="relative flex h-3 w-3">
//             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
//             <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
//           </span>
//           Buka Sekarang
//         </motion.div>

//         {/* Animasi Teks per Kata */}
//         <motion.h1
//           className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-lg"
//           variants={containerVariants}
//         >
//           {headlineWords.map((word, index) => (
//             <motion.span
//               key={index}
//               className="inline-block mr-3"
//               variants={itemVariants}
//             >
//               {word}
//             </motion.span>
//           ))}
//         </motion.h1>

//         {/* Personalisasi Lokal */}
//         <motion.p
//           className="mt-4 max-w-xl mx-auto text-lg md:text-xl drop-shadow-md"
//           variants={itemVariants}
//         >
//           Kenikmatan bakso sapi asli paling dicari di{" "}
//           <span className="font-semibold text-orange-300">Cilacap</span>. Resep
//           legendaris, rasa surgawi.
//         </motion.p>

//         <motion.div variants={itemVariants}>
//           <motion.a
//             href="#menu"
//             className="mt-8 inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-full shadow-lg transition-all duration-300 hover:bg-orange-600 hover:shadow-orange-500/40 hover:shadow-2xl hover:scale-105"
//             whileTap={{ scale: 0.95 }}
//           >
//             Lihat Menu & Harga
//           </motion.a>
//         </motion.div>
//       </motion.div>

//       {/* Indikator Scroll Animasi */}
//       <motion.a
//         href="#tentang"
//         className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white"
//         initial={{ y: 0, opacity: 0.7 }}
//         animate={{ y: [0, 10, 0], opacity: [0.7, 1, 0.7] }}
//         transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
//         aria-label="Scroll ke bawah"
//       >
//         <ArrowDown className="w-8 h-8" />
//       </motion.a>
//     </section>
//   );
// }

"use client";

import { motion, Variants } from "framer-motion";
import { ArrowDown } from "lucide-react";
import VideoPlayer from "./VideoPlayer"; // Import komponen baru kita

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

  // Opsi untuk Video.js Player
  const videoJsOptions = {
    autoplay: true,
    muted: true,
    loop: true,
    controls: false, // Tidak menampilkan kontrol
    responsive: true,
    fluid: true, // Membuat video mengisi container
    poster: "/bakso-hero.png",
    sources: [
      {
        src: "/bakso-video.mp4",
        type: "video/mp4",
      },
    ],
  };

  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* 1. Mengganti <video> dengan komponen VideoPlayer */}
      <div className="absolute top-0 left-0 w-full h-full z-[-1]">
        <VideoPlayer options={videoJsOptions} className="w-full h-full" />
        {/* Lapisan overlay gelap */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <motion.div
        className="relative z-10 px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge Status Buka Sekarang */}
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

        {/* Animasi Teks per Kata */}
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

        {/* Personalisasi Lokal */}
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

      {/* Indikator Scroll Animasi */}
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
