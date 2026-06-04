"use client";

import { DocLayout } from "../components/DocLayout";

const base = "/products/docs/business-assistant";

export function BusinessAssistantApi() {
  return (
    <DocLayout
      title="API & Integrations"
      subtitle="Connect external services via REST APIs, webhooks and connectors"
      current="API & Integrations"
      prev={{ label: "Team & Permissions", href: `${base}/collaboration` }}
      next={{ label: "Payments & EFRIS", href: `${base}/payments` }}
    >
      <p className="text-gray-700 mb-8">
        Business Assistant is API-first. Use the REST API and webhooks to connect accounting tools, CRMs and other
        services, or pick from the growing library of connectors.
      </p>

      <div className="space-y-6">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="font-bold text-xl mb-3">Getting API Access</h2>
          <ol className="list-decimal list-inside text-sm text-gray-700 space-y-1">
            <li>Open Settings and go to API access</li>
            <li>Generate an API key and store it securely</li>
            <li>Send the key with each request as a bearer token</li>
            <li>Regenerate the key immediately if it is ever exposed</li>
          </ol>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="font-bold text-xl mb-3">Webhooks</h2>
          <p className="text-sm text-gray-700">
            Register a publicly reachable endpoint to receive events (for example, a new invoice or payment). Make sure
            the endpoint is accessible and returns a success response so deliveries are not retried unnecessarily.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="font-bold text-xl mb-3">Common Issues</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Errors on API calls: verify credentials and the endpoint path</li>
            <li>Sync stopped: check you have not exceeded rate limits</li>
            <li>Webhook deliveries failing: confirm the endpoint is reachable</li>
          </ul>
          <p className="text-xs text-gray-500 mt-3">
            For payment-specific integration, see <a href={`${base}/payments`} className="text-[#05ADEE] hover:underline">Payments &amp; EFRIS</a>.
          </p>
        </div>
      </div>
    </DocLayout>
  );
}

export default function BusinessAssistantApiPage() {
  return <BusinessAssistantApi />;
}
