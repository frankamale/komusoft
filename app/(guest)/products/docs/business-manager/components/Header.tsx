"use client";

import Link from 'next/link';
import { ArrowLeft, Database } from 'lucide-react';

export function Header() {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-4 mb-6">
          <Link
            href="/products"
            className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Business Manager Documentation</h1>
            <p className="text-gray-600">Complete guide for offline-ready POS and inventory management</p>
          </div>
        </div>

        {/* Product Overview */}
        <div className="bg-[#05ADEE]/5 border border-[#05ADEE]/20 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#05ADEE]/10 rounded-xl flex items-center justify-center">
              <Database className="w-6 h-6 text-[#05ADEE]" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-2">About Business Manager</h2>
              <p className="text-gray-700 mb-3">
                Business Manager is a comprehensive on-premise POS and inventory management system designed for retail environments
                where internet connectivity cannot be guaranteed. It features offline capabilities, LAN synchronization, and full
                EFRIS compliance for Ugandan businesses.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-[#05ADEE]/10 text-[#05ADEE] text-xs rounded-full">On-Premise</span>
                <span className="px-2 py-1 bg-[#05ADEE]/10 text-[#05ADEE] text-xs rounded-full">Offline-First</span>
                <span className="px-2 py-1 bg-[#05ADEE]/10 text-[#05ADEE] text-xs rounded-full">EFRIS Compliant</span>
                <span className="px-2 py-1 bg-[#05ADEE]/10 text-[#05ADEE] text-xs rounded-full">LAN Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}