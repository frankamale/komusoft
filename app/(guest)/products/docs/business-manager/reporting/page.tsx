"use client";

import { DocLayout } from "../components/DocLayout";

const base = "/products/docs/business-manager";

export function BusinessManagerReporting() {
  return (
    <DocLayout
      title="Sales & Stock Reports"
      subtitle="Quantitative and qualitative reports on sales performance and inventory"
      current="Sales & Stock Reports"
      prev={{ label: "Network & EFRIS", href: `${base}/network` }}
      next={{ label: "Financial Reports", href: `${base}/financial-reports` }}
    >
      <p className="text-gray-700 mb-8">
        Reports are grouped into four families &mdash; quantitative, qualitative, financial and administrative &mdash;
        with over 100 in total. This page covers the sales and stock reports; financial and administrative reports have
        their own pages.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-bold mb-3">Quantitative &mdash; Sales</h3>
          <ul className="text-sm space-y-1 text-gray-700 list-disc list-inside">
            <li>Top / Least Selling Products (by quantity and by value)</li>
            <li>Non-Selling Items</li>
            <li>Periodic Sales Totals</li>
            <li>Consumer &amp; Supplier Side Price History</li>
          </ul>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-bold mb-3">Quantitative &mdash; Stock & Other</h3>
          <ul className="text-sm space-y-1 text-gray-700 list-disc list-inside">
            <li>Goods Returns Rate, Goods Expiry Rate</li>
            <li>Most Volatile Products, Top Creditors</li>
            <li>Audit Trail and Audit Trail Extended</li>
            <li>Cancelled &amp; Deleted Sales Records, Suppliers for Items</li>
          </ul>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-bold mb-3">Qualitative &mdash; Sales</h3>
          <ul className="text-sm space-y-1 text-gray-700 list-disc list-inside">
            <li>Sales Transaction &mdash; Summary &amp; Detail</li>
            <li>Sundry Sales</li>
            <li>Sales Performance, Teller Performance (and by time)</li>
            <li>Sales Detail Inventory Status</li>
          </ul>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-bold mb-3">Qualitative &mdash; Stock</h3>
          <ul className="text-sm space-y-1 text-gray-700 list-disc list-inside">
            <li>Stock Status (General, Stores, Sales Point)</li>
            <li>Stock Taking Sheet &amp; Report (Sales Point)</li>
            <li>Stock Reorder (min and max levels)</li>
            <li>Stock Receipt Summary, Price Analysis</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-50 border-l-4 border-[#05ADEE] rounded-r-xl p-6">
        <h3 className="font-semibold mb-2">How to Generate a Report</h3>
        <p className="text-sm text-gray-700">
          Select the report you want (some require a password), choose the date range, then save or print. Reports help
          with decision-making, stock control and performance evaluation.
        </p>
      </div>
    </DocLayout>
  );
}

export default function BusinessManagerReportingPage() {
  return <BusinessManagerReporting />;
}
