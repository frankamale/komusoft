"use client";

import { DocLayout } from "../components/DocLayout";

const base = "/products/docs/business-manager";

const buttons: [string, string][] = [
  ["Focus", "Bring the POS view to the front"],
  ["Save", "Save the transaction and print the receipt automatically"],
  ["Sundry", "Open the full inventory Search Centre (barcode scanner fallback)"],
  ["Client", "Select or add a customer for a personalised receipt"],
  ["Close", "End the current transaction window"],
  ["Tender", "Start the payment process (cash, card, mobile money, bank deposit)"],
  ["Hold", "Suspend the transaction for later retrieval"],
  ["Edit / Remove", "Change quantity or delete line items"],
  ["Refresh", "Reload the latest prices and stock"],
];

export function BusinessManagerPOSOperation() {
  return (
    <DocLayout
      title="Point of Sale (POS) Operations"
      subtitle="Front-counter interface for fast, accurate customer transactions"
      current="POS Operations"
      prev={{ label: "Stock Adjustment & Transfers", href: `${base}/stock-adjustment` }}
      next={{ label: "Cashier Returns & Shifts", href: `${base}/cashier-returns` }}
    >
      <h2 className="text-2xl font-bold mb-4">Header Action Buttons</h2>
      <div className="grid sm:grid-cols-2 gap-3 mb-10 text-sm">
        {buttons.map(([title, desc], i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-lg p-4">
            <strong className="text-[#05ADEE]">{title}</strong> &mdash; {desc}
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-4">Typical Sale Flow</h2>
      <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-8">
        <li>Scan items, or use Sundry to search and add them.</li>
        <li>Adjust quantities with Edit if needed.</li>
        <li>Apply any discount in the Discount field.</li>
        <li>Click Tender. If the customer is not paying by an alternative method, the Paid field becomes active &mdash; enter the amount.</li>
        <li>Change is calculated and displayed automatically.</li>
        <li>Save &mdash; the receipt prints and stock is deducted.</li>
      </ol>

      <div className="bg-gray-50 border-l-4 border-[#05ADEE] rounded-r-xl p-6">
        <p className="text-sm text-gray-700">
          <strong>Held transactions:</strong> press Hold and add a reminder note to suspend a sale. Retrieve it later
          using the Retrieve toggle at the bottom of the Hold dialogue.
        </p>
      </div>
    </DocLayout>
  );
}

export default function BusinessManagerPOSOperationPage() {
  return <BusinessManagerPOSOperation />;
}
