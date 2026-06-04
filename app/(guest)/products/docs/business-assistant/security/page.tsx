"use client";

import { DocLayout } from "../components/DocLayout";

const base = "/products/docs/business-assistant";

export function BusinessAssistantSecurity() {
  return (
    <DocLayout
      title="Security & Access"
      subtitle="Two-factor authentication, roles and account safety"
      current="Security & Access"
      prev={{ label: "Payments & EFRIS", href: `${base}/payments` }}
      next={{ label: "Data Privacy & Audit", href: `${base}/privacy` }}
    >
      <p className="text-gray-700 mb-8">
        Business Assistant uses bank-grade encryption, role-based access and two-factor authentication. A few good
        habits keep your account and your team&apos;s data safe.
      </p>

      <div className="space-y-6">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="font-bold text-xl mb-3">Two-Factor Authentication (2FA)</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Enable 2FA from your profile security settings</li>
            <li>Use an authenticator app or SMS codes</li>
            <li>Save your backup codes somewhere safe in case you lose your device</li>
          </ul>
          <p className="text-xs text-gray-500 mt-3">
            Locked out? Use a backup code, or contact support for account recovery.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="font-bold text-xl mb-3">Access Control</h2>
          <p className="text-sm text-gray-700">
            Give each team member the minimum role they need and review access periodically. See{" "}
            <a href={`${base}/collaboration`} className="text-[#05ADEE] hover:underline">Team &amp; Permissions</a> for
            assigning roles.
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
          <h2 className="font-bold text-green-900 mb-3">Best Practices</h2>
          <ul className="list-disc list-inside text-sm text-green-800 space-y-1">
            <li>Use unique, complex passwords for every account</li>
            <li>Keep browsers and devices updated</li>
            <li>Enable 2FA for all team members</li>
            <li>Export data regularly as a backup</li>
          </ul>
        </div>
      </div>
    </DocLayout>
  );
}

export default function BusinessAssistantSecurityPage() {
  return <BusinessAssistantSecurity />;
}
