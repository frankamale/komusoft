import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hybrid Solution Documentation",
  description:
    "Official Hybrid Solution documentation: setup, configuration, cloud sync, offline POS, EFRIS compliance and troubleshooting for the Komusoft cloud plus on-premise business system.",
  keywords: [
    "Hybrid Solution documentation",
    "hybrid POS guide",
    "cloud sync setup",
    "offline POS guide",
    "EFRIS setup",
    "Komusoft documentation",
  ],
  alternates: { canonical: "/products/docs/hybrid-solution" },
  openGraph: {
    title: "Hybrid Solution Documentation | Komusoft Solutions Ltd",
    description:
      "Complete guide for the Komusoft Hybrid Solution: cloud plus on-premise POS, inventory and accounting.",
    url: "/products/docs/hybrid-solution",
    images: ["/hybridSolution.png"],
  },
};

export default function HybridSolutionDocsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
