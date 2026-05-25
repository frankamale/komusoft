"use client";

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export function BusinessManagerCashierReturns() {
  return (
    <div className="min-h-screen pt-20">
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/products/docs/business-manager" className="hover:text-[#05ADEE]">Documentation</Link>
            <span>/</span>
            <Link href="/products/docs/business-manager" className="hover:text-[#05ADEE]">Business Manager</Link>
            <span>/</span>
            <span className="text-[#05ADEE]">Cashier Returns &amp; Shifts</span>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/products/docs/business-manager" className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"><ArrowLeft className="w-5 h-5" /></Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Cashier Returns &amp; Shifts</h1>
              <p className="text-gray-600">Daily cashier declarations, float, remittance and shift management</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Adding a Cashier Declaration (Returns / End-of-Day)</h2>
          <ol className="space-y-2 text-sm text-gray-700">
            <li>1. Supermarket module → Cashier Returns → <strong>NEW</strong></li>
            <li>2. Select cashier name and date.</li>
            <li>3. Enter the following:
              <ul className="ml-6 mt-2 list-disc">
                <li><strong>Amount declared</strong> — total revenue at end of day</li>
                <li><strong>Float</strong> — starting cash given to cashier</li>
                <li><strong>Remittance</strong> — cash taken to bank or by manager</li>
                <li><strong>Others (incoming)</strong> — non-sales money received</li>
                <li><strong>Remarks</strong></li>
              </ul>
            </li>
            <li>4. Save. A new window appears for the next declaration or Cancel to finish.</li>
          </ol>
        </div>

        <p className="text-sm">This process helps managers audit each cashier and reconcile daily cash.</p>

        <div className="mt-8">
          <Link href="/products/docs/business-manager/staff" className="text-[#05ADEE] hover:underline">Next: Staff / Human Resources →</Link>
        </div>
      </div>
    </div>
  );
}

export default function BusinessManagerCashierReturnsPage() {
  return <BusinessManagerCashierReturns />;
}
