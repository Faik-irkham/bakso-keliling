"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="bg-gray-800 py-6 text-center text-gray-400"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-4">
        <p>
          &copy; {new Date().getFullYear()} Bakso Kang Asep. Dibuat dengan ❤️.
        </p>
      </div>
    </motion.footer>
  );
}
