# 🎨 Rainfall Studio — Website Company Profile

> **"Fotomu, Digaris Ulang."**  
> Website *company profile* (one-page) untuk **Rainfall Studio** — studio jasa pembuatan karya *hand-traced vector art portrait*. Dibangun dengan arsitektur **mobile-first**, performa tinggi, dan art direction editorial **"Pen Tool Poster"**.

Proyek ini dibuat sebagai implementasi bisnis digital untuk mata kuliah **Bisnis Elektronik**.

---

## 🌟 Art Direction: "Pen Tool Poster"

Berbeda dari website AI-generik yang mengandalkan bayangan kabur dan gradien ungu, Rainfall Studio mengusung estetika **poster & zine fisik** karya ilustrator vektor:

- **Motif Desain Vektor**: Sudut tegas (0–2px radius), crop marks & registration marks (`+`), garis hairline (`rgba(237,232,221,0.14)`), dan nomor indeks (`NO. 01`, `NO. 02`).
- **Bayangan Tegas (Hard Offset Shadow)**: Tombol menggunakan bayangan padat 4px tanpa blur (`box-shadow: 4px 4px 0 #A3A8C3`).
- **Palet Warna Bidang Datar (Flat Color Fields)**:
  - `ink` (`#0D0C10`): Warna dasar kanvas gelap
  - `ink-2` (`#16151B`): Panel kontras & kartu
  - `bone` (`#EDE8DD`): Warna teks utama & kertas
  - `periwinkle` (`#A3A8C3`): Aksen blok hero
  - `mauve` (`#4A3638`) & `rose` (`#E8A5A0`): Teritori gaya **Vector Normal**
  - `mustard` (`#E0B424`): Teritori gaya **GTA Style**
- **Tipografi Editorial Berkarakter**:
  - **GTA / Brand Loud**: *Oswald* (Condensed Grotesque tebal, huruf kapital rapat)
  - **Vector Normal / Soft**: *Playfair Display* (Serif miring elegan)
  - **Body Text**: *Space Grotesk* (Grotesk bersih dan mudah dibaca)
  - **Label & Metadata**: *DM Mono* (Monospace huruf kapital dengan spasi lebar)

---

## 🚀 Fitur Utama & Logika Bisnis

1. **Alur Pemesanan Cepat via WhatsApp (Zero-Friction)**:
   - Formulir bertema tiket pesanan (*order slip*) dengan dashed tear line.
   - Perhitungan estimasi harga otomatis secara *real-time*.
   - Saat submit, membuka direct link `https://wa.me/62...` dengan pesan pesanan terformat rapi (termasuk nama, gaya, framing, jumlah orang, link foto, catatan, dan estimasi harga).
2. **Folder-Based Portfolio Scanner**:
   - Mendukung penambahan karya tanpa ubah kode! Cukup letakkan file gambar di `public/portfolio/` dengan awalan nama `normal-XX` atau `gta-XX`.
   - Otomatis terklasifikasi ke filter galeri dan lightbox modal.
   - Memiliki generator placeholder SVG bawaan jika folder kosong.
3. **Menu Tarif Interaktif**:
   - Tampilan daftar harga bergaya *printed menu table* dengan siluet diagram crop (Headshot, Half Body, Full Body).
   - Klik pada baris tarif langsung auto-scroll dan mengisi formulir pesanan.
4. **Perbandingan Gaya Split-Panel**:
   - Dua panel berdampingan (Vector Normal vs GTA Style) dengan fitur *flex-grow* saat di-hover di desktop.
   - Klik tombol gaya langsung auto-scroll dan memilih gaya di form pesanan.
5. **Alur Pengerjaan (Process)**:
   - 4 langkah pemesanan disusun di sepanjang garis kurva bezier SVG dengan titik square anchor node.
6. **Aksesibilitas & Performa Tinggi**:
   - Standar **Mobile-First** (optimal untuk layar 360px hingga layar desktop lebar).
   - Seluruh konten 100% terbaca dan terlihat tanpa JavaScript (dilengkapi fallback `<noscript>`).
   - Mendukung `prefers-reduced-motion` untuk kenyamanan visual.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack, TypeScript)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Google Fonts (`Oswald`, `Playfair Display`, `Space Grotesk`, `DM Mono`)
- **Deployment Target**: [Vercel](https://vercel.com/)

---

## 📁 Struktur Proyek

```text
comproWebsite/
├── public/
│   ├── portfolio/         # Folder aset portofolio (normal-XX, gta-XX)
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
├── requirement/
│   └── PRD.md             # Dokumen Product Requirements Document
├── src/
│   ├── app/
│   │   ├── globals.css    # Token desain poster, film grain, keyframes
│   │   ├── layout.tsx     # Root layout & konfigurasi font
│   │   ├── page.tsx       # Root entry page
│   │   ├── robots.ts      # Generator robots.txt otomatis
│   │   ├── sitemap.ts     # Generator sitemap.xml otomatis
│   │   └── global-error.tsx # Error boundary mandiri Next.js
│   ├── components/
│   │   ├── Navbar.tsx         # Flat ink navbar dengan smart hide/show
│   │   ├── Hero.tsx           # Asymmetric hero dengan bleeding artwork
│   │   ├── MarqueeTicker.tsx  # Running text strip tanpa frame drop
│   │   ├── StyleCards.tsx     # Split-panel Vector Normal & GTA Style
│   │   ├── Pricing.tsx        # Menu tarif dengan crop diagrams
│   │   ├── Portfolio.tsx      # Irregular editorial gallery & filter
│   │   ├── Lightbox.tsx       # Fullscreen artwork viewer
│   │   ├── Process.tsx        # 4 langkah kerja dengan kurva bezier SVG
│   │   ├── OrderForm.tsx      # Tiket form pemesanan & generator WA
│   │   ├── Testimonials.tsx   # Ulasan klien dengan serif quote
│   │   ├── Faq.tsx            # Daftar pertanyaan dengan square toggle
│   │   ├── Footer.tsx         # Footer dengan wordmark besar
│   │   ├── ScrollProgress.tsx # Indikator garis progres scroll 3px
│   │   └── FloatingCta.tsx    # Tombol WhatsApp melayang untuk mobile
│   ├── data/
│   │   └── site.ts        # PUSAT DATA: kontak, harga, FAQ, testimoni
│   ├── hooks/
│   │   ├── useActiveSection.ts   # Deteksi section aktif untuk navbar
│   │   ├── useInView.ts          # Intersection observer hook
│   │   ├── useScrollDirection.ts # Deteksi arah scroll untuk navbar hide/show
│   │   └── useScrollY.ts         # Global scroll listener yang dibagikan
│   ├── lib/
│   │   ├── format.ts      # Format Rupiah & builder pesan WhatsApp
│   │   └── portfolio.ts   # Scanner folder otomatis public/portfolio/
│   └── types/
│       └── index.ts       # Definisi TypeScript interface & types
├── next.config.ts         # Konfigurasi Next.js & Turbopack
├── package.json
└── tsconfig.json
```

---

## 💻 Panduan Menjalankan Secara Lokal

### 1. Prasyarat
- Node.js versi 18.18 atau lebih baru (direkomendasikan Node.js 20+ / 22+).
- npm atau yarn.

### 2. Langkah Menjalankan
1. Masuk ke folder proyek:
   ```powershell
   cd comproWebsite
   ```
2. Install dependensi (jika baru pertama kali):
   ```bash
   npm install
   ```
3. Jalankan server pengembangan (*Development*):
   ```bash
   npm run dev
   ```
   Buka peramban di [http://localhost:3000](http://localhost:3000).

4. Uji kompilasi produksi (*Production Build*):
   ```bash
   npm run build
   ```
   > 💡 *Catatan Pengguna Windows:* Pastikan terminal Anda berada di path dengan huruf besar/kecil yang sesuai (`comproWebsite`) untuk menghindari konflik resolusi modul.

---

## ✏️ Panduan Mengubah Konten Studio

Seluruh informasi website dipusatkan dalam **satu file data** sehingga Anda tidak perlu menyentuh kode komponen.

### 1. Mengubah Kontak, Harga, dan Informasi Studio
Buka file [`src/data/site.ts`](file:///e:/Perkuliahan/Naufal/Semester7/BisnisElektronik/comproWebsite/src/data/site.ts):
- **Nomor WhatsApp**: Ubah `site.whatsapp` (format: `"6283895285804"`).
- **Instagram**: Ubah `site.instagram` (format: `"r.rainfall"`).
- **Tarif Ukuran**: Ubah angka pada array `framings` (`headshot`: 35000, `half-body`: 50000, `full-body`: 75000).
- **Biaya Tambahan (Addons)**: Jika biaya tambahan per orang atau custom background sudah ditentukan, ubah `addons.extraPerson` atau `addons.customBackground` dari `null` menjadi angka (contoh: `20000`).
- **FAQ & Testimoni**: Tambah atau perbarui daftar pada array `faqs` dan `testimonials`.

### 2. Menambah Karya Baru ke Portofolio
- Buka folder `public/portfolio/`.
- Simpan file gambar dengan aturan format penamaan:
  - Gaya Vector Normal: diawali `normal-` (contoh: `normal-04.jpg`, `normal-05.png`).
  - Gaya GTA Style: diawali `gta-` (contoh: `gta-04.jpg`, `gta-05.webp`).
- Saat website di-refresh / di-rebuild, karya baru akan otomatis muncul di portofolio tanpa konfigurasi tambahan!

---

## ☁️ Panduan Deploy ke Vercel

1. Buat repository baru di **GitHub** dan unggah (*push*) seluruh file proyek:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit rainfall studio"
   git branch -M main
   git remote add origin <URL_REPOSITORY_ANDA>
   git push -u origin main
   ```
2. Buka [Vercel Dashboard](https://vercel.com/dashboard) dan klik **"Add New Project"**.
3. Hubungkan repository GitHub proyek Anda.
4. Vercel akan otomatis mendeteksi framework preset: **Next.js**.
5. Klik tombol **"Deploy"**. Website akan aktif dalam hitungan detik tanpa memerlukan konfigurasi env tambahan.

---

## 📄 Lisensi
© 2026 Rainfall Studio. Dikembangkan untuk keperluan akademik tugas mata kuliah Bisnis Elektronik.
