export type StyleId = "normal" | "gta";

export interface StyleItem {
  id: StyleId;
  name: string;
  punchline: string;
  description: string;
  bestFor: string[];
  accentColor: string;
}

export type FramingId = "headshot" | "half-body" | "full-body";

export interface FramingItem {
  id: FramingId;
  name: string;
  description: string;
  price: number;
}

export interface TestimonialItem {
  id: string;
  name: string;
  handle: string;
  text: string;
  style: string;
  isDummy: boolean;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface StepItem {
  num: string;
  title: string;
  description: string;
}

export const site = {
  brand: "Rainfall Studio",
  tagline: "Fotomu, jadi karya vektor yang nggak ada duanya.",
  subtagline: "Bikin foto profil, kado, atau kontenmu makin stand-out dengan ilustrasi vector art estetik & dramatis.",
  instagram: "r.rainfall",
  whatsapp: "6283895285804",
  turnaround: "Kurang dari 24 jam",
  revisions: "3x revisi",
  fileFormats: ["JPEG", "PNG"],
  payment: "QRIS",
};

export const styles: StyleItem[] = [
  {
    id: "normal",
    name: "Vector Normal",
    punchline: "Halus, estetik, penuh detail.",
    description: "Shading lembut dan bertahap, warna kalem, detail wajah dan mata dirender rapi.",
    bestFor: ["Foto profil", "Kado", "Couple"],
    accentColor: "#E8A5A0",
  },
  {
    id: "gta",
    name: "GTA Style",
    punchline: "Tegas, kontras, dramatis.",
    description: "Outline tebal, blok warna kuat, bayangan tegas. Cocok untuk yang mau tampil beda.",
    bestFor: ["PP yang nonjol", "Konten", "Merch"],
    accentColor: "#E0B424",
  },
];

export const framings: FramingItem[] = [
  {
    id: "headshot",
    name: "Headshot",
    description: "Wajah hingga bahu",
    price: 35000,
  },
  {
    id: "half-body",
    name: "Half body",
    description: "Kepala hingga pinggang/perut",
    price: 50000,
  },
  {
    id: "full-body",
    name: "Full body",
    description: "Seluruh badan dari kepala hingga kaki",
    price: 75000,
  },
];

export const addons = {
  extraPerson: null as number | null, // TODO: [ISI] biaya tambahan per orang bila sudah ditentukan
  customBackground: null as number | null, // TODO: [ISI] biaya background khusus bila sudah ditentukan
};

export const testimonials: TestimonialItem[] = [
  {
    id: "1",
    name: "Dika",
    handle: "@dika_prs",
    text: "Hasil vektornya gokil banget! Shading mata sama rambutnya rapi parah. Cocok banget buat kado ultah pacar.",
    style: "Vector Normal",
    isDummy: true,
  },
  {
    id: "2",
    name: "Rian Santos",
    handle: "@rian_st",
    text: "GTA style-nya beneran kerasa vibe San Andreas-nya! PP Instagram langsung kelihatan beda dari yang lain.",
    style: "GTA Style",
    isDummy: true,
  },
  {
    id: "3",
    name: "Siska & Andi",
    handle: "@siska_a",
    text: "Pengerjaannya cepet banget belum ada 24 jam udah dapet file PNG mulus tanpa background. Recommended!",
    style: "Vector Normal",
    isDummy: true,
  },
];

export const faqs: FaqItem[] = [
  {
    q: "Foto seperti apa yang bagus untuk diproses?",
    a: "Foto idealnya memiliki pencahayaan terang, tidak blur, dan ekspresi wajah terlihat jelas dengan resolusi tinggi. Semakin jelas fotomu, semakin maksimal detail vektor yang dihasilkan.",
  },
  {
    q: "Berapa lama proses pengerjaannya?",
    a: "Pengerjaan selesai dalam waktu kurang dari 24 jam setelah foto dan bukti pembayaran kami terima.",
  },
  {
    q: "Bisa revisi? Berapa kali?",
    a: "Bisa! Setiap pesanan sudah termasuk jatah 3x revisi minor (misalnya penyesuaian warna atau kerapian garis).",
  },
  {
    q: "Dapat file format apa saja?",
    a: "Kamu akan mendapatkan file resolusi tinggi format JPEG (dengan background) dan PNG transparan (tanpa background).",
  },
  {
    q: "Apa bedanya Headshot, Half Body, dan Full Body?",
    a: "Headshot mencakup bagian kepala hingga bahu; Half Body dari kepala hingga pinggang; dan Full Body mencakup seluruh badan dari kepala hingga kaki.",
  },
  {
    q: "Bisa lebih dari satu orang dalam satu foto?",
    a: "Bisa banget! Tinggal pilih jumlah orang di form pesanan. Biaya tambahan dikonfirmasi via WhatsApp.",
  },
  {
    q: "Boleh dipakai untuk keperluan komersial?",
    a: "Harga tertera untuk penggunaan pribadi. Untuk keperluan komersial (re-sell merchandise/logo bisnis), silakan konsultasikan lewat WhatsApp.",
  },
  {
    q: "Bagaimana cara pembayarannya?",
    a: "Pembayaran sangat mudah menggunakan QRIS (mendukung GoPay, OVO, ShopeePay, DANA, BCA, Mandiri, dan m-Banking lainnya).",
  },
  {
    q: "Apakah hasil karya saya akan dipublikasikan?",
    a: "Karya hanya diunggah ke portofolio atau media sosial kami jika kamu memberikan izin.",
  },
];

export const steps: StepItem[] = [
  {
    num: "01",
    title: "Pilih Gaya & Isi Form",
    description: "Tentukan gaya favoritmu (Vector Normal / GTA Style) dan lengkapi detail pesanan.",
  },
  {
    num: "02",
    title: "Kirim Foto via WhatsApp",
    description: "Klik tombol 'Lanjut ke WhatsApp' lalu kirimkan foto terbaikmu ke chat admin.",
  },
  {
    num: "03",
    title: "Bayar via QRIS",
    description: "Lakukan pembayaran mudah dan cepat memakai QRIS setelah rincian disepakati.",
  },
  {
    num: "04",
    title: "Terima Hasil & Revisi",
    description: "File dikirim < 24 jam. Kamu juga mendapat jatah 3x revisi bila diperlukan.",
  },
];
