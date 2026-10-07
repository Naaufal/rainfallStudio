import type { Metadata } from "next";
import {
  Oswald,
  Playfair_Display,
  Space_Grotesk,
  DM_Mono,
} from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-big-shoulders",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-familjen",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.brand} — ${site.tagline}`,
  description: site.subtagline,
  keywords: [
    "vector art",
    "tracing foto",
    "kado ulang tahun",
    "vector portrait",
    "gta style art",
    "foto profil unik",
    "jasa ilustrasi foto",
  ],
  authors: [{ name: site.brand }],
  openGraph: {
    title: `${site.brand} — ${site.tagline}`,
    description: site.subtagline,
    url: "https://rainfallstudio.vercel.app",
    siteName: site.brand,
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.brand} — ${site.tagline}`,
    description: site.subtagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${oswald.variable} ${playfair.variable} ${spaceGrotesk.variable} ${dmMono.variable}`}
    >
      <body className="bg-[#0D0C10] text-[#EDE8DD] font-sans antialiased selection:bg-[#EDE8DD] selection:text-[#0D0C10]">
        <noscript>
          <style>{`.clip-wipe-hidden { clip-path: none !important; opacity: 1 !important; }`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
