"use client";

import { ArrowLeft, Book, Settings, Users, Database, Cloud, Shield, HelpCircle, Download, Code, CreditCard, BarChart3, FileText } from 'lucide-react';
import Link from 'next/link';

const base = "/products/docs/business-assistant";

export function BusinessAssistantDocs() {
  const docSections = [
    {
      title: "Getting Started",
      icon: Book,
      description: "Account creation, first steps and access requirements",
      docs: [
        {
          title: "Account Setup",
          path: `${base}/setup`,
          description: "Create your account, choose a plan and configure your workspace",
          icon: Settings,
          time: "10 min read",
        },
        {
          title: "Quick Start Guide",
          path: `${base}/quickstart`,
          description: "From sign-in to your first invoice in 15 minutes",
          icon: Book,
          time: "8 min read",
        },
        {
          title: "System Requirements",
          path: `${base}/requirements`,
          description: "Browser support, connection and mobile device compatibility",
          icon: Settings,
          time: "5 min read",
        },
      ],
    },
    {
      title: "Core Features",
      icon: Database,
      description: "The progressive business modules, analytics and team tools",
      docs: [
        {
          title: "Business Modules",
          path: `${base}/modules`,
          description: "CRM, Invoicing, Inventory, Accounting, Corporate, Production, Hospitality",
          icon: Database,
          time: "14 min read",
        },
        {
          title: "Dashboard & Analytics",
          path: `${base}/analytics`,
          description: "Real-time dashboards, KPIs and business reports",
          icon: BarChart3,
          time: "12 min read",
        },
        {
          title: "Team & Permissions",
          path: `${base}/collaboration`,
          description: "Invite members, assign roles and manage access",
          icon: Users,
          time: "12 min read",
        },
      ],
    },
    {
      title: "Integrations",
      icon: Code,
      description: "Connect external services and process payments",
      docs: [
        {
          title: "API & Integrations",
          path: `${base}/api`,
          description: "REST API, webhooks and third-party connectors",
          icon: Code,
          time: "20 min read",
        },
        {
          title: "Payments & EFRIS",
          path: `${base}/payments`,
          description: "Payment gateways, mobile money and URA EFRIS",
          icon: CreditCard,
          time: "16 min read",
        },
      ],
    },
    {
      title: "Security & Compliance",
      icon: Shield,
      description: "Protect data and stay compliant",
      docs: [
        {
          title: "Security & Access",
          path: `${base}/security`,
          description: "Two-factor authentication, roles and best practices",
          icon: Shield,
          time: "14 min read",
        },
        {
          title: "Data Privacy & Audit",
          path: `${base}/privacy`,
          description: "Data handling, backups and audit trails",
          icon: FileText,
          time: "12 min read",
        },
      ],
    },
    {
      title: "Support",
      icon: HelpCircle,
      description: "Diagnose and resolve common issues",
      docs: [
        {
          title: "Troubleshooting Guide",
          path: `${base}/troubleshooting`,
          description: "Login, performance, sync, integrations and browser issues",
          icon: HelpCircle,
          time: "18 min read",
        },
      ],
    },
  ];

  const quickLinks = [
    {
      title: "Book a Demo",
      description: "See Business Assistant in action",
      path: "/products/business-assistant",
      icon: Download,
    },
    {
      title: "API Reference",
      description: "REST API documentation",
      path: `${base}/api`,
      icon: Code,
    },
    {
      title: "Quick Start Guide",
      description: "Up and running in 15 minutes",
      path: `${base}/quickstart`,
      icon: Book,
    },
    {
      title: "Contact Support",
      description: "Get help from our experts",
      path: "/contact",
      icon: HelpCircle,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href={base} className="hover:text-[#05ADEE]">Documentation</Link>
            <span>/</span>
            <span className="text-[#05ADEE]">Business Assistant</span>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/products" className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Business Assistant Documentation</h1>
              <p className="text-gray-600">Complete guide for the cloud + offline business platform</p>
            </div>
          </div>

          <div className="bg-[#05ADEE]/5 border border-[#05ADEE]/20 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#05ADEE]/10 rounded-xl flex items-center justify-center shrink-0">
                <Cloud className="w-6 h-6 text-[#05ADEE]" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-2">About Business Assistant</h2>
                <p className="text-gray-700 mb-3">
                  Business Assistant is a cloud-based platform with a full offline mobile app for POS terminals that syncs
                  automatically when back online. Start with CRM and Invoicing, then unlock Inventory, Accounting,
                  Corporate, Production or Hospitality as you grow, with optional URA EFRIS compliance.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-[#05ADEE]/10 text-[#05ADEE] text-xs rounded-full">Cloud-Based</span>
                  <span className="px-2 py-1 bg-[#05ADEE]/10 text-[#05ADEE] text-xs rounded-full">Offline Mobile POS</span>
                  <span className="px-2 py-1 bg-[#05ADEE]/10 text-[#05ADEE] text-xs rounded-full">EFRIS Ready</span>
                  <span className="px-2 py-1 bg-[#05ADEE]/10 text-[#05ADEE] text-xs rounded-full">API-First</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8 mb-12">
          {docSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <section.icon className="w-6 h-6 text-[#05ADEE]" />
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
                  <p className="text-gray-600">{section.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-4">
                {section.docs.map((doc, docIndex) => (
                  <Link
                    key={docIndex}
                    href={doc.path}
                    className="group bg-gray-50 border border-gray-200 rounded-xl p-4 hover:border-[#05ADEE] hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <doc.icon className="w-5 h-5 text-[#05ADEE] mt-0.5" />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 group-hover:text-[#05ADEE] transition-colors">
                          {doc.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">{doc.description}</p>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">{doc.time}</div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Links</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                className="bg-white rounded-xl p-4 border border-gray-200 hover:border-[#05ADEE] hover:shadow-lg transition-all text-center"
              >
                <link.icon className="w-8 h-8 text-[#05ADEE] mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">{link.title}</h3>
                <p className="text-sm text-gray-600">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-[#0A0947] rounded-xl p-8 text-center">
          <HelpCircle className="w-12 h-12 text-white mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-4">Need Help?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Can&apos;t find what you&apos;re looking for? Our support team is here to help you get the most out of Business Assistant.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="px-6 py-3 bg-[#05ADEE] text-white rounded-xl hover:bg-[#0496d5] transition-all font-semibold">
              Contact Support
            </Link>
            <Link href="mailto:support@komusoft.com" className="px-6 py-3 bg-white text-[#0A0947] rounded-xl hover:bg-gray-100 transition-all font-semibold">
              Email Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BusinessAssistantDocsPage() {
  return <BusinessAssistantDocs />;
}
