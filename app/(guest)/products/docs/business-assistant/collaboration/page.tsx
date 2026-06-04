"use client";

import { DocLayout } from "../components/DocLayout";

const base = "/products/docs/business-assistant";

export function BusinessAssistantCollaboration() {
  return (
    <DocLayout
      title="Team & Permissions"
      subtitle="Invite members, assign roles and manage access"
      current="Team & Permissions"
      prev={{ label: "Dashboard & Analytics", href: `${base}/analytics` }}
      next={{ label: "API & Integrations", href: `${base}/api` }}
    >
      <p className="text-gray-700 mb-8">
        Business Assistant is built for teams. Add the people you work with, give each the right level of access, and
        keep everyone working from the same live data. The number of users available depends on your plan.
      </p>

      <div className="space-y-6">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="font-bold text-xl mb-3">Inviting Team Members</h2>
          <ol className="list-decimal list-inside text-sm text-gray-700 space-y-1">
            <li>Open Team settings and click Invite</li>
            <li>Enter the member&apos;s email address</li>
            <li>Choose a role to set their permissions</li>
            <li>Send the invite; they accept it from the email to join</li>
          </ol>
          <p className="text-xs text-gray-500 mt-3">
            If an invite is not received, check spam folders and that your domain is not blocking the email.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="font-bold text-xl mb-3">Roles & Permissions</h2>
          <p className="text-sm text-gray-700 mb-3">
            Roles decide which modules and actions each member can access. Assign the least access needed for the job and
            adjust as responsibilities change. Corporate plans add advanced, group-level permissions.
          </p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Review role assignments in Team settings</li>
            <li>After changing a role, the member should refresh or sign out and back in</li>
            <li>Use audit trails to see who changed what (Data Privacy &amp; Audit)</li>
          </ul>
        </div>
      </div>
    </DocLayout>
  );
}

export default function BusinessAssistantCollaborationPage() {
  return <BusinessAssistantCollaboration />;
}
