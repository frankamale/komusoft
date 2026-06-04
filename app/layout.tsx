import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.komusoft.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Komusoft Solutions Ltd | Custom Software, ERP, POS & Cloud Business Systems in Uganda",
    template: "%s | Komusoft Solutions Ltd",
  },
  description:
    "Komusoft Solutions Ltd is a Ugandan software company building custom software, ERP, point of sale (POS), inventory, accounting and cloud business management systems with URA EFRIS compliance. Home of Business Manager and Business Assistant.",
  applicationName: "Komusoft Solutions Ltd",
  authors: [{ name: "Komusoft Solutions Ltd", url: siteUrl }],
  creator: "Komusoft Solutions Ltd",
  publisher: "Komusoft Solutions Ltd",
  category: "Technology",
  keywords: [
    "Komusoft",
    "Komusoft Solutions",
    "Komusoft Solutions Ltd",
    "software company Uganda",
    "software development Uganda",
    "custom software development",
    "enterprise software Uganda",
    "ERP software Uganda",
    "ERP system",
    "point of sale Uganda",
    "POS system Uganda",
    "POS software",
    "inventory management software",
    "accounting software Uganda",
    "business management software",
    "stock management software",
    "EFRIS",
    "URA EFRIS",
    "EFRIS integration",
    "supermarket software Uganda",
    "pharmacy software",
    "hardware shop software",
    "retail software",
    "CRM software Uganda",
    "invoicing software",
    "payroll software",
    "cloud software Uganda",
    "SaaS Uganda",
    "Business Manager",
    "Business Assistant",
    "offline POS",
    "web development Uganda",
    "mobile app development Uganda",
    "IT solutions Uganda",
    "Kampala software company",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Komusoft Solutions Ltd",
    title: "Komusoft Solutions Ltd | Custom Software, ERP, POS & Cloud Business Systems",
    description:
      "Ugandan software company building custom software, ERP, POS, inventory, accounting and cloud business systems with URA EFRIS compliance.",
    images: [
      {
        url: "/hero_image.png",
        width: 600,
        height: 600,
        alt: "Komusoft Solutions Ltd",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Komusoft Solutions Ltd | Custom Software, ERP, POS & Cloud Business Systems",
    description:
      "Ugandan software company building custom software, ERP, POS, inventory, accounting and cloud business systems with URA EFRIS compliance.",
    images: ["/hero_image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  // Add your Google Search Console token here once verified:
  // verification: { google: "your-token" },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Komusoft Solutions Ltd",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    "Ugandan software company building custom software, ERP, POS, inventory, accounting and cloud business management systems with URA EFRIS compliance.",
  email: "support@komusoft.com",
  telephone: "+256750688747",
  address: {
    "@type": "PostalAddress",
    addressCountry: "UG",
  },
  sameAs: [siteUrl],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Komusoft Solutions Ltd",
  url: siteUrl,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
