import type { Metadata } from "next";
import { connection } from "next/server";
import { Navbar } from "./components/NavBar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
    title: {
        absolute: "Komusoft Solutions Ltd | Custom Software, ERP, POS & Cloud Business Systems in Uganda",
    },
    description:
        "Komusoft Solutions Ltd builds custom software, enterprise ERP, point of sale (POS), inventory, accounting and cloud business management systems for businesses in Uganda. 15+ years of experience, 99+ projects delivered, with URA EFRIS-ready solutions.",
    keywords: [
        "Komusoft Solutions Ltd",
        "software company Uganda",
        "software development Uganda",
        "custom software development",
        "enterprise software",
        "ERP Uganda",
        "POS system Uganda",
        "point of sale software",
        "inventory management software",
        "accounting software Uganda",
        "business management software",
        "cloud platforms",
        "web development Uganda",
        "mobile app development Uganda",
        "IT solutions Uganda",
        "EFRIS",
        "URA EFRIS",
        "Business Manager",
        "Business Assistant",
        "Kampala software company",
    ],
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "Komusoft Solutions Ltd | Custom Software, ERP, POS & Cloud Business Systems",
        description:
            "Powerful enterprise software, mobile apps, cloud platforms and IT solutions that help businesses in Uganda operate smarter and faster.",
        url: "/",
        images: ["/hero_image.png"],
    },
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    await connection();
    return (
        <div className="min-h-screen bg-white">

            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
}