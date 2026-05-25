"use client";

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export function BusinessManagerCreditors() {
  return (
    <div className="min-h-screen pt-20">
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/products/docs/business-manager" className="hover:text-[#05ADEE]">Documentation</Link>
            <span>/</span>
            <Link href="/products/docs/business-manager" className="hover:text-[#05ADEE]">Business Manager</Link>
            <span>/</span>
            <span className="text-[#05ADEE]">Creditors &amp; Suppliers</span>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/products/docs/business-manager" className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"><ArrowLeft className="w-5 h-5" /></Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Creditors &amp; Suppliers</h1>
              <p className="text-gray-600">Manage suppliers who extend credit to your business</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-gray max-w-none mb-8">
          <p>Creditors are individuals or companies that supply goods or services on credit. This module lets you record their details, verify TIN numbers with URA, and track outstanding balances.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">How to Add a New Creditor</h2>
          <ol className="space-y-2 text-gray-700">
            <li>1. In Back Office, select <strong>Creditors</strong> from the sidebar.</li>
            <li>2. Click the <strong>NEW</strong> button.</li>
            <li>3. In the dialogue, enter:
              <ul className="ml-6 mt-2 list-disc text-sm space-y-1">
                <li>Creditor type (Supplier, Service Provider, etc.)</li>
                <li>Name and full address</li>
                <li>TIN number (click Verify to check with URA)</li>
                <li>Primary contact person and phone numbers</li>
                <li>Remarks / notes</li>
              </ul>
            </li>
            <li>4. Click Save. If the supplier is new, confirm the second dialogue or Cancel to stop.</li>
          </ol>
        </div>

        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="font-semibold mb-2">Tip from the Manual</h3>
          <p className="text-sm text-gray-700">Always verify the TIN before saving. This ensures EFRIS compliance and accurate supplier statements later.</p>
        </div>

        <div className="mt-8">
          <Link href="/products/docs/business-manager/goods-receipt" className="inline-flex items-center text-[#05ADEE] hover:underline">Next: Goods Receipt →</Link>
        </div>
      </div>
    </div>
  );
}

export default function BusinessManagerCreditorsPage() {
  return <BusinessManagerCreditors />;
}
