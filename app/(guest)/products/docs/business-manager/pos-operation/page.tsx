"use client";

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export function BusinessManagerPOSOperation() {
  return (
    <div className="min-h-screen pt-20">
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/products/docs/business-manager" className="hover:text-[#05ADEE]">Documentation</Link>
            <span>/</span>
            <Link href="/products/docs/business-manager" className="hover:text-[#05ADEE]">Business Manager</Link>
            <span>/</span>
            <span className="text-[#05ADEE]">POS Operations</span>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/products/docs/business-manager" className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"><ArrowLeft className="w-5 h-5" /></Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Point of Sale (POS) Operations</h1>
              <p className="text-gray-600">Front-counter interface for fast, accurate customer transactions</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold mb-4">Header Action Buttons</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-8 text-sm">
          {[
            ["Focus", "Bring POS to front"],
            ["Save", "Save transaction & print receipt automatically"],
            ["Sundry", "Open full inventory search centre (barcode scanner fallback)"],
            ["Client", "Select or add customer for personalised receipt"],
            ["Close", "End the current transaction window"],
            ["Tender", "Start payment process (cash, card, mobile money, bank deposit)"],
            ["Hold", "Suspend transaction for later retrieval"],
            ["Edit / Remove", "Change quantity or delete line items"],
            ["Refresh", "Reload latest prices and stock"]
          ].map(([title, desc], i) => (
            <div key={i} className="bg-white border rounded p-4"><strong className="text-[#05ADEE]">{title}</strong> — {desc}</div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4">Typical Sale Flow</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-8">
          <li>Scan or use Sundry to add items.</li>
          <li>Adjust quantities with Edit if needed.</li>
          <li>Apply any discount in the Discount field.</li>
          <li>Click Tender. If not using alternative payment, enter amount in Paid field.</li>
          <li>Change is calculated automatically.</li>
          <li>Save — receipt prints and stock is deducted.</li>
        </ol>

        <p className="text-sm text-gray-600">Held transactions can be retrieved later via the Retrieve button on the Hold dialogue.</p>

        <div className="mt-8">
          <Link href="/products/docs/business-manager/cashier-returns" className="text-[#05ADEE] hover:underline">Next: Cashier Returns &amp; Shifts →</Link>
        </div>
      </div>
    </div>
  );
}

export default function BusinessManagerPOSOperationPage() {
  return <BusinessManagerPOSOperation />;
}
