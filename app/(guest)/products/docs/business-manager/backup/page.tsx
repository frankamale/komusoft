"use client";

import { DocLayout } from "../components/DocLayout";

const base = "/products/docs/business-manager";

export function BusinessManagerBackup() {
  return (
    <DocLayout
      title="Backup & Recovery"
      subtitle="Protect your data with regular backups and a clear recovery plan"
      current="Backup & Recovery"
      prev={{ label: "Hardware Integration", href: `${base}/pos-hardware` }}
      next={{ label: "Troubleshooting", href: `${base}/troubleshooting` }}
    >
      <p className="text-gray-700 mb-8">
        Because Business Manager keeps your data locally, regular backups are your safety net against hardware failure,
        corruption or accidental loss. Set them up once and verify they run.
      </p>

      <div className="space-y-6">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="font-bold text-xl mb-3">Recommended Backup Routine</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Schedule an automated daily backup of the SQL Server database.</li>
            <li>Keep at least one copy off the server machine (external drive or secure offsite storage).</li>
            <li>Retain several days of history, not just the most recent file.</li>
            <li>Periodically test a restore so you know the backups actually work.</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="font-bold text-xl mb-3">Recovery</h2>
          <p className="text-sm text-gray-700">
            If data is lost or corrupted, restore from the most recent valid backup immediately, then run database
            consistency checks before resuming normal operations. For assistance, contact Komusoft support.
          </p>
        </div>
      </div>
    </DocLayout>
  );
}

export default function BusinessManagerBackupPage() {
  return <BusinessManagerBackup />;
}
