import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Komusoft services: EFRIS integration, custom and bespoke software, web development, mobile app development, cloud solutions, ICT consultancy, IT support, networking and cybersecurity for businesses in Uganda.",
  keywords: [
    "software services Uganda",
    "EFRIS integration",
    "EFRIS integration Uganda",
    "custom software development",
    "bespoke software",
    "web development Uganda",
    "mobile app development Uganda",
    "iOS and Android apps",
    "cloud solutions",
    "ICT consultancy",
    "IT support Uganda",
    "networking",
    "cybersecurity",
    "API integration",
    "enterprise software development",
  ],
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | Komusoft Solutions Ltd",
    description:
      "EFRIS integration, custom software, web and mobile development, cloud, ICT consultancy and IT support in Uganda.",
    url: "/services",
    images: ["/hero_image.png"],
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
