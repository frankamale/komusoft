"use client";

import { ArrowLeft, Check, AlertTriangle, Settings, Monitor } from 'lucide-react';
import Link from 'next/link';

export function BusinessManagerRequirements() {
  return (
    <div className="min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/products/docs/business-manager" className="hover:text-[#05ADEE]">Documentation</Link>
            <span>/</span>
            <Link href="/products/docs/business-manager" className="hover:text-[#05ADEE]">Business Manager</Link>
            <span>/</span>
            <span className="text-[#05ADEE]">System Requirements</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-4 mb-4">
            <Link
              href="/products/docs/business-manager"
              className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">System Requirements</h1>
              <p className="text-gray-600">Hardware and software prerequisites for Business Manager</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-blue-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">Important Notes</h3>
              <ul className="text-blue-800 text-sm space-y-1">
                <li>• Higher specifications are strongly recommended for supermarkets and multi-branch operations.</li>
                <li>• Always use a fast SSD for the database and application files.</li>
                <li>• A stable LAN (preferably wired Gigabit) is required for multi-terminal setups.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Minimum */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Settings className="w-5 h-5 text-[#05ADEE]" /> Minimum System Requirements
            </h3>
            <ul className="space-y-3 text-gray-700 text-sm">
              <li><strong>Processor:</strong> Intel Core i5 (or equivalent) 3.0 GHz or higher</li>
              <li><strong>Memory (RAM):</strong> 8 GB minimum</li>
              <li><strong>Operating System:</strong> Windows 10 (64-bit) or Windows Server 2016+</li>
              <li><strong>Storage:</strong> 500 GB SSD (fast read/write recommended)</li>
              <li><strong>Graphics:</strong> Integrated or entry-level dedicated card</li>
              <li><strong>Display:</strong> Minimum 1366×768 resolution</li>
              <li><strong>Network:</strong> Stable LAN for multi-terminal setups</li>
            </ul>
          </div>

          {/* Recommended */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Monitor className="w-5 h-5 text-[#05ADEE]" /> Recommended System Requirements
            </h3>
            <ul className="space-y-3 text-gray-700 text-sm">
              <li><strong>Processor:</strong> Intel Core i5 / AMD Ryzen 5 (or equiv.) 2.5 GHz multi-core</li>
              <li><strong>Memory (RAM):</strong> 16 GB or higher</li>
              <li><strong>Operating System:</strong> Latest Windows 10/11 (64-bit)</li>
              <li><strong>Storage:</strong> 512 GB+ SSD (larger HDD acceptable for archives)</li>
              <li><strong>Display:</strong> 24″+ IPS/PLS high-resolution monitor (multiple monitors ideal)</li>
              <li><strong>Network:</strong> Wired Gigabit LAN for server + clients</li>
            </ul>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Software Requirements</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3"><Check className="w-5 h-5 text-green-500 mt-0.5 shrink-0" /> Microsoft .NET Framework 4.8 or later</li>
            <li className="flex items-start gap-3"><Check className="w-5 h-5 text-green-500 mt-0.5 shrink-0" /> SQL Server Express 2019+ (free) or full SQL Server</li>
            <li className="flex items-start gap-3"><Check className="w-5 h-5 text-green-500 mt-0.5 shrink-0" /> Administrator privileges on the installation machine</li>
            <li className="flex items-start gap-3"><Check className="w-5 h-5 text-green-500 mt-0.5 shrink-0" /> Latest Windows updates installed</li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Next Steps</h2>
          <p className="text-gray-700 mb-6">Once your hardware meets these requirements, proceed with the installation.</p>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/products/docs/business-manager/installation" className="p-4 bg-white border border-gray-200 rounded-xl hover:border-[#05ADEE] hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 mb-1">→ Installation Guide</h3>
              <p className="text-sm text-gray-600">Step-by-step instructions for Windows servers and clients</p>
            </Link>
            <Link href="/products/docs/business-manager/quickstart" className="p-4 bg-white border border-gray-200 rounded-xl hover:border-[#05ADEE] hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 mb-1">→ Quick Start Guide</h3>
              <p className="text-sm text-gray-600">Get up and running in 30 minutes</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BusinessManagerRequirementsPage() {
  return <BusinessManagerRequirements />;
}
