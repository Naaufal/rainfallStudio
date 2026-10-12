import fs from "fs";
import path from "path";
import { PortfolioItem } from "../types";
import { StyleId, FramingId } from "../data/site";

// Metadata mapping for known artwork assets
const ARTWORK_METADATA: Record<
  string,
  { title: string; framing: FramingId; framingLabel: string }
> = {
  "normal-01.jpeg": {
    title: "Gentle Silhouette I",
    framing: "half-body",
    framingLabel: "Half Body",
  },
  "normal-02.png": {
    title: "Warm Expression II",
    framing: "headshot",
    framingLabel: "Headshot",
  },
  "normal-03.png": {
    title: "Tone & Shadow III",
    framing: "headshot",
    framingLabel: "Headshot",
  },
  "normal-04.jpeg": {
    title: "Poised Bloom IV",
    framing: "half-body",
    framingLabel: "Half Body",
  },
  "normal-05.jpeg": {
    title: "Urban Clarity V",
    framing: "headshot",
    framingLabel: "Headshot",
  },
  "normal-06.jpeg": {
    title: "Studio Softness VI",
    framing: "half-body",
    framingLabel: "Half Body",
  },
  "normal-07.jpg": {
    title: "Full Contour VII",
    framing: "full-body",
    framingLabel: "Full Body",
  },
  "gta-01.jpeg": {
    title: "Vice Palette I",
    framing: "half-body",
    framingLabel: "Half Body",
  },
  "gta-02.jpg": {
    title: "Bold Edge II",
    framing: "headshot",
    framingLabel: "Headshot",
  },
  "gta-03.jpg": {
    title: "High Noon III",
    framing: "headshot",
    framingLabel: "Headshot",
  },
};

export function getPortfolioItems(): PortfolioItem[] {
  const portfolioDir = path.join(process.cwd(), "public", "portfolio");

  let files: string[] = [];
  try {
    if (fs.existsSync(portfolioDir)) {
      files = fs.readdirSync(portfolioDir);
    }
  } catch {
    files = [];
  }

  const validExtensions = [".jpg", ".jpeg", ".png", ".webp"];
  const matchedFiles = files.filter((file) => {
    const ext = path.extname(file).toLowerCase();
    return (
      validExtensions.includes(ext) &&
      (file.startsWith("normal-") || file.startsWith("gta-"))
    );
  });

  matchedFiles.sort((a, b) => a.localeCompare(b));

  const items: PortfolioItem[] = matchedFiles.map((file, index) => {
    const style: StyleId = file.startsWith("normal-") ? "normal" : "gta";
    const styleLabel = style === "normal" ? "Vector Normal" : "GTA Style";
    const meta = ARTWORK_METADATA[file] || {
      title: `Selected Work ${String(index + 1).padStart(2, "0")}`,
      framing: (index % 3 === 0
        ? "headshot"
        : index % 3 === 1
        ? "half-body"
        : "full-body") as FramingId,
      framingLabel:
        index % 3 === 0
          ? "Headshot"
          : index % 3 === 1
          ? "Half Body"
          : "Full Body",
    };

    return {
      id: `art-${index}-${file.replace(/[^a-zA-Z0-9]/g, "-")}`,
      src: `/portfolio/${file}`,
      alt: `Karya asli Rainfall Studio ${meta.title} (${styleLabel} - ${meta.framingLabel})`,
      title: meta.title,
      style,
      styleLabel,
      framing: meta.framing,
      framingLabel: meta.framingLabel,
      filename: file,
    };
  });

  return items;
}
