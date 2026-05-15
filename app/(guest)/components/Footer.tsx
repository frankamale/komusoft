import { Mail, Phone, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0947] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <Image src="/logo.png" alt="Komusoft Solutions" width={40} height={40} className="group-hover:animate-spin" />
              <div>
                <span className="font-bold text-xl text-white">Komusoft</span>
                <span className="block text-xs text-gray-400 -mt-1">Solutions Ltd</span>
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Transforming businesses through intelligent software solutions since 2012.
              Your trusted technology partner in East Africa.
            </p>
            <div className="flex gap-3">
              <Link
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#05ADEE] transition-all"
              >
                <FaFacebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#05ADEE] transition-all"
              >
                <X className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#05ADEE] transition-all"
              >
                <FaLinkedin className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#05ADEE] transition-all"
              >
                <FaInstagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#05ADEE] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#05ADEE] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-[#05ADEE] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-[#05ADEE] transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#05ADEE] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Our Products</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">Business Manager</li>
              <li className="text-gray-400">Business Assistant</li>
              <li className="text-gray-400">Hybrid System</li>
              <li className="text-gray-400">Bac Monitor</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#05ADEE] shrink-0 mt-0.5" />
                <a href="mailto:komusoft@gmail.com" className="text-gray-400 hover:text-[#05ADEE] transition-colors">
                  komusoft@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#05ADEE] shrink-0 mt-0.5" />
                <a href="tel:+256765916207" className="text-gray-400 hover:text-[#05ADEE] transition-colors">
                  +256 765 916 207
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Komusoft Solutions Ltd. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#05ADEE] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#05ADEE] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-[#05ADEE] transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer