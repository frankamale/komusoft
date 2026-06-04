"use client";

import { DocLayout } from "../components/DocLayout";

const base = "/products/docs/business-manager";

export function BusinessManagerNetwork() {
  return (
    <DocLayout
      title="Network & EFRIS"
      subtitle="Multi-terminal LAN setup and URA EFRIS compliance"
      current="Network & EFRIS"
      prev={{ label: "Configuration Guide", href: `${base}/configuration` }}
      next={{ label: "Sales & Stock Reports", href: `${base}/reporting` }}
    >
      <p className="text-gray-700 mb-8">
        Business Manager runs locally and is offline-ready, with LAN support so several terminals can share one server.
        Sales sync over the network, while EFRIS keeps receipts compliant with the Uganda Revenue Authority.
      </p>

      <div className="space-y-6">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="font-bold text-xl mb-3">LAN Multi-Terminal Setup</h2>
          <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
            <li>Install the database and application on the server machine.</li>
            <li>Note the server IP address and SQL Server port (default 1433).</li>
            <li>Point each client terminal to the server IP in its configuration.</li>
            <li>Open the firewall on the server to allow LAN connections on that port.</li>
            <li>Test connectivity from each terminal before going live.</li>
          </ol>
          <p className="text-xs text-gray-500 mt-3">
            A wired Gigabit LAN is strongly recommended for supermarkets and multi-branch operations.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="font-bold text-xl mb-3">EFRIS Compliance</h2>
          <p className="text-sm text-gray-700 mb-3">
            EFRIS sends sales receipts to URA. Make sure each sellable item carries the correct VAT category and EFRIS
            code (set in Goods Receipt or Configuration &rarr; Inventory).
          </p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Confirm internet connectivity for EFRIS submission.</li>
            <li>Keep EFRIS credentials and certificates valid.</li>
            <li>Verify the system date and time are accurate.</li>
            <li>Watch the EFRIS status column on the sales list to confirm receipts were sent.</li>
          </ul>
        </div>
      </div>

      <p className="text-sm text-gray-600 mt-8">
        For sync, certificate or numbering problems, see the{" "}
        <a href={`${base}/troubleshooting`} className="text-[#05ADEE] hover:underline">Troubleshooting Guide</a>.
      </p>
    </DocLayout>
  );
}

export default function BusinessManagerNetworkPage() {
  return <BusinessManagerNetwork />;
}
