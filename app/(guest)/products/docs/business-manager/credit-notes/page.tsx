"use client";

import { DocLayout } from "../components/DocLayout";

const base = "/products/docs/business-manager";

export function BusinessManagerCreditNotes() {
  return (
    <DocLayout
      title="Credit & Debit Notes"
      subtitle="Adjust vendor and customer balances for returns, over- and under-charges"
      current="Credit & Debit Notes"
      prev={{ label: "Invoices, A/P & A/R", href: `${base}/invoices` }}
      next={{ label: "Journal Entries & Bank", href: `${base}/journal-entries` }}
    >
      <p className="text-gray-700 mb-8">
        Credit and debit notes correct the amount owed between a buyer and a seller after the original transaction.
        Each one is created with the <strong>NEW</strong> button and the same dialogue: payment date, reference number,
        beneficiary, amount, remarks and who received the payment.
      </p>

      <div className="space-y-6">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="font-bold text-xl mb-2">Credit Note to Vendor</h2>
          <p className="text-sm text-gray-700">
            Issued by your business to a supplier when you return items or were overcharged. It documents the items,
            quantity and value so the vendor can process a credit or refund.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="font-bold text-xl mb-2">Credit Note from Vendor</h2>
          <p className="text-sm text-gray-700">
            Recorded when a supplier acknowledges a problem (incorrect, damaged or unsatisfactory goods) and credits
            your account. Use it to update vendor balances and reconcile discrepancies.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="font-bold text-xl mb-2">Debit Note to Vendor</h2>
          <p className="text-sm text-gray-700">
            Issued to a supplier when you spot an overcharge, damaged goods or another discrepancy in their invoice. It
            lists the items and amounts to be adjusted in your accounts payable.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="font-bold text-xl mb-2">Debit Note from Vendor</h2>
          <p className="text-sm text-gray-700">
            Recorded when a supplier undercharged you or applied a discount in error and now requests the balance. It
            keeps accounts reconciled and the correct amount accounted for.
          </p>
        </div>
      </div>
    </DocLayout>
  );
}

export default function BusinessManagerCreditNotesPage() {
  return <BusinessManagerCreditNotes />;
}
