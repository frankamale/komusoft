import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Assistant Cloud - CRM, Invoicing, Inventory & Accounting",
  description:
    "Business Assistant is a cloud-based business platform with a full offline mobile app for POS terminals. Progressive modules for CRM, invoicing, inventory, accounting, corporate, production and hospitality, with optional URA EFRIS compliance.",
  keywords: [
    "Business Assistant",
    "Business Assistant cloud",
    "cloud POS Uganda",
    "cloud ERP Uganda",
    "SaaS business software",
    "CRM software Uganda",
    "invoicing software Uganda",
    "cloud inventory software",
    "cloud accounting software",
    "offline mobile POS",
    "hospitality software",
    "production software",
    "multi-branch software",
    "EFRIS cloud",
    "URA EFRIS",
  ],
  alternates: { canonical: "/products/business-assistant" },
  openGraph: {
    title: "Business Assistant Cloud | Komusoft Solutions Ltd",
    description:
      "Cloud business platform with offline mobile POS. CRM, invoicing, inventory, accounting and EFRIS for Uganda.",
    url: "/products/business-assistant",
    images: ["/business_assistant.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Business Assistant",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, iOS, Android",
  description:
    "Cloud-based business platform with a full offline mobile app for POS terminals. Progressive modules for CRM, invoicing, inventory, accounting, corporate, production and hospitality, with optional URA EFRIS compliance.",
  url: "https://www.komusoft.com/products/business-assistant",
  image: "https://www.komusoft.com/business_assistant.png",
  offers: {
    "@type": "Offer",
    priceCurrency: "UGX",
    price: "50000",
  },
  publisher: {
    "@type": "Organization",
    name: "Komusoft Solutions Ltd",
  },
};

export default function BusinessAssistantLayout({ children }: { children: React.ReactNode }) {
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
