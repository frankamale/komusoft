"use client";

import { DocLayout } from "../components/DocLayout";

const base = "/products/docs/business-manager";

export function BusinessManagerPosHardware() {
  return (
    <DocLayout
      title="Hardware Integration"
      subtitle="Printers, scanners, weighing scales and barcode utilities"
      current="Hardware Integration"
      prev={{ label: "Administrative Reports", href: `${base}/admin-reports` }}
      next={{ label: "Backup & Recovery", href: `${base}/backup` }}
    >
      <p className="text-gray-700 mb-8">
        The Point of Sale supports the peripheral hardware a busy counter needs &mdash; receipt printers, barcode
        scanners, weighing scales and cash drawers &mdash; so transactions stay fast and accurate.
      </p>

      <div className="space-y-6">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="font-bold text-xl mb-3">Weighing Scales</h2>
          <p className="text-sm text-gray-700">
            Integrate a scale so weighed items price automatically. In Back Office &rarr; Weighing Scales, click{" "}
            <strong>NEW</strong>, enter the scale&apos;s IP address and Save.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="font-bold text-xl mb-3">Barcodes & Price Tags (Utilities)</h2>
          <p className="text-sm text-gray-700 mb-3">The Utilities section prints labels and tags:</p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Print barcodes for items</li>
            <li>Print shelf price tags and bulk-item price tags</li>
            <li>Print barcodes using a receipt printer</li>
            <li>Print tags for perishable items (with expiry / handling notes)</li>
          </ul>
          <p className="text-xs text-gray-500 mt-3">
            Follow the wizard: click Next, select the printer, choose the media layout, pick the item, confirm settings,
            then Print Labels.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="font-bold text-xl mb-3">Scanners & Receipt Printers</h2>
          <p className="text-sm text-gray-700">
            Scan items directly into Goods Receipt, Price Manager and the POS. Saving a transaction triggers the receipt
            printer automatically. Scanning products at goods receipt is strongly recommended so every item carries a
            barcode for checkout.
          </p>
        </div>
      </div>
    </DocLayout>
  );
}

export default function BusinessManagerPosHardwarePage() {
  return <BusinessManagerPosHardware />;
}
