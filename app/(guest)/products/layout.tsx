import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Komusoft products: Business Manager (offline-ready POS, inventory and accounting), Business Assistant (cloud + offline mobile business platform) and the Hybrid Solution. EFRIS-ready software for supermarkets, pharmacies, hardware shops and retail in Uganda.",
  keywords: [
    "Komusoft products",
    "business management software",
    "ERP software Uganda",
    "POS software Uganda",
    "point of sale system",
    "inventory management software",
    "accounting software Uganda",
    "Business Manager",
    "Business Assistant",
    "hybrid solution",
    "EFRIS software",
    "supermarket software",
    "pharmacy software",
    "retail software Uganda",
  ],
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Products | Komusoft Solutions Ltd",
    description:
      "Business Manager, Business Assistant and Hybrid Solution: EFRIS-ready POS, inventory, accounting and cloud business systems for Uganda.",
    url: "/products",
    images: ["/business_manager.png"],
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
