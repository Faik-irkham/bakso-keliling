"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";
import { useEffect, useState } from "react";

const scheduleData = [
  { day: "Senin", time: "16:00 - 22:00", status: "Buka", dayIndex: 1 },
  { day: "Selasa", time: "16:00 - 22:00", status: "Buka", dayIndex: 2 },
  { day: "Rabu", time: "16:00 - 22:00", status: "Buka", dayIndex: 3 },
  { day: "Kamis", time: "16:00 - 22:00", status: "Buka", dayIndex: 4 },
  { day: "Jumat", time: "16:00 - 22:00", status: "Buka", dayIndex: 5 },
  { day: "Sabtu", time: "15:00 - 23:00", status: "Buka", dayIndex: 6 },
  { day: "Minggu", time: "15:00 - 23:00", status: "Buka", dayIndex: 0 },
];

export default function Schedule() {
  const [statusInfo, setStatusInfo] = useState({
    text: "Memeriksa status...",
    color: "bg-gray-500",
  });
  const [today, setToday] = useState(new Date().getDay());

  useEffect(() => {
    const now = new Date();

    const currentDay = now.getDay();
    const currentHour = now.getHours();

    setToday(currentDay);

    const todaySchedule = scheduleData.find((s) => s.dayIndex === currentDay);

    if (todaySchedule && todaySchedule.status === "Buka") {
      const [openHour, closeHour] = todaySchedule.time
        .split(" - ")
        .map((t) => parseInt(t.split(":")[0]));

      if (currentHour >= openHour && currentHour < closeHour) {
        setStatusInfo({
          text: "Buka! Sedang berkeliling area mangkal",
          color: "bg-green-500",
        });
      } else {
        setStatusInfo({
          text: "Tutup. Akan buka nanti.",
          color: "bg-yellow-500",
        });
      }
    } else {
      setStatusInfo({ text: "Hari ini libur", color: "bg-red-500" });
    }
  }, []);

  const phoneNumber = "6281328051202";

  return (
    <section id="lokasi" className="relative py-24 bg-slate-50 overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-50"
        style={{
          backgroundImage: "url('/map-pattern.svg')",
          backgroundRepeat: "repeat",
        }}
      ></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Jadwal & Lokasi
        </motion.h2>
        <motion.p
          className="mt-4 max-w-2xl mx-auto text-lg text-gray-600"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Cek status kami, temukan di peta, dan hubungi untuk lokasi pasti!
        </motion.p>

        <motion.div
          className="mt-12 max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-xl border text-left flex flex-col sm:flex-row items-center justify-between gap-4"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4">
            <div
              className={`w-5 h-5 rounded-full ${statusInfo.color} flex-shrink-0`}
            >
              <span className={`relative flex h-5 w-5`}>
                {statusInfo.color === "bg-green-500" && (
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                )}
                <span
                  className={`relative inline-flex rounded-full h-5 w-5 ${statusInfo.color}`}
                ></span>
              </span>
            </div>
            <p className="text-xl font-semibold text-gray-800">
              {statusInfo.text}
            </p>
          </div>
          <a
            href={`https://wa.me/${phoneNumber}?text=Halo%20Kang%20Asep,%20posisi%20dimana?`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white font-bold py-3 px-6 rounded-full flex items-center gap-2 whitespace-nowrap hover:bg-green-600 transition-all duration-300 w-full sm:w-auto justify-center"
          >
            <Phone size={18} />
            Tanya Lokasi
          </a>
        </motion.div>

        <div className="mt-16 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 text-left">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <Clock className="w-8 h-8 text-orange-500" />
              <h3 className="ml-4 text-3xl font-bold text-gray-800">
                Jam Operasional
              </h3>
            </div>
            <div className="space-y-3">
              {scheduleData.map((item) => (
                <div
                  key={item.day}
                  className={`p-4 rounded-lg flex justify-between items-center transition-all duration-300 ${
                    today === item.dayIndex
                      ? "bg-orange-100 border-orange-200 border-2 shadow-md"
                      : "bg-white shadow-sm border"
                  }`}
                >
                  <span
                    className={`font-semibold ${
                      today === item.dayIndex
                        ? "text-orange-600"
                        : "text-gray-700"
                    }`}
                  >
                    {item.day}
                  </span>
                  <span
                    className={`font-mono px-3 py-1 rounded-full text-sm ${
                      item.status === "Buka"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <MapPin className="w-8 h-8 text-orange-500" />
              <h3 className="ml-4 text-3xl font-bold text-gray-800">
                Area Mangkal
              </h3>
            </div>
            <div className="h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15810.72221846568!2d109.00940409720131!3d-7.717195822396116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e65129596131c97%3A0x4027a76e352e490!2sAlun-Alun%20Cilacap!5e0!3m2!1sen!2sid!4v1719608480749!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <p className="mt-4 text-gray-600 text-center italic">
              Kami biasa berkeliling di sekitar area ini. Hubungi kami untuk
              lokasi pastinya!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
