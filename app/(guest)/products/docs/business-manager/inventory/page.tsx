"use client";

import { DocLayout } from "../components/DocLayout";

const base = "/products/docs/business-manager";

export function BusinessManagerInventory() {
  return (
    <DocLayout
      title="Damages, Expiries & Outgoing Stock"
      subtitle="Record losses and track stock movements in the supermarket section"
      current="Damages, Expiries & Outgoing Stock"
      prev={{ label: "Cashier Returns & Shifts", href: `${base}/cashier-returns` }}
      next={{ label: "Invoices, A/P & A/R", href: `${base}/invoices` }}
    >
      <p className="text-gray-700 mb-8">
        The Supermarket module keeps shop stock accurate by recording damaged or expired goods, moving stock out of the
        shop, and replenishing it from the store. Each entry updates inventory and feeds the relevant reports.
      </p>

      <div className="space-y-8">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-3">Damages / Expiries</h2>
          <p className="text-sm text-gray-700">
            Records damaged or expired items so they are removed from available stock. Click <strong>NEW</strong>,
            enter the item code and the quantity expired or damaged, then Save.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-3">Store Outgoing Stock</h2>
          <p className="text-sm text-gray-700 mb-3">
            Records stock leaving the store for the supermarket section after expiry, damage or miscellaneous incidents.
          </p>
          <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
            <li>Click <strong>NEW</strong> to open the dialogue.</li>
            <li>Enter the date, item code, quantity, adjustment type (reason) and remarks.</li>
            <li>Save, then continue with the next item or Cancel.</li>
          </ol>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-3">Stock Supply</h2>
          <p className="text-sm text-gray-700">
            Replenishes the shop from the store. Click <strong>NEW</strong>, then enter the item code, issuer,
            store/department reference and the quantity supplied.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-3">Shop Stock Take</h2>
          <p className="text-sm text-gray-700">
            Count the physical items in the shop, enter the quantities, compare them with system records to spot
            variances, adjust the stock levels to match the actual counts, and Save to update the records.
          </p>
        </div>
      </div>
    </DocLayout>
  );
}

export default function BusinessManagerInventoryPage() {
  return <BusinessManagerInventory />;
}
