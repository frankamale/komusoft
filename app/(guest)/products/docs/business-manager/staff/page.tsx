"use client";

import { DocLayout } from "../components/DocLayout";

const base = "/products/docs/business-manager";

export function BusinessManagerStaff() {
  return (
    <DocLayout
      title="Human Resources: Staff & Attendance"
      subtitle="Employee records, clocking and daily attendance"
      current="Staff & Attendance"
      prev={{ label: "Journal Entries & Bank", href: `${base}/journal-entries` }}
      next={{ label: "Payroll, Allowances & Bonuses", href: `${base}/payroll` }}
    >
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
        <h2 className="font-bold text-xl mb-4">Staff Members</h2>
        <p className="mb-3 text-gray-700">
          Manage employee profiles. A staff record is required before you can create a system user (see{" "}
          <a href={`${base}/configuration`} className="text-[#05ADEE] hover:underline">Configuration &rarr; Users</a>).
        </p>
        <ul className="text-sm text-gray-700 list-disc ml-6 space-y-1">
          <li>Add, edit and delete staff records</li>
          <li>Store essential details such as contact and designation</li>
        </ul>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h2 className="font-bold text-xl mb-4">Attendance & Clocking</h2>
        <p className="text-sm text-gray-700">
          Record daily attendance, shifts (Day / Night) and clocking events. This data feeds directly into Payroll.
        </p>
      </div>
    </DocLayout>
  );
}

export default function BusinessManagerStaffPage() {
  return <BusinessManagerStaff />;
}
