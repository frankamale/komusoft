"use client";

import { ArrowLeft, Check, AlertTriangle, Cloud, Mail, Lock, CreditCard, Users, Settings, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

export function BusinessAssistantSetup() {
  const setupSteps = [
    {
      step: 1,
      title: "Create Account",
      icon: Mail,
      content: [
        "Visit komusoft.com and click 'Start Free Trial'",
        "Enter your business email and create a password",
        "Verify your email address with the confirmation link",
        "Complete your business profile information"
      ]
    },
    {
      step: 2,
      title: "Choose Plan",
      icon: CreditCard,
      content: [
        "Select from Starter, Professional, or Enterprise plans",
        "Enter billing information and payment method",
        "Review subscription terms and pricing",
        "Complete payment to activate your account"
      ]
    },
    {
      step: 3,
      title: "Initial Configuration",
      icon: Settings,
      content: [
        "Set up your company information and branding",
        "Configure business hours and time zones",
        "Add team members and assign roles",
        "Customize dashboard widgets and layout"
      ]
    },
    {
      step: 4,
      title: "Security Setup",
      icon: Shield,
      content: [
        "Enable two-factor authentication (recommended)",
        "Set password policies for team members",
        "Configure data encryption settings",
        "Review and accept terms of service"
      ]
    }
  ];

  const postSetupTasks = [
    {
      title: "Team Onboarding",
      icon: Users,
      items: [
        "Invite team members via email",
        "Assign appropriate roles and permissions",
        "Set up individual user profiles",
        "Configure notification preferences"
      ]
    },
    {
      title: "System Integration",
      icon: Zap,
      items: [
        "Connect payment gateways if needed",
        "Set up API access for integrations",
        "Import existing customer data",
        "Configure automated workflows"
      ]
    },
    {
      title: "Data Migration",
      icon: Cloud,
      items: [
        "Export data from existing systems",
        "Use import tools for bulk data upload",
        "Verify data integrity after migration",
        "Set up automated data backups"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/products/docs/business-assistant" className="hover:text-[#05ADEE]">Documentation</Link>
            <span>/</span>
            <Link href="/products/docs/business-assistant" className="hover:text-[#05ADEE]">Business Assistant</Link>
            <span>/</span>
            <span className="text-[#05ADEE]">Setup Guide</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-4 mb-4">
            <Link
              href="/products/docs/business-assistant"
              className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Setup Guide</h1>
              <p className="text-gray-600">Get started with Business Assistant in minutes</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="#account-setup"
              className="px-4 py-2 bg-[#05ADEE]/10 text-[#05ADEE] rounded-lg hover:bg-[#05ADEE]/20 transition-colors"
            >
              Account Setup
            </Link>
            <Link
              href="#pricing"
              className="px-4 py-2 bg-[#05ADEE]/10 text-[#05ADEE] rounded-lg hover:bg-[#05ADEE]/20 transition-colors"
            >
              Choose Plan
            </Link>
            <Link
              href="#configuration"
              className="px-4 py-2 bg-[#05ADEE]/10 text-[#05ADEE] rounded-lg hover:bg-[#05ADEE]/20 transition-colors"
            >
              Configuration
            </Link>
            <Link
              href="#next-steps"
              className="px-4 py-2 bg-[#05ADEE]/10 text-[#05ADEE] rounded-lg hover:bg-[#05ADEE]/20 transition-colors"
            >
              Next Steps
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Prerequisites */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Prerequisites</h2>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Before You Begin</h3>
                <ul className="text-blue-800 text-sm space-y-1">
                  <li>• Valid business email address for account creation</li>
                  <li>• Payment method ready for subscription activation</li>
                  <li>• Modern web browser (Chrome, Firefox, Safari, Edge)</li>
                  <li>• Stable internet connection for setup and usage</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-4">System Requirements</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Modern web browser with JavaScript enabled</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Minimum 5 Mbps internet connection</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Any device: desktop, tablet, or mobile</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>No software installation required</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-4">What You'll Need</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Business name and registration details</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Team member email addresses</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Payment information for billing</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Company logo (optional)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Setup Steps */}
        <section id="account-setup" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Account Setup Steps</h2>

          <div className="space-y-8">
            {setupSteps.map((step, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#05ADEE]/10 rounded-xl flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-[#05ADEE]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-[#05ADEE] text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
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

        {/* Post-Setup Configuration */}
        <section id="configuration" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Post-Setup Configuration</h2>

          <div className="grid md:grid-cols-1 gap-6">
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

        {/* Troubleshooting */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Setup Issues</h2>

          <div className="space-y-6">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="font-bold text-red-900 mb-2">Email Verification Not Received</h3>
              <p className="text-red-800 text-sm mb-3">
                Check your spam folder and ensure the email address is correct.
              </p>
              <div className="bg-red-900 rounded p-3 text-red-100 text-sm font-mono">
                Contact support if you still don't receive the email
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <h3 className="font-bold text-yellow-900 mb-2">Payment Processing Failed</h3>
              <p className="text-yellow-800 text-sm mb-3">
                Verify your payment information and try a different card or payment method.
              </p>
              <div className="bg-yellow-900 rounded p-3 text-yellow-100 text-sm">
                Supported: Credit cards, Mobile money, Bank transfers
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="font-bold text-blue-900 mb-2">Browser Compatibility Issues</h3>
              <p className="text-blue-800 text-sm mb-3">
                Ensure you're using a modern browser with JavaScript enabled.
              </p>
              <div className="bg-blue-900 rounded p-3 text-blue-100 text-sm">
                Recommended: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section id="next-steps" className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Next Steps</h2>
          <p className="text-gray-700 mb-6">
            Your Business Assistant account is now ready! Here's what to do next:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/products/docs/business-assistant/dashboard"
              className="p-4 bg-white border border-gray-200 rounded-xl hover:border-[#05ADEE] hover:shadow-lg transition-all text-left"
            >
              <h3 className="font-bold text-gray-900 mb-2">→ Explore Dashboard</h3>
              <p className="text-sm text-gray-600">Learn to navigate and customize your workspace</p>
            </Link>
            <Link
              href="/products/docs/business-assistant/collaboration"
              className="p-4 bg-white border border-gray-200 rounded-xl hover:border-[#05ADEE] hover:shadow-lg transition-all text-left"
            >
              <h3 className="font-bold text-gray-900 mb-2">→ Add Team Members</h3>
              <p className="text-sm text-gray-600">Invite your team and set up collaboration</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default function BusinessAssistantSetupPage() {
  return <BusinessAssistantSetup />;
}