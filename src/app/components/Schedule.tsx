// import { MapPin, Clock } from "lucide-react";

// export default function Schedule() {
//   return (
//     <section id="lokasi" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4 text-center">
//         <h2 className="text-4xl font-bold text-gray-800">Jadwal & Lokasi</h2>
//         <p className="mt-2 text-lg text-gray-500">
//           Temukan kami di lokasi favorit Anda!
//         </p>
//         <div className="mt-10 max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-left">
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <div className="flex items-center">
//               <Clock className="w-6 h-6 text-orange-500" />
//               <h3 className="ml-3 text-2xl font-semibold text-gray-800">
//                 Jam Operasional
//               </h3>
//             </div>
//             <ul className="mt-4 space-y-2 text-gray-600">
//               <li>
//                 <strong>Senin - Jumat:</strong> 16:00 - 22:00 WIB
//               </li>
//               <li>
//                 <strong>Sabtu & Minggu:</strong> 15:00 - 23:00 WIB
//               </li>
//               <li>
//                 <strong>Rabu:</strong> Libur
//               </li>
//             </ul>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <div className="flex items-center">
//               <MapPin className="w-6 h-6 text-orange-500" />
//               <h3 className="ml-3 text-2xl font-semibold text-gray-800">
//                 Area Mangkal
//               </h3>
//             </div>
//             <p className="mt-4 text-gray-600">
//               Setiap hari kami berkeliling di area **Alun-Alun Kota** dan
//               **Taman Digital**. Untuk lokasi pasti, silakan hubungi kami via
//               WhatsApp!
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";

export default function Schedule() {
  return (
    <section id="lokasi" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        {/* ... (Judul dan subjudul bisa ditambahkan animasi fade-in seperti di Menu) ... */}
        <h2 className="text-4xl font-bold text-gray-800">Jadwal & Lokasi</h2>
        <p className="mt-2 text-lg text-gray-500">
          Temukan kami di lokasi favorit Anda!
        </p>
        <div className="mt-10 max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-left">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center">
              <Clock className="w-6 h-6 text-orange-500" />
              <h3 className="ml-3 text-2xl font-semibold text-gray-800">
                Jam Operasional
              </h3>
            </div>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>
                <strong>Senin - Jumat:</strong> 16:00 - 22:00 WIB
              </li>
              <li>
                <strong>Sabtu & Minggu:</strong> 15:00 - 23:00 WIB
              </li>
              <li>
                <strong>Rabu:</strong> Libur
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center">
              <MapPin className="w-6 h-6 text-orange-500" />
              <h3 className="ml-3 text-2xl font-semibold text-gray-800">
                Area Mangkal
              </h3>
            </div>
            <p className="mt-4 text-gray-600">
              Setiap hari kami berkeliling di area{" "}
              <strong>Alun-Alun Cilacap</strong> dan <strong>Taman Kota</strong>
              . Untuk lokasi pasti, silakan hubungi kami via WhatsApp!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
