import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const siteUrl = "https://bakso.faikirkham.my.id";

export const metadata: Metadata = {
  title: {
    default: "Bakso Kang Asep - Bakso Keliling Enak di Cilacap",
    template: "%s | Bakso Kang Asep",
  },
  description:
    "Bakso sapi keliling legendaris di Cilacap oleh Kang Asep. Temukan lokasi kami hari ini dan nikmati semangkuk bakso urat dan telur dengan resep turun-temurun.",
  keywords: [
    "bakso keliling",
    "bakso cilacap",
    "bakso kang asep",
    "jajanan cilacap",
    "kuliner cilacap",
    "bakso enak di cilacap",
    "bakso urat",
    "bakso telur",
  ],
  metadataBase: new URL(siteUrl),

  openGraph: {
    title: "Bakso Kang Asep - Juara Rasa, Juara di Hati",
    description:
      "Bakso keliling paling dicari di Cilacap dengan resep otentik.",
    url: siteUrl,
    siteName: "Bakso Kang Asep",
    images: [
      {
        url: "/bakso-hero.png",
        width: 1200,
        height: 630,
        alt: "Semangkuk Bakso Kang Asep yang Menggugah Selera",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bakso Kang Asep - Bakso Keliling Enak di Cilacap",
    description:
      "Siap berkeliling! Temukan lokasi kami dan nikmati bakso legendaris Kang Asep.",
    images: ["/bakso-hero.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: siteUrl,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={poppins.className}>
        {children}
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FoodEstablishment",
              name: "Bakso Kang Asep",
              description:
                "Bakso sapi keliling dengan resep legendaris di Cilacap.",
              url: siteUrl,
              telephone: "+6281328051202",
              servesCuisine: "Indonesian",
              priceRange: "$",
              image: `${siteUrl}/bakso-hero.png`,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Cilacap",
                addressRegion: "Jawa Tengah",
                addressCountry: "ID",
              },

              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Thursday", "Friday"],
                  opens: "16:00",
                  closes: "22:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Saturday", "Sunday"],
                  opens: "15:00",
                  closes: "23:00",
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
