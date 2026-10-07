import { StyleId, FramingId } from "../data/site";

export interface PortfolioItem {
  id: string;
  src: string;
  alt: string;
  style: StyleId;
  styleLabel: string;
  filename: string;
}

export interface OrderFormData {
  name: string;
  style: StyleId;
  framing: FramingId;
  peopleCount: number;
  backgroundType: "polos" | "custom";
  photoUrl: string;
  notes: string;
}
