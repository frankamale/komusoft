"use client"

import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-linear-to-br from-[#05ADEE] to-[#0A0947] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">K</span>
            </div>
            <span className="font-bold text-xl text-[#0A0947]">Komusoft Solutions</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-700 hover:text-[#05ADEE] transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-[#05ADEE] transition-colors">About</a>
            <a href="#services" className="text-gray-700 hover:text-[#05ADEE] transition-colors">Services</a>
            <a href="#products" className="text-gray-700 hover:text-[#05ADEE] transition-colors">Products</a>
            <a href="#portfolio" className="text-gray-700 hover:text-[#05ADEE] transition-colors">Portfolio</a>
            <a href="#contact" className="text-gray-700 hover:text-[#05ADEE] transition-colors">Contact</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="px-6 py-2.5 text-[#05ADEE] border-2 border-[#05ADEE] rounded-lg hover:bg-[#05ADEE] hover:text-white transition-all">
              Request Demo
            </button>
            <button className="px-6 py-2.5 bg-linear-to-r from-[#05ADEE] to-[#0A0947] text-white rounded-lg hover:shadow-lg hover:shadow-[#05ADEE]/50 transition-all">
              Contact Us
            </button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <a href="#home" className="block py-2 text-gray-700 hover:text-[#05ADEE]">Home</a>
            <a href="#about" className="block py-2 text-gray-700 hover:text-[#05ADEE]">About</a>
            <a href="#services" className="block py-2 text-gray-700 hover:text-[#05ADEE]">Services</a>
            <a href="#products" className="block py-2 text-gray-700 hover:text-[#05ADEE]">Products</a>
            <a href="#portfolio" className="block py-2 text-gray-700 hover:text-[#05ADEE]">Portfolio</a>
            <a href="#contact" className="block py-2 text-gray-700 hover:text-[#05ADEE]">Contact</a>
            <div className="flex flex-col gap-2 pt-2">
              <button className="w-full px-6 py-2.5 text-[#05ADEE] border-2 border-[#05ADEE] rounded-lg">
                Request Demo
              </button>
              <button className="w-full px-6 py-2.5 bg-linear-to-r from-[#05ADEE] to-[#0A0947] text-white rounded-lg">
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
