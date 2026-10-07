import { OrderFormData } from "../types";
import { styles, framings } from "../data/site";

export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function buildWhatsAppUrl(
  phone: string,
  formData: OrderFormData,
  priceEstimate: number,
  hasNullAddons: boolean
): string {
  const styleObj = styles.find((s) => s.id === formData.style);
  const framingObj = framings.find((f) => f.id === formData.framing);

  const styleName = styleObj ? styleObj.name : formData.style;
  const framingName = framingObj ? framingObj.name : formData.framing;
  const priceFormatted = formatRupiah(priceEstimate);

  const priceText = hasNullAddons
    ? `${priceFormatted} (estimasi awal, final dikonfirmasi via WA)`
    : priceFormatted;

  const lines = [
    `Halo Rainfall Studio! Aku mau pesan vector art.`,
    ``,
    `Nama: ${formData.name.trim()}`,
    `Gaya: ${styleName}`,
    `Ukuran: ${framingName}`,
    `Jumlah orang: ${formData.peopleCount}`,
    `Background: ${formData.backgroundType === "polos" ? "Polos" : "Custom"}`,
    `Estimasi: ${priceText}`,
    `Link foto: ${formData.photoUrl.trim() || "-"}`,
    `Catatan: ${formData.notes.trim() || "-"}`,
    ``,
    `Fotonya aku kirim setelah ini ya.`,
  ];

  const messageText = lines.join("\n");
  const encodedMessage = encodeURIComponent(messageText);

  // Clean phone number: remove +, -, spaces
  const cleanPhone = phone.replace(/[^0-9]/g, "");

  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}
