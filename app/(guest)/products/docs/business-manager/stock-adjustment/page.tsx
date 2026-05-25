"use client";

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export function BusinessManagerStockAdjustment() {
  return (
    <div className="min-h-screen pt-20">
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/products/docs/business-manager" className="hover:text-[#05ADEE]">Documentation</Link>
            <span>/</span>
            <Link href="/products/docs/business-manager" className="hover:text-[#05ADEE]">Business Manager</Link>
            <span>/</span>
            <span className="text-[#05ADEE]">Stock Adjustment</span>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/products/docs/business-manager" className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"><ArrowLeft className="w-5 h-5" /></Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Stock Adjustment</h1>
              <p className="text-gray-600">Correct stock levels for damages, expiries, discrepancies and shop stock takes</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-gray-700 mb-6">Stock adjustment modifies the on-hand quantity to match physical reality. Common reasons: damaged/expired goods, counting errors, or theft.</p>

        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Performing a Stock Adjustment</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Back Office → Stock Adjustment → <strong>NEW</strong></li>
            <li>Confirm the new stock take dialogue.</li>
            <li>Enter the date and department/store.</li>
            <li>In the line items table, enter item code (scan or type).</li>
            <li>Follow the row prompts for current system quantity, physical count, variance reason, and remarks.</li>
            <li>Save. Repeat for additional items or Cancel when finished.</li>
          </ol>
        </div>

        <p className="text-sm text-gray-600">For supermarket-specific adjustments, damages and expiries, also see the Supermarket module.</p>

        <div className="mt-8">
          <Link href="/products/docs/business-manager/pos-operation" className="text-[#05ADEE] hover:underline">Continue to POS Operations →</Link>
        </div>
      </div>
    </div>
  );
}

export default function BusinessManagerStockAdjustmentPage() {
  return <BusinessManagerStockAdjustment />;
}
