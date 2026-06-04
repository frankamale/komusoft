"use client";

import { Check, AlertTriangle, Settings, Monitor } from 'lucide-react';
import { DocLayout } from "../components/DocLayout";

const base = "/products/docs/business-manager";

export function BusinessManagerRequirements() {
  return (
    <DocLayout
      title="System Requirements"
      subtitle="Hardware and software prerequisites for Business Manager"
      current="System Requirements"
      prev={{ label: "Installation Guide", href: `${base}/installation` }}
      next={{ label: "Quick Start", href: `${base}/quickstart` }}
    >
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
          <div>
            <h3 className="font-semibold text-blue-900 mb-2">Important Notes</h3>
            <ul className="text-blue-800 text-sm space-y-1 list-disc list-inside">
              <li>Higher specifications are strongly recommended for supermarkets and multi-branch operations.</li>
              <li>Always use a fast SSD for the database and application files.</li>
              <li>A stable LAN (preferably wired Gigabit) is required for multi-terminal setups.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Settings className="w-5 h-5 text-[#05ADEE]" /> Minimum
          </h3>
          <ul className="space-y-3 text-gray-700 text-sm">
            <li><strong>Processor:</strong> Intel Core i5 (or equivalent) 3.0 GHz or higher</li>
            <li><strong>Memory (RAM):</strong> 8 GB minimum</li>
            <li><strong>Operating System:</strong> Windows 10 (64-bit) or macOS 10.14+</li>
            <li><strong>Storage:</strong> 500 GB SSD (fast read/write recommended)</li>
            <li><strong>Graphics:</strong> Integrated or entry-level dedicated card</li>
            <li><strong>Display:</strong> Minimum 1366x768 resolution</li>
            <li><strong>Network:</strong> Stable LAN for multi-terminal setups</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Monitor className="w-5 h-5 text-[#05ADEE]" /> Recommended
          </h3>
          <ul className="space-y-3 text-gray-700 text-sm">
            <li><strong>Processor:</strong> Intel Core i5 / AMD Ryzen 5 (or equiv.) 2.5 GHz multi-core</li>
            <li><strong>Memory (RAM):</strong> 16 GB or higher</li>
            <li><strong>Operating System:</strong> Latest Windows 10/11 (64-bit)</li>
            <li><strong>Storage:</strong> 512 GB+ SSD (larger HDD acceptable for archives)</li>
            <li><strong>Display:</strong> 24-inch+ IPS/PLS monitor (multiple monitors ideal)</li>
            <li><strong>Network:</strong> Wired Gigabit LAN for server and clients</li>
          </ul>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Software Requirements</h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-3"><Check className="w-5 h-5 text-green-500 mt-0.5 shrink-0" /> Microsoft .NET Framework 4.8 or later</li>
          <li className="flex items-start gap-3"><Check className="w-5 h-5 text-green-500 mt-0.5 shrink-0" /> SQL Server Express 2019+ (free) or full SQL Server</li>
          <li className="flex items-start gap-3"><Check className="w-5 h-5 text-green-500 mt-0.5 shrink-0" /> Administrator privileges on the installation machine</li>
          <li className="flex items-start gap-3"><Check className="w-5 h-5 text-green-500 mt-0.5 shrink-0" /> Latest Windows updates installed</li>
        </ul>
      </div>
    </DocLayout>
  );
}

export default function BusinessManagerRequirementsPage() {
  return <BusinessManagerRequirements />;
}
