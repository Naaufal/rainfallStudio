"use client";

import { useState } from "react";
import { styles, framings, site, addons, StyleId, FramingId } from "@/data/site";
import { OrderFormData } from "@/types";
import { formatRupiah, buildWhatsAppUrl } from "@/lib/format";
import { ArrowRight, AlertCircle } from "lucide-react";

interface OrderFormProps {
  selectedStyle?: StyleId;
  selectedFraming?: FramingId;
}

export function OrderForm({ selectedStyle, selectedFraming }: OrderFormProps) {
  const [formData, setFormData] = useState<OrderFormData>({
    name: "",
    style: selectedStyle || "normal",
    framing: selectedFraming || "headshot",
    peopleCount: 1,
    backgroundType: "polos",
    photoUrl: "",
    notes: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [prevStyle, setPrevStyle] = useState(selectedStyle);
  const [prevFraming, setPrevFraming] = useState(selectedFraming);

  if (selectedStyle && selectedStyle !== prevStyle) {
    setPrevStyle(selectedStyle);
    setFormData((prev) => ({ ...prev, style: selectedStyle }));
  }

  if (selectedFraming && selectedFraming !== prevFraming) {
    setPrevFraming(selectedFraming);
    setFormData((prev) => ({ ...prev, framing: selectedFraming }));
  }

  const currentFramingObj = framings.find((f) => f.id === formData.framing) || framings[0];
  const basePrice = currentFramingObj.price;

  const extraPeopleCount = formData.peopleCount > 1 ? formData.peopleCount - 1 : 0;
  const extraPersonRate = addons.extraPerson || 0;
  const customBgRate = formData.backgroundType === "custom" ? addons.customBackground || 0 : 0;

  const calculatedPrice = basePrice + extraPeopleCount * extraPersonRate + customBgRate;

  const hasNullAddons =
    (extraPeopleCount > 0 && addons.extraPerson === null) ||
    (formData.backgroundType === "custom" && addons.customBackground === null);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "NAMA WAJIB DIISI (MINIMAL 2 KARAKTER)";
    }

    if (formData.photoUrl.trim()) {
      try {
        new URL(formData.photoUrl);
      } catch {
        newErrors.photoUrl = "FORMAT URL TIDAK VALID (CONTOH: HTTPS://DRIVE.GOOGLE.COM/...)";
      }
    }

    if (formData.notes.length > 300) {
      newErrors.notes = "CATATAN MAKSIMAL 300 KARAKTER";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const waUrl = buildWhatsAppUrl(
      site.whatsapp,
      formData,
      calculatedPrice,
      hasNullAddons
    );

    window.open(waUrl, "_blank", "noopener,noreferrer");
    setIsSubmitted(true);
  };

  return (
    <section id="pesan" className="py-20 md:py-28 relative border-b border-[#EDE8DD]/14 scroll-mt-16">
      
      {/* Registration Cross Marks */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="reg-cross absolute top-0 left-4" />
        <div className="reg-cross absolute top-0 right-4" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="mb-12 space-y-2 text-center">
          <p className="font-mono text-xs tracking-widest text-[#EDE8DD]/60 uppercase">
            NO. 05 — LEMBAR PEMESANAN
          </p>
          <h2 className="font-condensed font-black text-4xl sm:text-6xl text-[#EDE8DD] uppercase tracking-tighter">
            FORM PEMESANAN.
          </h2>
        </div>

        {/* Order Slip / Ticket Container */}
        <div className="bg-[#16151B] border-2 border-[#EDE8DD]/30 p-6 sm:p-12 relative shadow-2xl">
          
          {/* Ticket Header & Dashed Tear Line */}
          <div className="flex items-center justify-between font-mono text-xs text-[#EDE8DD]/60 tracking-widest uppercase pb-6 border-b border-dashed border-[#EDE8DD]/30">
            <span>ORDER SLIP — RAINFALL STUDIO</span>
            <span>RAINFALL STUDIO</span>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-8 pt-8">
            
            {/* Field 1: Nama */}
            <div className="space-y-2">
              <label htmlFor="name-input" className="block font-mono text-xs font-bold uppercase text-[#EDE8DD] tracking-wider">
                1. NAMA LENGKAP *
              </label>
              <input
                id="name-input"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Tulis nama lengkap kamu"
                className="w-full bg-[#0D0C10] border border-[#EDE8DD]/30 focus:border-[#EDE8DD] p-4 font-mono text-sm text-[#EDE8DD] placeholder-[#EDE8DD]/30 focus:outline-none"
              />
              {errors.name && (
                <p className="font-mono text-xs text-[#E8A5A0] flex items-center gap-1 mt-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            {/* Field 2: Gaya */}
            <div className="space-y-3">
              <label className="block font-mono text-xs font-bold uppercase text-[#EDE8DD] tracking-wider">
                2. PILIH GAYA ILUSTRASI *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {styles.map((s) => {
                  const isSelected = formData.style === s.id;
                  const isNormal = s.id === "normal";

                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, style: s.id })}
                      className={`p-4 border font-mono text-xs text-left flex flex-col justify-between transition-all ${
                        isSelected
                          ? isNormal
                            ? "bg-[#4A3638] text-[#EDE8DD] border-[#E8A5A0] shadow-[4px_4px_0_0_#E8A5A0]"
                            : "bg-[#E0B424] text-[#0D0C10] border-[#0D0C10] shadow-[4px_4px_0_0_#0D0C10] font-bold"
                          : "bg-[#0D0C10] border-[#EDE8DD]/20 text-[#EDE8DD]/80 hover:border-[#EDE8DD]/50"
                      }`}
                    >
                      <span className="font-bold text-sm block mb-1">
                        [{s.name.toUpperCase()}]
                      </span>
                      <span className="opacity-80 text-[11px] block">{s.punchline}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Field 3: Ukuran */}
            <div className="space-y-3">
              <label className="block font-mono text-xs font-bold uppercase text-[#EDE8DD] tracking-wider">
                3. PILIH UKURAN POTONGAN *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {framings.map((f) => {
                  const isSelected = formData.framing === f.id;
                  return (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, framing: f.id })}
                      className={`p-4 border font-mono text-xs text-left flex flex-col justify-between transition-all ${
                        isSelected
                          ? "bg-[#EDE8DD] text-[#0D0C10] border-[#0D0C10] shadow-[4px_4px_0_0_#A3A8C3] font-bold"
                          : "bg-[#0D0C10] border-[#EDE8DD]/20 text-[#EDE8DD]/80 hover:border-[#EDE8DD]/50"
                      }`}
                    >
                      <div>
                        <span className="block font-bold text-sm">{f.name.toUpperCase()}</span>
                        <span className="block text-[10px] opacity-70">{f.description}</span>
                      </div>
                      <span className="block mt-4 font-extrabold text-sm">{formatRupiah(f.price)}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Field 4 & 5: Stepper & Background */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2 font-mono text-xs">
                <label className="block font-bold uppercase text-[#EDE8DD]">
                  4. JUMLAH ORANG (1–5)
                </label>
                <div className="flex items-center gap-3 bg-[#0D0C10] border border-[#EDE8DD]/30 p-2 w-fit">
                  <button
                    type="button"
                    disabled={formData.peopleCount <= 1}
                    onClick={() => setFormData({ ...formData, peopleCount: Math.max(1, formData.peopleCount - 1) })}
                    className="px-3 py-1 bg-[#16151B] border border-[#EDE8DD]/20 text-[#EDE8DD] disabled:opacity-30"
                  >
                    -
                  </button>
                  <span className="w-8 text-center font-bold text-sm text-[#EDE8DD]">
                    {formData.peopleCount}
                  </span>
                  <button
                    type="button"
                    disabled={formData.peopleCount >= 5}
                    onClick={() => setFormData({ ...formData, peopleCount: Math.min(5, formData.peopleCount + 1) })}
                    className="px-3 py-1 bg-[#16151B] border border-[#EDE8DD]/20 text-[#EDE8DD] disabled:opacity-30"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="space-y-2 font-mono text-xs">
                <label className="block font-bold uppercase text-[#EDE8DD]">
                  5. BACKGROUND
                </label>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, backgroundType: "polos" })}
                    className={`flex-1 py-3 px-4 border font-bold ${
                      formData.backgroundType === "polos"
                        ? "bg-[#EDE8DD] text-[#0D0C10] border-[#0D0C10]"
                        : "bg-[#0D0C10] border-[#EDE8DD]/20 text-[#EDE8DD]/70"
                    }`}
                  >
                    POLOS
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, backgroundType: "custom" })}
                    className={`flex-1 py-3 px-4 border font-bold ${
                      formData.backgroundType === "custom"
                        ? "bg-[#EDE8DD] text-[#0D0C10] border-[#0D0C10]"
                        : "bg-[#0D0C10] border-[#EDE8DD]/20 text-[#EDE8DD]/70"
                    }`}
                  >
                    CUSTOM
                  </button>
                </div>
              </div>
            </div>

            {/* Field 6: Link Foto */}
            <div className="space-y-2">
              <label htmlFor="photo-url-input" className="block font-mono text-xs font-bold uppercase text-[#EDE8DD] tracking-wider">
                6. LINK FOTO (OPSIONAL)
              </label>
              <input
                id="photo-url-input"
                type="url"
                value={formData.photoUrl}
                onChange={(e) => setFormData({ ...formData, photoUrl: e.target.value })}
                placeholder="Link Google Drive / Instagram (boleh dikosongkan)"
                className="w-full bg-[#0D0C10] border border-[#EDE8DD]/30 focus:border-[#EDE8DD] p-4 font-mono text-sm text-[#EDE8DD] placeholder-[#EDE8DD]/30 focus:outline-none"
              />
              {errors.photoUrl && (
                <p className="font-mono text-xs text-[#E8A5A0] flex items-center gap-1 mt-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.photoUrl}</span>
                </p>
              )}
            </div>

            {/* Field 7: Catatan */}
            <div className="space-y-2">
              <div className="flex items-center justify-between font-mono text-xs font-bold text-[#EDE8DD]">
                <label htmlFor="notes-input" className="uppercase">7. CATATAN KHUSUS (OPSIONAL)</label>
                <span>{formData.notes.length}/300</span>
              </div>
              <textarea
                id="notes-input"
                rows={3}
                maxLength={300}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Permintaan khusus warna atau detail..."
                className="w-full bg-[#0D0C10] border border-[#EDE8DD]/30 focus:border-[#EDE8DD] p-4 font-mono text-sm text-[#EDE8DD] placeholder-[#EDE8DD]/30 focus:outline-none resize-none"
              />
            </div>

            {/* Big Mono Numerals Live Estimate */}
            <div className="bg-[#0D0C10] border border-[#EDE8DD]/30 p-6 flex flex-col sm:flex-row items-baseline justify-between gap-4 font-mono">
              <span className="text-xs text-[#EDE8DD]/60 uppercase">ESTIMASI TOTAL BIAYA:</span>
              <span className="font-condensed font-black text-4xl sm:text-5xl text-[#EDE8DD]">
                {formatRupiah(calculatedPrice)}
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn-poster bg-[#EDE8DD] text-[#0D0C10] font-mono font-bold text-sm px-8 py-5 uppercase tracking-wider w-full flex items-center justify-between border border-[#0D0C10]"
            >
              <span>LANJUT KE WHATSAPP</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            {isSubmitted && (
              <div className="p-4 bg-emerald-950/60 border border-emerald-500 font-mono text-xs text-emerald-300 text-center uppercase">
                Aplikasi WhatsApp sedang dibuka. Silakan kirim pesan di sana!
              </div>
            )}

          </form>

        </div>

      </div>
    </section>
  );
}
