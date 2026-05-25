"use client";

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export function BusinessManagerQuickstart() {
  return (
    <div className="min-h-screen pt-20">
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/products/docs/business-manager" className="hover:text-[#05ADEE]">Documentation</Link>
            <span>/</span>
            <Link href="/products/docs/business-manager" className="hover:text-[#05ADEE]">Business Manager</Link>
            <span>/</span>
            <span className="text-[#05ADEE]">Quick Start Guide</span>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/products/docs/business-manager" className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Quick Start Guide</h1>
              <p className="text-gray-600">From login to your first sale in under 30 minutes</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">1. Log In</h2>
            <p className="text-gray-700 mb-3">Enter the username and password provided by your system administrator. Every license includes an initial administrator account.</p>
            <div className="bg-gray-900 text-green-400 font-mono text-sm p-3 rounded">Username: admin<br />Password: [provided by Komusoft]</div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">2. Explore the Six Main Sections</h2>
            <p className="text-gray-700">After login you land in the Back Office. Use the left sidebar to switch between:</p>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
              <li>• Back Office (inventory &amp; suppliers)</li>
              <li>• Supermarket (sales &amp; cashier functions)</li>
              <li>• Human Resource</li>
              <li>• Finance</li>
              <li>• Configurations</li>
              <li>• Reports</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">3. Add Your First Items (Goods Receipt)</h2>
            <ol className="list-decimal list-inside text-gray-700 space-y-1 text-sm">
              <li>Go to Back Office → Goods Receipt → NEW</li>
              <li>Enter supplier receipt number, date, supplier, store</li>
              <li>Highlight a row in the line items table and scan or type item code</li>
              <li>Fill packaging, quantity, cost price, all selling prices and expiry date</li>
              <li>Save — stock is now live for sales</li>
            </ol>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">4. Make Your First Sale (POS)</h2>
            <p className="text-gray-700 mb-3">Switch to the Supermarket module or launch the dedicated POS interface.</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Scan or search for items (Sundry button opens full search)</li>
              <li>• Adjust quantities with Edit</li>
              <li>• Click Tender → enter amount paid → Save (receipt prints automatically)</li>
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <h2 className="font-bold text-green-900 mb-2">Congratulations!</h2>
            <p className="text-green-800 text-sm">You have completed the basic flow: received stock and processed a sale. Continue with the full manual sections for advanced features (Price Manager, Finance, Reports, etc.).</p>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-4">
          <Link href="/products/docs/business-manager/installation" className="p-4 bg-white border rounded-xl hover:border-[#05ADEE]">← Back to Installation</Link>
          <Link href="/products/docs/business-manager/goods-receipt" className="p-4 bg-white border rounded-xl hover:border-[#05ADEE]">Next: Goods Receipt Guide →</Link>
        </div>
      </div>
    </div>
  );
}

export default function BusinessManagerQuickstartPage() {
  return <BusinessManagerQuickstart />;
}
