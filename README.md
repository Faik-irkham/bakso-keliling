# Landing Page Bakso Kang Asep

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

Selamat datang di repositori Landing Page Bakso Kang Asep! Ini adalah _template_ landing page modern yang dibuat untuk usaha bakso keliling. Proyek ini didesain dengan fokus pada UI/UX yang menarik dan informatif untuk menarik pelanggan, serta dioptimalkan untuk performa web dan SEO tingkat lanjut.

Proyek ini menunjukkan bagaimana teknologi dapat membantu dalam pembuatan website yang fungsional dan estetis untuk UMKM.

![Tangkapan Layar Website Bakso Kang Asep](https://bakso-keliling.vercel.app/bakso-keliling.vercel.app.png)
_(Tips: Ganti URL di atas dengan screenshot hasil akhir website Anda)_

## ✨ Fitur Utama

- **Latar Belakang Gambar Hero yang Dinamis:** Bagian Hero menggunakan gambar statis yang dioptimalkan oleh `next/image` untuk loading cepat.
- **Animasi Halus:** Transisi dan animasi di seluruh halaman dibuat menggunakan **Framer Motion** untuk pengalaman pengguna yang lebih hidup.
- **Kartu Status Dinamis:** Memberi tahu pengunjung secara otomatis apakah penjual sedang **Buka**, **Tutup**, atau **Istirahat** berdasarkan waktu dan hari saat itu (WIB).
- **Jadwal Interaktif:** Menyorot jadwal untuk hari ini agar mudah dilihat oleh pelanggan.
- **Peta Google Maps Interaktif:** Memudahkan pelanggan melihat area mangkal utama.
- **Desain Responsif (Mobile-First):** Tampilan dioptimalkan untuk semua perangkat, terutama ponsel.
- **Optimasi SEO Tingkat Lanjut:** Dilengkapi dengan metadata Open Graph, Twitter Cards, dan skema JSON-LD (`FoodEstablishment`) untuk hasil pencarian yang lebih baik.
- **Komponen Modern:** Dibangun menggunakan komponen React yang terstruktur dengan baik.

## 🚀 Teknologi yang Digunakan

- **Framework:** [Next.js](https://nextjs.org/) 14+ (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animasi:** [Framer Motion](https://www.framer.com/motion/)
- **Bahasa:** [TypeScript](https://www.typescriptlang.org/)
- **Ikon:** Aset PNG Kustom
- **Linting & Formatting:** ESLint & Prettier

## 🔧 Instalasi dan Menjalankan Proyek

Untuk menjalankan proyek ini di komputer lokal Anda, ikuti langkah-langkah berikut:

1.  **Clone repositori ini:**

    ```bash
    git clone [https://github.com/nama-anda/nama-repo-ini.git](https://github.com/nama-anda/nama-repo-ini.git)
    ```

2.  **Masuk ke direktori proyek:**

    ```bash
    cd nama-repo-ini
    ```

3.  **Install semua dependensi:**

    ```bash
    npm install
    ```

4.  **Jalankan server pengembangan:**

    ```bash
    npm run dev
    ```

5.  Buka browser Anda dan akses [http://localhost:3000](http://localhost:3000).

## ⚙️ Kustomisasi (Cara Menggunakan Template Ini)

Untuk mengadaptasi template ini untuk usaha Anda sendiri, berikut adalah daftar hal yang perlu Anda ubah:

- **Teks Konten:**

  - Ubah nama, deskripsi, dan personalisasi lokal di `app/components/Hero.tsx`.
  - Ubah cerita di `app/components/About.tsx`.
  - Perbarui daftar menu dan harga di `app/components/Menu.tsx`.

- **Aset Visual (di folder `/public`):**

  - Ganti `bakso-hero.png` (gambar latar utama).
  - Ganti `kang-asep.jpg` (foto penjual).
  - Ganti `bakso.jpg` (gambar latar samar).
  - Ganti gambar menu: `menu-bakso-urat.jpg`, `menu-bakso-telur.jpg`, dst.
  - Ganti ikon media sosial: `instagram-icon.png`, `facebook-icon.png`, `tiktok-icon.png`.
  - Ganti gambar untuk SEO `og-image.jpg` (ukuran 1200x630 piksel).
  - Buat dan ganti `favicon.ico` dan ikon lainnya.

- **Pengaturan & Jadwal:**

  - Ubah jadwal, nomor telepon, dan link Google Maps di `app/components/Schedule.tsx`.
  - Ubah link media sosial di `app/components/Footer.tsx`.

- **SEO & Metadata (PENTING):**
  - Buka `app/layout.tsx` dan ubah `siteUrl`, `title`, `description`, `keywords`, serta nomor telepon dan detail lainnya di dalam skrip JSON-LD.

---

Dibuat dengan ❤️ untuk kemajuan UMKM.
_Faik Irkham._
