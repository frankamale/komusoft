import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Manager Documentation & User Manual",
  description:
    "Official Business Manager documentation: installation, system requirements, back office, goods receipt, stock adjustment, POS operations, finances, payroll, configuration, reports, EFRIS and troubleshooting.",
  keywords: [
    "Business Manager documentation",
    "Business Manager user manual",
    "POS user guide",
    "inventory software manual",
    "goods receipt",
    "stock adjustment",
    "POS operations",
    "EFRIS setup",
    "accounting software guide",
    "Komusoft documentation",
  ],
  alternates: { canonical: "/products/docs/business-manager" },
  openGraph: {
    title: "Business Manager Documentation | Komusoft Solutions Ltd",
    description:
      "Complete guide for the offline-ready POS, inventory and accounting system with EFRIS compliance.",
    url: "/products/docs/business-manager",
    images: ["/business_manager.png"],
  },
};

export default function BusinessManagerDocsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
