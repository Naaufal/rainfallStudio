"use client";

import { framings, siteConfig, getServiceWhatsAppUrl } from "@/data/site";
import { formatRupiah } from "@/lib/format";
import { ArrowUpRight, MessageSquare, Info, Check } from "lucide-react";

export function Services() {
  return (
    <section id="layanan" className="py-16 md:py-24 relative border-b border-[#2A2826] scroll-mt-20 bg-[#161514]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 space-y-3 max-w-2xl">
          <div className="flex items-center gap-2 text-xs text-[#A39E98] tracking-wider uppercase font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C45439]" />
            <span>Tarif & Spesifikasi Komisi</span>
          </div>
          
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-[#F7F4EE] tracking-tight uppercase">
            TARIF DASAR SATU ORANG.
          </h2>
          
          <p className="font-serif italic text-sm sm:text-base text-[#A39E98] leading-relaxed">
            Tarif komisi berlaku untuk pilihan gaya Vector Normal maupun GTA Style. Sudah mencakup pengerjaan cepat 24 jam, maksimal 3 kali revisi kecil, serta berkas digital PNG & JPG resolusi tinggi siap cetak.
          </p>
        </div>

        {/* Editorial Comparative Ledger */}
        <div className="border-t border-[#2A2826] divide-y divide-[#2A2826]">
          {framings.map((item, index) => {
            const isPopular = item.id === "headshot";
            const waUrl = getServiceWhatsAppUrl(item.name, item.price);

            return (
              <div
                key={item.id}
                className={`py-8 transition-colors flex flex-col lg:flex-row lg:items-center justify-between gap-6 px-4 -mx-4 ${
                  isPopular ? "bg-[#1F1D1B]/70" : "hover:bg-[#1A1918]/60"
                }`}
              >
                {/* Left: Index + Name + Description */}
                <div className="flex items-start gap-4 sm:gap-6 lg:max-w-md">
                  <span className="font-serif italic text-sm sm:text-base text-[#C45439] mt-0.5 shrink-0">
                    N°0{index + 1}
                  </span>
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#F7F4EE] uppercase tracking-tight">
                        {item.name}
                      </h3>
                      {item.badge && (
                        <span className="px-2.5 py-0.5 bg-[#C45439] text-[#FFFFFF] text-[10px] font-semibold uppercase tracking-wider">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="font-serif italic text-sm text-[#A39E98] mt-1.5">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Middle: Included Inclusions List */}
                <div className="hidden sm:flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#A39E98] lg:max-w-xs">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#C45439]" />
                    <span>24 Jam Estimasi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#C45439]" />
                    <span>Maks. 3x Revisi Kecil</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#C45439]" />
                    <span>PNG & JPG HD Siap Cetak</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#C45439]" />
                    <span>Pembayaran QRIS</span>
                  </div>
                </div>

                {/* Right: Price + WhatsApp Dispatch Button */}
                <div className="flex items-center justify-between lg:justify-end gap-6 sm:gap-8 pt-3 sm:pt-0 border-t border-[#2A2826]/60 lg:border-t-0">
                  <div className="text-left lg:text-right">
                    <span className="font-display font-bold text-2xl sm:text-3xl text-[#F7F4EE] block leading-none">
                      {formatRupiah(item.price)}
                    </span>
                    <span className="text-[11px] text-[#A39E98] mt-1.5 block uppercase tracking-wider font-medium">
                      Harga Dasar 1 Orang
                    </span>
                  </div>

                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-atelier px-5 py-3.5 bg-[#C45439] hover:bg-[#A83F27] text-[#FFFFFF] font-sans font-medium text-xs tracking-wider uppercase inline-flex items-center gap-2 border border-[#C45439] shrink-0 shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Pesan {item.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 hidden sm:inline" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ledger Footnote for Extra People */}
        <div className="mt-10 p-5 bg-[#1A1918] border border-[#2A2826] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
          <div className="flex items-start gap-3">
            <Info className="w-4 h-4 text-[#C45439] shrink-0 mt-0.5" />
            <span className="text-[#A39E98] leading-relaxed">
              <strong className="text-[#F7F4EE] font-semibold uppercase tracking-wider">Orang Tambahan: </strong>
              {siteConfig.extraPersonNote}
            </span>
          </div>

          <a
            href={getServiceWhatsAppUrl("Group / Pasangan", 50000)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C45439] hover:text-[#D4A359] uppercase font-semibold tracking-wider shrink-0 underline underline-offset-4 transition-colors"
          >
            Konsultasi via WA →
          </a>
        </div>

      </div>
    </section>
  );
}
