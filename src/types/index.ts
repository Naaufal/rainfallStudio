import { StyleId, FramingId } from "../data/site";

export interface PortfolioItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  style: StyleId;
  styleLabel: string;
  framing: FramingId;
  framingLabel: string;
  filename: string;
}
