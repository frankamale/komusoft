"use client";

import { DocLayout } from "../components/DocLayout";

const base = "/products/docs/business-manager";

export function BusinessManagerGoodsReceipt() {
  return (
    <DocLayout
      title="Goods Receipt"
      subtitle="Record arrival of new inventory and automatically update stock levels"
      current="Goods Receipt"
      prev={{ label: "Creditors & Suppliers", href: `${base}/creditors` }}
      next={{ label: "Stock Adjustment & Transfers", href: `${base}/stock-adjustment` }}
    >
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">What is a Goods Receipt?</h2>
          <p className="text-gray-700">
            A goods receipt is a document showing items a business receives from its suppliers. Recording it
            automatically updates stock in the system and supports two modes: <strong>Received on Consignment</strong>{" "}
            (goods sent to be sold on the supplier&apos;s behalf) or <strong>Goods Fully Paid</strong> (all obligations
            settled).
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-bold mb-3">Step by Step: Record New Inventory</h3>
          <ol className="list-decimal list-inside space-y-3 text-gray-700 text-sm">
            <li>Back Office &rarr; Goods Receipt &rarr; <strong>NEW</strong>.</li>
            <li>Enter the receipt number from the supplier, receipt date, reference number, then choose the supplier, the receiving store, and the selling shop.</li>
            <li>Optionally tick <strong>Received on Consignment</strong> or <strong>Goods Fully Paid</strong>.</li>
            <li>Highlight a row in the line items table.</li>
            <li>Scan or type the item code. For new items, confirm the &ldquo;Add new inventory item&rdquo; dialogue (scanning is highly recommended when using a barcode scanner).</li>
            <li>Fill every field carefully: packaging, packet size, quantity, cost price, markup, total cost, units, unit cost, RRP, retail, wholesale, half dozen, dozen and expiry date.</li>
            <li>For brand-new items also set: name, category, shop section, active/retired status, measurement unit, VAT category and EFRIS code.</li>
            <li>Press <strong>Save</strong> to add the line, then proceed to the next item.</li>
          </ol>
          <p className="text-xs text-gray-500 mt-4">
            Note: You can also create items from Configurations &rarr; Inventory &rarr; New (stock quantity stays zero until received here).
          </p>
        </div>

        <div className="bg-gray-50 border-l-4 border-[#05ADEE] rounded-r-xl p-6">
          <p className="text-sm text-gray-700">
            <strong>Pro tip:</strong> Always double-check expiry dates and every price field before saving &mdash; these
            values drive later sales and reporting accuracy.
          </p>
        </div>
      </div>
    </DocLayout>
  );
}

export default function BusinessManagerGoodsReceiptPage() {
  return <BusinessManagerGoodsReceipt />;
}
