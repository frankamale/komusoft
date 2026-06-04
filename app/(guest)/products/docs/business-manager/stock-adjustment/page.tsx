"use client";

import { DocLayout } from "../components/DocLayout";

const base = "/products/docs/business-manager";

export function BusinessManagerStockAdjustment() {
  return (
    <DocLayout
      title="Stock Adjustment & Transfers"
      subtitle="Correct stock levels for damages, expiries, discrepancies and inter-store transfers"
      current="Stock Adjustment & Transfers"
      prev={{ label: "Goods Receipt", href: `${base}/goods-receipt` }}
      next={{ label: "POS Operations", href: `${base}/pos-operation` }}
    >
      <p className="text-gray-700 mb-8">
        Stock adjustment modifies the on-hand quantity so it matches physical reality. Common reasons include damaged
        or expired goods, counting errors and theft. Keeping these records accurate prevents stockouts and overstock.
      </p>

      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Performing a Stock Adjustment</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Back Office &rarr; Stock Adjustment &rarr; <strong>NEW</strong>.</li>
          <li>Confirm the new stock-take dialogue.</li>
          <li>Enter the date and the department/store.</li>
          <li>In the line items table, enter the item code (scan or type).</li>
          <li>Follow the row prompts for the system quantity, physical count, variance reason and remarks.</li>
          <li>Save. Repeat for more items, or Cancel when finished.</li>
        </ol>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Stock Transfer Between Stores</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 text-sm">
          <li>Back Office &rarr; Stock Transfer &rarr; <strong>NEW</strong>.</li>
          <li>Enter the effective transfer date, the donor store and the recipient store.</li>
          <li>In the line items table, add the items and quantities to move.</li>
          <li>Save to update both stores&apos; stock levels.</li>
        </ol>
      </div>

      <p className="text-sm text-gray-600">
        For supermarket-specific damages, expiries and outgoing stock, see{" "}
        <a href={`${base}/inventory`} className="text-[#05ADEE] hover:underline">Damages, Expiries &amp; Outgoing Stock</a>.
      </p>
    </DocLayout>
  );
}

export default function BusinessManagerStockAdjustmentPage() {
  return <BusinessManagerStockAdjustment />;
}
