"use client";

import { DocLayout } from "../components/DocLayout";

const base = "/products/docs/business-manager";

export function BusinessManagerCashierReturns() {
  return (
    <DocLayout
      title="Cashier Returns & Shifts"
      subtitle="Daily cashier declarations, float, remittance and shift management"
      current="Cashier Returns & Shifts"
      prev={{ label: "POS Operations", href: `${base}/pos-operation` }}
      next={{ label: "Damages, Expiries & Outgoing Stock", href: `${base}/inventory` }}
    >
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Adding a Cashier Declaration (End of Day)</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
          <li>Supermarket module &rarr; Cashier Returns &rarr; <strong>NEW</strong>.</li>
          <li>Select the cashier name and the date.</li>
          <li>Enter the following:
            <ul className="ml-6 mt-2 list-disc space-y-1">
              <li><strong>Amount declared</strong> &mdash; total revenue at the end of the day</li>
              <li><strong>Float</strong> &mdash; starting cash given to the cashier</li>
              <li><strong>Remittance</strong> &mdash; cash banked or taken by the manager/supervisor</li>
              <li><strong>Others (incoming)</strong> &mdash; non-sales money received during the day</li>
              <li><strong>Remarks</strong> &mdash; any notes about the cashier or transactions</li>
            </ul>
          </li>
          <li>Save. A new window appears for the next declaration, or Cancel to finish.</li>
        </ol>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Cashier Shifts</h2>
        <p className="text-sm text-gray-700">
          Record each cashier&apos;s work schedule by entering their name, the effective date, the shift
          (<strong>Day</strong> or <strong>Night</strong>) and any remarks. Press Save to confirm or Cancel to discard.
        </p>
      </div>

      <p className="text-sm text-gray-600">
        These records help managers audit each cashier and reconcile daily cash against sales.
      </p>
    </DocLayout>
  );
}

export default function BusinessManagerCashierReturnsPage() {
  return <BusinessManagerCashierReturns />;
}
