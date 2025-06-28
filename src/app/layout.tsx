import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Bakso Kang Asep - Juara Rasa, Juara di Hati",
  description:
    "Bakso sapi keliling dengan resep legendaris. Temukan lokasi kami dan nikmati semangkuk kebahagiaan hari ini!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
