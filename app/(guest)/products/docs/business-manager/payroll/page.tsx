"use client";

import { DocLayout } from "../components/DocLayout";

const base = "/products/docs/business-manager";

export function BusinessManagerPayroll() {
  return (
    <DocLayout
      title="Payroll, Allowances & Bonuses"
      subtitle="Process wages from attendance data and manage extra earnings"
      current="Payroll, Allowances & Bonuses"
      prev={{ label: "Staff & Attendance", href: `${base}/staff` }}
      next={{ label: "Configuration Guide", href: `${base}/configuration` }}
    >
      <p className="text-gray-700 mb-8">
        Payroll turns staff records and attendance into accurate wage calculations and streamlined payments. Because
        clocking and attendance feed it directly, the more consistently those are recorded, the smoother each payroll run.
      </p>

      <div className="space-y-6">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="font-bold text-xl mb-3">Running Payroll</h2>
          <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
            <li>Confirm staff records and attendance for the period are complete.</li>
            <li>Open Human Resource &rarr; Payroll.</li>
            <li>Select the pay period and review each employee&apos;s calculated wage.</li>
            <li>Save to record the run and generate payslips.</li>
          </ol>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="font-bold text-xl mb-3">Allowances & Bonuses</h2>
          <p className="text-sm text-gray-700">
            Record additional earnings such as allowances and bonuses so they are included in the payroll calculation.
            Add each entry against the relevant staff member before finalising the run.
          </p>
        </div>
      </div>
    </DocLayout>
  );
}

export default function BusinessManagerPayrollPage() {
  return <BusinessManagerPayroll />;
}
