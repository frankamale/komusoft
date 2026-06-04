"use client";

import { Check, Monitor, Globe } from 'lucide-react';
import { DocLayout } from "../components/DocLayout";

const base = "/products/docs/business-assistant";

const browserRows: [string, string][] = [
  ["Chrome", "90+"],
  ["Firefox", "88+"],
  ["Safari", "14+"],
  ["Edge", "90+"],
];

const sysRows: [string, string][] = [
  ["Internet Connection", "2 Mbps minimum, 10 Mbps recommended"],
  ["Browser", "Any modern browser (see table)"],
  ["Mobile", "Fully responsive; iOS and Android supported"],
  ["Security", "SSL/TLS encryption, 2FA available"],
  ["Data Residency", "Cloud-hosted (region configurable)"],
  ["Offline Mode", "Full offline mobile app for POS terminals with sync"],
];

export function BusinessAssistantRequirements() {
  return (
    <DocLayout
      title="System Requirements"
      subtitle="Cloud-based, with no local installation required"
      current="System Requirements"
      prev={{ label: "Quick Start", href: `${base}/quickstart` }}
      next={{ label: "Business Modules", href: `${base}/modules` }}
    >
      <p className="text-gray-700 mb-8">
        Business Assistant runs in the browser, so there is nothing to install on the desktop. For point of sale, the
        mobile app runs fully offline on POS terminals and syncs automatically when a connection returns.
      </p>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="overflow-hidden rounded-2xl border border-gray-200">
          <div className="px-6 py-4 bg-[#0A0947]">
            <p className="text-white font-semibold flex items-center gap-2">
              <Monitor className="w-4 h-4 text-[#05ADEE]" /> Browser Support
            </p>
          </div>
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-5 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Browser</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Min. Version</th>
                <th className="px-5 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody>
              {browserRows.map(([browser, version], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-5 py-3 text-sm font-medium text-gray-900">{browser}</td>
                  <td className="px-5 py-3 text-sm text-gray-500">{version}</td>
                  <td className="px-5 py-3 text-center"><Check className="w-4 h-4 mx-auto text-[#05ADEE]" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="overflow-hidden rounded-2xl border border-gray-200">
          <div className="px-6 py-4 bg-[#0A0947]">
            <p className="text-white font-semibold flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#05ADEE]" /> Access Requirements
            </p>
          </div>
          <table className="w-full">
            <tbody>
              {sysRows.map(([label, value], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-5 py-3.5 text-sm font-medium text-gray-500 w-2/5">{label}</td>
                  <td className="px-5 py-3.5 text-sm font-semibold text-gray-900">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DocLayout>
  );
}

export default function BusinessAssistantRequirementsPage() {
  return <BusinessAssistantRequirements />;
}
