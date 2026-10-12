import type { Metadata, Viewport } from "next";
import { Syne, Plus_Jakarta_Sans, Newsreader } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site";

const syne = Syne({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#121110",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: `${siteConfig.brand} — Custom Vector Portrait & Face Tracing`,
  description: siteConfig.subheadline,
  keywords: [
    "Rainfall Studio",
    "vector portrait",
    "face tracing",
    "custom portrait",
    "semi realistic vector",
    "kado personal",
    "hadiah digital",
    "ilustrasi wajah",
  ],
  authors: [{ name: siteConfig.brand }],
  openGraph: {
    title: `${siteConfig.brand} — Custom Semi-Realistic Vector Portrait`,
    description: siteConfig.subheadline,
    siteName: siteConfig.brand,
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brand} — Custom Semi-Realistic Vector Portrait`,
    description: siteConfig.subheadline,
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
      className={`${syne.variable} ${plusJakartaSans.variable} ${newsreader.variable}`}
    >
      <body className="bg-[#121110] text-[#F7F4EE] antialiased selection:bg-[#C45439] selection:text-[#FFFFFF] font-sans">
        {children}
      </body>
    </html>
  );
}
