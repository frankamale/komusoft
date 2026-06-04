"use client";

import { DocLayout } from "../components/DocLayout";

const base = "/products/docs/business-manager";

export function BusinessManagerCreditors() {
  return (
    <DocLayout
      title="Creditors & Suppliers"
      subtitle="Manage suppliers who extend credit to your business"
      current="Creditors & Suppliers"
      prev={{ label: "Quick Start", href: `${base}/quickstart` }}
      next={{ label: "Goods Receipt", href: `${base}/goods-receipt` }}
    >
      <p className="text-gray-700 mb-8">
        Creditors are individuals or companies that supply goods or services on credit and expect to be repaid.
        This module lets you record their details, verify TIN numbers with URA, and track outstanding balances.
      </p>

      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">How to Add a New Creditor</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>In Back Office, select <strong>Creditors</strong> from the sidebar.</li>
          <li>Click the <strong>NEW</strong> button.</li>
          <li>In the dialogue, enter:
            <ul className="ml-6 mt-2 list-disc text-sm space-y-1">
              <li>Creditor type (supplier, service provider, etc.)</li>
              <li>Name and full address</li>
              <li>TIN number (click Verify to check with URA)</li>
              <li>Primary contact person and phone numbers</li>
              <li>Remarks / notes</li>
            </ul>
          </li>
          <li>Click Save. If the supplier is new, confirm the second dialogue, or Cancel to stop.</li>
        </ol>
      </div>

      <div className="bg-gray-50 border-l-4 border-[#05ADEE] rounded-r-xl p-6">
        <h3 className="font-semibold mb-2">Tip from the Manual</h3>
        <p className="text-sm text-gray-700">
          Always verify the TIN before saving. This keeps you EFRIS-compliant and ensures accurate supplier statements later.
        </p>
      </div>
    </DocLayout>
  );
}

export default function BusinessManagerCreditorsPage() {
  return <BusinessManagerCreditors />;
}
