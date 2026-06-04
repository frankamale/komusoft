"use client";

import { DocLayout } from "../components/DocLayout";

const base = "/products/docs/business-assistant";

export function BusinessAssistantQuickstart() {
  return (
    <DocLayout
      title="Quick Start Guide"
      subtitle="From sign-in to your first invoice in about 15 minutes"
      current="Quick Start"
      prev={{ label: "Account Setup", href: `${base}/setup` }}
      next={{ label: "System Requirements", href: `${base}/requirements` }}
    >
      <div className="space-y-8">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">1. Sign In</h2>
          <p className="text-gray-700">
            Open Business Assistant in your browser and sign in with the email and password from setup. On a POS terminal,
            install the mobile app and sign in once &mdash; it then works fully offline and syncs when back online.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">2. Set Up Your Workspace</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Confirm company name, currency and time zone</li>
            <li>Add your logo and branding for documents</li>
            <li>Invite a teammate so you are not working alone</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">3. Add a Customer (CRM)</h2>
          <ol className="list-decimal list-inside text-sm text-gray-700 space-y-1">
            <li>Open the CRM module</li>
            <li>Click New Customer and enter their name and contact details</li>
            <li>Save &mdash; the customer is now available for quotes and invoices</li>
          </ol>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">4. Create Your First Invoice</h2>
          <ol className="list-decimal list-inside text-sm text-gray-700 space-y-1">
            <li>Open Invoicing and click New Invoice</li>
            <li>Select the customer, add line items and quantities</li>
            <li>Review totals and any tax, then Save</li>
            <li>Send the invoice or record a payment against it</li>
          </ol>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
          <h2 className="font-bold text-green-900 mb-2">You&apos;re Up and Running</h2>
          <p className="text-green-800 text-sm">
            You have signed in, set up your workspace and issued your first invoice. Next, explore the{" "}
            <a href={`${base}/modules`} className="underline">business modules</a> and your{" "}
            <a href={`${base}/analytics`} className="underline">dashboard and analytics</a>.
          </p>
        </div>
      </div>
    </DocLayout>
  );
}

export default function BusinessAssistantQuickstartPage() {
  return <BusinessAssistantQuickstart />;
}
