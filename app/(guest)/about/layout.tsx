import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Komusoft Solutions Ltd, a Ugandan software company with 15+ years of experience delivering custom software, ERP, POS and cloud business systems. Our mission, values and expertise.",
  keywords: [
    "about Komusoft",
    "Komusoft Solutions Ltd",
    "software company Uganda",
    "IT company Uganda",
    "software developers Uganda",
    "enterprise software experts",
    "technology company Kampala",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us | Komusoft Solutions Ltd",
    description:
      "A Ugandan software company with 15+ years building custom software, ERP, POS and cloud business systems.",
    url: "/about",
    images: ["/about_image.png"],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
