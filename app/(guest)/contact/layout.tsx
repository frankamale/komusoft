import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Komusoft Solutions Ltd for custom software, ERP, POS, inventory, accounting and EFRIS solutions in Uganda. Call +256 750 688747 or email support@komusoft.com to book a demo or get started.",
  keywords: [
    "contact Komusoft",
    "Komusoft contact",
    "software company Uganda contact",
    "book a demo",
    "request a quote software Uganda",
    "EFRIS support Uganda",
    "POS support Uganda",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | Komusoft Solutions Ltd",
    description:
      "Get in touch with Komusoft for software, ERP, POS and EFRIS solutions. Call +256 750 688747 or email support@komusoft.com.",
    url: "/contact",
    images: ["/hero_image.png"],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
