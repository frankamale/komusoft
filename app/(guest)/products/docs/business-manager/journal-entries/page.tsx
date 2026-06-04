"use client";

import { DocLayout } from "../components/DocLayout";

const base = "/products/docs/business-manager";

export function BusinessManagerJournalEntries() {
  return (
    <DocLayout
      title="Journal Entries & Bank"
      subtitle="General ledger, cheque clearing, bank transactions, loans and interest"
      current="Journal Entries & Bank"
      prev={{ label: "Credit & Debit Notes", href: `${base}/credit-notes` }}
      next={{ label: "Staff & Attendance", href: `${base}/staff` }}
    >
      <p className="text-gray-700 mb-8">
        Journal entries record financial transactions directly into the general ledger. Each entry has at least one
        debit and one credit, and the two sides must be equal before it can be saved (Assets = Liabilities + Equity).
      </p>

      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Creating a Journal Entry</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
          <li>Finance &rarr; Journal Entries &rarr; <strong>NEW</strong>.</li>
          <li>Enter the transaction date and a general narrative.</li>
          <li>For each line, select the GL account, enter the debit or credit amount, choose the vendor and add a line narrative.</li>
          <li>Confirm that total debits equal total credits.</li>
          <li>Save to post, or Cancel to discard.</li>
        </ol>
      </div>

      <div className="space-y-6">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="font-bold text-xl mb-2">Bank Transactions</h2>
          <p className="text-sm text-gray-700">
            Record and reconcile deposits, withdrawals and transfers. Click <strong>NEW</strong>, then enter the
            transaction date, bank, transaction type and amount.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="font-bold text-xl mb-2">Cheque Clearing</h2>
          <p className="text-sm text-gray-700">
            Track the status of cheques as funds move between accounts. Click <strong>NEW</strong>, then enter the
            transaction date, bank, transaction type and amount.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="font-bold text-xl mb-2">Loans / Advances</h2>
          <p className="text-sm text-gray-700">
            Record disbursements and repayments. Click <strong>NEW</strong>, then enter the transaction date, reference
            number, donor, amount and the pay-start and pay-end dates.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="font-bold text-xl mb-2">Interest / Imprest</h2>
          <p className="text-sm text-gray-700">
            Add and update interest records. Click <strong>NEW</strong>, then enter the payment date, expiry date,
            reference number, amount paid, remarks and who received it, then Save.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="font-bold text-xl mb-2">Financial Utilities</h2>
          <p className="text-sm text-gray-700">
            Generate a financial period closure for a chosen range. Click <strong>Review Entries</strong>, step through
            the Welcome, Period Selection and Transaction Summary pages, choose a sales receipt list or stock purchases
            list, and continue.
          </p>
        </div>
      </div>
    </DocLayout>
  );
}

export default function BusinessManagerJournalEntriesPage() {
  return <BusinessManagerJournalEntries />;
}
