"use client";

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export function BusinessManagerStaff() {
  return (
    <div className="min-h-screen pt-20">
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/products/docs/business-manager" className="hover:text-[#05ADEE]">Documentation</Link>
            <span>/</span>
            <Link href="/products/docs/business-manager" className="hover:text-[#05ADEE]">Business Manager</Link>
            <span>/</span>
            <span className="text-[#05ADEE]">Staff Members &amp; Attendance</span>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/products/docs/business-manager" className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"><ArrowLeft className="w-5 h-5" /></Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Human Resources – Staff &amp; Attendance</h1>
              <p className="text-gray-600">Employee records, clocking, attendance and payroll foundation</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
          <h2 className="font-bold text-xl mb-4">Staff Members</h2>
          <p className="mb-3">Manage employee profiles. Required before you can create system users (see Configuration → Users).</p>
          <ul className="text-sm text-gray-700 list-disc ml-6">
            <li>Add, edit, delete staff records</li>
            <li>Store essential details (contact, designation, etc.)</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="font-bold text-xl mb-4">Attendance &amp; Clocking</h2>
          <p className="text-sm">Record daily attendance, shifts (Day / Night), and clocking events. This data feeds directly into Payroll.</p>
        </div>

        <div className="mt-8">
          <Link href="/products/docs/business-manager/payroll" className="text-[#05ADEE] hover:underline">Next: Payroll →</Link>
        </div>
      </div>
    </div>
  );
}

export default function BusinessManagerStaffPage() {
  return <BusinessManagerStaff />;
}
