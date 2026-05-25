"use client";

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export function BusinessManagerReporting() {
  return (
    <div className="min-h-screen pt-20">
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/products/docs/business-manager" className="hover:text-[#05ADEE]">Documentation</Link>
            <span>/</span>
            <Link href="/products/docs/business-manager" className="hover:text-[#05ADEE]">Business Manager</Link>
            <span>/</span>
            <span className="text-[#05ADEE]">Reports &amp; Analytics</span>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/products/docs/business-manager" className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"><ArrowLeft className="w-5 h-5" /></Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Reports &amp; Analytics</h1>
              <p className="text-gray-600">Over 100 quantitative, qualitative, financial and administrative reports</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border rounded-xl p-6">
            <h3 className="font-bold mb-3">Quantitative Reports</h3>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>Top / Least / Non-Selling Products (qty &amp; value)</li>
              <li>Goods Returns &amp; Expiry Rates</li>
              <li>Most Volatile Products, Top Creditors, Audit Trail, Cancelled Transactions</li>
            </ul>
          </div>
          <div className="bg-white border rounded-xl p-6">
            <h3 className="font-bold mb-3">Qualitative Reports</h3>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>Sales Transaction Summary &amp; Detail</li>
              <li>Stock Status (General, Stores, Sales Point)</li>
              <li>Stock Taking Sheets &amp; Exception Reports</li>
              <li>Sales Performance, Teller Performance</li>
            </ul>
          </div>
          <div className="bg-white border rounded-xl p-6">
            <h3 className="font-bold mb-3">Financial Reports</h3>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>Outstanding Invoices, Statement of Account</li>
              <li>Income Statement, Trial Balance, Balance Sheet</li>
              <li>Bank Transactions, Imprest, Periodic Cash Flow</li>
            </ul>
          </div>
          <div className="bg-white border rounded-xl p-6">
            <h3 className="font-bold mb-3">Administrative Reports</h3>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>Attendance Summaries &amp; Details</li>
              <li>Stock Receipt Data Entry Status</li>
              <li>Gross Sales Profit, Daily/Monthly Totals, Stock Value, Negative Stock/Profit</li>
            </ul>
          </div>
        </div>

        <p className="mt-6 text-sm text-gray-600">How to generate: Select the desired report (some require password), choose date range, and save/print.</p>

        <div className="mt-8">
          <Link href="/products/docs/business-manager/troubleshooting" className="text-[#05ADEE] hover:underline">Back to Troubleshooting Guide →</Link>
        </div>
      </div>
    </div>
  );
}

export default function BusinessManagerReportingPage() {
  return <BusinessManagerReporting />;
}
