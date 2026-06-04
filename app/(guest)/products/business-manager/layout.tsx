import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Manager - Offline POS, Inventory & Accounting",
  description:
    "Business Manager is an offline-ready POS, inventory and accounting system with LAN support and URA EFRIS compliance. Built for supermarkets, pharmacies, hardware shops and retail businesses in Uganda.",
  keywords: [
    "Business Manager",
    "offline POS Uganda",
    "POS system Uganda",
    "point of sale software",
    "inventory management software",
    "stock management software",
    "accounting software Uganda",
    "supermarket software Uganda",
    "pharmacy software",
    "hardware shop software",
    "retail POS",
    "EFRIS POS",
    "URA EFRIS",
    "LAN POS system",
    "stock control software",
  ],
  alternates: { canonical: "/products/business-manager" },
  openGraph: {
    title: "Business Manager | Komusoft Solutions Ltd",
    description:
      "Offline-ready POS, inventory and accounting with LAN support and EFRIS compliance for retail in Uganda.",
    url: "/products/business-manager",
    images: ["/business_manager.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Business Manager",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Windows",
  description:
    "Offline-ready POS, inventory and accounting system with LAN support and URA EFRIS compliance for supermarkets, pharmacies, hardware shops and retail businesses.",
  url: "https://www.komusoft.com/products/business-manager",
  image: "https://www.komusoft.com/business_manager.png",
  publisher: {
    "@type": "Organization",
    name: "Komusoft Solutions Ltd",
  },
};

export default function BusinessManagerLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
