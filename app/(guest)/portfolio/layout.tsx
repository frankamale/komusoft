import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "See Komusoft Solutions Ltd's portfolio of delivered software projects: ERP, POS, inventory, accounting, web and mobile applications for clients across Uganda and beyond.",
  keywords: [
    "Komusoft portfolio",
    "software projects Uganda",
    "case studies software Uganda",
    "ERP projects",
    "POS projects",
    "web development portfolio",
    "mobile app portfolio",
  ],
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Portfolio | Komusoft Solutions Ltd",
    description:
      "Delivered software projects: ERP, POS, inventory, accounting, web and mobile applications.",
    url: "/portfolio",
    images: ["/hero_image.png"],
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
