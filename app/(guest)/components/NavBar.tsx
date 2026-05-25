"use client";
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
    const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 0);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const products = [
        { name: "Business Manager", slug: "business-manager" },
        { name: "Business Assistant", slug: "business-assistant" },
        { name: "Hybrid Solution", slug: "hybrid-solution" },
    ];

    const isProductsActive = pathname === '/products' || pathname?.startsWith('/products/');

    const handleMouseEnter = () => {
        if (hoverTimeout) clearTimeout(hoverTimeout);
        setProductsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        const timeout = setTimeout(() => {
            setProductsDropdownOpen(false);
        }, 250);
        setHoverTimeout(timeout);
    };

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/';
        return pathname?.startsWith(href);
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-md bg-white/80 border-b border-gray-200' : 'bg-white border-b border-gray-200'}`}>
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/">
                        <div className="flex items-center gap-2">
                            <Image src="/logo.png" alt="Komusoft Solutions" width={50} height={50} />
                            <span className="font-bold md:text-xl lg:text-2xl text-lg text-[#0A0947]">
                                Komusoft Solutions LTD
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/" className={`transition-colors ${isActive('/') ? 'text-[#05ADEE] font-semibold' : 'text-gray-700 hover:text-[#05ADEE]'}`}>
                            Home
                        </Link>
                        <Link href="/about" className={`transition-colors ${isActive('/about') ? 'text-[#05ADEE] font-semibold' : 'text-gray-700 hover:text-[#05ADEE]'}`}>
                            About
                        </Link>
                        <Link href="/services" className={`transition-colors ${isActive('/services') ? 'text-[#05ADEE] font-semibold' : 'text-gray-700 hover:text-[#05ADEE]'}`}>
                            Services
                        </Link>

                        {/* === IMPROVED PRODUCTS DROPDOWN === */}
                        <div
                            className="relative group"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="flex items-center gap-1">
                                <Link
                                    href="/products"
                                    className={`transition-colors ${isProductsActive ? 'text-[#05ADEE] font-semibold' : 'text-gray-700 hover:text-[#05ADEE]'}`}
                                >
                                    Products
                                </Link>
                                <button
                                    className="p-1 hover:bg-gray-100 rounded-md transition-colors"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setProductsDropdownOpen(!productsDropdownOpen);
                                    }}
                                >
                                    <ChevronDown
                                        className={`w-4 h-4 transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180' : ''}`}
                                    />
                                </button>
                            </div>

                            {productsDropdownOpen && (
                                <div
                                    className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-xl py-2 z-50"
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    {products.map((product) => (
                                        <Link
                                            key={product.slug}
                                            href={`/products/${product.slug}`}
                                            className="block px-5 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#05ADEE] transition-all"
                                            onClick={() => setProductsDropdownOpen(false)}
                                        >
                                            {product.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Link href="/portfolio" className={`transition-colors ${isActive('/portfolio') ? 'text-[#05ADEE] font-semibold' : 'text-gray-700 hover:text-[#05ADEE]'}`}>
                            Portfolio
                        </Link>
                        <Link href="/contact" className={`transition-colors ${isActive('/contact') ? 'text-[#05ADEE] font-semibold' : 'text-gray-700 hover:text-[#05ADEE]'}`}>
                            Contact
                        </Link>
                    </div>

                    {/* Desktop Buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link href="/contact">
                            <button className="px-6 py-2.5 text-[#05ADEE] border-2 border-[#05ADEE] rounded-lg hover:bg-[#05ADEE] hover:text-white transition-all">
                                Request Demo
                            </button>
                        </Link>
                        <Link href="/contact">
                            <Button className="px-6 py-5 bg-[#05ADEE] text-white rounded-lg hover:shadow-lg hover:shadow-[#05ADEE]/50 transition-all">
                                Contact Us
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <Button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </Button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden pb-6 space-y-3">
                        {['/', '/about', '/services', '/products', '/portfolio', '/contact'].map((href) => {
                            const label = href === '/' ? 'Home' : href.replace('/', '').charAt(0).toUpperCase() + href.slice(2);
                            return (
                                <Laveink
                                    key={href}
                                    href={href}
                                    className={`block py-3 ${isActive(href) ? 'text-[#05ADEE] font-semibold' : 'text-gray-700 hover:text-[#05ADEE]'}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {label}
                                </Link>
                            );
                        })}

                        <div className="flex flex-col gap-3 pt-4">
                            <Link href="/contact" onClick={() => setIsOpen(false)}>
                                <button className="w-full px-6 py-3 text-[#05ADEE] border-2 border-[#05ADEE] rounded-lg">
                                    Request Demo
                                </button>
                            </Link>
                            <Link href="/contact" onClick={() => setIsOpen(false)}>
                                <Button className="w-full py-3 bg-[#05ADEE] text-white rounded-lg">
                                    Contact Us
                                </Button>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}