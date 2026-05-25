"use client";

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export function BusinessManagerGoodsReceipt() {
  return (
    <div className="min-h-screen pt-20">
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/products/docs/business-manager" className="hover:text-[#05ADEE]">Documentation</Link>
            <span>/</span>
            <Link href="/products/docs/business-manager" className="hover:text-[#05ADEE]">Business Manager</Link>
            <span>/</span>
            <span className="text-[#05ADEE]">Goods Receipt</span>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/products/docs/business-manager" className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"><ArrowLeft className="w-5 h-5" /></Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Goods Receipt</h1>
              <p className="text-gray-600">Record arrival of new inventory and automatically update stock levels</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">What is a Goods Receipt?</h2>
          <p className="text-gray-700">A document showing items a business receives from suppliers. It automatically updates stock in the system and supports two modes: <strong>Received on Consignment</strong> or <strong>Goods Fully Paid</strong>.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-bold mb-3">Step-by-Step: Record New Inventory</h3>
          <ol className="space-y-3 text-gray-700 text-sm">
            <li>1. Back Office → Goods Receipt → <strong>NEW</strong></li>
            <li>2. Enter: Receipt number from supplier, receipt date, reference, choose supplier, receiving store, and selling shop.</li>
            <li>3. Choose <strong>Received on Consignment</strong> or <strong>Goods Fully Paid</strong>.</li>
            <li>4. Highlight a row in the line items table.</li>
            <li>5. Scan or type item code. For new items, confirm the “Add new inventory item” dialogue (highly recommended to use barcode scanner).</li>
            <li>6. Fill every field carefully: packaging, packet size, quantity, cost price, markup, total cost, units, unit cost, RRP, retail, wholesale, half dozen, dozen, expiry date.</li>
            <li>7. For brand new items also set: name, category, shop section, active/retired status, measurement unit, VAT category, EFRIS code.</li>
            <li>8. Press <strong>Save</strong> to add the line or proceed to the next item.</li>
          </ol>
          <p className="text-xs text-gray-500 mt-4">Note: You can also create items from Configurations → Inventory → New (stock quantity remains zero until received here).</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl">
          <p className="text-sm"><strong>Pro tip from the manual:</strong> Always double-check expiry dates and all price fields before saving — these values are critical for later sales and reporting accuracy.</p>
        </div>

        <div>
          <Link href="/products/docs/business-manager/stock-adjustment" className="text-[#05ADEE] hover:underline">Next: Stock Adjustment →</Link>
        </div>
      </div>
    </div>
  );
}

export default function BusinessManagerGoodsReceiptPage() {
  return <BusinessManagerGoodsReceipt />;
}
