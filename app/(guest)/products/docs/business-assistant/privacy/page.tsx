"use client";

import { DocLayout } from "../components/DocLayout";

const base = "/products/docs/business-assistant";

export function BusinessAssistantPrivacy() {
  return (
    <DocLayout
      title="Data Privacy & Audit"
      subtitle="How your data is handled, backed up and tracked"
      current="Data Privacy & Audit"
      prev={{ label: "Security & Access", href: `${base}/security` }}
      next={{ label: "Troubleshooting", href: `${base}/troubleshooting` }}
    >
      <p className="text-gray-700 mb-8">
        Your business data is cloud-hosted with SSL/TLS encryption in transit, and the hosting region is configurable.
        Audit trails record changes so you always know who did what.
      </p>

      <div className="space-y-6">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="font-bold text-xl mb-3">Data Handling</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Encryption in transit (SSL/TLS) and role-based access to records</li>
            <li>Cloud-hosted storage with a configurable data residency region</li>
            <li>Offline mobile data is held on the device and synced securely when online</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="font-bold text-xl mb-3">Backups & Exports</h2>
          <p className="text-sm text-gray-700">
            Export your data regularly (CSV and reports) so you keep your own copies. For large migrations, use the
            import tools or contact support.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="font-bold text-xl mb-3">Audit Trails</h2>
          <p className="text-sm text-gray-700">
            Audit trails log key actions across the system &mdash; record changes, role updates and sensitive
            operations &mdash; supporting accountability and compliance. Review them when investigating a discrepancy or
            confirming who made a change.
          </p>
        </div>
      </div>
    </DocLayout>
  );
}

export default function BusinessAssistantPrivacyPage() {
  return <BusinessAssistantPrivacy />;
}
