import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hybrid Solution - Cloud + On-Premise Business System",
  description:
    "The Komusoft Hybrid Solution combines on-premise reliability with cloud flexibility, giving businesses in Uganda offline POS, inventory and accounting that syncs to the cloud, with URA EFRIS compliance.",
  keywords: [
    "hybrid solution",
    "hybrid POS",
    "cloud and on-premise software",
    "hybrid ERP Uganda",
    "offline and online POS",
    "inventory management software",
    "accounting software Uganda",
    "EFRIS",
    "URA EFRIS",
    "business management software Uganda",
  ],
  alternates: { canonical: "/products/hybrid-solution" },
  openGraph: {
    title: "Hybrid Solution | Komusoft Solutions Ltd",
    description:
      "On-premise reliability with cloud flexibility: offline POS, inventory and accounting that syncs to the cloud.",
    url: "/products/hybrid-solution",
    images: ["/hybridSolution.png"],
  },
};

export default function HybridSolutionLayout({ children }: { children: React.ReactNode }) {
  return children;
}
