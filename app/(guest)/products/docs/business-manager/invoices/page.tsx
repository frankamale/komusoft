"use client";

import { DocLayout } from "../components/DocLayout";

const base = "/products/docs/business-manager";

export function BusinessManagerInvoices() {
  return (
    <DocLayout
      title="Finances: Invoices, A/P & A/R"
      subtitle="Central hub for invoices and accounts payable / receivable"
      current="Invoices, A/P & A/R"
      prev={{ label: "Damages, Expiries & Outgoing Stock", href: `${base}/inventory` }}
      next={{ label: "Credit & Debit Notes", href: `${base}/credit-notes` }}
    >
      <p className="text-gray-700 mb-8">
        The Finance module records, tracks and reconciles every monetary activity in the business &mdash; invoices,
        payments, purchases and sales. By linking suppliers, customers and bank records it keeps cash flow accurate and
        outstanding balances visible.
      </p>

      <div className="space-y-6">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="font-bold text-xl mb-3">Invoices</h2>
          <p className="text-sm text-gray-700">
            An invoice is the seller&apos;s request for payment, listing items, quantities, prices and terms. Click{" "}
            <strong>NEW</strong>, then choose the invoice type, shop section, invoice date, due date and supplier, add
            remarks and who delivered it, and Save.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="font-bold text-xl mb-3">Accounts Payable (A/P)</h2>
          <p className="text-sm text-gray-700 mb-3">
            A/P tracks what the business owes suppliers for goods or services bought on credit. There are three entry types:
          </p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li><strong>Goods Bought</strong> &mdash; payments for products purchased</li>
            <li><strong>Services &amp; Utilities</strong> &mdash; maintenance, professional fees, electricity, water, internet</li>
            <li><strong>Miscellaneous</strong> &mdash; small or uncategorised expenses</li>
          </ul>
          <p className="text-xs text-gray-500 mt-3">
            For each, click NEW and fill: payment date, expenses category (where shown), reference number, beneficiary,
            payment method, amount paid, remarks and who received the payment.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="font-bold text-xl mb-3">Accounts Receivable (A/R) &mdash; Goods Sold</h2>
          <p className="text-sm text-gray-700">
            A/R tracks money owed to the business by customers for goods sold on credit. Click <strong>NEW</strong>, then
            enter the payment date, reference number, beneficiary, payment mode, amount paid, remarks and who received
            the payment. Monitor these balances to keep cash flow healthy.
          </p>
        </div>
      </div>
    </DocLayout>
  );
}

export default function BusinessManagerInvoicesPage() {
  return <BusinessManagerInvoices />;
}
