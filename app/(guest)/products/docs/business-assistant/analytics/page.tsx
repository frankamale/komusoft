"use client";

import { DocLayout } from "../components/DocLayout";

const base = "/products/docs/business-assistant";

export function BusinessAssistantAnalytics() {
  return (
    <DocLayout
      title="Dashboard & Analytics"
      subtitle="Real-time dashboards, KPIs and business reports"
      current="Dashboard & Analytics"
      prev={{ label: "Business Modules", href: `${base}/modules` }}
      next={{ label: "Team & Permissions", href: `${base}/collaboration` }}
    >
      <p className="text-gray-700 mb-8">
        The dashboard is your home screen. It surfaces real-time figures from the modules you use &mdash; sales,
        invoices, stock and cash &mdash; so you can see how the business is performing at a glance.
      </p>

      <div className="space-y-6">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="font-bold text-xl mb-3">Customising Your Dashboard</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Add, remove and rearrange widgets to match your priorities</li>
            <li>Pin the KPIs you watch most often (revenue, outstanding invoices, low stock)</li>
            <li>Switch the date range to compare periods</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="font-bold text-xl mb-3">Reports</h2>
          <p className="text-sm text-gray-700 mb-3">
            Each module contributes reports. Choose a report, set the date range and any filters, then view, export or
            print it.
          </p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Sales and customer reports from CRM &amp; Invoicing</li>
            <li>Stock status and movement from Inventory</li>
            <li>Financial statements from Accounting</li>
            <li>Consolidated, group-level reporting on Corporate plans</li>
          </ul>
        </div>

        <div className="bg-gray-50 border-l-4 border-[#05ADEE] rounded-r-xl p-6">
          <p className="text-sm text-gray-700">
            <strong>Tip:</strong> export reports regularly as part of your backup routine &mdash; see{" "}
            <a href={`${base}/privacy`} className="text-[#05ADEE] hover:underline">Data Privacy &amp; Audit</a>.
          </p>
        </div>
      </div>
    </DocLayout>
  );
}

export default function BusinessAssistantAnalyticsPage() {
  return <BusinessAssistantAnalytics />;
}
