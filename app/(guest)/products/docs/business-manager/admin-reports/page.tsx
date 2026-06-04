"use client";

import { DocLayout } from "../components/DocLayout";

const base = "/products/docs/business-manager";

export function BusinessManagerAdminReports() {
  return (
    <DocLayout
      title="Administrative Reports"
      subtitle="Attendance, data-entry status and business value metrics"
      current="Administrative Reports"
      prev={{ label: "Financial Reports", href: `${base}/financial-reports` }}
      next={{ label: "Hardware Integration", href: `${base}/pos-hardware` }}
    >
      <p className="text-gray-700 mb-8">
        Administrative reports surface operational data &mdash; attendance, data-entry status and overall business value
        &mdash; to help manage staff, verify records and monitor the health of the business.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-bold mb-3">Attendance</h3>
          <ul className="text-sm space-y-1 text-gray-700 list-disc list-inside">
            <li>Attendance Summaries</li>
            <li>Attendance Details</li>
          </ul>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-bold mb-3">General Data Entry</h3>
          <ul className="text-sm space-y-1 text-gray-700 list-disc list-inside">
            <li>Check Store Receipts</li>
            <li>Stock Receipt Data Entry Status</li>
          </ul>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-bold mb-3">Business Value</h3>
          <ul className="text-sm space-y-1 text-gray-700 list-disc list-inside">
            <li>Gross Sales Profit</li>
            <li>Daily Transaction Summaries</li>
            <li>Monthly Sales Totals</li>
            <li>Stock Value, Periodic Cash Flow</li>
            <li>Negative Stock, Negative Profit</li>
            <li>Selling Price &lt; Cost Price</li>
          </ul>
        </div>
      </div>
    </DocLayout>
  );
}

export default function BusinessManagerAdminReportsPage() {
  return <BusinessManagerAdminReports />;
}
