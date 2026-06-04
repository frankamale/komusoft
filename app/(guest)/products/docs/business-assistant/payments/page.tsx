"use client";

import { DocLayout } from "../components/DocLayout";

const base = "/products/docs/business-assistant";

export function BusinessAssistantPayments() {
  return (
    <DocLayout
      title="Payments & EFRIS"
      subtitle="Payment gateways, mobile money and URA EFRIS compliance"
      current="Payments & EFRIS"
      prev={{ label: "API & Integrations", href: `${base}/api` }}
      next={{ label: "Security & Access", href: `${base}/security` }}
    >
      <p className="text-gray-700 mb-8">
        Collect payments through connected gateways and stay compliant with the Uganda Revenue Authority. Each plan can
        be taken With EFRIS or Without EFRIS &mdash; choose based on your reporting obligations.
      </p>

      <div className="space-y-6">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="font-bold text-xl mb-3">Connecting a Payment Gateway</h2>
          <ol className="list-decimal list-inside text-sm text-gray-700 space-y-1">
            <li>Open Settings and go to Payments</li>
            <li>Select your gateway and enter its credentials</li>
            <li>Confirm the correct currency and account</li>
            <li>Run a small test transaction before going live</li>
          </ol>
          <p className="text-xs text-gray-500 mt-3">Supported methods include credit cards, mobile money and bank transfers.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="font-bold text-xl mb-3">EFRIS Compliance</h2>
          <p className="text-sm text-gray-700 mb-3">
            On EFRIS-enabled plans, sales receipts are reported to URA. Keep your EFRIS credentials valid and confirm the
            system date and time are accurate so submissions succeed.
          </p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Verify internet connectivity for submission</li>
            <li>Watch for authentication or timeout errors and retry</li>
            <li>Contact URA support for credential or registration issues</li>
          </ul>
        </div>

        <div className="bg-gray-50 border-l-4 border-[#05ADEE] rounded-r-xl p-6">
          <p className="text-sm text-gray-700">
            <strong>Note:</strong> EFRIS is included on the With EFRIS pricing of each plan. The full plan matrix is on the{" "}
            <a href="/products/business-assistant" className="text-[#05ADEE] hover:underline">Business Assistant product page</a>.
          </p>
        </div>
      </div>
    </DocLayout>
  );
}

export default function BusinessAssistantPaymentsPage() {
  return <BusinessAssistantPayments />;
}
