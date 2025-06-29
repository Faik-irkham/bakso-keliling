"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/faikirkham/",
      iconPath: "/instagram.png",
    },
    {
      name: "Facebook",
      href: "https://www.instagram.com/faikirkham/",
      iconPath: "/facebook.png",
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@faik_irkham",
      iconPath: "/tik-tok.png",
    },
  ];

  return (
    <motion.footer
      className="bg-slate-900 text-slate-400 py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-4 text-center">
        <h4 className="font-semibold text-white text-lg mb-4">
          Temukan Kami Juga di Media Sosial
        </h4>

        <div className="flex justify-center items-center gap-6 mb-8">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity duration-300 hover:opacity-80"
              aria-label={`Kunjungi halaman ${item.name} kami`}
            >
              <Image
                src={item.iconPath}
                alt={`${item.name} icon`}
                width={28}
                height={28}
                className="filter invert transition-opacity duration-300 group-hover:opacity-80"
              />
            </a>
          ))}
        </div>

        <p className="text-sm">
          &copy; {new Date().getFullYear()} Bakso Kang Asep. Dibuat dengan ❤️
          untuk UMKM Cilacap.
        </p>
      </div>
    </motion.footer>
  );
}
