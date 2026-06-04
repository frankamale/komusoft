import type { Metadata } from "next";
import { connection } from "next/server";
import { Navbar } from "./components/NavBar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
    title: "Komusoft Solutions Ltd",
    description: "Streamline your operations with our cutting-edge software",
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