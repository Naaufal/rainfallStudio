export type StyleId = "normal" | "gta";
export type FramingId = "headshot" | "half-body" | "full-body";

export interface StyleItem {
  id: StyleId;
  name: string;
  punchline: string;
  description: string;
  bestFor: string[];
}

export interface FramingItem {
  id: FramingId;
  name: string;
  description: string;
  price: number;
  badge?: string;
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

export const siteConfig = {
  brand: "Rainfall Studio",
  shortDescriptor: "Custom semi-realistic vector portrait, dibuat khusus dari foto pilihanmu.",
  headline: "Every face has a story.",
  subheadline:
    "Ubah foto favoritmu menjadi ilustrasi vector semi-realistis yang personal dan dibuat khusus untukmu.",
  tagline: "Your Moments, Drawn to Life.",
  whatsappDisplay: "+62 838-9528-5804",
  whatsappNumber: "6283895285804",
  instagramUrl: "https://instagram.com/r.rainfall",
  instagramHandle: "@r.rainfall",
  turnaround: "24 jam (estimasi)",
  revisions: "Maksimal 3 kali revisi kecil",
  fileFormats: "PNG & JPG resolusi tinggi",
  payment: "QRIS",
  basePriceNote: "Harga dasar untuk satu orang",
  extraPersonNote:
    "Ingin menambahkan orang lain? Hubungi kami untuk konfirmasi biaya tambahan.",
};

export const styles: StyleItem[] = [
  {
    id: "normal",
    name: "Vector Normal",
    punchline: "Halus, estetik, dan shading bertahap lembut",
    description:
      "Gaya rendering halus dengan gradasi warna lembut yang mempertahankan kehangatan ekspresi wajah asli secara artistik.",
    bestFor: ["Foto profil estetik", "Kado ulang tahun & anniversary", "Potret kenang-kenangan"],
  },
  {
    id: "gta",
    name: "GTA Style",
    punchline: "Tegas, kontras, dan outline dramatis",
    description:
      "Gaya tracing berani dengan kontur tegas, blok bayangan dramatis, dan karakter kuat ala digital artwork aksi legendaris.",
    bestFor: ["Avatar personal berkarakter", "Konten media sosial", "Tampilan standout & eksentrik"],
  },
];

export const framings: FramingItem[] = [
  {
    id: "headshot",
    name: "Headshot",
    description: "Kepala hingga bahu",
    price: 35000,
    badge: "Paling Populer",
  },
  {
    id: "half-body",
    name: "Half Body",
    description: "Ilustrasi setengah badan",
    price: 50000,
    badge: "Rekomendasi",
  },
  {
    id: "full-body",
    name: "Full Body",
    description: "Ilustrasi seluruh badan",
    price: 75000,
    badge: "Detail Lengkap",
  },
];

export const processSteps: StepItem[] = [
  {
    num: "01",
    title: "PILIH FRAMING",
    description:
      "Tentukan jenis framing yang kamu inginkan: Headshot (Rp35.000), Half Body (Rp50.000), atau Full Body (Rp75.000).",
  },
  {
    num: "02",
    title: "HUBUNGI WHATSAPP & KIRIM FOTO",
    description:
      "Klik tombol WhatsApp untuk langsung membuka chat. Kirimkan foto referensimu yang memiliki pencahayaan cukup dan wajah jelas.",
  },
  {
    num: "03",
    title: "KONFIRMASI ORANG TAMBAHAN",
    description:
      "Jika karya memuat lebih dari satu orang, kami akan mengonfirmasi detail biaya tambahan secara transparan melalui WhatsApp.",
  },
  {
    num: "04",
    title: "PEMBAYARAN VIA QRIS",
    description:
      "Lakukan pembayaran aman dan mudah memakai QRIS (mendukung GoPay, OVO, Dana, ShopeePay, serta seluruh m-banking).",
  },
  {
    num: "05",
    title: "PENGERJAAN 24 JAM",
    description:
      "Karya diproses secara teliti dengan estimasi waktu pengerjaan 24 jam setelah rincian dan konfirmasi disepakati.",
  },
  {
    num: "06",
    title: "MAKS. 3X REVISI KECIL",
    description:
      "Kamu mendapatkan kesempatan maksimal 3 kali revisi kecil (seperti penyesuaian warna atau kerapian garis) agar hasilnya memuaskan.",
  },
  {
    num: "07",
    title: "TERIMA FILE RESOLUSI TINGGI",
    description:
      "Hasil akhir diserahkan berupa file digital PNG (transparan) dan JPG resolusi tinggi siap cetak atau unggah.",
  },
];

export const faqs: FaqItem[] = [
  {
    q: "Apa pilihan jenis portrait yang tersedia?",
    a: "Rainfall Studio menyediakan tiga opsi framing vector portrait: Headshot (kepala hingga bahu), Half Body (setengah badan), dan Full Body (seluruh badan dari ujung kepala hingga kaki).",
  },
  {
    q: "Berapa harga dasarnya?",
    a: "Harga dasar untuk satu orang adalah Rp35.000 untuk Headshot, Rp50.000 untuk Half Body, dan Rp75.000 untuk Full Body.",
  },
  {
    q: "Bisa menggambar lebih dari satu orang dalam satu karya?",
    a: "Bisa! Kamu dapat memesan karya untuk pasangan, keluarga, atau teman dalam satu frame dengan biaya tambahan. Nominal biaya tambahan akan dikonfirmasikan langsung melalui WhatsApp.",
  },
  {
    q: "Berapa lama estimasi pengerjaannya?",
    a: "Estimasi pengerjaan adalah 24 jam setelah detail pesanan dan pembayaran dikonfirmasi.",
  },
  {
    q: "Apakah boleh mengajukan revisi?",
    a: "Tersedia jatah maksimal 3 kali revisi kecil untuk memastikan hasil akhir sesuai preferensimu tanpa mengubah konsep atau pose foto awal.",
  },
  {
    q: "Format file apa yang akan saya terima?",
    a: "Kamu akan menerima file digital resolusi tinggi berformat JPG (dengan latar/warna) dan PNG (tanpa latar/transparan) yang tajam untuk keperluan digital maupun cetak.",
  },
  {
    q: "Bagaimana cara melakukan pembayaran?",
    a: "Pembayaran dilakukan menggunakan QRIS yang praktis dan mendukung semua e-wallet serta seluruh mobile banking di Indonesia.",
  },
  {
    q: "Bagaimana cara memulai pemesanan?",
    a: "Pilih paket framing yang kamu inginkan, lalu klik tombol 'Pesan via WhatsApp'. Pesan awal akan terisi otomatis dan kamu cukup melampirkan foto yang ingin digambar.",
  },
];

export const aboutContent = {
  quote:
    "Di Rainfall Studio, foto favoritmu diubah jadi vector portrait semi-realistis yang terasa lebih personal. Mau headshot simpel, half body, atau ilustrasi full body, kamu bisa memilih gaya framing yang paling cocok. Setiap karya dibuat berdasarkan foto pilihanmu—buat jadi kenang-kenangan, hadiah, atau sekadar punya versi ilustrasi dari dirimu sendiri.",
  descriptor: "Custom semi-realistic vector portraits, made from your favorite photos.",
  tagline: "Your Moments, Drawn to Life.",
};

// Helper for generating standard WhatsApp URLs
export function getWhatsAppUrl(customMessage?: string): string {
  const phone = siteConfig.whatsappNumber;
  const defaultMsg =
    "Halo Rainfall Studio, saya tertarik dengan jasa custom vector portrait. Saya ingin tanya tentang pilihan layanan dan pemesanan.";
  const msg = customMessage || defaultMsg;
  return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
}

export function getServiceWhatsAppUrl(serviceName: string, price: number): string {
  const phone = siteConfig.whatsappNumber;
  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(price);

  const msg = `Halo Rainfall Studio, saya tertarik dengan layanan ${serviceName} seharga ${formattedPrice} untuk satu orang. Saya ingin bertanya tentang pemesanan.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
}
