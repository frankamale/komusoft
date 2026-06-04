"use client";

import { Check, AlertTriangle, Cloud, Mail, CreditCard, Users, Settings, Shield, Zap } from 'lucide-react';
import { DocLayout } from "../components/DocLayout";

const base = "/products/docs/business-assistant";

export function BusinessAssistantSetup() {
  const setupSteps = [
    {
      step: 1,
      title: "Create Account",
      icon: Mail,
      content: [
        "Visit komusoft.com and click 'Book Demo' or 'Get Started'",
        "Enter your business email and create a password",
        "Verify your email address with the confirmation link",
        "Complete your business profile information",
      ],
    },
    {
      step: 2,
      title: "Choose Plan",
      icon: CreditCard,
      content: [
        "Select a plan: Solo Flight, Deluxe, Classic, Corporate, Investor, Hospitality or Platinum",
        "Choose With or Without EFRIS integration",
        "Enter billing information and payment method",
        "Complete payment to activate your account",
      ],
    },
    {
      step: 3,
      title: "Initial Configuration",
      icon: Settings,
      content: [
        "Set up your company information and branding",
        "Configure business hours and time zones",
        "Add team members and assign roles",
        "Customize dashboard widgets and layout",
      ],
    },
    {
      step: 4,
      title: "Security Setup",
      icon: Shield,
      content: [
        "Enable two-factor authentication (recommended)",
        "Set password policies for team members",
        "Review data and access settings",
        "Review and accept the terms of service",
      ],
    },
  ];

  const postSetupTasks = [
    {
      title: "Team Onboarding",
      icon: Users,
      items: [
        "Invite team members via email",
        "Assign appropriate roles and permissions",
        "Set up individual user profiles",
        "Configure notification preferences",
      ],
    },
    {
      title: "System Integration",
      icon: Zap,
      items: [
        "Connect payment gateways if needed",
        "Set up API access for integrations",
        "Import existing customer data",
        "Configure automated workflows",
      ],
    },
    {
      title: "Data Migration",
      icon: Cloud,
      items: [
        "Export data from existing systems",
        "Use import tools for bulk data upload",
        "Verify data integrity after migration",
        "Schedule regular data exports as backups",
      ],
    },
  ];

  return (
    <DocLayout
      title="Account Setup"
      subtitle="Get started with Business Assistant in minutes"
      current="Account Setup"
      next={{ label: "Quick Start", href: `${base}/quickstart` }}
    >
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Prerequisites</h2>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">Before You Begin</h3>
              <ul className="text-blue-800 text-sm space-y-1 list-disc list-inside">
                <li>Valid business email address for account creation</li>
                <li>Payment method ready for subscription activation</li>
                <li>Modern web browser (Chrome, Firefox, Safari, Edge)</li>
                <li>Stable internet connection for setup and usage</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 mb-4">What You Need</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500 shrink-0" /> Modern web browser with JavaScript enabled</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500 shrink-0" /> Internet connection (2 Mbps minimum)</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500 shrink-0" /> Any device: desktop, tablet or mobile</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500 shrink-0" /> No software installation required</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 mb-4">Have Ready</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500 shrink-0" /> Business name and registration details</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500 shrink-0" /> Team member email addresses</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500 shrink-0" /> Payment information for billing</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500 shrink-0" /> Company logo (optional)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Account Setup Steps</h2>
        <div className="space-y-8">
          {setupSteps.map((step, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#05ADEE]/10 rounded-xl flex items-center justify-center shrink-0">
                  <step.icon className="w-6 h-6 text-[#05ADEE]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-[#05ADEE] text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                      {step.step}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {step.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-gray-700">
                        <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Post-Setup Configuration</h2>
        <div className="space-y-6">
          {postSetupTasks.map((section, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <section.icon className="w-6 h-6 text-[#05ADEE]" />
                <h3 className="text-lg font-bold text-gray-900">{section.title}</h3>
              </div>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2 text-gray-700">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Setup Issues</h2>
        <div className="space-y-6">
          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <h3 className="font-bold text-red-900 mb-2">Email Verification Not Received</h3>
            <p className="text-red-800 text-sm mb-3">Check your spam folder and ensure the email address is correct.</p>
            <div className="bg-red-900 rounded p-3 text-red-100 text-sm">Contact support if you still don&apos;t receive the email.</div>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <h3 className="font-bold text-yellow-900 mb-2">Payment Processing Failed</h3>
            <p className="text-yellow-800 text-sm mb-3">Verify your payment information and try a different card or method.</p>
            <div className="bg-yellow-900 rounded p-3 text-yellow-100 text-sm">Supported: credit cards, mobile money, bank transfers.</div>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-2">Browser Compatibility Issues</h3>
            <p className="text-blue-800 text-sm mb-3">Ensure you are using a modern browser with JavaScript enabled.</p>
            <div className="bg-blue-900 rounded p-3 text-blue-100 text-sm">Recommended: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+.</div>
          </div>
        </div>
      </section>
    </DocLayout>
  );
}

export default function BusinessAssistantSetupPage() {
  return <BusinessAssistantSetup />;
}
