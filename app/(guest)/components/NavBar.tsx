"use client"

import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center gap-2">
                        <Image src="/logo.png" alt="Komusoft Solutions" width={40} height={40} />
                        <span className="font-bold text-xl text-[#0A0947]">Komusoft Solutions</span>
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/home" className="text-gray-700 hover:text-[#05ADEE] transition-colors">Home</Link>
                        <Link href="/about" className="text-gray-700 hover:text-[#05ADEE] transition-colors">About</Link>
                        <Link href="/services" className="text-gray-700 hover:text-[#05ADEE] transition-colors">Services</Link>
                        <Link href="/products" className="text-gray-700 hover:text-[#05ADEE] transition-colors">Products</Link>
                        <Link href="/portfolio" className="text-gray-700 hover:text-[#05ADEE] transition-colors">Portfolio</Link>
                        <Link href="/contact" className="text-gray-700 hover:text-[#05ADEE] transition-colors">Contact</Link>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <button className="px-6 py-2.5 text-[#05ADEE] border-2 border-[#05ADEE] rounded-lg hover:bg-[#05ADEE] hover:text-white transition-all">
                            Request Demo
                        </button>
                        <Button className="px-6 py-5 bg-[#05ADEE]  text-white rounded-lg hover:shadow-lg hover:shadow-[#05ADEE]/50 transition-all">
                            Contact Us
                        </Button>
                    </div>

                    <Button
                        className="md:hidden p-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </Button>
                </div>

                {isOpen && (
                    <div className="md:hidden pb-4 space-y-3">
                        <Link href="/" className="block py-2 text-gray-700 hover:text-[#05ADEE]">Home</Link>
                        <Link href="/about" className="block py-2 text-gray-700 hover:text-[#05ADEE]">About</Link>
                        <Link href="/services" className="block py-2 text-gray-700 hover:text-[#05ADEE]">Services</Link>
                        <Link href="/products" className="block py-2 text-gray-700 hover:text-[#05ADEE]">Products</Link>
                        <Link href="/portfolio" className="block py-2 text-gray-700 hover:text-[#05ADEE]">Portfolio</Link>
                        <Link href="/contact" className="block py-2 text-gray-700 hover:text-[#05ADEE]">Contact</Link>
                        <div className="flex flex-col gap-2 pt-2">
                            <button className="w-full px-6 text-[#05ADEE] border-2 border-[#05ADEE] rounded-lg">
                                Request Demo
                            </button>
                            <Button className="w-full px-6 py-2.5 bg-linear-to-r from-[#05ADEE] to-[#0A0947] text-white rounded-lg">
                                Contact Us
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
