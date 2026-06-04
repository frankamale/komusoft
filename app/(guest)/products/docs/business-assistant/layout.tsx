import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Assistant Documentation",
  description:
    "Official Business Assistant documentation: account setup, quick start, system requirements, business modules, dashboard and analytics, team permissions, API and integrations, payments, EFRIS, security and troubleshooting.",
  keywords: [
    "Business Assistant documentation",
    "Business Assistant user guide",
    "cloud POS guide",
    "CRM setup",
    "invoicing guide",
    "API documentation",
    "EFRIS cloud setup",
    "payment gateway integration",
    "Komusoft documentation",
  ],
  alternates: { canonical: "/products/docs/business-assistant" },
  openGraph: {
    title: "Business Assistant Documentation | Komusoft Solutions Ltd",
    description:
      "Complete guide for the cloud + offline business platform: modules, analytics, API, payments, EFRIS and security.",
    url: "/products/docs/business-assistant",
    images: ["/business_assistant.png"],
  },
};

export default function BusinessAssistantDocsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
