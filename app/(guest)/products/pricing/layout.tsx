import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for Komusoft business software. Compare Business Assistant Cloud plans (Solo Flight, Deluxe, Classic, Corporate, Investor, Hospitality, Platinum) with or without URA EFRIS integration, in UGX.",
  keywords: [
    "Komusoft pricing",
    "business software pricing Uganda",
    "POS pricing Uganda",
    "ERP pricing Uganda",
    "Business Assistant pricing",
    "cloud software pricing UGX",
    "EFRIS software pricing",
    "accounting software price Uganda",
  ],
  alternates: { canonical: "/products/pricing" },
  openGraph: {
    title: "Pricing | Komusoft Solutions Ltd",
    description:
      "Compare Komusoft business software plans with and without URA EFRIS integration, in UGX.",
    url: "/products/pricing",
    images: ["/business_assistant.png"],
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
