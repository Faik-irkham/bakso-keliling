"use client";

import { motion } from "framer-motion";
import { MessageCircleQuestionMark } from "lucide-react";

export default function CTA() {
  const phoneNumber = "6281328051202";
  const message = "Halo, Kang Asep. Mau tanya info baksonya dong.";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    message
  )}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg"
      aria-label="Hubungi via WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1, ease: [0, 0.71, 0.2, 1.01] }}
      whileHover={{
        scale: 1.1,
        transition: { type: "spring", stiffness: 300 },
      }}
      whileTap={{ scale: 0.9 }}
    >
      <MessageCircleQuestionMark className="w-8 h-8 text-white" />
    </motion.a>
  );
}
