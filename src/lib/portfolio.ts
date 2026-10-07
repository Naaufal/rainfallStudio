import fs from "fs";
import path from "path";
import { PortfolioItem } from "../types";
import { StyleId } from "../data/site";

function generatePlaceholderSvg(
  style: StyleId,
  index: number,
  _label?: string
): string {
  const isNormal = style === "normal";
  const bgGradStart = isNormal ? "#1B1824" : "#1F1C12";
  const bgGradEnd = isNormal ? "#2E283E" : "#362E15";
  const accentColor = isNormal ? "#E8A5A0" : "#E0B424";
  const titleText = isNormal ? "Vector Normal" : "GTA Style";

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="800" viewBox="0 0 600 800">
    <defs>
      <linearGradient id="grad_${style}_${index}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${bgGradStart}"/>
        <stop offset="100%" stop-color="${bgGradEnd}"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#grad_${style}_${index})"/>
    <circle cx="300" cy="350" r="140" fill="${accentColor}" opacity="0.15"/>
    <path d="M 220,320 Q 300,240 380,320 Q 380,440 300,480 Q 220,440 220,320 Z" fill="none" stroke="${accentColor}" stroke-width="4" opacity="0.4"/>
    <text x="300" y="340" text-anchor="middle" fill="${accentColor}" font-family="sans-serif" font-size="28" font-weight="bold">${titleText}</text>
    <text x="300" y="380" text-anchor="middle" fill="#F3F2F8" font-family="sans-serif" font-size="18" opacity="0.8">Sample Artwork #${index}</text>
    <text x="300" y="740" text-anchor="middle" fill="#9C9BB2" font-family="sans-serif" font-size="14">Rainfall Studio Portfolio</text>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export function getPortfolioItems(): PortfolioItem[] {
  const portfolioDir = path.join(process.cwd(), "public", "portfolio");

  if (!fs.existsSync(portfolioDir)) {
    try {
      fs.mkdirSync(portfolioDir, { recursive: true });
    } catch {
      // ignore
    }
  }

  let files: string[] = [];
  try {
    files = fs.readdirSync(portfolioDir);
  } catch {
    files = [];
  }

  const validExtensions = [".jpg", ".jpeg", ".png", ".webp"];
  const items: PortfolioItem[] = [];

  const matchedFiles = files.filter((file) => {
    const ext = path.extname(file).toLowerCase();
    if (!validExtensions.includes(ext)) {
      if (!file.startsWith(".")) {
        console.warn(
          `[Portfolio Reader Warning] File '${file}' diabaikan (ekstensi harus .jpg, .jpeg, .png, atau .webp)`
        );
      }
      return false;
    }
    if (!file.startsWith("normal-") && !file.startsWith("gta-")) {
      console.warn(
        `[Portfolio Reader Warning] File '${file}' diabaikan (harus diawali 'normal-' atau 'gta-')`
      );
      return false;
    }
    return true;
  });

  matchedFiles.sort((a, b) => a.localeCompare(b));

  matchedFiles.forEach((file, index) => {
    const style: StyleId = file.startsWith("normal-") ? "normal" : "gta";
    const styleLabel = style === "normal" ? "Vector Normal" : "GTA Style";
    const itemNum = index + 1;

    items.push({
      id: `real-${index}-${file}`,
      src: `/portfolio/${file}`,
      alt: `Vector art portrait gaya ${styleLabel} nomor ${itemNum}`,
      style,
      styleLabel,
      filename: file,
    });
  });

  // If no portfolio files exist, supply placeholders (3 for normal, 3 for gta)
  if (items.length === 0) {
    const defaultNormalCount = 3;
    const defaultGtaCount = 3;

    for (let i = 1; i <= defaultNormalCount; i++) {
      items.push({
        id: `placeholder-normal-${i}`,
        src: generatePlaceholderSvg("normal", i, "Vector Normal"),
        alt: `Vector art portrait gaya Vector Normal nomor ${i} (Placeholder)`,
        style: "normal",
        styleLabel: "Vector Normal",
        filename: `normal-0${i}.svg`,
      });
    }

    for (let i = 1; i <= defaultGtaCount; i++) {
      items.push({
        id: `placeholder-gta-${i}`,
        src: generatePlaceholderSvg("gta", i, "GTA Style"),
        alt: `Vector art portrait gaya GTA Style nomor ${i} (Placeholder)`,
        style: "gta",
        styleLabel: "GTA Style",
        filename: `gta-0${i}.svg`,
      });
    }
  }

  return items;
}
