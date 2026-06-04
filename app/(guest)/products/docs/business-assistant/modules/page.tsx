"use client";

import { DocLayout } from "../components/DocLayout";

const base = "/products/docs/business-assistant";

const modules: { name: string; summary: string; features: string[] }[] = [
  {
    name: "CRM + Invoicing",
    summary: "The starting point on every plan.",
    features: ["Customer management", "Quotations & invoices", "Payment tracking", "Sales pipeline"],
  },
  {
    name: "Inventory",
    summary: "Real-time stock control across locations.",
    features: ["Real-time stock control", "Multi-location", "Purchase orders", "Low-stock alerts"],
  },
  {
    name: "Accounting",
    summary: "Full books with tax and EFRIS support.",
    features: ["General ledger", "Financial reports", "Tax & EFRIS compliance", "Bank reconciliation"],
  },
  {
    name: "Corporate",
    summary: "For multi-branch groups.",
    features: ["Multi-branch", "Consolidated reporting", "Advanced permissions", "Group management"],
  },
  {
    name: "Production",
    summary: "For manufacturing and assembly.",
    features: ["Bill of materials", "Manufacturing orders", "Costing & planning"],
  },
  {
    name: "Hospitality",
    summary: "For restaurants, bars and hotels.",
    features: ["Table management", "Reservations", "Kitchen display", "Guest billing"],
  },
];

export function BusinessAssistantModules() {
  return (
    <DocLayout
      title="Business Modules"
      subtitle="Progressive modules you activate as your business grows"
      current="Business Modules"
      prev={{ label: "System Requirements", href: `${base}/requirements` }}
      next={{ label: "Dashboard & Analytics", href: `${base}/analytics` }}
    >
      <p className="text-gray-700 mb-8">
        Business Assistant is modular. Every account starts with CRM and Invoicing, and you unlock Inventory,
        Accounting, Corporate, Production or Hospitality as you need them. The plan you choose determines which modules
        are active &mdash; see <a href={`${base}/payments`} className="text-[#05ADEE] hover:underline">Payments &amp; EFRIS</a>.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {modules.map((mod, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-xl p-6">
            <h2 className="font-bold text-lg text-gray-900">{mod.name}</h2>
            <p className="text-sm text-gray-600 mb-3">{mod.summary}</p>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              {mod.features.map((f, fi) => (
                <li key={fi}>{f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </DocLayout>
  );
}

export default function BusinessAssistantModulesPage() {
  return <BusinessAssistantModules />;
}
