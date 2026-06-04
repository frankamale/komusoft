"use client";

import { DocLayout } from "../components/DocLayout";

const base = "/products/docs/business-manager";

const reports: [string, string][] = [
  ["Outstanding Invoices", "Invoices not yet paid by customers - your accounts receivable balance."],
  ["Statement of Account - General", "Credits, debits and balances across all accounts."],
  ["Statement of Account - Invoice Specific", "Transactions tied to a particular invoice and its payment status."],
  ["Bank Transactions", "Deposits, withdrawals, transfers and bank fees."],
  ["Income Statement (Profit & Loss)", "Revenue, expenses and net income or loss over a period."],
  ["Trial Balance", "Lists ledger balances to confirm debits equal credits."],
  ["Balance Sheet", "Assets, liabilities and equity at a point in time."],
  ["Imprest", "Tracking of the fixed petty-cash float used for minor expenses."],
];

export function BusinessManagerFinancialReports() {
  return (
    <DocLayout
      title="Financial Reports"
      subtitle="Income statement, balance sheet, trial balance, cash flow and more"
      current="Financial Reports"
      prev={{ label: "Sales & Stock Reports", href: `${base}/reporting` }}
      next={{ label: "Administrative Reports", href: `${base}/admin-reports` }}
    >
      <p className="text-gray-700 mb-8">
        Financial reports give a clear view of revenue, expenses, profit, assets, liabilities and cash flow &mdash;
        everything needed for informed decisions and regulatory requirements.
      </p>

      <div className="space-y-3 mb-8">
        {reports.map(([title, desc], i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900">{title}</h3>
            <p className="text-sm text-gray-600 mt-1">{desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 border-l-4 border-[#05ADEE] rounded-r-xl p-6">
        <h3 className="font-semibold mb-2">Financial Status at a Glance</h3>
        <p className="text-sm text-gray-700">
          The Income Statement and Balance Sheet together summarise performance over a period and financial position at
          a point in time. Select a report, choose the date range, then save or print.
        </p>
      </div>
    </DocLayout>
  );
}

export default function BusinessManagerFinancialReportsPage() {
  return <BusinessManagerFinancialReports />;
}
