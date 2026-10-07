import { getPortfolioItems } from "@/lib/portfolio";
import { MainPageWrapper } from "@/components/MainPageWrapper";

export default function Home() {
  const portfolioItems = getPortfolioItems();

  return <MainPageWrapper portfolioItems={portfolioItems} />;
}
