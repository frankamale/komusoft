"use client";

import { DocLayout } from "../components/DocLayout";

const base = "/products/docs/business-manager";

export function BusinessManagerQuickstart() {
  return (
    <DocLayout
      title="Quick Start Guide"
      subtitle="From login to your first sale in under 30 minutes"
      current="Quick Start"
      prev={{ label: "System Requirements", href: `${base}/requirements` }}
      next={{ label: "Creditors & Suppliers", href: `${base}/creditors` }}
    >
      <div className="space-y-8">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">1. Log In</h2>
          <p className="text-gray-700">
            Enter the username and password provided by your system administrator. Every license includes an initial
            administrator account, so the credentials needed to log in come with the package.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">2. Explore the Six Main Sections</h2>
          <p className="text-gray-700">After login you land in the Back Office. Use the sidebar to switch between:</p>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-gray-700 list-disc list-inside">
            <li>Back Office (inventory &amp; suppliers)</li>
            <li>Supermarket (sales &amp; cashier functions)</li>
            <li>Human Resource</li>
            <li>Finance</li>
            <li>Configurations</li>
            <li>Reports</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">3. Add Your First Items (Goods Receipt)</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-1 text-sm">
            <li>Go to Back Office &rarr; Goods Receipt &rarr; NEW</li>
            <li>Enter the supplier receipt number, date, supplier and store</li>
            <li>Highlight a row in the line items table and scan or type the item code</li>
            <li>Fill packaging, quantity, cost price, all selling prices and expiry date</li>
            <li>Save &mdash; stock is now live for sales</li>
          </ol>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">4. Make Your First Sale (POS)</h2>
          <p className="text-gray-700 mb-3">Switch to the Supermarket module or launch the dedicated POS interface.</p>
          <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
            <li>Scan or search for items (the Sundry button opens the full search)</li>
            <li>Adjust quantities with Edit</li>
            <li>Click Tender, enter the amount paid, then Save (the receipt prints automatically)</li>
          </ul>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
          <h2 className="font-bold text-green-900 mb-2">You&apos;re Up and Running</h2>
          <p className="text-green-800 text-sm">
            You have completed the basic flow: received stock and processed a sale. Continue with the other sections for
            advanced features such as Price Manager, Finance and Reports.
          </p>
        </div>
      </div>
    </DocLayout>
  );
}

export default function BusinessManagerQuickstartPage() {
  return <BusinessManagerQuickstart />;
}
