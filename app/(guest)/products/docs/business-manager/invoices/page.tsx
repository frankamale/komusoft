"use client";

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export function BusinessManagerInvoices() {
  return (
    <div className="min-h-screen pt-20">
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/products/docs/business-manager" className="hover:text-[#05ADEE]">Documentation</Link>
            <span>/</span>
            <Link href="/products/docs/business-manager" className="hover:text-[#05ADEE]">Business Manager</Link>
            <span>/</span>
            <span className="text-[#05ADEE]">Invoices &amp; A/P</span>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/products/docs/business-manager" className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"><ArrowLeft className="w-5 h-5" /></Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Finances – Invoices, A/P &amp; A/R</h1>
              <p className="text-gray-600">Central hub for all financial transactions</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="font-bold mb-3">Invoices</h2>
          <p className="text-sm mb-3">Click NEW → choose invoice type, shop, dates, supplier, remarks, who delivered. Save to record the payable.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="font-bold mb-3">A/P Goods Bought / Services / Miscellaneous</h2>
          <p className="text-sm">Record payments to suppliers for goods, utilities, or other expenses. Required fields: payment date, reference, beneficiary, amount, method, recipient.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="font-bold mb-3">Credit / Debit Notes (to &amp; from Vendor)</h2>
          <p className="text-sm">Issue or record adjustments for returns, over/under charges. Same NEW button workflow as other finance entries.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="font-bold mb-3">Journal Entries, Bank, Loans, Interest, Cheque Clearing</h2>
          <p className="text-sm">Full general ledger control. Always ensure debits = credits before saving.</p>
        </div>

        <div>
          <Link href="/products/docs/business-manager/reporting" className="text-[#05ADEE] hover:underline">Next: Reports &amp; Analytics →</Link>
        </div>
      </div>
    </div>
  );
}

export default function BusinessManagerInvoicesPage() {
  return <BusinessManagerInvoices />;
}
